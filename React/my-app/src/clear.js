// import React, { Component } from "react";

// class clear extends Component {
//   render() {
//     return (
//       <>
//         <div className="clearTask">
//           <button onClick={this.props.deleteAllTask}>CLEAR ALL TASK</button>
//         </div>
//       </>
//     );
//   }
// }

// export default clear;

import React from "react";

function clear(props) {
  var { deleteAllTask } = props;
  return (
    <>
      <div className="clearTask">
        <button onClick={deleteAllTask}>CLEAR ALL TASK</button>
      </div>
    </>
  );
}

export default clear;
