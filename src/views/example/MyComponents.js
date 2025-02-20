import React from 'react'

class MyComponents extends React.Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      count: 0,
    };
  }

  // Hàm tăng giá trị count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default MyComponents