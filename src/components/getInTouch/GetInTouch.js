import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import $ from 'jquery';
import BackgroundImage from '../../assets/img/get-in-touch-bg.jpg';
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import appilianLogo from '../../assets/img/logo-appilian.png';
import Footer from '../CommonTools/Footer';
class GetInTouch extends Component {

    componentDidMount() {
        $("#feedback").hide();
        $("#sendMail").click(function (event) {
            event.preventDefault();
            //values
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var dataString = { "name": name, "email": email, "message": message }

            $.ajax({
                type: "POST",
                url: "https://vimoryapp.com/developer/static/sendmail/sendmail.php",
                data: dataString,
                success: function (response) {
                    $('#feedback').html(response).slideDown();
                    $("form").trigger("reset");
                }
            });

        });
    }

    render() {
        return (
            <div>
                <LazyLoad>
                <section id="getInTouch" className="photo-with-content" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                    <div className="pic-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="title">
                                    <div className="title-inner shadow-title text-center">
                                        <h2 className="wow zoomIn" data-wow-delay="0.2s" animation-delay="0.2s">Get In Touch<span className="shadow-text wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">Get In Touch</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-lg-5 order-md-2 order-lg-2">
                                <div className="contact-form">
                                    <form method="POST">
                                        <div id="feedback"></div>
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.4s" animation-delay="0.4s">
                                            <input type="text" className="form-control" placeholder="Name" name="name" id="name" required />
                                        </div>
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.6s" animation-delay="0.6s">

                                            <input type="email" className="form-control" placeholder="Email" name="email" id="email" required />
                                        </div>
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                            <textarea className="form-control" placeholder="Message" name="message" rows="3" id="message"></textarea>
                                        </div>
                                        <div className="form-group wow fadeInUp" data-wow-delay="1.2s" animation-delay="1.2s">
                                            <button id="sendMail" type="submit" className="btn btn-primary float-right wow fadeInUp" data-wow-delay="1s" animation-delay="1s">Send Message</button>

                                        </div>

                                    </form>

                                </div>
                            </div>
                            <div className="col-md-7 col-lg-7 order-md-1 order-lg-1">
                                <div className="contact-info text-center">
                                    <h3 className="wow fadeInUp" data-wow-delay="0.4s" animation-delay="0.4s">Contact Us</h3>
                                    <LazyLoad><img className="wow fadeInUp" data-wow-delay="0.6s" animation-delay="0.6s" src={appilianLogo} alt="Appilian Logo" /></LazyLoad>
                                    <div className="weblink wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                        <p>B6, Plot-35, Sonargaon Janapath Road<br />
                                            Sector-07, Uttara, Dhaka-1230,  Bangladesh</p>
                                        Website: <a rel="noopener noreferrer" href="http://www.appilian.com" target="_blank">www.appilian.com</a><br />
                                        Email: <a href="mailto:contact@appilian.com">contact@appilian.com</a><br />
                                        Phone: <a href="tel:01759747387">+88-0175-974-7387</a>

                                    </div>
                                    <ul className="apps-logo wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                        <li><a rel="noopener noreferrer" href="https://apps.apple.com/us/app/vimory-photo-video-maker/id1359573092" target="_blank"><LazyLoad><img src={appleStore} alt="Vimory Apple Store" /></LazyLoad></a></li>
                                        <li><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.appilian.vimory" target="_blank"><LazyLoad><img src={googlePlay} alt="Vimory Google Play Store" /></LazyLoad></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                </LazyLoad>
                <Footer />
            </div>
        )
    }
}
export default GetInTouch;
