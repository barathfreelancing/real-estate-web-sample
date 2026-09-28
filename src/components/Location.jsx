import ImagePlaceholder from './ImagePlaceholder';
const d=[['International Airport','35 min',80,14],['CBD','25 min',22,30],['International School','12 min',30,78],['Tech District','15 min',82,72],['Hospital','10 min',62,88]];
export default function Location(){
  return <section className="section" id="location"><div className="wrap loc">
    <div><p className="eyebrow">CHENNAI, INDIA</p><h2 className="xl" data-reveal>CONNECTED TO EVERYTHING.<br/>DESIGNED FOR QUIET.</h2>
      <ul className="dest">{d.map(([n,t])=><li key={n}><span>{n}</span><b>{t}</b></li>)}</ul></div>
    <div className="map" data-clip>
      <ImagePlaceholder id="aerial" label="LOCATION — Aerial City View" aspect="fill"/>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {[20,40,60,80].map(v=><g key={v}><line x1={v} y1="0" x2={v} y2="100"/><line x1="0" y1={v} x2="100" y2={v}/></g>)}
        {d.map(([n,,x,y])=><line key={n} className="route" x1="50" y1="50" x2={x} y2={y}/>)}
      </svg>
      {d.map(([n,,x,y])=><span key={n} className="pin" style={{left:x+'%',top:y+'%'}}><i/>{n.toUpperCase()}</span>)}
      <span className="pin home" style={{left:'50%',top:'50%'}}><i/>MANO</span>
    </div></div></section>;
}
