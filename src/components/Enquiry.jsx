import {useState} from 'react';import {properties} from '../data/properties';
export default function Enquiry(){
  const [v,setV]=useState({name:'',phone:'',email:'',property:'',message:''}),[err,setErr]=useState({}),[done,setDone]=useState(false);
  const submit=e=>{e.preventDefault();const x={};
    if(v.name.trim().length<2)x.name='Enter your name';
    if(v.phone.replace(/\D/g,'').length<8)x.phone='Enter a valid phone number';
    if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='Enter a valid email';
    setErr(x);if(!Object.keys(x).length)setDone(true);};
  const F=(k,l,t='text')=><label>{l}<input type={t} value={v[k]} onChange={e=>setV({...v,[k]:e.target.value})} aria-invalid={!!err[k]}/>{err[k]&&<em>{err[k]}</em>}</label>;
  return <section className="section enquire" id="enquire"><div className="wrap enq">
    <div><h2 className="xl">YOUR NEXT ADDRESS<br/>STARTS HERE.</h2><p className="lead">Schedule a private viewing of a MANO residence.</p></div>
    {done?<div className="ok"><h3>THANK YOU, {v.name.trim().split(' ')[0].toUpperCase()}.</h3><p>Your visit request is received. A MANO advisor will contact you within one working day.</p></div>
    :<form onSubmit={submit} noValidate>{F('name','NAME')}{F('phone','PHONE','tel')}{F('email','EMAIL','email')}
      <label>PROPERTY<select value={v.property} onChange={e=>setV({...v,property:e.target.value})}><option value="">Any residence</option>{properties.map(p=><option key={p.id}>{p.name}</option>)}</select></label>
      <label>MESSAGE<textarea rows="3" value={v.message} onChange={e=>setV({...v,message:e.target.value})}/></label>
      <button className="btn">SCHEDULE A VISIT</button></form>}
  </div></section>;
}
