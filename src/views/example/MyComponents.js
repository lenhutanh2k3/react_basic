import React from 'react'
import ChildComponents from './ChildComponents';
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
        firstName: event.target.valueP
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
        <ChildComponents message='xin chao'
        name={'nhut anh'}
        age={'22'}
        />
      </>
    );
  }
}
export default MyComponents