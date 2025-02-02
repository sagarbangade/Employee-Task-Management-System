import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Form validation
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const targetUser = userData.find(
      user => user.firstName.toLowerCase() === assignTo.toLowerCase()
    );

    if (!targetUser) {
      alert("Employee not found!");
      return;
    }

    const updatedUserData = userData.map(user => {
      if (user.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1
          }
        };
      }
      return user;
    });

    setUserData(updatedUserData);

    localStorage.setItem('employees', JSON.stringify(updatedUserData));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="mt-3">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full bg-[#1C1C1C] rounded-lg shadow-md p-3"
      >
        <div className="w-1/2 space-y-4 pr-6">
          <div>
            <h3 className="text-gray-200 font-medium mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              required
              placeholder="Make a UI design"
              className="w-full px-4 py-1 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              required
              className="w-full px-4 py-1 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-2">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              required
              placeholder="Employee name"
              className="w-full px-4 py-1 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              required
              placeholder="Design, dev, etc"
              className="w-full px-4 py-1 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="w-1/2 pl-6">
          <div>
            <h3 className="text-gray-200 font-medium">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              placeholder="Enter task description"
              className="w-full h-57 px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none mb-4"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;