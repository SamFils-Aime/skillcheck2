import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Steptwo extends Component {
    render() {
        return (
            <div>
                <input></input>
                <Link to="/stepthree">
                <button>
                    next page
                </button>
                </Link>
            </div>
        )
    }
}
