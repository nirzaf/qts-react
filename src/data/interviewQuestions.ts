import { Question } from '../types/interview';

export const interviewQuestions: Question[] = [
  // Software Development Lifecycle and Processes
  {
    id: 1,
    question_text: "Which sequence correctly represents the traditional Waterfall software development lifecycle?",
    option_a: "Requirements → Design → Implementation → Testing → Maintenance",
    option_b: "Design → Requirements → Testing → Implementation → Maintenance",
    option_c: "Implementation → Testing → Design → Requirements → Maintenance",
    option_d: "Requirements → Testing → Design → Implementation → Maintenance",
    correct_answer: "A",
    category: "Software Development Lifecycle and Processes",
    explanation: "The Waterfall model follows a sequential process starting with requirements and ending with maintenance."
  },
  {
    id: 2,
    question_text: "What is the primary goal of the COCOMO model in software engineering?",
    option_a: "Defining user requirements",
    option_b: "Estimating project cost and effort based on lines of code",
    option_c: "Managing software configuration",
    option_d: "Designing system architecture",
    correct_answer: "B",
    category: "Software Development Lifecycle and Processes",
    explanation: "COCOMO (Constructive Cost Model) is used for estimating project cost and effort."
  },
  {
    id: 3,
    question_text: "In which lifecycle model are increments of the product delivered to users early and regularly for feedback?",
    option_a: "Waterfall Model",
    option_b: "V-Model",
    option_c: "Incremental Model",
    option_d: "Spiral Model",
    correct_answer: "C",
    category: "Software Development Lifecycle and Processes",
    explanation: "The Incremental model delivers the product in increments with user feedback between releases."
  },
  {
    id: 4,
    question_text: "Which activity is not typically part of requirements engineering?",
    option_a: "Elicitation",
    option_b: "Analysis",
    option_c: "Maintenance",
    option_d: "Documentation",
    correct_answer: "C",
    category: "Software Development Lifecycle and Processes",
    explanation: "Maintenance is part of the post-deployment phase, not requirements engineering."
  },
  
  // Data Structures and Algorithms
  {
    id: 5,
    question_text: "Which data structure follows the LIFO (Last In, First Out) principle?",
    option_a: "Queue",
    option_b: "Stack",
    option_c: "Array",
    option_d: "Graph",
    correct_answer: "B",
    category: "Data Structures and Algorithms",
    explanation: "Stacks follow the Last In, First Out (LIFO) principle."
  },
  {
    id: 6,
    question_text: "What is the average-case time complexity of Merge Sort?",
    option_a: "O(n)",
    option_b: "O(n log n)",
    option_c: "O(n²)",
    option_d: "O(log n)",
    correct_answer: "B",
    category: "Data Structures and Algorithms",
    explanation: "Merge Sort has an average-case time complexity of O(n log n)."
  },
  {
    id: 7,
    question_text: "Which algorithmic strategy does Quick Sort use to sort an array?",
    option_a: "Divide and conquer",
    option_b: "Dynamic programming",
    option_c: "Greedy",
    option_d: "Backtracking",
    correct_answer: "A",
    category: "Data Structures and Algorithms",
    explanation: "Quick Sort uses the divide and conquer strategy."
  },
  {
    id: 8,
    question_text: "Which data structure would you use to implement a breadth-first search on a graph?",
    option_a: "Stack",
    option_b: "Queue",
    option_c: "Heap",
    option_d: "Priority queue",
    correct_answer: "B",
    category: "Data Structures and Algorithms",
    explanation: "BFS uses a queue to keep track of nodes to visit next."
  },
  
  // Software Design and Architecture
  {
    id: 9,
    question_text: "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
    option_a: "Factory",
    option_b: "Observer",
    option_c: "Singleton",
    option_d: "Strategy",
    correct_answer: "C",
    category: "Software Design and Architecture",
    explanation: "The Singleton pattern ensures a class has only one instance with a global access point."
  },
  {
    id: 10,
    question_text: "In UML, which diagram is primarily used to model the dynamic behavior of a system by showing object interactions over time?",
    option_a: "Class Diagram",
    option_b: "Sequence Diagram",
    option_c: "Component Diagram",
    option_d: "Deployment Diagram",
    correct_answer: "B",
    category: "Software Design and Architecture",
    explanation: "Sequence diagrams show object interactions over time in a sequential manner."
  },
  {
    id: 11,
    question_text: "What is the main benefit of a modular system architecture?",
    option_a: "Reduced documentation needs",
    option_b: "Enhanced code reuse and maintainability",
    option_c: "Increased runtime overhead",
    option_d: "Eliminates the need for testing",
    correct_answer: "B",
    category: "Software Design and Architecture",
    explanation: "Modular architecture improves code reuse and maintainability."
  },
  {
    id: 12,
    question_text: "Which architectural style emphasizes separation of user interface, business logic, and data storage?",
    option_a: "Layered Architecture",
    option_b: "Event-driven Architecture",
    option_c: "Microservices",
    option_d: "Client-Server",
    correct_answer: "A",
    category: "Software Design and Architecture",
    explanation: "Layered Architecture (like MVC) separates UI, business logic, and data storage."
  },
  
  // Software Testing and Quality Assurance
  {
    id: 13,
    question_text: "Which type of testing is primarily concerned with verifying that new code changes have not adversely affected existing functionality?",
    option_a: "Unit Testing",
    option_b: "Integration Testing",
    option_c: "Regression Testing",
    option_d: "Acceptance Testing",
    correct_answer: "C",
    category: "Software Testing and Quality Assurance",
    explanation: "Regression testing verifies that new changes don't break existing functionality."
  },
  {
    id: 14,
    question_text: "What metric measures the number of defects per thousand lines of code?",
    option_a: "Cyclomatic Complexity",
    option_b: "Defect Density",
    option_c: "Function Points",
    option_d: "Code Coverage",
    correct_answer: "B",
    category: "Software Testing and Quality Assurance",
    explanation: "Defect Density measures the number of defects per thousand lines of code (KLOC)."
  },
  {
    id: 15,
    question_text: "Which of the following is not a fundamental activity in risk management?",
    option_a: "Risk Identification",
    option_b: "Risk Mitigation",
    option_c: "Risk Generation",
    option_d: "Risk Monitoring",
    correct_answer: "C",
    category: "Software Testing and Quality Assurance",
    explanation: "\"Risk Generation\" is not a risk management activity; the core activities are identification, assessment, mitigation, and monitoring."
  },
  {
    id: 16,
    question_text: "In test-driven development (TDD), which step comes immediately after writing a failing test?",
    option_a: "Refactor code",
    option_b: "Write minimal code to pass the test",
    option_c: "Update documentation",
    option_d: "Merge to main branch",
    correct_answer: "B",
    category: "Software Testing and Quality Assurance",
    explanation: "In TDD, after writing a failing test, you write minimal code to make it pass, then refactor."
  },
  
  // Version Control and Project Management
  {
    id: 17,
    question_text: "What is the purpose of the `git merge` command?",
    option_a: "Create a new branch",
    option_b: "Delete a branch",
    option_c: "Integrate changes from one branch into another",
    option_d: "List all commits",
    correct_answer: "C",
    category: "Version Control and Project Management",
    explanation: "The git merge command integrates changes from one branch into another."
  },
  {
    id: 18,
    question_text: "Which branching strategy uses long-lived branches for development and production, with feature work done in short-lived branches?",
    option_a: "Gitflow",
    option_b: "Trunk-based Development",
    option_c: "Feature-Branch Workflow",
    option_d: "Forking Workflow",
    correct_answer: "A",
    category: "Version Control and Project Management",
    explanation: "Gitflow uses long-lived branches (main/develop) with feature branches."
  },
  {
    id: 19,
    question_text: "What is a key advantage of using Continuous Integration (CI) in a development pipeline?",
    option_a: "Longer release cycles",
    option_b: "Early detection of integration issues",
    option_c: "Manual deployment steps",
    option_d: "Deferred testing",
    correct_answer: "B",
    category: "Version Control and Project Management",
    explanation: "CI helps detect integration issues early by automatically building and testing code changes."
  },
  {
    id: 20,
    question_text: "Which process ensures that all changes to software artifacts are tracked and that only approved modifications are incorporated?",
    option_a: "Code Review",
    option_b: "Configuration Management",
    option_c: "Debugging",
    option_d: "Profiling",
    correct_answer: "B",
    category: "Version Control and Project Management",
    explanation: "Configuration Management tracks changes to software artifacts and ensures only approved changes are incorporated."
  }
];
