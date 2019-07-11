import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Albums extends React.Component {
    constructor(props){
        super(props);
        axios("https://jsonplaceholder.typicode.com/albums?userId="+this.props.match.params.uid)
            .then(usr=>this.setState({albums:usr.data}))
            .catch(err=>console.log(err))

    }
    state = {
    albums: []
    };
    
    backHandler = (e)=>{
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3 className="text-center"><u>List of Albums of {this.props.match.params.uname}</u></h3>
                {/* <button><Link to='/'>Back</Link></button> */}
                <button onClick={this.backHandler}>Back</button>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                                {/* <th>Address</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* UserTbl component  */}
                            <UserTbl data={this.state.albums} uname={this.props.match.params.uname} uid={this.props.match.params.uid} ></UserTbl>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const UserTbl = (props) => {
    const user = props.data;
   
    return (
        user.map((e, id) => <tr key={id}>
            <td>{id}</td>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.completed}</td>
            <td><button className="btn btn-info"><Link to={"/photos/"+props.uid+"/"+props.uname+"/"+e.id}>View Photos</Link></button></td>
        </tr>)
    )
}
export default Albums;
