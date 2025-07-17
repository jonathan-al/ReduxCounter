# Redux Counter Practice Application

## Overview

This is a full-stack web application built as a Redux learning platform featuring a counter implementation with educational components. The project uses a monorepo structure with a React frontend and Express backend, configured for both development and production environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with shadcn/ui component library
- **State Management**: Redux Toolkit with Redux slices
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Memory-based storage with session support
- **Development**: Hot reload with Vite middleware integration

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend server
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Built application files
```

## Key Components

### Frontend Components
1. **Counter Component** (`client/src/components/Counter.tsx`)
   - Main Redux counter implementation
   - Uses useSelector and useDispatch hooks
   - Demonstrates increment, decrement, and reset operations

2. **ConceptsPanel Component** (`client/src/components/ConceptsPanel.tsx`)
   - Educational panel explaining Redux concepts
   - Shows code examples for useSelector and action creators
   - Displays store structure information

3. **ImplementationGuide Component** (`client/src/components/ImplementationGuide.tsx`)
   - Step-by-step guide for implementing Redux features
   - Educational content for learning purposes

4. **Redux Store** (`client/src/store/`)
   - Configured with Redux Toolkit
   - Counter slice with increment, decrement, and reset actions
   - TypeScript-enabled with proper type definitions

### Backend Components
1. **Storage Layer** (`server/storage.ts`)
   - Abstracted storage interface (IStorage)
   - Memory-based implementation for users
   - Ready for database integration

2. **Route Handler** (`server/routes.ts`)
   - Express route registration
   - API endpoint structure with /api prefix
   - HTTP server setup with proper middleware

3. **Database Schema** (`shared/schema.ts`)
   - Drizzle ORM schema definitions
   - User table with validation using Zod
   - Type-safe database operations

## Data Flow

### Redux State Flow
1. **Actions**: User interactions trigger action creators (increment, decrement, reset)
2. **Dispatch**: Actions are dispatched to the Redux store
3. **Reducers**: Counter slice handles state updates immutably
4. **Selectors**: useSelector hooks read updated state
5. **Re-render**: React components update automatically

### API Data Flow
1. **Client Requests**: Frontend makes HTTP requests via fetch API
2. **Server Processing**: Express routes handle API requests
3. **Storage Operations**: Storage layer performs CRUD operations
4. **Response**: JSON responses sent back to client
5. **Query Updates**: TanStack Query manages cache and updates

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **State Management**: Redux Toolkit, React Redux
- **UI Framework**: Radix UI components, TailwindCSS
- **Development**: Vite, TypeScript, ESLint
- **Data Fetching**: TanStack Query
- **Routing**: Wouter (lightweight alternative to React Router)

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL support
- **Validation**: Zod for runtime type checking
- **Session Management**: connect-pg-simple for session storage
- **Development**: tsx for TypeScript execution

### Shared Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Build Tools**: esbuild for production builds
- **Validation**: Zod schemas shared between frontend and backend

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with automatic restart on file changes
- **Database**: Environment-based PostgreSQL connection
- **Integration**: Vite middleware serves frontend through Express

### Production Build
1. **Frontend Build**: Vite builds optimized React application
2. **Backend Build**: esbuild bundles server code with external dependencies
3. **Static Serving**: Express serves built frontend files
4. **Database**: PostgreSQL with connection pooling

### Environment Configuration
- **Development**: `NODE_ENV=development` with development middleware
- **Production**: `NODE_ENV=production` with optimized serving
- **Database**: `DATABASE_URL` environment variable required
- **Session**: Memory storage (can be upgraded to persistent storage)

### Scalability Considerations
- **Database**: Ready for migration from memory to PostgreSQL
- **Session Storage**: Can be upgraded to Redis or database-backed sessions
- **API Structure**: RESTful design ready for additional endpoints
- **State Management**: Redux architecture scales well with application growth