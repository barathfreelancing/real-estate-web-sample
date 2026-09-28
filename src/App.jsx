import {useLayoutEffect} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';import Hero from './components/Hero';import FeaturedProperty from './components/FeaturedProperty';import ProjectStory from './components/ProjectStory';
import PropertyListing from './components/PropertyListing';import Amenities from './components/Amenities';import Location from './components/Location';import CircularGallery from './components/CircularGallery';
import Enquiry from './components/Enquiry';import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger);
export default function App(){
  useLayoutEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const c=gsap.context(()=>{
      gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{opacity:0,y:40,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%'}}));
      gsap.utils.toArray('[data-clip]').forEach(el=>{
        gsap.from(el,{clipPath:'inset(0 0 100% 0)',duration:1.3,ease:'power4.inOut',scrollTrigger:{trigger:el,start:'top 85%'}});
        gsap.from(el.firstChild,{yPercent:-8,scale:1.12,duration:1.3,ease:'power4.inOut',scrollTrigger:{trigger:el,start:'top 85%'}});
      });
    });return()=>c.revert();
  },[]);
  return <><Navbar/><main><Hero/><FeaturedProperty/><ProjectStory/><PropertyListing/><Amenities/><Location/><CircularGallery/><Enquiry/></main><Footer/></>;
}
