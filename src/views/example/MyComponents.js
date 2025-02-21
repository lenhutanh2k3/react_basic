import React from 'react'
import ChildComponents from './ChildComponents';
import AddComponents from './AddComponents';
class MyComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: [
        {id:'001',name:"dat",age:'22'},
        {id:'002',name:"an",age:'23'},
        {id:'003',name:"hieu",age:'21'},
      ]
    };
  }
  addJob=(job)=>
  {
    this.setState({
      job:[...this.state.job,job]
    })
  }
  deleteJob=(job)=>
  {
    let current =this.state.job;
    current =current.filter(item=>item.id !== job.id)
    this.setState({
        job:current
    })
  }
  render() {
    return (
      <>
        <AddComponents addJob={this.addJob} />
        <ChildComponents job={this.state.job} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponents