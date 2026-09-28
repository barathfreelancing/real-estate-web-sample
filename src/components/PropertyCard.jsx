import ImagePlaceholder from './ImagePlaceholder';
export default function PropertyCard({p}){
  return <article className="card">
    <ImagePlaceholder id={`p${p.id}`} label={`${p.name} — ${p.loc}`} aspect="4 / 3"/>
    <div className="card-body">
      <small>PROPERTY {String(p.id).padStart(2,'0')}</small>
      <h3>{p.name}</h3><p>{p.loc}</p>
      <ul><li>{p.beds} BED</li><li>{p.area.toLocaleString('en-IN')} SQ FT</li><li>₹{p.cr} CR</li></ul>
      <a href="#enquire" className="link">VIEW DETAILS →</a>
    </div></article>;
}
