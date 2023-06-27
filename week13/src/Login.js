import React, {Component} from 'react'

export default class Login extends Component {
    render () {
        return (
            <section>
                <h3>Log In</h3>
                <input className='user' placeholder='Username'></input>
                <input className='pass' placeholder='Password'></input>
            </section>
           
        )

    }
}