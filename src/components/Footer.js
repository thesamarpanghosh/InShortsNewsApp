import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-media">
                    <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="logo" />
                    <p><span>&copy; Copyright {new Date().getFullYear()}</span> | created by @thesamarpanghosh</p>
                </div>
                <div className="social-media">
                    <img src="https://assets.inshorts.com/website_assets/images/contact_icon.png" alt="logo" />
                    <div>
                        <span>
                            <a href="https://linkedin.com/in/samarpan-ghosh-63714a176" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/thesamarpanghosh" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
