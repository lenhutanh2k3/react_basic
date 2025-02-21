import React from "react";

class AddComponents extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handle = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleAge =(event)=>
  {
    this.setState(
        {
            age: event.target.value
        }
    )
  }
  submit =(event)=>
  {
    event.preventDefault();
    this.props.addJob(
        {
            id:Math.random(0,100),
            name:this.state.name,
            age:this.state.age
        }
    );
  }
  render() {
    return (
      <>
        <form>
          <label>Nhap name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handle(event);
            }}
          ></input>
          <br></br>
          <label>Nhap tuoi</label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleAge(event);
            }}
          ></input>
          <div></div>
          <button onClick={(event)=>this.submit(event)}>Submit</button>
        </form>
      </>
    );
  }
}
export default AddComponents;
