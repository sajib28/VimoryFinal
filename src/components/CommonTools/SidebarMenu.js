import React, { Component } from 'react';
import $ from 'jquery';
class SidebarMenu extends Component {
    
    componentDidMount() {
        const height = document.getElementById('mainMenu').clientHeight;
        $("a[href^='#']").click(function(e) {
            e.preventDefault();
            
            var position = $($(this).attr("href")).offset().top-height;
        
            $("body, html").animate({
                scrollTop: position
            }, 2500 );
        });
        // $(document).ready(function () {
        //     $('a[href^="#"]').on('click', function (e) {
        //         e.preventDefault();
        //     });
        //     $(document).on("scroll", onScroll);
        //     //smoothscroll
        //     $('a[href^="#"]').on('click', function (e) {
        //         e.preventDefault();
        //         $(document).off("scroll");
                
        //         $('a').each(function () {
        //             $(this).removeClass('active');
        //         })
        //         $(this).addClass('active');
              
        //         var target = this.hash,
        //         $target = $(target);
        //         $('html, body').stop().animate({
        //             'scrollTop': $target.offset().top+200
        //         }, 2500, function () {
        //             window.location.hash = target;
        //             $(document).on("scroll", onScroll);
        //         });
        //     });
        // });
        
        // function onScroll(event){
        //     event.preventDefault();
        //     var scrollPos = $(document).scrollTop()+200;
        //     $('.sidebar-nav a').each(function () {
        //         var currLink = $(this);
        //         var refElement = $(currLink.attr("href"));
        //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        //             $('sidebar-nav li a').removeClass("active");
        //             currLink.addClass("active");
        //         }
        //         else{
        //             currLink.removeClass("active");
        //         }
        //     });
        // }
       
        $(".sidebar-nav a").click(function(e) {
            e.preventDefault();
            $("body").removeClass("sidebarActive");
            $("#sidebar-wrapper").css({"width": "0"});
            $(".topMenu-icon .fa-bars").css({"opacity": "1"});
            // $("#sidebar-wrapper").toggleClass("active");
        });
        $("#close-slidemenu .fa-times").click(function(e) {
            $("body").removeClass("sidebarActive");
            // $('body.sidebarActive').removeClass('sidebarActive');
            $("#sidebar-wrapper").css({"width": "0"});
            $(".topMenu-icon .fa-bars").css({"opacity": "1"});
        });
        $(".overlay-body").click(function(e) {
            // alert();
            $("body").removeClass("sidebarActive");
            $("#sidebar-wrapper").css({"width": "0"});
            $(".topMenu-icon .fa-bars").css({"opacity": "1"});
        });
        // $("body").click(function(e) {
        //     $("#sidebarMenu").css({"width": "0"});
        //     // $(".topMenu-icon .fa-bars").css({"opacity": "1"});
        //     $(".topMenu-icon .fa-bars").css({"opacity": "1"});
        // });
       
        // $("body").click(function(e) {
        //     $("#sidebar-wrapper").toggleClass("active");
        // });
      
    // Open menu
    
}
    render() {
        return (
<div id="sidebarMenu" className="sidenav">
    <div className="overlay-body"></div>
 {/* <a id="menu-toggle" className="toggle square"><i className="fa fa-bars fa-lg" aria-hidden="true"></i></a> */}
    <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <a id="close-slidemenu" href="/" className="pull-right toggle square"><i className="fa fa-times fa-lg"></i></a>
            <li>
                <a href="#intro" className="sub-menu">Home</a>
            </li>
            <li>
            <a href="#appFeature" className="sub-menu">Features</a>
            </li>
            <li>
            <a href="#pricing" className="sub-menu">Pricing</a>
            </li>
            <li>
            <a href="#faqs" className="sub-menu">FAQs</a>
            </li>
            <li>
            <a href="#getInTouch" className="sub-menu">Contact Us</a>
            </li>
        </ul>
    </nav>
</div>
        )
    }
}
export default SidebarMenu;
