import { Component } from "react";

class TestClass extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Hristo", lastName: "Dimitrov" },
      company: "Kodar",
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="username_test">
          Username, {this.state.name.firstName} {this.state.name.lastName}, I
          work at {this.state.company}
        </label>
        <input id="username_test" type="text" />
        <button
          onClick={() => {
            this.setState(
              () => {
                return { name: { firstName: "Ico", lastName: "Dimitrov" } };
              },
              () => {console.log(this.state)}
            );
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default TestClass;
