import axios from "axios";
import React, { Component } from "react";

class View extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/getDetail')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
deleteData(id, e){  
  axios.delete(`http://127.0.0.1:8080/del/${userid}`)  
    .then(response => {  
      console.log(response);  
      console.log(response.data);  
  
      const data = this.state.data.filter(item => item.userid !== userid);  
      this.setState({ data });  
    })  
  
} 

  render() {
    return (
      <>
      
      <table border={1}>
      <thead>
        <tr>
          <th>userId</th>
          <th>userName</th>
          <th>email</th>
          <th>password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.userid}>
            <td>{user.userid}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>  
                <button className="btn btn-danger" onClick={(e) => this.deleteData(user.id, e)}>Delete</button>  
            </td>  
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
    );
  }
}

export default View;