import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../action/userAction'
import { Router } from '../../routes'
class Add extends React.Component {
  state = {}
  changeText = event => {
    let target = event.target
    this.setState({
      [target.name]: target.value
    })
  }
  onSubmit = event => {
    event.preventDefault()
    const { name, job, phone } = this.state
    if(name&&job&&phone){
      this.props.dispatch(addUser(name, job, phone))
    }
   
  }
  UNSAFE_componentWillReceiveProps(n){
    if(this.props.userReducer!==n.userReducer){
      Router.pushRoute('users')
    }
  }
  render() {
    return (
      <div>
        <p>Add New.</p>
        <form onSubmit={this.onSubmit} >
          <input name='name' placeholder='Your Name' onChange={this.changeText} />
          <input name='job' placeholder='Your Job' onChange={this.changeText} />
          <input name='phone' placeholder='Your Phone' onChange={this.changeText} />
          <button type='submit'>Submit</button>
        </form>
      </div >
    )
  }
}

export default connect(state=>state)(Add)
