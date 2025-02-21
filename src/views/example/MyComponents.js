import React from 'react'

class MyComponents extends React.Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      firstName:'',
      lastName:'',
    };
  }
  handle=(event)=>
  {
    this.setState(
      {
        firstName: event.target.value
      }
    )
  }
  render() {
    return (
      <>
        <form>
          <label>Nhap ten</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handle(event);
            }}
          ></input>
          <br></br>

          <input type="submit"></input>
        </form>
      </>
    );
  }
}
export default MyComponents