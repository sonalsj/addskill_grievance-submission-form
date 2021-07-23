import { Component } from "react";

class GrievanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", title: "", description: "" };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    const { email, description, title } = this.state;
    this.props.saveGrievance({
      email,
      description,
      title,
      status: "",
    });
    this.setState({
      email: "",
      title: "",
      description: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h1>Grievance Form</h1>
        <form onSubmit={this.handleSubmit} className="border-btm">
          <div>
            <label>
              Email:
              <input
                type="email"
                value={this.state.email}
                required
                onChange={this.handleEmailChange}
              />
            </label>
          </div>
          <div>
            <label>
              Title:
              <input
                type="text"
                required
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                type="text"
                required
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </>
    );
  }
}

export default GrievanceForm;
