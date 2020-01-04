import React, { Component } from 'react'

import './style'
import { Body } from './style'

 class Home extends Component {
    render() {
        return (
            <div>
                <Body>
                    <header role="banner">
                        <nav class="navbar navbar-expand-md navbar-dark bg-light">
                        <div class="container">
                            <a class="navbar-brand" href="index.html">Alotan</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
                            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li class="nav-item">
                                <a class="nav-link active" href="index.html">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="hairstyle.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Haircut</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <a class="dropdown-item" href="hairstyle.html">Crew Cut</a>
                                    <a class="dropdown-item" href="hairstyle.html">Regular Hair Cut</a>
                                    <a class="dropdown-item" href="hairstyle.html">Shampoo + Cut</a>
                                    <a class="dropdown-item" href="hairstyle.html">Beard Trim with Razor</a>
                                    <a class="dropdown-item" href="hairstyle.html">Hair Color</a>
                                </div>

                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>

                            </div>
                        </div>
                        </nav>
                    </header>



                    <section class="site-hero overlay" data-stellar-background-ratio="0.5" style="background-image: url(images/big_image_1.jpg);">
                        <div class="container">
                            <div class="row align-items-center site-hero-inner justify-content-center">
                            <div class="col-md-8 text-center">

                                <div class="mb-5 element-animate">
                                <img src="images/banner_text_1.png" alt="Image placeholder" class="img-md-fluid"/>
                                </div>

                            </div>
                            </div>
                        </div>
                    </section>


                    <section class="quick-info element-animate" data-animate-effect="fadeInLeft">
                        <div class="container">
                            <div class="row">
                            <div class="col-lg-8 bgcolor">
                                <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="media">
                                    <div class="mr-3 icon-wrap"><span class="icon ion-ios-telephone"></span></div>
                                    <div class="media-body">
                                        <h5>+1 234 5633 342</h5>
                                        <p>Call us 24/7 we will get back to you ASAP</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="media">
                                    <div class="mr-3 icon-wrap"><span class="icon ion-location"></span></div>
                                    <div class="media-body">
                                        <h5>249 Division Rad</h5>
                                        <p>Fake st. New York, New York City,  PO 2923 USA</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="media">
                                    <div class="mr-3 icon-wrap"><span class="icon ion-android-time"></span></div>
                                    <div class="media-body">
                                        <h5>Daily: 8 am - 10 pm</h5>
                                        <p>Mon-Fri, Sunday <br/> Saturday: Closed</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>




                    <section class="site-section">
                            <div class="container">
                                <div class="row">
                                <div class="col-md-4 pr-5">
                                    
                                    <h2 class="mb-3">Services</h2>
                                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    
                                    <div class="mb-3 custom-nav">
                                    <a href="#" class="btn btn-primary btn-sm custom-prev mr-2 mb-2"><span class="ion-android-arrow-back"></span></a> 
                                    <a href="#" class="btn btn-primary btn-sm custom-next mr-2 mb-2"><span class="ion-android-arrow-forward"></span></a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                    <div class="col-md-12 slider-wrap">
                                        <div class="owl-carousel owl-theme no-nav js-carousel-1">
                                        
                                        <a href="#" class="img-bg" style="background-image: url('images/img_2.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Haircuting</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg" style="background-image: url('images/img_1.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Beard Shaving</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg last" style="background-image: url('images/img_3.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Cream &amp; Shampoo</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg" style="background-image: url('images/img_2.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Haircuting</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg" style="background-image: url('images/img_1.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Beard Shaving</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg last" style="background-image: url('images/img_3.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Cream &amp; Shampoo</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>
                                        <a href="#" class="img-bg" style="background-image: url('images/img_2.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Haircuting</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg" style="background-image: url('images/img_1.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Beard Shaving</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg last" style="background-image: url('images/img_3.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Cream &amp; Shampoo</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>
                                        <a href="#" class="img-bg" style="background-image: url('images/img_2.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Haircuting</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg" style="background-image: url('images/img_1.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Beard Shaving</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        <a href="#" class="img-bg last" style="background-image: url('images/img_3.jpg')">
                                            <div class="text">
                                            <span class="icon custom-icon flaticon-scissors"></span>
                                            <h2>Cream &amp; Shampoo</h2>
                                            <p>Read More</p>
                                            </div>
                                        </a>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>



                        <section class="site-section">
                            <div class="container">
                                <div class="row justify-content-center mb-5">
                                <div class="col-md-7 text-center">
                                    <h2>Barber Features</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum maiores adipisci pariatur, eveniet.</p>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4">

                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors-1"></span></div>
                                    <div class="media-body">
                                        <h3>Shave &amp; Haircut</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-cream"></span></div>
                                    <div class="media-body">
                                        <h3>Cream &amp; Shampoo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-moustache"></span></div>
                                    <div class="media-body">
                                        <h3>Mustache Expert</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div class="row">
                                <div class="col-md-4">

                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors"></span></div>
                                    <div class="media-body">
                                        <h3>Haircut Styler</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-razor"></span></div>
                                    <div class="media-body">
                                        <h3>Razor For Beards</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media d-block media-feature text-center">
                                    <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-hair-comb"></span></div>
                                    <div class="media-body">
                                        <h3>Haircomb</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>



                        
                
                </Body>
            </div>
        )
    }
}

export default Home;
