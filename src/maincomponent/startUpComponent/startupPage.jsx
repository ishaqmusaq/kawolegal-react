import React from 'react';
import Footer from './Footer';
import Header from './Header';


function startupPage() {
    return (
        <div>
        <Footer/>
        <Header/>
        
        <div>
            <h3>2.Startups Page</h3>
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
                     <a class="navbar-brand" href="#">KAWO <br/>LEGAL</a>

    </div>
    </div>

     </nav>                      </div>{/**  <!-- Collect the nav links, forms, and other content for toggling -->*/}
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
                            </div> {/**<!-- /.navbar-collapse -->*/}
  </div> {/**<!-- /.container-fluid -->*/}

                    <div class="container a">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <u><input type="text" name="Email" class="form-control" placeholder="search startup by name or industry"/></u><br/>
    </div>

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="tree-logoa.jpg"/>
  </div>
                                                <div class="col-md-8">
                                                    <h2>Think and Zoom</h2>
                                                    <p>providing solution for the visually impaired,such as mind-controlled zooming,and wearable controlled zooming</p>
                                                    <button>see full details</button>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="tree-logoa.jpg"/>
    </div>
                                                    <div class="col-md-8">
                                                        <h2>Slatecube</h2>
                                                        <p>Slatecube helps job seekers develop job-relevant skills,gain work experience,and land well paying jobs through<br/> word-class up-skilling courses and vvirtual intenships.</p>
                                                            <button>see full details</button>
    </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <img src="tree-logoa.jpg"/>
    </div>
                                                            <div class="col-md-8">
                                                                <h2>Sleekjob Academy</h2>
                                                                <p>trains world class softwware developers in Ghana and matches them to job opportunities</p>
                                                                <button>see full details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
      
        
 )

}

export default startupPage;