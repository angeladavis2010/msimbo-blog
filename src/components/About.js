import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello from About</h1>
                <Link to='/'>Go Back Home</Link>
            </div>
        );
    }
}
