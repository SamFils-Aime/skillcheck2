import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Stepthree extends Component {
    render() {
        return (
            <div>
                <input></input>
                <input></input>
                <Link to="/">
                <button>
                    complete
                </button>
                </Link>
            </div>
        )
    }
}
