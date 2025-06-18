import requests
import json
import time

def test_chat(question):
    url = "http://localhost:5000/chat"
    headers = {
        "Content-Type": "application/json"
    }
    data = {
        "prompt": question
    }
    
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()["reply"]
    except Exception as e:
        return f"Error: {str(e)}"

# Test questions covering different aspects of the portfolio
test_questions = [
    "What are your technical skills?",
    "Tell me about your projects",
    "What is your educational background?",
    "What is your work experience?",
    "Tell me about your certifications",
    "What are your main achievements?",
    "What programming languages do you know?",
    "Tell me about your AI/ML expertise",
    "What are your career goals?",
    "What makes you unique as a developer?"
]

print("Testing chat functionality with various questions...\n")

for i, question in enumerate(test_questions, 1):
    print(f"\nQuestion {i}: {question}")
    print("-" * 80)
    response = test_chat(question)
    print(f"Response: {response}")
    print("-" * 80)
    time.sleep(1)  # Add a small delay between requests 