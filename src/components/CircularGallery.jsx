import {useLayoutEffect,useRef,useState} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gallery} from '../data/gallery';import ImagePlaceholder from './ImagePlaceholder';
gsap.registerPlugin(ScrollTrigger);
const N=gallery.length;
export default function CircularGallery(){
  const root=useRef(),items=useRef([]);const [idx,setIdx]=useState(0);
  useLayoutEffect(()=>{
    const p={a:0};
    // Places each image on an orbit by its distance (d) from the active position.
    const place=a=>{
      const w=root.current.clientWidth,m=w<700,R=m?w*.75:w*.9,step=m?.8:.5;
      items.current.forEach((el,i)=>{
        const d=i-a,th=d*step;
        gsap.set(el,{x:Math.sin(th)*R,y:(1-Math.cos(th))*R*.5,scale:Math.max(.45,1-Math.abs(d)*.3),rotation:th*45,
          opacity:Math.max(0,1-Math.abs(d)*.45),zIndex:100-Math.round(Math.abs(d)*10),xPercent:-50,yPercent:-50});
      });
    };
    place(0);
    const c=gsap.context(()=>{
      gsap.to(p,{a:N-1,ease:'none',onUpdate:()=>{place(p.a);setIdx(Math.round(p.a));},
        scrollTrigger:{trigger:root.current,start:'top top',end:'+=500%',pin:true,scrub:.8}});
    },root);
    const rs=()=>place(p.a);addEventListener('resize',rs);
    return()=>{removeEventListener('resize',rs);c.revert();};
  },[]);
  return <section className="gal" ref={root} aria-label="Property gallery">
    <div className="orbit">{gallery.map(([id,label],i)=><div className="gi" key={id} ref={e=>items.current[i]=e}><ImagePlaceholder id={id} label={`GALLERY 0${i+1} — ${label}`} aspect="fill"/></div>)}</div>
    <div className="gal-text">{gallery.map(([,,t,d,m],i)=><div key={t} className={i===idx?'on':''}><small>GALLERY 0{i+1}</small><h3>{t}</h3><p>{d}</p><b>{m}</b></div>)}</div>
    <div className="gal-count">0{idx+1} / 0{N}</div>
    <div className="gal-hint">SCROLL TO EXPLORE</div>
  </section>;
}
