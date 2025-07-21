# Database Setup Documentation

This directory contains the SQL scripts needed to set up the database tables for both the interview assessment and employee verification features.

## Database Schema Overview

The application uses the following main database features:

### Interview Assessment System
1. **interview_sessions** - Stores candidate session data including answers and scores
2. **interview_questions** - Stores the questions, options, and correct answers

### Employee Work Experience Verification System
1. **employees** - Stores employee records with employment details
2. **verification_records** - Stores verification tokens and their status
3. **verification_logs** - Logs all verification access attempts

## Setup Instructions

### Interview Assessment System

#### Option 1: Using Supabase Dashboard
1. Log in to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `interview-assessment-setup.sql`
4. Paste into the SQL Editor and run the script

#### Option 2: Using Supabase CLI
If you have the Supabase CLI installed, you can run:

```bash
supabase db reset
```

### Employee Verification System

#### Option 1: Using Supabase Dashboard
1. Log in to your Supabase dashboard at [https://supabase.com](https://supabase.com)
2. Navigate to the SQL Editor
3. Copy the contents of `employee-verification-setup.sql`
4. Paste into the SQL Editor and run the script
5. Verify that all tables, indexes, and functions were created successfully

#### Option 2: Using Supabase CLI
If you have the Supabase CLI installed, you can run:

```bash
supabase db push
```

#### Option 3: Manual Setup
Execute the SQL commands in the following order:
1. Run the table creation statements
2. Create the indexes
3. Set up the RLS policies
4. Create the functions

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

## Employee Verification System Schema

### employees

| Column                | Type                    | Description                                         |
|-----------------------|-------------------------|-----------------------------------------------------|
| id                    | UUID (PK)               | Unique employee identifier                          |
| full_name             | TEXT                    | Employee's full name                                |
| email                 | TEXT (UNIQUE)           | Employee's email address                            |
| job_title             | TEXT                    | Employee's job title/position                       |
| department            | TEXT                    | Department where employee works                     |
| employment_start_date | DATE                    | Date when employment started                        |
| employment_end_date   | DATE                    | Date when employment ended (NULL for active)       |
| employment_status     | TEXT                    | Status: active, terminated, resigned, retired       |
| created_at            | TIMESTAMP WITH TIME ZONE| Record creation timestamp                           |
| updated_at            | TIMESTAMP WITH TIME ZONE| Record last update timestamp                        |
| created_by            | UUID (FK)               | ID of user who created the record                   |

### verification_records

| Column              | Type                    | Description                                         |
|---------------------|-------------------------|-----------------------------------------------------|
| id                  | UUID (PK)               | Unique verification record identifier               |
| employee_id         | UUID (FK)               | Reference to employees table                        |
| verification_token  | TEXT (UNIQUE)           | Unique token for verification URL                   |
| is_active           | BOOLEAN                 | Whether the verification link is active            |
| expires_at          | TIMESTAMP WITH TIME ZONE| Optional expiration date for the link              |
| created_at          | TIMESTAMP WITH TIME ZONE| Record creation timestamp                           |
| created_by          | UUID (FK)               | ID of admin who created the verification            |
| deactivated_at      | TIMESTAMP WITH TIME ZONE| When the link was deactivated                       |
| deactivated_by      | UUID (FK)               | ID of admin who deactivated the link               |

### verification_logs

| Column           | Type                    | Description                                         |
|------------------|-------------------------|-----------------------------------------------------|
| id               | BIGINT (PK)             | Auto-incrementing log entry ID                      |
| verification_id  | UUID (FK)               | Reference to verification_records table            |
| ip_address       | INET                    | IP address of the verifier                          |
| user_agent       | TEXT                    | Browser/device information                          |
| country          | TEXT                    | Country of the verifier (optional)                 |
| city             | TEXT                    | City of the verifier (optional)                    |
| accessed_at      | TIMESTAMP WITH TIME ZONE| When the verification was accessed                  |
| success          | BOOLEAN                 | Whether the verification was successful             |
| error_message    | TEXT                    | Error message for failed attempts                   |

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

## Employee Verification System Security

### Row Level Security (RLS) Policies

The employee verification system implements comprehensive RLS policies:

#### Admin Access
- **Admins** (users with `role: 'admin'` or `role: 'super_admin'` in metadata) have full CRUD access to:
  - `employees` table
  - `verification_records` table
  - `verification_logs` table (read-only)

#### Public Access
- **Public users** can only access employee data through the secure `get_verification_details()` function
- All access attempts are logged in `verification_logs`
- Invalid tokens are logged with error messages

### Security Functions

#### get_verification_details(token_param TEXT)
Secure function that:
- Validates verification tokens
- Checks if tokens are active and not expired
- Logs all access attempts (successful and failed)
- Returns employee verification data or nothing for invalid tokens
- Includes company information (Quadrate Tech Solutions, https://quadrate.lk)

#### generate_verification_token()
Generates cryptographically secure tokens:
- Uses 32 bytes of random data
- Encodes as URL-safe base64
- Ensures uniqueness by checking existing tokens
- Returns tokens suitable for URLs and QR codes

### Usage Examples

#### Creating a Verification Record
```sql
-- Insert employee first
INSERT INTO employees (full_name, email, job_title, department, employment_start_date, created_by)
VALUES ('John Doe', 'john.doe@quadrate.lk', 'Software Developer', 'IT', '2023-01-15', auth.uid());

-- Create verification record
INSERT INTO verification_records (employee_id, verification_token, created_by)
VALUES (
  (SELECT id FROM employees WHERE email = 'john.doe@quadrate.lk'),
  generate_verification_token(),
  auth.uid()
);
```

#### Public Verification Lookup
```sql
-- This is called by the public verification page
SELECT * FROM get_verification_details('your-verification-token-here');
```

#### Deactivating a Verification
```sql
UPDATE verification_records
SET is_active = false, deactivated_at = now(), deactivated_by = auth.uid()
WHERE verification_token = 'token-to-deactivate';
```

### Verification URL Format

All verification URLs follow this format:
```
https://quadrate.lk/verify/{verification_token}
```

Example:
```
https://quadrate.lk/verify/AbCdEfGhIjKlMnOpQrStUvWxYz123456789
```

### Monitoring and Analytics

The system provides comprehensive logging:
- All verification attempts (successful and failed)
- IP addresses and user agents
- Timestamps for audit trails
- Error messages for debugging

Query examples:
```sql
-- Get access logs for a specific verification
SELECT * FROM verification_logs
WHERE verification_id = 'your-verification-id'
ORDER BY accessed_at DESC;

-- Get failed verification attempts
SELECT * FROM verification_logs
WHERE success = false
ORDER BY accessed_at DESC;

-- Get verification statistics
SELECT
  DATE(accessed_at) as date,
  COUNT(*) as total_attempts,
  COUNT(*) FILTER (WHERE success = true) as successful,
  COUNT(*) FILTER (WHERE success = false) as failed
FROM verification_logs
GROUP BY DATE(accessed_at)
ORDER BY date DESC;
```
