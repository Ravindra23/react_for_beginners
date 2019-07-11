import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Posts extends React.Component {
    constructor(props){
        super(props);
        let id = this.props.match.params.uid;
        console.log("id is" + id)
        axios("https://jsonplaceholder.typicode.com/posts?userId="+this.props.match.params.uid)
            .then(usr=>this.setState({post:usr.data}))
            .catch(err=>console.log(err))

    }
    state = {
        post: []
    };
    
    backHandler = (e)=>{
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3 className="text-center"><u>List of Posts of {this.props.match.params.uname}</u></h3>
                {/* <button><Link to='/'>Back</Link></button> */}
                <button onClick={this.backHandler}>Back</button>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>title</th>
                                <th>Body</th>
                                {/* <th>Address</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* UserTbl component  */}
                            <UserTbl data={this.state.post}  ></UserTbl>
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
            <td>{e.body}</td>
            <td><button className="btn btn-info"><Link to="">View Post</Link></button></td>
        </tr>)
    )
}
export default Posts;
