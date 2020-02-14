import React from 'react'
import {connect} from 'react-redux'
import Layout from '../components/MyLayout'
// import 

class Clock extends React.Component {
    static async getInitialProps(props) {
        const {store, isServer} = props.ctx

        return {isServer}
    }
    render(){
        return (
            <Layout>
                Clock
            </Layout>
        )
    }
}
export default connect()(Clock)