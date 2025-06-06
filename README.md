# Resume Chatbot - Interactive Portfolio Experience

## Overview

This application is an interactive portfolio website featuring a chatbot that simulates conversations with Rithish Jakkireddy. Visitors can ask questions about Rithish's professional background, skills, and experience, with the chatbot responding as if it were Rithish himself. The chatbot is powered by Google's Gemini AI model, ensuring natural, conversational responses based on resume data.

![Resume Chatbot Demo](https://chatbot-nextjs-rj.vercel.app/)

## Features

- **Chat Interface**: Engage in natural conversation with a chatbot that represents Rithish
- **Resume-Informed Responses**: AI responses based on actual resume data for accurate information
- **Real-time Interaction**: Instant responses with typing indicators for a better user experience
- **Mobile-Responsive Design**: Optimized for both desktop and mobile devices
- **Expandable Chat Window**: Chat that can be minimized or expanded based on user preference

## Technology Stack

- **Frontend**: React 19, Next.js 15 with App Router
- **AI Integration**: Google Generative AI (Gemini 2.0 Flash model)
- **Styling**: TailwindCSS 4
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Google Gemini API key ([Get it here](https://ai.google.dev/))

### Environment Setup

1. Clone the repository
2. Create a `.env.local` file in the project root with:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

- `/src/components/ChatBot.tsx` - Main chatbot interface component
- `/src/lib/gemini.ts` - Google Generative AI integration
- `/src/lib/chat-service.ts` - Service for managing chat interactions
- `/src/lib/resume-data.ts` - Resume data used to inform chatbot responses
- `/src/app/api/chat/route.ts` - API route handling chat requests
- `/src/types/chat.ts` - TypeScript definitions for chat functionality

## Customization

To customize this chatbot for your own portfolio:

1. Update `/src/lib/resume-data.ts` with your personal information
2. Adjust the system instructions in `/src/lib/gemini.ts` to reflect your identity
3. Modify the UI components in `/src/components/ChatBot.tsx` as needed

## Deployment

This Next.js app can be deployed to Vercel with minimal configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fchatbot-next)

Remember to add your `GEMINI_API_KEY` to the environment variables in your Vercel project settings.

## License

[MIT](LICENSE)

## Contact

Rithish Jakkireddy - [rithishjakkireddy@gmail.com](mailto:rithishjakkireddy@gmail.com)
