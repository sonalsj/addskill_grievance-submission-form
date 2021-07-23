const Grievance = (props) => {
  const { data, onResolve, onReject, index } = props;
  const { email, title, description, status } = data;
  return (
    <div>
      <div>Email: {email}</div>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
      <div>
        {status ? (
          <span style={{color: status==='Resolved'? 'green': 'red' }}>{status}</span>
        ) : (
          <>
            <button style={{margin: '0 5px 0 0', color: 'green' }} onClick={(e) => onResolve(index)}>Resolve</button>
            <button style={{margin: '0 5px', color: 'red' }} onClick={(e) => onReject(index)}>Reject</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Grievance;
