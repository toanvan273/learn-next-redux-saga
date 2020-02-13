import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/MyLayout.js'
import styled from "styled-components";
// import withReduxSaga from '../lib/withReduxSaga'
// actions
import { getUser } from '../action/testAction'
const Bound = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    .main-table-user{

    }
    .head-table{
        display: grid;
        grid-template-columns: 10% 40% 25% 25%;
        font-weight:bold;
        margin-bottom:10px;
    }
    .body-table{
        .block-row{
            display: grid;
            grid-template-columns: 10% 40% 25% 25%;
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
        console.log('getInitialProps: ', store);
        // store.dispatch(getUser())
    }
    state = {
        users: []
    }
    componentDidMount() {
        this.props.getUser()
    }
    UNSAFE_componentWillReceiveProps(n) {
        if (this.props.usersReducer !== n.usersReducer) {
            console.log('componentWillReceiveProps', n.usersReducer);
            this.setState({
                users: n.usersReducer.data
            })
        }
    }
    render() {
        const { users } = this.state
        // console.log('render ', users);
        return (
            <Layout>
                <Bound>
                    <p>Users Page.</p>
                    <div className='main-table-user'>
                        <div className='head-table'>
                            <div className='headitem'>STT</div>
                            <div className='headitem'>Full Name</div>
                            <div className='headitem'>Job</div>
                            <div className='headitem'>Phone</div>
                        </div>
                        <div className='body-table'>
                            {users && users.map((user, index) => (
                                <div className='block-row' key={index}>
                                    <div className='humenitem'>{index + 1}</div>
                                    <div className='full-name '>
                                        <div className='avatar'>
                                            <img src={user.avatar} alt='user' />
                                        </div>
                                        <p>{user.name}</p>
                                    </div>
                                    <div className='humenitem'>{user.job}</div>
                                    <div className='humenitem'>{user.phone}</div>
                                </div>
                            ))
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
})

const mapStateToProps = (state) => {
    return {
        usersReducer: state.testReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUsers)
