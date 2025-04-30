# Interview Assessment Database Setup

This directory contains the SQL scripts needed to set up the database tables for the interview assessment feature.

## Database Schema

The interview assessment feature uses two main tables:

1. **interview_sessions** - Stores candidate session data including answers and scores
2. **interview_questions** - Stores the questions, options, and correct answers

## Setup Instructions

### Option 1: Using Supabase Dashboard

1. Log in to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `interview-assessment-setup.sql`
4. Paste into the SQL Editor and run the script

### Option 2: Using Supabase CLI

If you have the Supabase CLI installed, you can run:

```bash
supabase db push --db-url=<your-supabase-db-url> --file=./src/database/interview-assessment-setup.sql
```

## Table Structure

### interview_sessions

| Column            | Type                    | Description                                         |
|-------------------|-------------------------|-----------------------------------------------------|
| id                | UUID (PK)               | Unique session ID                                   |
| full_name         | TEXT                    | Candidate's full name                               |
| email             | TEXT                    | Candidate's email (unique per session)              |
| is_university     | BOOLEAN                 | Whether the candidate is currently studying         |
| university_name   | TEXT (nullable)         | University name (if applicable)                     |
| start_time        | TIMESTAMP WITH TIME ZONE| Session start time                                  |
| end_time          | TIMESTAMP WITH TIME ZONE| Session end time                                    |
| duration_seconds  | INTEGER                 | Total time taken in seconds                         |
| score             | INTEGER                 | Total score (number of correct answers)             |
| submitted         | BOOLEAN                 | Whether the test was fully submitted                |
| answers           | JSONB                   | Object containing question IDs and selected answers |

### interview_questions

| Column          | Type        | Description                            |
|-----------------|-------------|----------------------------------------|
| id              | INTEGER (PK)| Question ID                            |
| question_text   | TEXT        | The question                           |
| option_a        | TEXT        | Option A                               |
| option_b        | TEXT        | Option B                               |
| option_c        | TEXT        | Option C                               |
| option_d        | TEXT        | Option D                               |
| correct_answer  | CHAR(1)     | The correct option (A/B/C/D)           |
| category        | TEXT        | The question category (for filtering)  |
| explanation     | TEXT        | Justification for the correct answer   |

## Example Answers Format

The `answers` column in the `interview_sessions` table uses JSONB to store the candidate's answers in the following format:

```json
{
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
  "5": "A",
  "6": "B",
  "7": "C",
  "8": "D",
  "9": "A",
  "10": "B",
  "11": "C",
  "12": "D",
  "13": "A",
  "14": "B",
  "15": "C",
  "16": "D",
  "17": "A",
  "18": "B",
  "19": "C",
  "20": "D"
}
```

Where the key is the question ID and the value is the selected answer (A, B, C, or D).

## Row Level Security (RLS) Policies

For production use, it's recommended to set up Row Level Security (RLS) policies to ensure data privacy and security. Here's an example of how to set up RLS for the `interview_sessions` table:

```sql
-- Enable RLS on the table
ALTER TABLE interview_sessions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows only authenticated users to view their own sessions
CREATE POLICY "Users can view their own sessions" 
  ON interview_sessions 
  FOR SELECT 
  USING (auth.uid() = created_by);

-- Create a policy that allows only authenticated users to insert their own sessions
CREATE POLICY "Users can insert their own sessions" 
  ON interview_sessions 
  FOR INSERT 
  WITH CHECK (auth.uid() = created_by);

-- Create a policy that allows only authenticated users to update their own sessions
CREATE POLICY "Users can update their own sessions" 
  ON interview_sessions 
  FOR UPDATE 
  USING (auth.uid() = created_by);
```

Note: The above RLS policies assume you have a `created_by` column in your `interview_sessions` table that stores the authenticated user's ID. You would need to add this column to implement these policies.
