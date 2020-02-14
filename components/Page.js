import {connect} from 'react-redux'
import ClockControl from '../components/clock/ClockControl'
function Page ({clockReducer}) {
    console.log('Page',clockReducer);
    
    return (
        <div>
           <ClockControl lastUpdate={clockReducer.lastUpdate} light={clockReducer.light}  />
           <pre>
               <code>
                   {JSON.stringify(clockReducer.dataSaga,null,1)}
               </code>
           </pre>
        </div>
    )
}
export default connect(state=>state)(Page)

// import React from 'react'
// class Page extends React.PureComponent {
//     constructor(props){
//         console.log(props);
//         super(props)
//         this.state={
//         }
//     }
//     UNSAFE_componentWillReceiveProps(n){
//         console.log('UNSAFE_componentWillReceiveProps',n);
//     }
//     // componentDidUpdate(prevProps,preState){
//     //     console.log('componentDidUpdate',prevProps,preState);
//     // }
//     render(){
//         return (
//             <React.Fragment>
//             </React.Fragment>
//         )
//     }
// }
// export default connect(state=>state)(Page)