import os
import json
import logging
import requests
from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv

# Configure logging with more detailed format
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables (for API keys)
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Load portfolio data
try:
    with open('portfolio_data.json', 'r') as f:
        portfolio_data = json.load(f)
    PORTFOLIO_TEXT_DATA = json.dumps(portfolio_data, indent=2)
    logger.info("Successfully loaded portfolio data")
except FileNotFoundError:
    logger.error("ERROR: portfolio_data.json not found. Please ensure the file exists.")
    portfolio_data = {}
    PORTFOLIO_TEXT_DATA = "{}"
except json.JSONDecodeError:
    logger.error("ERROR: Could not decode portfolio_data.json. Please ensure it's valid JSON.")
    portfolio_data = {}
    PORTFOLIO_TEXT_DATA = "{}"

# Configure Gemini API
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
if not GOOGLE_API_KEY:
    logger.error("ERROR: GOOGLE_API_KEY not found in environment variables. Please check your .env file.")
else:
    logger.info("Google API key found in environment variables.")

def generate_response(prompt, context=None):
    """Generate response using Gemini API"""
    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GOOGLE_API_KEY}"
        logger.debug(f"Making API request to: {url}")
        
        # Prepare the prompt with context
        full_prompt = f"""You are an AI avatar representing {portfolio_data.get('name', 'the portfolio owner')}, a Python Developer with expertise in AI/ML and data analysis. Your goal is to answer questions about {portfolio_data.get('name', 'the portfolio owner')} based ONLY on the information provided below.
Do not make up information or answer questions outside of this context.
If the information is not available in the provided data, politely state that you don't have that information.

Here is the portfolio information:
{context if context else PORTFOLIO_TEXT_DATA}

User's question:
{prompt}

Your answer should be:
1. Professional and engaging, reflecting technical expertise
2. Natural and conversational, but maintain a professional tone
3. Focused on the specific information requested
4. Include relevant details from the portfolio data
5. When discussing technical skills or projects, highlight the impact and technologies used
6. End with a brief follow-up question to encourage further interaction
7. If asked about technical skills, emphasize Python, AI/ML, and data analysis expertise
8. If asked about projects, highlight the Air CTRL, Deepfake Detection, and FairPlay projects
9. Structure your response in a clear, organized manner
10. Include specific examples and achievements when relevant
11. If asked about skills, categorize them (e.g., languages, frameworks, tools)
12. If asked about projects, mention the technologies used and your role
13. If asked about experience, highlight key responsibilities and achievements
14. If asked about education, mention relevant coursework and achievements
15. Always maintain a positive and enthusiastic tone while staying professional

Format your response based on the type of question:

For skills:
• Use bullet points for each category
• Bold important technologies and tools
• Include proficiency levels where mentioned
• Group related skills together

For projects:
• Start with project name in bold
• Use bullet points for key features and achievements
• Bold important technologies used
• Include impact and results

For experience:
• Company name and role in bold
• Bullet points for responsibilities
• Bold key achievements and technologies
• Include duration and impact

For education:
• Degree and institution in bold
• Bullet points for relevant coursework
• Include GPA and achievements
• Bold important subjects

For general questions:
• Use clear headings
• Bullet points for main points
• Bold key terms and achievements
• Keep it concise but informative

Always use markdown formatting:
• Use **bold** for important terms
• Use bullet points (•) for lists
• Use proper spacing for readability
• Use emojis sparingly for engagement

Your answer:"""

        payload = {
            "contents": [{
                "parts": [{"text": full_prompt}]
            }]
        }

        headers = {
            'Content-Type': 'application/json'
        }

        logger.debug(f"Sending request with payload: {json.dumps(payload)}")
        response = requests.post(url, headers=headers, json=payload)
        logger.debug(f"Received response status code: {response.status_code}")
        logger.debug(f"Response content: {response.text}")
        
        response.raise_for_status()  # Raise an exception for bad status codes
        
        result = response.json()
        if 'candidates' in result and len(result['candidates']) > 0:
            return result['candidates'][0]['content']['parts'][0]['text']
        else:
            logger.error(f"Unexpected API response format: {result}")
            raise Exception("No response generated from the model")
            
    except requests.exceptions.RequestException as e:
        logger.error(f"Request error: {str(e)}", exc_info=True)
        raise Exception(f"API request failed: {str(e)}")
    except Exception as e:
        logger.error(f"Error generating response: {str(e)}", exc_info=True)
        raise

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/test-api")
def test_api():
    """Test route to verify API connectivity"""
    try:
        if not GOOGLE_API_KEY:
            logger.error("API key not configured")
            return jsonify({"error": "API key not configured"}), 500
        
        # Test direct Gemini API call
        response = generate_response("Say hello")
        return jsonify({
            "status": "success",
            "message": "API connection successful",
            "response": response
        })
    except Exception as e:
        logger.error(f"API test failed: {str(e)}", exc_info=True)
        return jsonify({
            "status": "error",
            "message": f"API test failed: {str(e)}"
        }), 500

@app.route("/chat", methods=["POST"])
def chat():
    try:
        prompt = request.json.get("prompt")
        if not prompt:
            logger.error("No prompt provided in request")
            return jsonify({"error": "No prompt provided"}), 400

        if not GOOGLE_API_KEY:
            logger.error("Google API key not configured")
            return jsonify({"error": "AI model not configured. Please check your API key."}), 500

        # Get response from the API
        logger.info(f"Processing prompt: {prompt}")
        try:
            response = generate_response(prompt)
            logger.info("Successfully got response from AI model")
            return jsonify({"reply": response})
        except Exception as e:
            logger.error(f"Error in API call: {str(e)}", exc_info=True)
            return jsonify({"error": f"Failed to generate response: {str(e)}"}), 500
            
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}", exc_info=True)
        return jsonify({"error": f"Failed to get response: {str(e)}"}), 500

if __name__ == "__main__":
    # Note: For development, Flask's built-in server is fine.
    # For production, use a proper WSGI server like Gunicorn.
    app.run(debug=True, port=5000) 