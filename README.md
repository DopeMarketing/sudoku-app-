# Sudoku App

A clean, minimalist Sudoku puzzle game built with Next.js 15, Supabase, and Tailwind CSS. This app provides an intuitive interface for solving classic 9x9 Sudoku puzzles with essential features like number input, error checking, and hint system.

## Features

- **Clean Interface**: Minimalist design focused on the puzzle with no distractions
- **Error Detection**: Automatic checking to help catch mistakes as you play
- **Hint System**: Get helpful hints when you're stuck on a challenging puzzle
- **Multiple Difficulties**: Choose from Easy, Medium, and Hard difficulty levels
- **User Authentication**: Secure sign-up and login with Supabase Auth
- **Progress Tracking**: Save and resume your games

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React 18, TypeScript
- **Backend**: Supabase (Authentication, Database)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (via Supabase)

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd sudoku-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Supabase project details in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Run the database migrations:
   ```bash
   npx supabase db reset
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The app uses a simple schema with a `sudoku_games` table to store:
- Game state and progress
- Difficulty level
- Time spent
- Hints used
- Completion status

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── supabase/
│   └── migrations/
└── middleware.ts
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.