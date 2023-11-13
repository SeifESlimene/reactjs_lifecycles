import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar"
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps Called Here.");
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate Called Here.");
  //   return null;
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps Called Here.");
  //   return null;
  // }

  // static getDerivedStateFromError(error) {
  //   return null;
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate 2 Called Here.");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate 2 Called Here.");
  }

  componentDidMount() {
    this.setState({ name: "Seif Eddine Slimene" });
    console.log("componentDidMount 2 Called Here.");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate 2 Called Here.");
  }

  componentDidCatch() {
    console.log("componentDidCatch 2 Called Here.");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 2 Called Here.");
    return true;
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount 2 Called Here.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 2 Called Here.");
  }

  render() {
    console.log("render 2 Called Here.");
    return (
      <React.Fragment>
        <span>{this.state.name}</span>
        <p>{this.state.foo}</p>
        <p>{this.props.city}</p>
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

MyComponent.defaultProps = {
  name: "John Doe"
};

MyComponent.displayName = "Nice Component";

export default MyComponent;
