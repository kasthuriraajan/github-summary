import React, { Component } from 'react';

class RepoList extends Component{
    constructor(props){
        super(props);
        console.log(props.sendOrg);
        this.state = {
            orgs:[],
            organization :'',
            errorMessage : ''
        };
    } 
    goBack = (e) => {
        e.preventDefault();
        this.props.getBack(false);
    }
    componentDidMount(){
        const url = 'https://api.github.com/users/'+this.props.sendGitHubId+'/repos';
        fetch(url)
        .then(results => { return results.json();})
        .then(data => (data.message=== undefined)? (this.setState({orgs:data})):(this.setState({errorMessage: data.message})) )
    }

    render(){
       
        const repo = this.state.orgs.map(org => (
            <tr key={org.id}>
                <td>{org.name}</td>
                <td>{org.created_at}</td>
                <td>{org.updated_at}</td>
                <td>{org.language}</td>
                <td>{org.open_issues}</td>
                <td>{org.forks}</td>
                <td>
                    <button className='btn btn-primary' type='button'>Pull Requests</button>
                </td>
            </tr>
        ));
        
        return(
            <div>
                <div className='row'>
                    <h1 className='col'> User : {this.props.sendGitHubId}</h1>
                    <button className='btn btn-primary col-1' onClick={this.goBack}>Back</button>
                </div>
                
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Created</td>
                            <td>Updated</td>
                            <td>Language</td>
                            <td>Open Issues</td>
                            <td>Forks</td>
                            <td>.....</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.errorMessage === '' ? repo : this.state.errorMessage}
                    </tbody>
                </table>
              

            </div>
        )
    }
}
export default RepoList;