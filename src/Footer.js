import React from "react";

function Footer(){

    return(
            
        <footer class="noto-font-family" id="contact">
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <h3>Useful links</h3>
                            <ul class="text-capitalize">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Rooms</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <h3>Find us</h3>
                            <p>xxx, yyy,<br/>
                                chennai, 600001, India<br/>
                                (+91) 999 999 9999<br/>
                                (+91) 987 654 3210<br/>
                                fivehotel@gmail.com</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 form">
                            <h3>News letter</h3>
                            <form>
                                <input type="email" placeholder="Email"/>
                                <input type="submit"/>
                            </form>
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;