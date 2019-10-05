import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Health extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      columnDefs: [{
        headerName: "Title", field: "title", sortable: true, filter: true, resizable: true, width : 300
      }, {
        headerName: "URL", field: "url", sortable: true, filter: true, resizable: true, width : 500,
        cellRenderer: function(params){
        return '<a href ='+params.value+' target="_blank">'+params.value+'</a>'
        }
      }],
      rowData: {},
    }
    
  }
  
  

  render() {
    console.log('in render')
    
    return (
      <React.Fragment>
      <div
        className="ag-theme-balham"
        style={{ 
        height: '800px', 
        width: '800px' ,
    }} 
      >
        <h1 align = "center"> DORAEMON found you the following results!</h1>
        {this.state.init && this.getData()}
        {!this.state.init &&
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          >
        </AgGridReact>
        }
      </div>
        
      </React.Fragment>
    );
  }

  getData(){
    fetch('./bill_Health.json')
    .then(response => response.json())
    .then(data => this.setState({rowData: data,init: false},()=>{
      console.log("rd1:",this.state.rowData)
    }))
  }


}

export default Health;