import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Ksar Hellal"
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
    console.log("componentDidUpdate 1 Called Here.");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate 1 Called Here.");
  }

  componentDidMount() {
    this.setState({ age: 35 });
    console.log("componentDidMount 1 Called Here.");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate 1 Called Here.");
  }

  componentDidCatch() {
    console.log("componentDidCatch 1 Called Here.");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 1 Called Here.");
    return true;
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount 1 Called Here.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 1 Called Here.");
  }

  render() {
    console.log("render 1 Called Here.");
    return (
      <React.Fragment>
        <p>{this.props.age}</p>
        <p>{this.state.city}</p>
        <MyComponent city={this.state.city + " Is My City!"}>
          <p>Some Content Here</p>
        </MyComponent>
      </React.Fragment>
    );
  }
}

MainComponent.defaultProps = {
  age: "34"
};

MainComponent.displayName = "Parent Component";

ReactDOM.render(
  <StrictMode>
    <MainComponent />
  </StrictMode>,
  document.getElementById("root")
);
