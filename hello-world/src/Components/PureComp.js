import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component render')
    return (
      	<div>
        	PureComp {this.props.name}
      	</div>
    )
  }
}

export default PureComp