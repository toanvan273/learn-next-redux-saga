import React from 'react'
import { connect } from 'react-redux'
class Add extends React.Component {

    changeText = event => {

        console.log('event', event);
    }
    onSubmit = e => {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <p>Add New.</p>
                <form onSubmit={onSubmit} >
                    <input name='name' placeholder='Your Name' onChange={changeText} />
                    <input name='job' placeholder='Your Job' onChange={changeText} />
                    <input name='phone' placeholder='Your Phone' onChange={changeText} />
                    <button type='submit'>Submit</button>
                </form>
            </div >
        )
    }

}

export default connect()(Add)
