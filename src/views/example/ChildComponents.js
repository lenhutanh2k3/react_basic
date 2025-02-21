import React from 'react'

class ChildComponents extends React.Component
{
    state=
    {   
        count:0
    }
    render()
    {
        return (
          <>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
          </>
        );
    }
}
export default ChildComponents;