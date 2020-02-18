import React from 'react'
import {connect} from 'react-redux'
import Layout from '../components/MyLayout'
import Page from '../components/Page'
import {tickClock, startClock,loadDataSaga} from '../action/clockAction'
class Clock extends React.Component {
    static async getInitialProps(props) {
        const {store, isServer} = props.ctx
        store.dispatch(tickClock(isServer))
        if(!store.getState().clockReducer.dataSaga){
            store.dispatch(loadDataSaga())
        }
        return {isServer}
    }
    componentDidMount(){
        this.props.dispatch(startClock())
    }
    render(){
        console.log('clock--page');
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }
}
export default connect()(Clock)