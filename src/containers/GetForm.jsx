import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
// import Table from '../components/Table';
 import GetButton from '../components/GetButton';
class GetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableData: [],
        }
     
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
     handleFormSubmit(e) {
      const { tableData } = this.state;
       console.log("buttontested");
    e.preventDefault();
    fetch("http://103.127.157.28:8012/getform?username=abdul", {
      method: "POST",
     // body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"  
      }
    }).then(response => {
      response.json().then(data => {

     
      console.log("Successful" + this.state.tableData);
 
   
     this.setState({tableData: data.data });
     alert(JSON.stringify(tableData.r));
      });
    });
  }
  handledFormData(e){
    e.preventDefault();

  }
  render() {
    return (
      <React.Fragment>
        <GetButton
         action={this.handleFormSubmit}
         type={"primary"}
         title={"Submit"} 
       />
      <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>gender</th>  
          <th>about</th>
        </tr>
      </thead>
        { this.state.tableData.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.gender}</td>     
            <td>{product.age}</td>
            <td>{product.about}</td>
          </tr>
        ))}
     
    </Table>
       </React.Fragment>
    );
  }
     
}
 
export default GetForm;