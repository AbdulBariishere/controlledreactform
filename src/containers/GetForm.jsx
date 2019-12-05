import React, { Component } from 'react';
class GetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newUser: {
            name: "",
            age: "",
            gender: "",
       //     skills: [],
            about: ""
          },
          genderOptions: ["Male", "Female", "Others"]
      //    skillOptions: ["Programming", "Development", "Design", "Testing"]
        };
     
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
     handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
   
    fetch("http://103.127.157.28:8012/addform", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"  
      }
    }).then(response => {
      response.json().then(data => {

      console.log("Successful" + data);
     alert(JSON.stringify(userData))
     
      });
    });
  }
  render() {
    return (
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
    );
  }
     
}
 
export default GetForm;