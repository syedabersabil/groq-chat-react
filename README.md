# Groq Chat React

A modern React.js AI chat application powered by Groq API with the llama3-8b-8192 model.

## Features

- Real-time AI chat interface
- Powered by Groq's fast LLM inference
- Clean and responsive UI
- Message history display
- Loading states and error handling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A Groq API key (get one from [console.groq.com](https://console.groq.com))

## Installation

1. Clone this repository:
```bash
git clone https://github.com/syedabersabil/groq-chat-react.git
cd groq-chat-react
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install groq-sdk
```

4. Create a `.env` file in the root directory:
```bash
touch .env
```

5. Add your Groq API key to the `.env` file:
```
REACT_APP_GROQ_API_KEY=your_groq_api_key_here
```

**Important:** Never commit your `.env` file to version control. Add it to `.gitignore`.

## Project Structure

```
groq-chat-react/
├── src/
│   ├── App.js          # Main chat application component
│   ├── App.css         # Styling for the chat interface
│   └── index.js        # React entry point
├── public/
├── .env                # Environment variables (create this)
├── .gitignore
├── package.json
└── README.md
```

## Running the Application

1. Start the development server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Start chatting with the AI!

## How to Use

1. Type your message in the input field at the bottom
2. Press "Send" or hit Enter to submit
3. Wait for the AI to respond
4. Your conversation history will be displayed in the chat window

## Styling (Optional)

Create an `App.css` file in the `src` folder to customize the appearance:

```css
.App {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.chat-container {
  width: 600px;
  height: 700px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.chat-header h1 {
  margin: 0;
  font-size: 24px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f5f5f5;
}

.message {
  margin-bottom: 15px;
  padding: 12px 16px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
}

.user-message {
  background: #667eea;
  color: white;
  margin-left: auto;
  text-align: right;
}

.assistant-message {
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
}

.message strong {
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  opacity: 0.8;
}

.message p {
  margin: 0;
  line-height: 1.5;
}

.chat-input-form {
  display: flex;
  padding: 20px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.chat-input:focus {
  border-color: #667eea;
}

.send-button {
  margin-left: 10px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: transform 0.2s;
}

.send-button:hover {
  transform: scale(1.05);
}

.send-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: scale(1);
}
```

## Troubleshooting

### Issue: "Module not found" error
**Solution:** Make sure you've installed all dependencies:
```bash
npm install
npm install groq-sdk
```

### Issue: "Invalid API Key" error
**Solution:** 
- Check that your `.env` file contains the correct API key
- Ensure the variable is named `REACT_APP_GROQ_API_KEY`
- Restart the development server after adding the `.env` file

### Issue: No response from AI
**Solution:**
- Check your internet connection
- Verify your Groq API key is valid
- Check the browser console for error messages

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Groq SDK](https://www.npmjs.com/package/groq-sdk) - AI model integration
- [Groq Cloud](https://groq.com/) - Fast LLM inference

## API Model

This application uses the **llama3-8b-8192** model from Groq, which provides:
- Fast response times
- High-quality conversational AI
- 8192 token context window

## Security Notes

- Never commit your `.env` file or API keys to version control
- Add `.env` to your `.gitignore` file
- Keep your Groq API key confidential
- The `dangerouslyAllowBrowser: true` flag is used for development - consider using a backend proxy for production

## License

MIT License - feel free to use this project for learning and development.

## Contributing

Feel free to submit issues and pull requests!

## Author

Syed Aber Sabil

## Acknowledgments

- Groq for providing fast LLM inference
- Meta for the Llama 3 model
