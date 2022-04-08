import '../App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import { getUserInfo } from '@okta/okta-auth-js';

function Header({userName, isAuthenticated, oktaAuth}){
    const logout = async () => {
        await oktaAuth.signOut();
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
    };
    
      if (isAuthenticated){
        return (
          <>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet" />
            
            <div className="container" id="page-container">
                <header>
                    <div className="flex_header_right">
                        <div className="parent">
                            <div className="left">
                                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                                    <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                                    
                                    <nav className="my-2 my-md-0 mr-md-3">
                                        <span className="p-2 text-dark" >Welcome {userName.split(" ")[0]}!</span>
                                        <Link className="p-2 text-dark" href="#">Page1</Link>
                                        <Link className="p-2 text-dark" href="#">Page2</Link>
                                        <Link className="p-2 text-dark" href="#">Page3</Link>
                                        <Link className="p-2 text-dark" href="#">Page4</Link>
                                    </nav>
                                    <Link className="btn btn-outline-primary" href="#" onClick={logout}>Logout</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </header>  
             </div>
          </>
        );
    } //if
} //Header Function


export default Header;