import React, { Component } from "react";
import * as api from "../api";

class Users extends Component {
  state = { users: [] };

  componentDidMount() {
    api.fetchAllUsers().then(users => {
      this.setState({ users: users });
      console.log(users);
    });
  }

  render() {
    return (
      <div>
        {this.state.users.length
          ? this.state.users.map(user => (
              <div className="userCard">{user.username}</div>
            ))
          : console.log("hi")}
      </div>
    );
  }
}

export default Users;
