// import React, { Component } from "react";
// import Task from "./task.js";

// class taskList extends Component {
//   render() {
//     var { tasks, fromList, toList, onDelete, onTransfer, classname } =
//       this.props;
//     return (
//       <div className={classname}>
//         <h1 className="task">
//           {fromList === "arrToDo" ? "ToDo List" : "Completed List"}
//         </h1>
//         {tasks.map((e, index) => {
//           return (
//             <Task
//               key={e.id}
//               fromList={fromList}
//               toList={toList}
//               task={e.value}
//               index={index}
//               onTransfer={onTransfer}
//               onDelete={onDelete}
//             ></Task>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default taskList;

import React from "react";
import Task from "./task.js";

function taskList(props) {
  var { tasks, fromList, toList, onDelete, onTransfer, classname } = props;
  return (
    <div className={classname}>
      <h1 className="task">
        {fromList === "arrToDo" ? "ToDo List" : "Completed List"}
      </h1>
      {tasks.map((e, index) => {
        return (
          <Task
            key={e.id}
            fromList={fromList}
            toList={toList}
            task={e.value}
            index={index}
            onTransfer={onTransfer}
            onDelete={onDelete}
          ></Task>
        );
      })}
    </div>
  );
}

export default taskList;
