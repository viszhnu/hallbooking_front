import React from "react";

function Contact(){
    
    return (
        <div class="contact main-font-family text-center">
        <div class="container">
            <h2 id="contact">Get in touch</h2>
            <div class="row">
                <div class="col-6">
                <div class="contact-form">
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Phone"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="submit"/>
                        </form>
                    </div>
                </div>
                <div class="col-6">
                    <h2 class="text-right">Book Your Holiday Best for relaxed retreats and cultural encounters</h2>
                    <img src="imgs/shape.png"/>
                </div>
            </div>
        </div>
        <div></div>
    </div>
    );
}

 export default Contact;