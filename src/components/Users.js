import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Users extends React.Component {
    constructor(){
        super();
        axios("https://jsonplaceholder.typicode.com/users")
            .then(usr=>this.setState({user:usr.data}))
            .catch(err=>console.log(err))

    }
    state = {
        user: []
    };
    

    render() {
        return (
            <div>
                <h3 className="text-center"><u>List of Users</u></h3>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* UserTbl component  */}
                            <UserTbl data={this.state.user}  ></UserTbl>
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
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.website}</td>
            <td>{e.address.city}</td>
            <td>
                <button className="btn btn-default m-1"><Link to={"/posts/"+e.id+"/"+e.name}>View Posts</Link></button>
                <button className="btn btn-default m-1"><Link to={"/albums/"+e.id+"/"+e.name}>View Albums</Link></button>
                <button className="btn btn-default m-1"><Link to={"/posts/"+e.id+"/"+e.name}>View Todos</Link></button>
            </td>
        </tr>)
    )
}
export default Users;
