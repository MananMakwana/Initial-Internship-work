// import React, { Component } from "react";

// class input extends Component {
//   render() {
//     return (
//       <>
//         <div className="addTask">
//           <input
//             className="inputVal"
//             type="text"
//             value={this.props.value}
//             placeholder="Add your task"
//             onChange={this.props.handleChange}
//           ></input>
//           <button onClick={this.props.handleSubmit}>ADD</button>
//         </div>
//       </>
//     );
//   }
// }

// export default input;

import React from "react";

function input(props) {
  var { value, handleChange, handleSubmit } = props;
  return (
    <>
      <div className="addTask">
        <input
          className="inputVal"
          type="text"
          value={value}
          placeholder="Add your task"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </>
  );
}

export default input;
