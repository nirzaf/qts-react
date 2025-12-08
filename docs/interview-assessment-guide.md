# Interview Assessment Guide

## Overview
Defines the web-based interview assessment flow: timed, paginated multiple-choice questions with candidate onboarding and Supabase persistence.

## Architecture
- **Flow pages:** Candidate onboarding (details + university check) followed by paginated question screens.
- **Data store:** Supabase table `interview_sessions` capturing candidate info, timing, answers, and score.
- **Routes/components:** Multi-step form with 5-question pages and timers; answer state persisted per page.

## Functional Components
- **Onboarding:**
  - Page 1: collect full name (required) and email (required/validated).
  - Page 2: ask university status; if yes, capture university name (required), else proceed.
- **Assessment:**
  - 20 questions, 4 options each, 1 correct answer.
  - Categories: SDLC/Process, Data Structures & Algorithms, Design & Architecture, Testing/QA, Version Control & PM.
  - Pagination: 5 questions per page; 10-minute timer per page. Expired pages lock and flag incomplete.
- **Scoring & Storage:**
  - Table schema: `id` (UUID PK), `full_name`, `email` (unique per session), `is_university`, `university_name`, `start_time`, `end_time`, `duration_seconds`, `score`, `submitted`, `answers` (JSONB mapping question IDs → selected answers).

## Configuration
- **Timer:** 10-minute per-page countdown; auto-submit/lock on expiry.
- **Validation:** Email format; conditional requirement on `university_name`.
- **Uniqueness:** Enforce unique email per session in Supabase to prevent duplicate attempts.
- **Persistence:** Persist answers and timestamps per page to allow recoverability after refresh.

## Usage Patterns
- Use paginated navigation controls that disable Next until current page is submitted or expired.
- Surface progress (e.g., 5/20) and remaining time on each page for candidate clarity.
- Consider resumable sessions keyed by `id` if network disruption occurs during a page.

## Notable Examples
- Category coverage mirrors the provided 20-question bank used in `interview-questions.md` (SDLC, DSA, Architecture, Testing, VCS/PM).
- Example answer storage: `{"q1":"A","q2":"C"}` stored in `answers` JSONB.
