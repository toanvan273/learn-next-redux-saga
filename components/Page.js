import Link from 'next/link'
import {connect} from 'react-redux'


function Page (props) {
    console.log('Page :',props);
    
    return (
        <div>
            Page
        </div>
    )
}
export default connect()(Page)