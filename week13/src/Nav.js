import React, {Component} from 'react'
import './App.css'

export default class Nav extends Component {
    render () {
        return (
            <nav className='navBar'>
                <ul>
                    <a  href='#'>Home</a>
                    <a  href='#'>Register</a>
                    <a  href='#'>Forgot password?</a>
                </ul>

            </nav>
        )

    }
}