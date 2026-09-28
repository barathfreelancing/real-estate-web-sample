import ImagePlaceholder from './ImagePlaceholder';
export default function FeaturedProperty(){
  return <section className="section" id="featured"><div className="wrap feat">
    <div className="feat-img" data-clip><ImagePlaceholder id="featured" label="FEATURED PROPERTY — Front Elevation" aspect="4 / 3"/></div>
    <div className="feat-copy" data-reveal>
      <p className="eyebrow">PROPERTY 01 · WHITEFIELD · CHENNAI</p>
      <h2>MANO HOUSE 01</h2>
      <p className="lead">A contemporary residence designed around natural light, open living and private landscape.</p>
      <div className="specs"><div><b>4</b><small>BEDROOMS</small></div><div><b>3,200</b><small>SQ FT</small></div><div><b>₹3.8 CR</b><small>PRICE</small></div></div>
      <a className="btn outline" href="#residences">VIEW RESIDENCE</a>
    </div></div></section>;
}
