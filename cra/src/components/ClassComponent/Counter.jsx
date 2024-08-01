import { Component, PureComponent } from "react";

class Counter extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.count === this.props.count) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log(`Counter ${this.props.index} render `);
    return (
      <div>
        <div>Counter: {this.props.count} </div>
        <button onClick={() => this.props.addOneToCounter(this.props.index)}>
          Add one
        </button>
      </div>
    );
  }
}

export default Counter;
