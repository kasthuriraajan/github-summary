import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark fixed-top bg-primary'>
                    <a className='navbar-brand' href='/'>GitHub Summary</a>
                    <span>
                        <button className='btn btn-danger'>Logout</button>
                    </span>
                </nav>
            </div>
        )
    }
}
export default NavBar;