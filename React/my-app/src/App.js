// import React, { Component } from "react";
// import HeaderElement from "./headerElement.js";
// import InputTodo from "./input.js";
// import ClearTask from "./clear.js";
// import TaskList from "./taskList.js";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     var arrToDo = JSON.parse(localStorage.getItem("arrToDo"));
//     if (arrToDo === null) {
//       arrToDo = [];
//     }
//     var arrComplete = JSON.parse(localStorage.getItem("arrComplete"));
//     if (arrComplete === null) {
//       arrComplete = [];
//     }

//     this.state = {
//       value: "",
//       id: 0,
//       arrToDo: arrToDo,
//       arrComplete: arrComplete,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.deleteAllTask = this.deleteAllTask.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.handleTransfer = this.handleTransfer.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit() {
//     var temp = this.state.arrToDo;
//     var id = this.state.id;
//     var value = this.state.value;
//     temp.push({ value, id });
//     id++;
//     this.setState({ arrToDo: temp, id, value: "" });
//     localStorage.setItem("arrToDo", JSON.stringify(this.state.arrToDo));
//   }

//   deleteAllTask() {
//     localStorage.clear();
//     this.setState({ id: 0 });
//     this.setState({ arrToDo: [], arrComplete: [] });
//   }

//   handleDelete(key, index) {
//     var tasks = this.state[key];
//     tasks.splice(index, 1);
//     this.setState({ [key]: tasks });
//     localStorage.setItem(key, JSON.stringify(tasks));
//   }

//   handleTransfer(fromList, toList, index) {
//     var fromTasks = this.state[fromList].slice();
//     var toTasks = this.state[toList].slice();
//     toTasks.push(fromTasks[index]);
//     fromTasks.splice(index, 1);
//     this.setState({ [fromList]: fromTasks, [toList]: toTasks });
//     localStorage.setItem(fromList, JSON.stringify(fromTasks));
//     localStorage.setItem(toList, JSON.stringify(toTasks));
//   }

//   render() {
//     return (
//       <>
//         <HeaderElement />
//         <InputTodo
//           value={this.state.value}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//         <TaskList
//           // key="t"
//           tasks={this.state.arrToDo}
//           classname="ToDo"
//           fromList="arrToDo"
//           toList="arrComplete"
//           onDelete={this.handleDelete}
//           onTransfer={this.handleTransfer}
//         ></TaskList>
//         <TaskList
//           // key="t"
//           tasks={this.state.arrComplete}
//           classname="Complete"
//           fromList="arrComplete"
//           toList="arrToDo"
//           onDelete={this.handleDelete}
//           onTransfer={this.handleTransfer}
//         ></TaskList>
//         <ClearTask deleteAllTask={this.deleteAllTask} />
//       </>
//     );
//   }
// }

// export default App;

// Using Hooks
import React, { useState, useCallback, useEffect } from "react";
import HeaderElement from "./headerElement.js";
import InputTodo from "./input.js";
import ClearTask from "./clear.js";
import TaskList from "./taskList.js";

function App() {
  const [state, setState] = useState({
    value: "",
    id: 0,
    arrToDo: [],
    arrComplete: [],
  });

  useEffect(() => {
    var _arrToDo = JSON.parse(localStorage.getItem("arrToDo"));
    if (_arrToDo !== null) {
      setState({ ...state, arrToDo: _arrToDo });
    }
    var _arrComplete = JSON.parse(localStorage.getItem("arrComplete"));
    if (_arrComplete !== null) {
      setState({ ...state, arrComplete: _arrComplete });
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      setState({ ...state, value: e.target.value });
    },
    [state]
  );

  const handleSubmit = useCallback(() => {
    var temp = state.arrToDo.slice();
    var _id = state.id;
    var value = state.value;
    temp.push({ value, id: _id });
    setState((pre) => {
      return {
        ...pre,
        arrToDo: temp,
        id: pre.id + 1,
        value: "",
      };
    });
    localStorage.setItem("arrToDo", JSON.stringify(temp));
  });

  const deleteAllTask = useCallback(() => {
    setState({ value: "", arrToDo: [], id: 0, arrComplete: [] });
    window.localStorage.clear();
  }, [state]);

  const handleDelete = useCallback(
    (key, index) => {
      var tasks = state[key].slice();
      tasks.splice(index, 1);
      setState({ ...state, [key]: tasks });
      localStorage.setItem(key, JSON.stringify(tasks));
    },
    [state.arrToDo, state.arrComplete]
  );

  const handleTransfer = useCallback(
    (fromList, toList, index) => {
      var fromTasks = state[fromList].slice();
      var toTasks = state[toList].slice();
      toTasks.push(fromTasks[index]);
      fromTasks.splice(index, 1);
      setState({ ...state, [fromList]: fromTasks, [toList]: toTasks });
      localStorage.setItem(fromList, JSON.stringify(fromTasks));
      localStorage.setItem(toList, JSON.stringify(toTasks));
    },
    [state.arrComplete, state.arrToDo]
  );

  return (
    <>
      <HeaderElement />
      <InputTodo
        value={state.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList
        // key="t"
        tasks={state.arrToDo}
        classname="ToDo"
        fromList="arrToDo"
        toList="arrComplete"
        onDelete={handleDelete}
        onTransfer={handleTransfer}
      ></TaskList>
      <TaskList
        // key="t"
        tasks={state.arrComplete}
        classname="Complete"
        fromList="arrComplete"
        toList="arrToDo"
        onDelete={handleDelete}
        onTransfer={handleTransfer}
      ></TaskList>

      <ClearTask deleteAllTask={deleteAllTask} />
    </>
  );
}

export default App;
