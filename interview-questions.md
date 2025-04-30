# Software Engineering Interview Questions

## Table of Contents
1. [Software Development Lifecycle and Processes](#1-software-development-lifecycle-and-processes)
2. [Data Structures and Algorithms](#2-data-structures-and-algorithms)
3. [Software Design and Architecture](#3-software-design-and-architecture)
4. [Software Testing and Quality Assurance](#4-software-testing-and-quality-assurance)
5. [Version Control and Project Management](#5-version-control-and-project-management)
6. [Answer Key](#answer-key)

## 1. Software Development Lifecycle and Processes

1. Which sequence correctly represents the traditional Waterfall software development lifecycle?
   A) Requirements → Design → Implementation → Testing → Maintenance
   B) Design → Requirements → Testing → Implementation → Maintenance
   C) Implementation → Testing → Design → Requirements → Maintenance
   D) Requirements → Testing → Design → Implementation → Maintenance
   > **Answer: A** - The Waterfall model follows a sequential process starting with requirements and ending with maintenance.

2. What is the primary goal of the COCOMO model in software engineering?
   A) Defining user requirements
   B) Estimating project cost and effort based on lines of code
   C) Managing software configuration
   D) Designing system architecture
   > **Answer: B** - COCOMO (Constructive Cost Model) is used for estimating project cost and effort.

3. In which lifecycle model are increments of the product delivered to users early and regularly for feedback?
   A) Waterfall Model
   B) V-Model
   C) Incremental Model
   D) Spiral Model
   > **Answer: C** - The Incremental model delivers the product in increments with user feedback between releases.

4. Which activity is **not** typically part of requirements engineering?
   A) Elicitation
   B) Analysis
   C) Maintenance
   D) Documentation
   > **Answer: C** - Maintenance is part of the post-deployment phase, not requirements engineering.

## 2. Data Structures and Algorithms

5. Which data structure follows the LIFO (Last In, First Out) principle?
   A) Queue
   B) Stack
   C) Array
   D) Graph
   > **Answer: B** - Stacks follow the Last In, First Out (LIFO) principle.

6. What is the average-case time complexity of Merge Sort?
   A) O(n)
   B) O(n log n)
   C) O(n²)
   D) O(log n)
   > **Answer: B** - Merge Sort has an average-case time complexity of O(n log n).

7. Which algorithmic strategy does Quick Sort use to sort an array?
   A) Divide and conquer
   B) Dynamic programming
   C) Greedy
   D) Backtracking
   > **Answer: A** - Quick Sort uses the divide and conquer strategy.

8. Which data structure would you use to implement a breadth-first search on a graph?
   A) Stack
   B) Queue
   C) Heap
   D) Priority queue
   > **Answer: B** - BFS uses a queue to keep track of nodes to visit next.

## 3. Software Design and Architecture

9. Which design pattern ensures a class has only one instance and provides a global point of access to it?
   A) Factory
   B) Observer
   C) Singleton
   D) Strategy
   > **Answer: C** - The Singleton pattern ensures a class has only one instance with a global access point.

10. In UML, which diagram is primarily used to model the dynamic behavior of a system by showing object interactions over time?
    A) Class Diagram
    B) Sequence Diagram
    C) Component Diagram
    D) Deployment Diagram
    > **Answer: B** - Sequence diagrams show object interactions over time in a sequential manner.

11. What is the main benefit of a modular system architecture?
    A) Reduced documentation needs
    B) Enhanced code reuse and maintainability
    C) Increased runtime overhead
    D) Eliminates the need for testing
    > **Answer: B** - Modular architecture improves code reuse and maintainability.

12. Which architectural style emphasizes separation of user interface, business logic, and data storage?
    A) Layered Architecture
    B) Event-driven Architecture
    C) Microservices
    D) Client-Server
    > **Answer: A** - Layered Architecture (like MVC) separates UI, business logic, and data storage.

## 4. Software Testing and Quality Assurance

13. Which type of testing is primarily concerned with verifying that new code changes have not adversely affected existing functionality?
    A) Unit Testing
    B) Integration Testing
    C) Regression Testing
    D) Acceptance Testing
    > **Answer: C** - Regression testing verifies that new changes don't break existing functionality.

14. What metric measures the number of defects per thousand lines of code?
    A) Cyclomatic Complexity
    B) Defect Density
    C) Function Points
    D) Code Coverage
    > **Answer: B** - Defect Density measures the number of defects per thousand lines of code (KLOC).

15. Which of the following is **not** a fundamental activity in risk management?
    A) Risk Identification
    B) Risk Mitigation
    C) Risk Generation
    D) Risk Monitoring
    > **Answer: C** - "Risk Generation" is not a risk management activity; the core activities are identification, assessment, mitigation, and monitoring.

16. In test-driven development (TDD), which step comes immediately after writing a failing test?
    A) Refactor code
    B) Write minimal code to pass the test
    C) Update documentation
    D) Merge to main branch
    > **Answer: B** - In TDD, after writing a failing test, you write minimal code to make it pass, then refactor.

## 5. Version Control and Project Management

17. What is the purpose of the `git merge` command?
    A) Create a new branch
    B) Delete a branch
    C) Integrate changes from one branch into another
    D) List all commits
    > **Answer: C** - The git merge command integrates changes from one branch into another.

18. Which branching strategy uses long-lived branches for development and production, with feature work done in short-lived branches?
    A) Gitflow
    B) Trunk-based Development
    C) Feature-Branch Workflow
    D) Forking Workflow
    > **Answer: A** - Gitflow uses long-lived branches (main/develop) with feature branches.

19. What is a key advantage of using Continuous Integration (CI) in a development pipeline?
    A) Longer release cycles
    B) Early detection of integration issues
    C) Manual deployment steps
    D) Deferred testing
    > **Answer: B** - CI helps detect integration issues early by automatically building and testing code changes.

20. Which process ensures that all changes to software artifacts are tracked and that only approved modifications are incorporated?
    A) Code Review
    B) Configuration Management
    C) Debugging
    D) Profiling
    > **Answer: B** - Configuration Management tracks changes to software artifacts and ensures only approved changes are incorporated.

## Answer Key

| Question | Answer | Topic |
|----------|--------|-------|
| 1 | A | Waterfall lifecycle sequence |
| 2 | B | COCOMO model purpose |
| 3 | C | Incremental model characteristics |
| 4 | C | Requirements engineering activities |
| 5 | B | Stack data structure (LIFO) |
| 6 | B | Merge Sort time complexity |
| 7 | A | Quick Sort strategy |
| 8 | B | BFS implementation data structure |
| 9 | C | Singleton design pattern |
| 10 | B | UML Sequence Diagram purpose |
| 11 | B | Modular architecture benefits |
| 12 | A | Layered architecture characteristics |
| 13 | C | Regression testing purpose |
| 14 | B | Defect Density metric |
| 15 | C | Risk management activities |
| 16 | B | TDD workflow |
| 17 | C | Git merge purpose |
| 18 | A | Gitflow branching strategy |
| 19 | B | Continuous Integration benefits |
| 20 | B | Configuration Management purpose |
