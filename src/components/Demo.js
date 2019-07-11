import React from 'react';

class Users extends React.Component {
    state = {
        user: [], search:''
    };
    

    handleChange = (e)=>{
        // console.log(e.target.value);
        this.setState({search: e.target.value})
    }
    render() {
        return (
            <div>
                <h3 className="text-center"><u>List of Users</u></h3>
                <div className="container">
                    <input className="form-control col-md-3" type="text" placeholder="search key" onChange={this.handleChange} />
                    <br />
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
                            <UserTbl data={this.state.user} searchkey={this.state.search} ></UserTbl>
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
            <td>{e.age}</td>
            <td>{e.address}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>)
    )
}
export default Users;
