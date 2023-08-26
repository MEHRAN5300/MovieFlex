import React from 'react'

const header = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="main_logo">
                    <a className="navbar-brand" href="#!">MoviePlex</a>
                </div>
                <div className="search_form">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="account_btn">
                    <button className='btn btn-primary custom_btn'>login</button>
                    <button className='btn btn-primary custom_btn'>SignUp</button>
                </div>
            </div>
            </nav>
    </>
  )
}

export default header