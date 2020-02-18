import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/MyLayout.js'
import styled from "styled-components";
import { Router } from '../routes'
// actions
import { getUser ,deleteUser} from '../action/userAction'
const Bound = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    .main-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-table{
        display: grid;
        grid-template-columns: 10% 40% 25% 20% 5%;
        font-weight:bold;
        margin-bottom:10px;
    }
    .body-table{
        .block-row{
            display: grid;
            grid-template-columns: 10% 40% 25% 20% 5%;
            margin-bottom: 10px;
            .full-name{
                display: flex;
                .avatar{
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    border-radius: 100%;
                    margin-right: 10px;
                    img{
                        width:100%;
                    }
                }
            }
        }
    }
`;

class MainUsers extends React.Component {
  static async getInitialProps({ ctx: { store } }) {
    // store.dispatch(getUser())
  }
  state = {
    users: null
  }
  componentDidMount() {
    this.props.getUser()
  }
  UNSAFE_componentWillReceiveProps(n) {
    // console.log('will',n.usersReducer.type);
    if (this.props.usersReducer !== n.usersReducer) {
      this.setState({
        users: n.usersReducer.data
      })
    }
    if(this.props.usersReducer.type!==n.usersReducer.type){
      this.props.getUser()
      
    }
  }
  onAddNew = () => {
    Router.pushRoute('addUser')
  }
 
  onDeleteUser=id=>{
    this.props.deleteUser(id)
  }
  render() {
    const { users } = this.state
    return (
      <Layout>
        <Bound>
          <div className='main-title'>
            <p>Users Page.</p>
            <button onClick={this.onAddNew}>Add New</button>
          </div>
          <div className='main-table-user'>
            <div className='head-table'>
              <div className='headitem'>STT</div>
              <div className='headitem'>Full Name</div>
              <div className='headitem'>Job</div>
              <div className='headitem'>Phone</div>
              <div className='headitem'>Action</div>
            </div>
            <div className='body-table'>
              {users && users.map((user, index) => {
                return (
                  <div className='block-row' key={index}>
                    <div className='humenitem'>{index + 1}</div>
                    <div className='full-name '>
                      <div className='avatar'>
                        <img src={user.avatar} alt='item' />
                      </div>
                      <p>{user.name}</p>
                    </div>
                    <div className='humenitem'>{user.job}</div>
                    <div className='humenitem'>{user.phone}</div>
                    <div className='humenitem'>
                      <button onClick={()=>{this.onDeleteUser(user.id)}}>Delete</button>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </Bound>
      </Layout>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  deleteUser: id => dispatch(deleteUser(id))
})

const mapStateToProps = (state) => {
  return {
    usersReducer: state.userReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUsers)
