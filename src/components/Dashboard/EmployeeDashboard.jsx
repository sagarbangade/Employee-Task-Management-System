import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [employeeData, setEmployeeData] = useState(props.data);

  useEffect(() => {
    const updatedEmployee = userData.find(
      (user) => user.firstName === props.data.firstName
    );
    if (updatedEmployee) {
      setEmployeeData(updatedEmployee);
    }
  }, [userData, props.data.firstName]);

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={employeeData} />
      <TaskListNumber data={employeeData} />
      <TaskList data={employeeData} setEmployeeData={setEmployeeData} />
    </div>
  );
};

export default EmployeeDashboard;
