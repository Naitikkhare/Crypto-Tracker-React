import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <p className="title" style={{letterSpacing:"2px"}}>CRYPTO COIN</p>
            <form className="form-inline">
                <input 
                    type="search"
                    placeholder="Search"
                    className="form-control"
                    aria-label="search"
                    onChange = {props.search}
                />
            </form>
        </nav>
    )
}