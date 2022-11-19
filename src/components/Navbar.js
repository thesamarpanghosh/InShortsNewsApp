import React from 'react'

const Navbar = (props) => {

    const { query, setQuery, state, setState } = props;

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "general"})}>General</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "business"})}>Business</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "entertainment"})}>Entertainment</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "health"})}>Health</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "science"})}>Science</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "sports"})}>Sports</li>
                                    <li className="dropdown-item" onClick={()=>setState({...state, category: "technology"})}>Technology</li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(elem) => setQuery(elem.target.value)} />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
