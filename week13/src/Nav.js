import React, {Component} from 'react'

export default class Nav extends Component {
    render () {
        return (
            <nav className='navBar'>
                <ul>
                    <a href='#'>Login with Facebook</a>
                    <br/>
                    <a href='#'>Forgot password?</a>
                </ul>

            </nav>
        )

    }
}