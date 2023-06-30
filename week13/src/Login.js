import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Login extends Component {
    render () {
        return (
            <form>
              <div className='container'>
                <h3 className="h3 border border-light">Log In</h3>
                <div className='form-group'>
                <label for='inputUser'>Username</label>
                <br></br>
                <input type='text' className='form-control' placeholder='Username'></input>
                </div>
                <div className='form-group'>
                <label for='inputPass'>Password</label>
                <br></br>
                <input  type='password' className='form-control' placeholder='Password'></input>
                </div>
                
                <button type="submit" className ="btn btn-primary">Log In</button>

              </div>
            </form>
           
        )

    }
}