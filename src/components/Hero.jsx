import {useLayoutEffect,useRef} from 'react';import gsap from 'gsap';import ImagePlaceholder from './ImagePlaceholder';
export default function Hero(){
  const r=useRef();
  useLayoutEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const c=gsap.context(()=>{
      gsap.timeline({defaults:{ease:'power3.out'}})
        .from('[data-nav]',{opacity:0,duration:.8})
        .from('.hero-img',{clipPath:'inset(0 0 100% 0)',duration:1.4,ease:'power4.inOut'},.1)
        .from('.hero .eyebrow',{opacity:0,y:16,duration:.7},.9)
        .from('.hero h1 span',{yPercent:110,duration:1,stagger:.12},1)
        .from('.hero .tag,.hero-sub,.hero-meta,.hero .btn',{opacity:0,y:20,duration:.8,stagger:.1},1.4);
    },r);return()=>c.revert();
  },[]);
  return <section className="hero" id="top" ref={r}>
    <div className="hero-img"><ImagePlaceholder id="hero" label="HERO — Luxury Villa Exterior" aspect="fill"/></div>
    <div className="hero-shade"/>
    <div className="hero-copy wrap">
      <p className="eyebrow">CHENNAI · INDIA</p>
      <h1><em><span>MANO</span></em> <em><span>RESIDENCES</span></em></h1>
      <p className="tag">LIVE ABOVE ORDINARY</p>
      <p className="hero-sub">Contemporary residences shaped by architecture, light and space.</p>
      <div className="hero-foot"><div className="hero-meta"><small>STARTING FROM</small><b>₹2.8 CR</b></div><a className="btn" href="#featured">EXPLORE RESIDENCE</a></div>
    </div>
  </section>;
}
