import ImagePlaceholder from './ImagePlaceholder';
const a=['INFINITY POOL','PRIVATE GYM','LANDSCAPED GARDENS','CLUBHOUSE','24/7 SECURITY','PRIVATE PARKING'];
export default function Amenities(){
  return <section className="section" id="amenities"><div className="wrap am">
    <ul className="am-list">{a.map((n,i)=><li key={n} data-reveal tabIndex={0}><small>{String(i+1).padStart(2,'0')}</small><span>{n}</span></li>)}</ul>
    <div className="am-side">
      <div data-clip><ImagePlaceholder id="pool" label="AMENITIES — Infinity Pool" aspect="4 / 3"/></div>
      <div data-clip><ImagePlaceholder id="clubhouse" label="AMENITIES — Clubhouse" aspect="4 / 3"/></div>
    </div>
  </div></section>;
}
