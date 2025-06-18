document.addEventListener('DOMContentLoaded', () => {
    const chatOutput = document.getElementById('chat-output');
    const userQueryInput = document.getElementById('user-query');
    const sendButton = document.getElementById('send-button');

    const appendMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        messageDiv.appendChild(paragraph);
        
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the latest message
    };

    const sendMessage = async () => {
        const query = userQueryInput.value.trim();
        if (!query) return;

        appendMessage(query, 'user');
        userQueryInput.value = ''; // Clear input field

        try {
            // Display a thinking message for AI
            const thinkingMessageDiv = document.createElement('div');
            thinkingMessageDiv.classList.add('message', 'ai-message');
            thinkingMessageDiv.innerHTML = '<p><em>Thinking...</em></p>'; // Italicized thinking message
            chatOutput.appendChild(thinkingMessageDiv);
            chatOutput.scrollTop = chatOutput.scrollHeight;

            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query }),
            });

            // Remove the thinking message
            chatOutput.removeChild(thinkingMessageDiv);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ response: 'An unknown error occurred.'}));
                throw new Error(errorData.details || errorData.error || `HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            appendMessage(data.response, 'ai');

        } catch (error) {
            console.error('Error sending message:', error);
            appendMessage(`Error: ${error.message}`, 'ai');
             // Ensure thinking message is removed on error too, if it wasn't already.
            const existingThinkingMessage = Array.from(chatOutput.children).find(child => child.innerHTML.includes('<em>Thinking...</em>'));
            if (existingThinkingMessage) {
                chatOutput.removeChild(existingThinkingMessage);
            }
        }
    };

    sendButton.addEventListener('click', sendMessage);
    userQueryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}); 