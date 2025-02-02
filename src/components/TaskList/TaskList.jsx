import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import { FailedTask } from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data, setEmployeeData }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (taskTitle, newStatus) => {
    const updatedUserData = userData.map((user) => {
      if (user.firstName === data.firstName) {
        const updatedTasks = user.tasks.map((task) => {
          if (task.taskTitle === taskTitle) {
            const oldStatus = Object.entries(task).find(
              ([key, value]) =>
                ["active", "newTask", "completed", "failed"].includes(key) &&
                value === true
            )?.[0];

            const updatedTaskCounts = {
              ...user.taskCounts,
            };

            if (oldStatus) {
              updatedTaskCounts[oldStatus]--;
            }

            updatedTaskCounts[newStatus]++;

            return {
              ...task,
              active: false,
              newTask: false,
              completed: false,
              failed: false,
              [newStatus]: true,
            };
          }
          return task;
        });

        const updatedUser = {
          ...user,
          tasks: updatedTasks,
          taskCounts: {
            ...user.taskCounts,
            [newStatus]: user.taskCounts[newStatus] + 1,
            [Object.entries(
              user.tasks.find((t) => t.taskTitle === taskTitle)
            ).find(
              ([key, value]) =>
                ["active", "newTask", "completed", "failed"].includes(key) &&
                value === true
            )?.[0]]:
              user.taskCounts[
                Object.entries(
                  user.tasks.find((t) => t.taskTitle === taskTitle)
                ).find(
                  ([key, value]) =>
                    ["active", "newTask", "completed", "failed"].includes(
                      key
                    ) && value === true
                )?.[0]
              ] - 1,
          },
        };

        setEmployeeData(updatedUser);

        return updatedUser;
      }
      return user;
    });

    setUserData(updatedUserData);

    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  return (
    <div className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={index}
              data={elem}
              updateTaskStatus={updateTaskStatus}
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask
              key={index}
              data={elem}
              updateTaskStatus={updateTaskStatus}
            />
          );
        }
        if (elem.completed) {
          return <CompleteTask key={index} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={index} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
