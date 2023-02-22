// import React, { useState } from "react";
// import NewTask from "../Presentational/NewTask";
// import TasksList from "../Presentational/TasksList";

// export default function AppFunction() {
//   const [newTask, setNewTask] = useState({});
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
//   };

//   const [allTasks, setAllTasks] = useState([]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!newTask.title) return;
//     setAllTasks((prev) => [newTask, ...prev]);
//     setNewTask({});
//   };
//   const handleDelete = (taskIdToRemove) => {
//     setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
//   };

//   return (
//     <main>
//       <h1>Tasks</h1>
//       <NewTask
//         newTask={newTask}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//       <TasksList allTasks={allTasks} handleDelete={handleDelete} />
//     </main>
//   );
// }


// import the default export and the named export `useState` from the 'react' library
import React, {useState } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}
