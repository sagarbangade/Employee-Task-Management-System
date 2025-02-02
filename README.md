# Employee Task Management System

A React-based task management system that allows administrators to create and assign tasks to employees, while employees can manage their assigned tasks through different states.

🔗 Live Demo: [Task Management System](https://your-deployment-url-here.com)

## Features

### Admin Dashboard
- Create and assign tasks to employees
- View all employees' task statistics
- Monitor task status across the organization
- Real-time updates of task statuses

### Employee Dashboard
- View assigned tasks
- Manage task statuses:
  - Accept new tasks
  - Mark tasks as completed
  - Mark tasks as failed
- Track personal task statistics

## Task States
1. New Task 🆕
2. Active Task ▶️
3. Completed Task ✅
4. Failed Task ❌

## Test Credentials

### Admin Access
```
Email: admin@me.com
Password: 123
```

### Employee Access
```
Email: e@e.com
Password: 123

Email: employee2@example.com
Password: 123

Email: employee3@example.com
Password: 123

Email: employee4@example.com
Password: 123

Email: employee5@example.com
Password: 123
```

## Technologies Used
- React 18
- Context API for state management
- Tailwind CSS for styling
- localStorage for data persistence

## Key Features
- Responsive design
- Real-time task status updates
- Persistent data storage
- Role-based access control
- Task categorization
- Task progress tracking

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/task-management-system.git
```

2. Install dependencies:
```bash
cd task-management-system
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Login as admin to:
   - Create new tasks
   - Assign tasks to employees
   - Monitor overall progress

2. Login as employee to:
   - View assigned tasks
   - Accept new tasks
   - Update task status
   - Track personal progress

