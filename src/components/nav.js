import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return <div className="nav">
        <Link to="/">
            <div>Stonks :)</div>
        </Link>
        <Link to="/stocks">
            <div>Gaze Upon the Stonks</div>
        </Link>
    </div>
}

export default Nav