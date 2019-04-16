import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Table, Divider,List, Avatar,Row,Col, Tag,Button } from 'antd';
 class menuItem extends Component {
   

  render() {
   
    let data=this.props.menuItems.map((item,i)=>{
      
      return {
        key:i+1 ,
        name: item.name,
        description: item.description
         }
    }
     
    );

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'description',
      dataIndex: 'description',
      key: 'description'   
    }];

 
    return (

       
      <Table columns={columns} dataSource={data} />
     
        
    );
  }
}

export default  menuItem 

