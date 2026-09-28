import {useState} from 'react';
const links=[['PROJECT','project'],['RESIDENCES','residences'],['AMENITIES','amenities'],['LOCATION','location']];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className={`nav ${open?'open':''}`} data-nav>
    <a href="#top" className="nav-logo">MANO</a>
    <nav className="nav-links">{links.map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{l}</a>)}</nav>
    <a href="#enquire" className="nav-cta" onClick={()=>setOpen(false)}>ENQUIRE</a>
    <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}><i/><i/></button>
  </header>;
}
