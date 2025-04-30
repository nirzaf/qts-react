-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the interview_sessions table
CREATE TABLE IF NOT EXISTS interview_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  is_university BOOLEAN NOT NULL,
  university_name TEXT,
  start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_time TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  score INTEGER,
  submitted BOOLEAN DEFAULT FALSE,
  answers JSONB
);

-- Create the interview_questions table (optional but recommended for future updates)
CREATE TABLE IF NOT EXISTS interview_questions (
  id INTEGER PRIMARY KEY,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
  category TEXT NOT NULL,
  explanation TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_interview_sessions_email ON interview_sessions(email);
CREATE INDEX IF NOT EXISTS idx_interview_sessions_submitted ON interview_sessions(submitted);
CREATE INDEX IF NOT EXISTS idx_interview_questions_category ON interview_questions(category);

-- Add comments to tables for documentation
COMMENT ON TABLE interview_sessions IS 'Stores candidate interview session data including answers and scores';
COMMENT ON TABLE interview_questions IS 'Stores interview questions with options and correct answers';

-- Add comments to columns for better documentation
COMMENT ON COLUMN interview_sessions.id IS 'Unique session ID';
COMMENT ON COLUMN interview_sessions.full_name IS 'Candidate''s full name';
COMMENT ON COLUMN interview_sessions.email IS 'Candidate''s email address';
COMMENT ON COLUMN interview_sessions.is_university IS 'Whether the candidate is currently studying in a university';
COMMENT ON COLUMN interview_sessions.university_name IS 'University name if applicable';
COMMENT ON COLUMN interview_sessions.start_time IS 'Session start time';
COMMENT ON COLUMN interview_sessions.end_time IS 'Session end time';
COMMENT ON COLUMN interview_sessions.duration_seconds IS 'Total time taken in seconds';
COMMENT ON COLUMN interview_sessions.score IS 'Total score (number of correct answers)';
COMMENT ON COLUMN interview_sessions.submitted IS 'Whether the test was fully submitted';
COMMENT ON COLUMN interview_sessions.answers IS 'JSON object containing question IDs and selected answers';

COMMENT ON COLUMN interview_questions.id IS 'Question ID';
COMMENT ON COLUMN interview_questions.question_text IS 'The question text';
COMMENT ON COLUMN interview_questions.option_a IS 'Option A';
COMMENT ON COLUMN interview_questions.option_b IS 'Option B';
COMMENT ON COLUMN interview_questions.option_c IS 'Option C';
COMMENT ON COLUMN interview_questions.option_d IS 'Option D';
COMMENT ON COLUMN interview_questions.correct_answer IS 'The correct option (A/B/C/D)';
COMMENT ON COLUMN interview_questions.category IS 'The question category';
COMMENT ON COLUMN interview_questions.explanation IS 'Justification for the correct answer';

-- Insert questions from the Software Development Lifecycle and Processes category
INSERT INTO interview_questions (id, question_text, option_a, option_b, option_c, option_d, correct_answer, category, explanation)
VALUES
(1, 'Which sequence correctly represents the traditional Waterfall software development lifecycle?', 
   'Requirements → Design → Implementation → Testing → Maintenance', 
   'Design → Requirements → Testing → Implementation → Maintenance', 
   'Implementation → Testing → Design → Requirements → Maintenance', 
   'Requirements → Testing → Design → Implementation → Maintenance', 
   'A', 'Software Development Lifecycle and Processes', 
   'The Waterfall model follows a sequential process starting with requirements and ending with maintenance.'),

(2, 'What is the primary goal of the COCOMO model in software engineering?', 
   'Defining user requirements', 
   'Estimating project cost and effort based on lines of code', 
   'Managing software configuration', 
   'Designing system architecture', 
   'B', 'Software Development Lifecycle and Processes', 
   'COCOMO (Constructive Cost Model) is used for estimating project cost and effort.'),

(3, 'In which lifecycle model are increments of the product delivered to users early and regularly for feedback?', 
   'Waterfall Model', 
   'V-Model', 
   'Incremental Model', 
   'Spiral Model', 
   'C', 'Software Development Lifecycle and Processes', 
   'The Incremental model delivers the product in increments with user feedback between releases.'),

(4, 'Which activity is not typically part of requirements engineering?', 
   'Elicitation', 
   'Analysis', 
   'Maintenance', 
   'Documentation', 
   'C', 'Software Development Lifecycle and Processes', 
   'Maintenance is part of the post-deployment phase, not requirements engineering.');

-- Insert questions from the Data Structures and Algorithms category
INSERT INTO interview_questions (id, question_text, option_a, option_b, option_c, option_d, correct_answer, category, explanation)
VALUES
(5, 'Which data structure follows the LIFO (Last In, First Out) principle?', 
   'Queue', 
   'Stack', 
   'Array', 
   'Graph', 
   'B', 'Data Structures and Algorithms', 
   'Stacks follow the Last In, First Out (LIFO) principle.'),

(6, 'What is the average-case time complexity of Merge Sort?', 
   'O(n)', 
   'O(n log n)', 
   'O(n²)', 
   'O(log n)', 
   'B', 'Data Structures and Algorithms', 
   'Merge Sort has an average-case time complexity of O(n log n).'),

(7, 'Which algorithmic strategy does Quick Sort use to sort an array?', 
   'Divide and conquer', 
   'Dynamic programming', 
   'Greedy', 
   'Backtracking', 
   'A', 'Data Structures and Algorithms', 
   'Quick Sort uses the divide and conquer strategy.'),

(8, 'Which data structure would you use to implement a breadth-first search on a graph?', 
   'Stack', 
   'Queue', 
   'Heap', 
   'Priority queue', 
   'B', 'Data Structures and Algorithms', 
   'BFS uses a queue to keep track of nodes to visit next.');

-- Insert questions from the Software Design and Architecture category
INSERT INTO interview_questions (id, question_text, option_a, option_b, option_c, option_d, correct_answer, category, explanation)
VALUES
(9, 'Which design pattern ensures a class has only one instance and provides a global point of access to it?', 
   'Factory', 
   'Observer', 
   'Singleton', 
   'Strategy', 
   'C', 'Software Design and Architecture', 
   'The Singleton pattern ensures a class has only one instance with a global access point.'),

(10, 'In UML, which diagram is primarily used to model the dynamic behavior of a system by showing object interactions over time?', 
    'Class Diagram', 
    'Sequence Diagram', 
    'Component Diagram', 
    'Deployment Diagram', 
    'B', 'Software Design and Architecture', 
    'Sequence diagrams show object interactions over time in a sequential manner.'),

(11, 'What is the main benefit of a modular system architecture?', 
    'Reduced documentation needs', 
    'Enhanced code reuse and maintainability', 
    'Increased runtime overhead', 
    'Eliminates the need for testing', 
    'B', 'Software Design and Architecture', 
    'Modular architecture improves code reuse and maintainability.'),

(12, 'Which architectural style emphasizes separation of user interface, business logic, and data storage?', 
    'Layered Architecture', 
    'Event-driven Architecture', 
    'Microservices', 
    'Client-Server', 
    'A', 'Software Design and Architecture', 
    'Layered Architecture (like MVC) separates UI, business logic, and data storage.');

-- Insert questions from the Software Testing and Quality Assurance category
INSERT INTO interview_questions (id, question_text, option_a, option_b, option_c, option_d, correct_answer, category, explanation)
VALUES
(13, 'Which type of testing is primarily concerned with verifying that new code changes have not adversely affected existing functionality?', 
    'Unit Testing', 
    'Integration Testing', 
    'Regression Testing', 
    'Acceptance Testing', 
    'C', 'Software Testing and Quality Assurance', 
    'Regression testing verifies that new changes don''t break existing functionality.'),

(14, 'What metric measures the number of defects per thousand lines of code?', 
    'Cyclomatic Complexity', 
    'Defect Density', 
    'Function Points', 
    'Code Coverage', 
    'B', 'Software Testing and Quality Assurance', 
    'Defect Density measures the number of defects per thousand lines of code (KLOC).'),

(15, 'Which of the following is not a fundamental activity in risk management?', 
    'Risk Identification', 
    'Risk Mitigation', 
    'Risk Generation', 
    'Risk Monitoring', 
    'C', 'Software Testing and Quality Assurance', 
    '"Risk Generation" is not a risk management activity; the core activities are identification, assessment, mitigation, and monitoring.'),

(16, 'In test-driven development (TDD), which step comes immediately after writing a failing test?', 
    'Refactor code', 
    'Write minimal code to pass the test', 
    'Update documentation', 
    'Merge to main branch', 
    'B', 'Software Testing and Quality Assurance', 
    'In TDD, after writing a failing test, you write minimal code to make it pass, then refactor.');

-- Insert questions from the Version Control and Project Management category
INSERT INTO interview_questions (id, question_text, option_a, option_b, option_c, option_d, correct_answer, category, explanation)
VALUES
(17, 'What is the purpose of the `git merge` command?', 
    'Create a new branch', 
    'Delete a branch', 
    'Integrate changes from one branch into another', 
    'List all commits', 
    'C', 'Version Control and Project Management', 
    'The git merge command integrates changes from one branch into another.'),

(18, 'Which branching strategy uses long-lived branches for development and production, with feature work done in short-lived branches?', 
    'Gitflow', 
    'Trunk-based Development', 
    'Feature-Branch Workflow', 
    'Forking Workflow', 
    'A', 'Version Control and Project Management', 
    'Gitflow uses long-lived branches (main/develop) with feature branches.'),

(19, 'What is a key advantage of using Continuous Integration (CI) in a development pipeline?', 
    'Longer release cycles', 
    'Early detection of integration issues', 
    'Manual deployment steps', 
    'Deferred testing', 
    'B', 'Version Control and Project Management', 
    'CI helps detect integration issues early by automatically building and testing code changes.'),

(20, 'Which process ensures that all changes to software artifacts are tracked and that only approved modifications are incorporated?', 
    'Code Review', 
    'Configuration Management', 
    'Debugging', 
    'Profiling', 
    'B', 'Version Control and Project Management', 
    'Configuration Management tracks changes to software artifacts and ensures only approved changes are incorporated.');
