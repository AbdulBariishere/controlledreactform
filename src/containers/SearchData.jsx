import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Input from "../components/Input";
import GetSubmitButton from "../components/GetSubmitButton";
import GetButton from "../components/GetSubmitButton";
class SearchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getdata: [
        
      ],
      searchUser: {
        id:"",
        name: ""
      },
      updatedata:{
        id:"",
        name:"",
        gender:"",
        age:"",
        about:""
       }
    };
   //this.handleFormUpdate = this.handleFormupdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({searchUser: {...prevState.searchUser,[name]: value }}),
      () => console.log(this.state.searchUser)
    );
  }

  handleId(e){
    let value="";
    let name ="";
    this.setState( prevState => ({searchUser: {...prevState.searchUser,[name]: value }}),
    () => console.log(this.state.searchUser)
  );
    
  }
  handleName(e){
    let value=e.target.value;
    let name =e.target.name;
    
  }
 
  handleFormSubmit(e) {
    const { getdata } = this.state;
    e.preventDefault();
    var userData = this.state.searchUser.name;

    fetch("http://103.127.157.28:8012/searchdata?name=" + userData, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data.Data);
        this.setState({ getdata: data.Data });
     //   alert(JSON.stringify(this.state.getdata));
      });
    });
  }

  handleFormUpdate(e){
    e.preventDefault();
    let userData = this.state.updatedata;
   
    fetch("http://103.127.157.28:8012/updatedata", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"  
      }
    }).then(response => {
      response.json().then(data => {

      console.log("Successful" + data);
     alert(JSON.stringify(data))
     
      });
    });
  }
  handlerGetFormData= (ProductId ,productname,productgender,productage,productabout)  =>{
  this.state.updatedata.id=ProductId;
  this.state.updatedata.name=productname;
  this.state.updatedata.gender=productgender;
  this.state.updatedata.age=productage;
  this.state.updatedata.about=productabout;
  const {id}=this.state.updatedata.id;
  this.setState(this) ; 
  }
 
  render() {
    return (
      <React.Fragment>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.searchUser.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />{" "}
          <GetSubmitButton
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
          />
        </form>
        <Table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>gender</th>
            <th>about</th>
            <th>Update</th>
          </tr>

          {this.state.getdata.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.gender}</td>
              <td>{product.age}</td>
              <td>{product.about}</td>
              <td>
                {" "}
                <GetButton
                  action={() => this.handlerGetFormData(product.id,product.name,product.gender,product.age,product.about)}
                  type={"primary"}
                  title={"Update"}
                  margin={"20px"}
                />
              </td>
            </tr>
          ))}
        </Table>
        <form className="container" onSubmit={this.handleFormSubmit}>
        <Input
            inputType={"text"}
            title={"id"}
            name={"id"}
            disabled = {true}
            value={this.state.updatedata.id}
            handleChange={this.handleId}
          />
            <Input
            inputType={"text"}
            title={"Name"}
            name={"name"}
            value={this.state.updatedata.name}
            handleInput={this.handleText}
          />
            <Input
            inputType={"text"}
            title={"gender"}
            name={"gender"}
            value={this.state.updatedata.gender}
            handleChange={this.handleInput}
          />
            <Input
            inputType={"text"}
            title={"age"}
            name={"age"}
            value={this.state.updatedata.age}
            handleChange={this.handleInput}
          />
            <Input
            inputType={"text"}
            title={"about"}
            name={"about"}
            value={this.state.updatedata.about}
            handleChange={this.handleInput}
          />
             <GetSubmitButton
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
          />
       </form>
      </React.Fragment>
    );
  }
}

export default SearchData;
