import React from 'react';
import Header from './header';
import Footer from './Footer';

function RegisterPage() {
    return (
        <div>
            <Header/>
            <Footer/>
            <h3>3.Register Page</h3>
            <div class="container">
                <nav class="navbar navbar-default n1">
                    <div class="is-active focus-row-container" ocus-row-container="" id="content">
                        
    <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">KAWO <br/>LEGAL</a>
    </div>
    </div>

                            
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
  
</nav>
</div>

                    <div class="container a">
                        <div class="container col-md-8  col-md-offset-2">
                            <p>Join KawoLegal. sign up to get your startup listed now</p>
                            <label>Full Name</label><br/>
                                <input type="text" name="full name" class="form-control" placeholder="Full Name" /><br/>
                                    <label>Email address</label><br/>
                                        <input type="@gmail.com" name="Email" class="form-control" placeholder="Email"/><br/>
                                            <label>Password</label><br/>
                                                 <input type="text and numbers" name="Password" class="form-control" placeholder="Password" /><br/>
                                                    <label>Confirm Password</label><br />
                                                        <input type="text and numbers" name="Confirm Password" class="form-control" placeholder="Confirm Password"/><br/>
                                                            <button class="btn btn-primary p3"><a href="#"></a>Sign in</button>

</div>
</div>
        </div>
    );
}

export default RegisterPage;