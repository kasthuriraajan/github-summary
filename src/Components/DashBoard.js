import React, { Component } from 'react';
import NavBar from './NavBar';
import RepoList from './RepoList';
import Welcome from './Welcome';

class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            showRepo : false,
            githubId : ''
        }
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    showSearchBar =(getBackRepo,getgitHubId) =>{
        this.setState({showRepo:getBackRepo, githubId:getgitHubId});    
    }
    render(){
        return(
            <div>
                <NavBar/>
                
                <div  className='container container-fill'>
                    {this.state.showRepo?(<RepoList sendGitHubId ={this.state.githubId} getBack={this.showSearchBar}/>):(<Welcome getRepo={this.showSearchBar}/>)}
                </div>
            </div>
        )
    }
}

export default DashBoard;