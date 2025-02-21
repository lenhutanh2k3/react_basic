import React from "react";

class ChildComponents extends React.Component {
  state = {
    show: false,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let { job } = this.props;
    let { show } = this.state;

    return (
      <>
        {!show && <button onClick={this.toggleShow}>Show</button>}

        {show && (
          <>
            <div className="job">
              {Array.isArray(job) && job.length > 0 ? (
                job.map((item, index) => (
                  <div key={index}>
                    <p>
                      Name: {item.name} Age: {item.age}
                    </p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>Không có công việc nào!</p>
              )}
            </div>
            <button onClick={this.toggleShow}>Hide</button>
          </>
        )}
      </>
    );
  }
}

export default ChildComponents;
