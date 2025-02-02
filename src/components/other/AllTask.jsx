import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  return (
    <div id="tasklist" className="bg-[#1C1C1C] p-3 rounded mt-5 h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map((elem) => {
          return (
            <div
              key={elem.id}
              className="border-2 border-emerald-800 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 ">{elem.firstName}</h2>
              <h3 className="w-1/5 px-3  text-blue-300 ">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 px-3 text-yellow-400 ">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 px-3 text-green-300 ">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 px-3 text-red-600 ">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
