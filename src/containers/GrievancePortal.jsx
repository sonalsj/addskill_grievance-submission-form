import { Component } from "react";
import GrievanceForm from "../components/GrievanceForm";
import GrievanceList from "../components/GrievanceList";

class GrievancePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  saveGrievance = (grievance) => {
    this.setState((prevState) => {
      return {
        data: [...prevState.data, grievance],
      };
    });
  };

  resolveGrievance = (index) => {
      const newData = this.state.data.map((grievance, i) => {
          if(i === index)
          grievance.status = 'Resolved';
          return grievance;
      });

      this.setState({
          data: newData
      });
  };

  rejectGrievance = (index) => {
    const newData = this.state.data.map((grievance, i) => {
        if(i === index)
        grievance.status = 'Rejected';
        return grievance;
    });

    this.setState({
        data: newData
    });
  };

  render() {
    return (
      <div className='grievance-portal'>
        <GrievanceForm saveGrievance={this.saveGrievance} />
        <GrievanceList
          data={this.state.data}
          onResolve={this.resolveGrievance}
          onReject={this.rejectGrievance}
        />
      </div>
    );
  }
}

export default GrievancePortal;
