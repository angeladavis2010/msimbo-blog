import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
               <h1>Hello from Home</h1> 
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Mollitia, earum?
               </p>
               <Link to='/about'>Go to About Page</Link>     
            </div>
        );
    }
}
