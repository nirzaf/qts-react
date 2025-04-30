**Objective:**  
Create a web-based interview assessment platform that delivers a multiple-choice questionnaire in a timed, paginated format. The platform must capture initial candidate data, conditionally request university information, and sequentially present questions with answer tracking and storage in a Supabase database.


**Workflow Specification:**

### **1. Candidate Onboarding Flow**

**Page 1 – Candidate Details:**
- Prompt candidate to enter:
  - Full Name (required)
  - Email ID (required, must be valid)

**Page 2 – University Affiliation:**
- Ask: “Are you currently studying in a university?”
  - Options: Yes / No
  - If **Yes**, ask: “Which university are you studying in?” (Text input, required)
  - If **No**, proceed to questions

---

### **2. Interview Assessment Flow**

- Total Questions: **20**
- Format: **Multiple choice (4 options per question, one correct)**
- Categories:
  1. Software Development Lifecycle and Processes
  2. Data Structures and Algorithms
  3. Software Design and Architecture
  4. Software Testing and Quality Assurance
  5. Version Control and Project Management

- **Pagination:**
  - Present **5 questions per page**
  - Candidate must complete each page within **10 minutes**
  - If time expires without submission or navigation, automatically lock the page and flag as incomplete
  - After submission, proceed to next page

---

### **3. Storage Requirements (Supabase Table Design)**

**Table Name:** `interview_sessions`

| Column Name         | Type           | Description                                         |
|---------------------|----------------|-----------------------------------------------------|
| `id`                | UUID (PK)      | Unique session ID                                   |
| `full_name`         | Text           | Candidate’s full name                               |
| `email`             | Text           | Candidate’s email (unique per session)              |
| `is_university`     | Boolean        | Whether the candidate is currently studying         |
| `university_name`   | Text (nullable)| University name (if applicable)                     |
| `start_time`        | Timestamp      | Session start time                                  |
| `end_time`          | Timestamp      | Session end time                                    |
| `duration_seconds`  | Integer        | Total time taken in seconds                         |
| `score`             | Integer        | Total score (number of correct answers)             |
| `submitted`         | Boolean        | Whether the test was fully submitted                |
| `answers`           | JSONB          | Object containing question IDs and selected answers |

> **Example for `answers`:**
```json
{
  "1": "A",
  "2": "B",
  "3": "C",
  ...
}
```

---

### **4. Optional: Question Metadata Table**

To allow future dynamic loading and admin updates.

**Table Name:** `interview_questions`

| Column Name       | Type           | Description                            |
|-------------------|----------------|----------------------------------------|
| `id`              | Integer (PK)   | Question ID                            |
| `question_text`   | Text           | The question                           |
| `option_a`        | Text           | Option A                               |
| `option_b`        | Text           | Option B                               |
| `option_c`        | Text           | Option C                               |
| `option_d`        | Text           | Option D                               |
| `correct_answer`  | Char(1)        | The correct option (A/B/C/D)           |
| `category`        | Text           | The question category (for filtering)  |
| `explanation`     | Text (optional)| Justification for the correct answer   |

---

### **5. Notes on Timing and Flow**

- Implement a **10-minute countdown timer per page**
- If user doesn't submit in time, auto-save whatever was filled (partial answers allowed) and proceed or lock out
- Show a message: “Time’s up for this section. You can proceed to the next part.”

---

### **6. Post-Completion Flow**

- On final page submission:
  - Calculate total correct answers using the answer key
  - Store the session data in `interview_sessions`
  - Show candidate a confirmation message:
    > *"Thank you for completing the interview. Your responses have been recorded. You will receive a follow-up email if selected."*

---

Would you like a Mermaid flowchart that maps out this interaction flow visually?