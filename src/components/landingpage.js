import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Table, Divider, List, Avatar, Row, Col, Tag, Button } from 'antd';
import queryString from "query-string";
import Menuitem from './menuItem'
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
class landingpage extends Component {
  state = {
    category: ''
  }
  componentDidMount() {

    this.props.getData();
    //  const data = localStorage.getItem('username');

    console.log(window.location);
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);
    if (parsed.category && parsed.category !== '') {
      this.props.getMenus(parsed.category);
      this.setState({ category: parsed.category })
    }

  }
  getMenus = (query) => {
    this.setState({ category: query })
    this.props.getMenus(query);
  }

  render() {

    const listItem = this.props.Datas.map((item,i) => {
      return (
        <List.Item key={i} onClick={this.getMenus.bind(this, item.short_name)} style={{ cursor: "pointer" }}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<><h4>{item.name}</h4><h3>({item.short_name})</h3></>}

            description={item.special_instructions}
          />
        </List.Item>
      )
    })

    return (
      <div style={{ background: '#ECECEC', padding: '30px' }} id="demo">
        <Router>
          <div>

            <a href="/">Home</a>

            <Button>
              <a href="/category">Categories</a>
            </Button>
          </div>
        </Router>
        <Row>
          <Col span={12}>
            <h1>Categories</h1>
            <br />
            <List>{listItem}</List>
          </Col>
          <Col span={12}>

            {this.state.category && this.state.category !== ''
              ? <> <h1>Menu Items</h1>
                <br />
                <Menuitem menuItems={this.props.menuItems} /></>
              : null
            }
          </Col>
        </Row>


      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    Datas: state.data.categories,
    menuItems: state.data.menuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.fetchData()),
    getMenus: (query) => dispatch(actions.getMenus(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(landingpage);
