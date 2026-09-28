import {useMemo,useState,useLayoutEffect,useRef} from 'react';import gsap from 'gsap';
import {properties} from '../data/properties';import PropertyCard from './PropertyCard';
const uniq=k=>[...new Set(properties.map(p=>p[k]))];
const bands={any:()=>true,lt3:p=>p.cr<3,mid:p=>p.cr>=3&&p.cr<4,gt4:p=>p.cr>=4};
export default function PropertyListing(){
  const [f,setF]=useState({loc:'all',type:'all',price:'any',beds:'any'});
  const list=useMemo(()=>properties.filter(p=>(f.loc==='all'||p.loc===f.loc)&&(f.type==='all'||p.type===f.type)&&bands[f.price](p)&&(f.beds==='any'||(f.beds==='5'?p.beds>=5:p.beds===+f.beds))),[f]);
  const grid=useRef();
  useLayoutEffect(()=>{if(grid.current.children.length)gsap.fromTo(grid.current.children,{opacity:0,y:24},{opacity:1,y:0,duration:.6,stagger:.06,ease:'power2.out'});},[list]);
  const S=(k,label,opts)=><label>{label}<select value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}>{opts.map(([v,t])=><option key={v} value={v}>{t}</option>)}</select></label>;
  return <section className="section light" id="residences"><div className="wrap">
    <h2 data-reveal>SELECTED RESIDENCES</h2>
    <div className="filters">
      {S('loc','LOCATION',[['all','All'],...uniq('loc').map(v=>[v,v])])}
      {S('type','PROPERTY TYPE',[['all','All'],...uniq('type').map(v=>[v,v])])}
      {S('price','PRICE',[['any','Any'],['lt3','Under ₹3 CR'],['mid','₹3–4 CR'],['gt4','₹4 CR +']])}
      {S('beds','BEDROOMS',[['any','Any'],['3','3'],['4','4'],['5','5+']])}
    </div>
    <div className="grid" ref={grid}>{list.map(p=><PropertyCard key={p.id} p={p}/>)}</div>
    {!list.length&&<p className="empty">No residences match. Adjust the filters.</p>}
  </div></section>;
}
