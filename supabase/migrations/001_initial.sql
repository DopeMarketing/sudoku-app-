-- Enable the extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create sudoku_games table to store game states
CREATE TABLE IF NOT EXISTS sudoku_games (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    difficulty VARCHAR(10) NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
    initial_puzzle TEXT NOT NULL,
    current_state TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    hints_used INTEGER DEFAULT 0,
    time_spent INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX sudoku_games_user_id_idx ON sudoku_games(user_id);
CREATE INDEX sudoku_games_difficulty_idx ON sudoku_games(difficulty);
CREATE INDEX sudoku_games_completed_idx ON sudoku_games(completed);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_sudoku_games_updated_at
    BEFORE UPDATE ON sudoku_games
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE sudoku_games ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own games" ON sudoku_games
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own games" ON sudoku_games
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own games" ON sudoku_games
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own games" ON sudoku_games
    FOR DELETE USING (auth.uid() = user_id);