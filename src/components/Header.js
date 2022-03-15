import React from 'react'
import Logo from 'assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header className="site-header">
        <div className="container">
            <div className="site-header-inner">
                <div className="brand header-brand">
                    <h1 className="m-0">
                        <Link to="/">
                            <img className="header-logo-image" src={Logo} alt="Logo" />
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    </header>
  )
}
