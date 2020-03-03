import React, { Component } from 'react';

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            githubId : ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    showRepos = (e) =>{
        e.preventDefault();
        this.props.getRepo(true,this.state.githubId);
    }
    render(){
        return(
            <div>
                <h1 className='text-center'>Welcome to Github DashBoard</h1>
                <hr/>
                <form className='form-inline align-items-center row' onSubmit={this.showRepos} >
                    <input className='form-control-lg col-md-6 col-sm-6 offset-md-2' type='search' placeholder='Enter Username Here...' name = 'githubId' onChange={this.onChange} value={this.state.githubId} />
                    <button className='btn btn-primary btn-lg' type='submit' >Show Repositories</button>
                </form>
                <hr/>
            </div>
        )
    }
}
export default Welcome;