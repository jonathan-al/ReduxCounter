# Redux Counter

This project is a simple counter application built with React and Redux, designed to demonstrate the functionality of a state management system in a React application. Originally created with [Replit](https://replit.com), an online IDE and hosting platform.

## Description

The Redux Counter project allows users to increment, decrement, and reset a counter, showcasing the use of React components, Redux for state management, and Tailwind CSS for styling.

## Features

- Increment and decrement the counter
- Reset the counter to zero
- Responsive UI with modern styling using Tailwind CSS
- State management with React Redux
- Full-stack application with Express.js backend
- TypeScript support throughout the application
- Modern UI components with Radix UI and shadcn/ui
- Hot module replacement with Vite

## Tech Stack

### Frontend
- React 18 with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- Radix UI components
- Vite for build tooling
- React Router (Wouter) for navigation

### Backend
- Express.js server
- TypeScript
- Drizzle ORM for database operations
- WebSocket support

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/jonathan-al/ReduxCounter.git
   cd redux-counter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:
```bash
npm run dev
```
This will start the application on port 3001 by default. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

If you need to change the port, set the `PORT` environment variable:
```bash
PORT=4000 npm run dev
```

### Building for Production

Use the following command to build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

### Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Counter.tsx   # Main counter component
│   │   │   └── ...
│   │   ├── store/
│   │   │   ├── index.ts      # Redux store configuration
│   │   │   └── counterSlice.ts # Counter slice with actions/reducers
│   │   ├── pages/            # Application pages
│   │   ├── hooks/            # Custom React hooks
│   │   └── lib/              # Utility functions
├── server/
│   ├── index.ts              # Express server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Database operations
│   └── vite.ts               # Vite integration for development
├── shared/
│   └── schema.ts             # Shared type definitions
└── ...
```

## Key Features Explained

### Redux State Management
The application uses Redux Toolkit for efficient state management:
- **Store**: Centralized state container
- **Slices**: Feature-based state management with actions and reducers
- **Selectors**: Efficient state selection with useSelector hook

### Modern UI Components
- Built with Tailwind CSS for responsive design
- Radix UI primitives for accessibility
- Custom styled components with shadcn/ui
- Icons from Lucide React

### Full-Stack Architecture
- Express.js backend for API endpoints
- Vite for fast development and building
- TypeScript for type safety across the stack
- Hot module replacement for instant updates

## Troubleshooting

### Port Issues
If you encounter "address already in use" errors, the default port (3001) might be occupied. Set a different port:
```bash
PORT=3002 npm run dev
```

### Dependencies
If you encounter issues with dependencies, try:
```bash
npm install --legacy-peer-deps
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
