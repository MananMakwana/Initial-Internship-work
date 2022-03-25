// import React, { Component } from "react";

// class task extends Component {
//   render() {
//     var { task, fromList, toList, onDelete, onTransfer, index } = this.props;
//     // console.log(task);
//     return (
//       <p>
//         {task}
//         <button
//           className="taskBut"
//           onClick={() => {
//             onTransfer(fromList, toList, index);
//           }}
//         >
//           {fromList === "arrToDo" ? "complete" : "todo"}
//         </button>
//         <button
//           className="taskBut"
//           onClick={() => {
//             onDelete(fromList, index);
//           }}
//         >
//           Delete
//         </button>
//       </p>
//     );
//   }
// }

// export default task;

import React from "react";

function task(props) {
  var { task, fromList, toList, onDelete, onTransfer, index } = props;
  return (
    <p>
      {task}
      <button
        className="taskBut"
        onClick={() => {
          onTransfer(fromList, toList, index);
        }}
      >
        {fromList === "arrToDo" ? "complete" : "todo"}
      </button>
      <button
        className="taskBut"
        onClick={() => {
          onDelete(fromList, index);
        }}
      >
        Delete
      </button>
    </p>
  );
}

export default task;
