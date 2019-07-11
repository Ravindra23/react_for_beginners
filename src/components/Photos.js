import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Photos extends React.Component {
    constructor(props){
        super(props);
        axios("https://jsonplaceholder.typicode.com/photos?albumId="+this.props.match.params.aid)
            .then(usr=>this.setState({photos:usr.data}))
            .catch(err=>console.log(err))

    }
    state = {
    photos: []
    };
    
    backHandler = (e)=>{
        this.props.history.push('/albums/'+this.props.match.params.uid+"/"+this.props.match.params.uname);
    }
    render() {
        return (
            <div>
                <h3 className="text-center"><u>List of Photos of {this.props.match.params.uname}</u></h3>
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
                            <UserTbl data={this.state.photos}  ></UserTbl>
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
            <td><img src={e.url} width="50" height="50"></img></td>
            <td><img src={e.thumbnailUrl} width="50" height="50" ></img></td>
        </tr>)
    )
}
export default Photos;
