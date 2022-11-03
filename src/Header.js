import React from "react";

class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="container-fluid headerMenu" >
                <div className="row">
                    <div className="col-3">
                        <div className="logoColumn" >
                            <span><img src="logo192.png" className="websiteLogo" alt="website logo" /></span>
                            <span className="logoName">React JS</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="navMenus justify-content-center gap-4">
                            <span><a href="https://google.com" className="navBarTabs">Home</a></span>
                            <span><a href="https://google.com" className="navBarTabs">About Us</a></span>
                            <span><a href="https://google.com" className="navBarTabs">Contact Us</a></span>
                            <span><a href="https://google.com" className="navBarTabs">FAQ</a></span>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        );
    }

}


export default Header;