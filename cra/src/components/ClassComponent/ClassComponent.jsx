import React, { Component, createRef } from "react";
import Counter from "./Counter";

// == loose comparison
// === strict comparison
// shallow comparison
// deep comparison

// const a = {
//   name: "nicole",
//   address: {
//     apt: 123123,
//     street: "qweqwe",
//   },
// };
// const b = {
//   name: "nicole",
//   address: {
//     apt: 123123,
//     street: "qweqwe",
//   },
// };
// const c = { ...a };
// console.log(a, c);
// console.log(a.address == c.address); // for shallow copy this is true, for deep copy this is false

// 16.8
class ClassComponent extends Component {
  // constructor(props) {
  //   super(props);

  //   // useState()
  //   this.state = {
  //     value1: 0,
  //     value2: 1,
  //   };
  // }

  state = {
    value1: 0,
    value2: 1,
    count: [0, 0, 0],
  };

  addOneToCounter = (index) => {
    this.setState({
      count: this.state.count.map((countNum, i) => {
        if (index === i) {
          return countNum + 1;
        } else {
          return countNum;
        }
      }),
    });
  };

  intervalIdRef = createRef(null);

  handleAddOne = () => {
    this.setState({
      value1: this.state.value1 + 1,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        Class Component
        <button onClick={this.handleAddOne}>Add one</button>
        {this.state.count.map((count, index) => (
          <Counter
            count={count}
            index={index}
            addOneToCounter={this.addOneToCounter}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    console.log("component did mount");
    // this.intervalIdRef.current = setInterval(() => {
    //   console.log(1);
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value1 !== this.state.value1) {
      console.log("value1 changed");
    }
    if (prevState.value2 !== this.state.value2) {
      console.log("value2 changed");
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // clearInterval(this.intervalIdRef.current);
  }

  // immutability makes it easier for React to detect changes in components
  // when updating states, we create a new object to represent the new value

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("should component update");
  //   // if (nextProps.todo === this.props.todo){

  //   // }

  //   return true;
  // }
}

export default ClassComponent;
