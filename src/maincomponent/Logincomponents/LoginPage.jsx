import React from 'react';
import Header from './header';
import Footer from './Footer'

function LoginPage() {
    return (
        <div>
            <Header/>
            <Footer/>
            <h3>4.Login Page</h3>
            <div class="container">
                <nav class="navbar navbar-default n1">
                    <div class="is-active focus-row-container" ocus-row-container="" id="content">
                       {/**  <!-- Brand and toggle get grouped for better mobile display -->*/}
    <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">KAWO<br/>LEGAL</a>
    </div>

                           {/**  <!-- Collect the nav links, forms, and other content for toggling -->*/}
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Startups</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li class="dropdown">

                                        <ul class="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li role="separator" class="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                     </div>
                     </div>

  
  
                               {/**<!-- /.container-fluid -->*/}
</nav>
                    <div class="container a">
                        <div class="container col-md-8 col-md-offset-2">
                            <p>Already a Member? login to add your startup.</p>

                            <label>Email address</label><br/>
                                <u><input type="@gmail.com" name="Email" class="form-control" placeholder="Email" /></u><br/>
                                    <label>Password</label><br/>
                                        <u><input type="text" name="Email" class="form-control" placeholder="Password"/></u><br/>
                                            <button class="btn btn-primary p3"><a href="#"></a>Sign in</button>
  </div>
   </div>
        </div>
        </div>
    );
}

export default LoginPage;