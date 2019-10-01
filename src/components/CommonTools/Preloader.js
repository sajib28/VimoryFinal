import React, { Component } from 'react';
import $ from 'jquery';
class Preloader extends Component {
    componentDidMount() {
        $(".allDevice video").trigger('play');

        // Preloader
        $(document).ready(function () {
            setTimeout(function () {
                $('.preloader').fadeOut();
            }, 1000);
            if ($(window).width() <= 991) {
                $("video").remove();
            }
        });
        // End Preloader
        // video hide From Mobile
       
    }
    render() {
        return (
            <div class="preloader">
                <div class="sk-wave">
                    <div class="sk-rect sk-rect1"></div>
                    <div class="sk-rect sk-rect2"></div>
                    <div class="sk-rect sk-rect3"></div>
                    <div class="sk-rect sk-rect4"></div>
                    <div class="sk-rect sk-rect5"></div>
                </div>
            </div>
        );
    }
}
export default Preloader;