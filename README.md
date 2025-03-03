# DSA Learning Assistant

A web application that helps users learn data structures and algorithms by providing interactive guidance on LeetCode problems using AI.


# DEMO VIDEO
[🎥 Watch the Demo](https://drive.google.com/file/d/1ejpZRqOG5R8uHsdzUnyfmgCdJg0vQYR9/view?usp=sharing)



## Features

- Submit LeetCode problem URLs for specialized help
- Ask questions about data structures and algorithms
- Get step-by-step guidance without direct solutions
- Interactive chat interface with AI-powered responses

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **AI Integration**: OpenAI GPT-4 Turbo

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Backend Setup

1. Clone the repository
   ```
   git clone https://github.com/sachan13harshit/DSA-Assistant.git
   cd DSA-Assistant
   ```

2. Navigate to the backend directory
   ```
   cd backend
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Create a `.env` file in the backend directory with your OpenAI API key
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5000
   ```

5. Start the backend server
   ```
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory
   ```
   cd frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the frontend development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Application Architecture

### Frontend

The frontend is built with React.js and uses Tailwind CSS for styling. The main components include:

- **App.jsx**: The main component that manages state and handles API calls
- **LandingPage.jsx**: The initial page users see with a "Get Started" button
- **ChatPage.jsx**: The main chat interface that displays after clicking "Get Started"
- **ChatInput.jsx**: Handles user input and LeetCode URL submission
- **ChatMessage.jsx**: Displays the chat messages
- **Message.jsx**: Individual message component for user and assistant messages
- **WelcomeMessage.jsx**: Displays initial guidance cards when no messages exist
- **LoadingIndicator.jsx**: Shows a typing animation while waiting for AI responses

### Backend

The backend is a simple Express server that handles API requests and communicates with the OpenAI API:

- **app.js**: Sets up the Express server, defines routes, and handles OpenAI API integration
- **createSystemPrompt()**: Generates the system prompt that guides the AI's behavior

### Data Flow

1. User enters a message or LeetCode URL in the frontend
2. The frontend sends the message history and new message to the backend
3. The backend formats the messages and sends them to the OpenAI API
4. The OpenAI API returns a response based on the system prompt and message history
5. The backend forwards the response to the frontend
6. The frontend displays the response in the chat interface

## How to Use the Application

1. Click "Get Started" on the landing page to access the chat interface
2. To ask a general DSA question:
   - Type your question in the input field and press Enter or click the Send button
3. To get help with a specific LeetCode problem:
   - Click the link icon in the input field
   - Enter the LeetCode problem URL in the additional input field that appears
   - Type your question or describe your approach in the main input field
   - Press Enter or click the Send button
4. Wait for the AI assistant to respond with guidance
5. Continue the conversation by asking follow-up questions

## GPT Integration Details

The application uses OpenAI's GPT-4 Turbo model to provide intelligent responses to user queries about data structures and algorithms.

### System Prompt

The system prompt is carefully designed to:
- Guide the AI to act as a programming tutor specializing in DSA
- Prevent the AI from providing complete solutions
- Encourage the use of the Socratic method to help users discover answers themselves
- Structure responses to break down complex problems into manageable sub-problems
- Focus on developing problem-solving skills rather than memorization

### Message Formatting

When sending messages to the OpenAI API:
1. The system prompt is added as the first message
2. User messages are formatted with the role "user"
3. If a LeetCode URL is provided, it's included in the message content
4. Assistant responses are formatted with the role "assistant"

### API Parameters

The OpenAI API call uses the following parameters:
- **model**: "gpt-4-turbo" for advanced reasoning capabilities
- **temperature**: 0.7 to balance creativity and consistency
- **max_tokens**: 1000 to limit response length

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
