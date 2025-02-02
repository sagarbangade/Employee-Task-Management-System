const employees = [
  {
    id: 1,
    firstName: "sagar",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix login issue",
        taskDescription: "Resolve the authentication bug in the login page",
        taskDate: "2025-02-01",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update dashboard UI",
        taskDescription: "Redesign the admin dashboard for better UX",
        taskDate: "2025-02-03",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize database queries",
        taskDescription: "Improve SQL queries to reduce page load time",
        taskDate: "2025-02-05",
        category: "Performance",
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Sachin",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API documentation",
        taskDescription: "Document REST API endpoints for developers",
        taskDate: "2025-02-02",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new feature",
        taskDescription: "Push the new subscription feature to production",
        taskDate: "2025-02-04",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix checkout bug",
        taskDescription: "Resolve the issue causing checkout failures",
        taskDate: "2025-02-06",
        category: "Bug Fix",
      },
    ],
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 1 },
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Conduct security audit",
        taskDescription: "Review system security vulnerabilities",
        taskDate: "2025-02-02",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Implement dark mode",
        taskDescription: "Add dark mode option for UI",
        taskDate: "2025-02-03",
        category: "UI/UX",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix API rate limit issue",
        taskDescription: "Adjust API limits to prevent overuse",
        taskDate: "2025-02-05",
        category: "Backend",
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstName: "Vishal",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Refactor legacy code",
        taskDescription: "Improve maintainability of old code",
        taskDate: "2025-02-04",
        category: "Code Cleanup",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add new payment gateway",
        taskDescription: "Integrate Stripe for payments",
        taskDate: "2025-02-06",
        category: "Feature",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix email notifications",
        taskDescription: "Resolve issue with email alerts",
        taskDate: "2025-02-07",
        category: "Bug Fix",
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstName: "Mahesh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write test cases",
        taskDescription: "Add unit tests for API endpoints",
        taskDate: "2025-02-05",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Improve search algorithm",
        taskDescription: "Optimize search performance",
        taskDate: "2025-02-07",
        category: "Optimization",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix mobile responsiveness",
        taskDescription: "Ensure UI works well on mobile devices",
        taskDate: "2025-02-08",
        category: "UI/UX",
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Ocean",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
