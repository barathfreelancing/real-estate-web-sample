import {images} from '../data/images';
// id = key in data/images.js. Use aspect="fill" to fill the parent.
export default function ImagePlaceholder({id,label,aspect='16 / 9',className=''}){
  const src=images[id];
  return <div className={`ph ${aspect==='fill'?'fill':''} ${className}`} style={aspect==='fill'?undefined:{aspectRatio:aspect}}>
    {src?<img src={src} alt={label}/>:<><span className="ph-tag">IMAGE PLACEHOLDER</span><span className="ph-label">{label}{aspect!=='fill'&&` — ${aspect.replace(' / ',':')}`}</span></>}
  </div>;
}
