import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LoginPage from './Logincomponents/LoginPage';
import Registerpage from './RegisterComponent/RegisterPage';
import startupPage from './startUpComponent/startupPage';


function Navbar (){
    return(
        <div>
            
    <nav className="navbar navbar-fixed-top scrolling-navbar bar-mobi n1">

      <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="http://www.kawolegal.com"><img width="200px" height="90px" src="http://www.kawolegal.com/assets/img/kawo-legal-logo.png" alt="KawoLegal" className="logo"/></a>
          </div>

          

            
                        <BrowserRouter>
                            <div id="navbar" className="navbar-collapse collapse" >
                                <ul className="nav navbar-nav navbar-right kl-nav">
                            <li className='active'><Link to='/home'>Home</Link></li>
                           <li> <Link to='/register'>register</Link></li>
                            <li><Link to='/startups'>startups</Link></li>
                           <li> <Link to='/login'>LoginPage</Link></li>
                           </ul>
                            
                            <Route exact={true} path="/login" component={LoginPage} />
                            <Route exact={true} path="/register" component={Registerpage} />
                            <Route exact={true} path="/startups" component={startupPage} />
                            </div>
                        </BrowserRouter>
                        <div className="footer mobi-footer">>
              <ul className="nav navbar-nav social-media-nav navbar-right social">
                  <li>
                      <a href="https://www.facebook.com/sleekjob" target="_blank"><span
                          className="mdi mdi-facebook">facebook</span></a>
                  </li>
                  <li>
                      <a href="https://twitter.com/sleekwork" target="_blank"><span
                          className="mdi mdi-twitter">tweeter</span></a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/company/sleekjob" target="_blank"><span
                          className="mdi mdi-linkedin">linkedin</span></a>
                  </li>
              </ul>

          </div>

      </div>
    </nav>
   
        </div>
    )
}

export default Navbar;