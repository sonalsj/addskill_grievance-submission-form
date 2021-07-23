import { Component } from "react";
import Grievance from "./Grievance";

class GrievanceList extends Component {
  render() {
    const { data, onResolve, onReject } = this.props;

    return (
      data.length ? <div  className='grievance-list'>
        {data.map((grievance, index) => {
          return (
            <Grievance
              key={data.title}
              data={grievance}
              index={index}
              onReject={onReject}
              onResolve={onResolve}
            />
          );
        })}
      </div> : ''
    );
  }
}

export default GrievanceList;
