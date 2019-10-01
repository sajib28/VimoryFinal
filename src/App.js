import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './assets/css/bootstrap.min.css';
import './assets/css/solar.css';
import './assets/css/animate.min.css';
import './assets/fontAwesome/css/fontawesome.min.css';
import './assets/fontAwesome/css/all.min.css';
import './assets/scss/main.css';
import 'video-react/dist/video-react.css';
import Preloader from './components/CommonTools/Preloader';
import SidebarMenu from './components/CommonTools/SidebarMenu';
import Header from './components/CommonTools/Header';
import Welcome from './components/welcome/Welcome';
import AppFeature from './components/feature/AppFeature';
import SecondHeader from './components/CommonTools/SecondHeader';
import Templates from './components/templates/Templates';
import Effect from './components/effect/Effect';
import PhotoEdit from './components/photoEdit/PhotoEdit';
import SlideSection from './components/slide/SlideSection';
import Filter from './components/filter/Filter';
import FrameSection from './components/frame/FrameSection';
import GetToday from './components/getToday/GetToday';
import ClientReview from './components/review/ClientReview';
import Pricing from './components/pricing/Pricing';
import Faq from './components/faq/Faq';
import GetInTouch from './components/getInTouch/GetInTouch';
import WOW from 'wowjs';
class App extends Component {

  componentDidMount() {
    // Woow js 
    new WOW.WOW({
      live: false,
      mobile: false,
    }).init();
    // End Woow js 
  }
  render() {

    return (

      <div className="App">
        <Preloader />
        <SidebarMenu />
        <Header />
        <Welcome />
        <LazyLoad>
          <AppFeature />
        </LazyLoad>
        <LazyLoad>
          <SecondHeader />
        </LazyLoad>
        <LazyLoad>
          <Templates />
        </LazyLoad>
        <LazyLoad>
          <PhotoEdit />
        </LazyLoad>
        <LazyLoad>
          <SlideSection />
        </LazyLoad>
        <LazyLoad>
          <Effect />
        </LazyLoad>
        <LazyLoad>
          <FrameSection />
        </LazyLoad>
        <LazyLoad>
          <Filter />
        </LazyLoad>
       
          <GetToday />
        
        <LazyLoad>
          <ClientReview />
        </LazyLoad>
        <LazyLoad>
          <Pricing />
        </LazyLoad>
        <LazyLoad>
          <Faq />
        </LazyLoad>
        <LazyLoad>
          <GetInTouch />
        </LazyLoad>

      </div>
    );
  }
}
export default App;
