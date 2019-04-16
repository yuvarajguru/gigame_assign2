import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    NavLink,
    withRouter
} from "react-router-dom";
import { Button } from 'antd'
export default class home extends Component {
    render() {
        return (

            <Router>
                <div>
                    
                        <a href="/">Home</a>
                    
                    <Button>
                        <a href="/category">Categories</a>
                    </Button>
                </div>
            </Router>
        )
    }
}
