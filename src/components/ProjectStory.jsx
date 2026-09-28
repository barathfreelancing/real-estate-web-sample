import ImagePlaceholder from './ImagePlaceholder';
export default function ProjectStory(){
  return <section className="section project" id="project"><div className="wrap">
    <h2 className="mega" data-reveal>ARCHITECTURE<br/>SHAPED BY LIGHT.</h2>
    <div className="story">
      <div className="s1" data-clip><ImagePlaceholder id="projectExterior" label="PROJECT — Architectural Exterior" aspect="3 / 4"/></div>
      <p className="s2 lead" data-reveal>MANO Residences explores the relationship between architecture, landscape and everyday living. Every residence is designed around natural light, private outdoor space and a sense of quiet.</p>
      <div className="s3" data-clip><ImagePlaceholder id="livingRoom" label="PROJECT — Interior Living Room" aspect="4 / 3"/></div>
      <div className="s4" data-clip><ImagePlaceholder id="staircase" label="PROJECT — Staircase Detail" aspect="1 / 1"/></div>
      <div className="s5" data-clip><ImagePlaceholder id="landscape" label="PROJECT — Landscape" aspect="16 / 9"/></div>
      <div className="s7" data-reveal><p className="eyebrow">Architectural detail</p><p className="lead">Stone, timber and shadow are resolved at the scale of the hand, so the light has something to hold.</p></div>
      <div className="s6" data-clip><ImagePlaceholder id="projectDetail" label="PROJECT — Architectural Detail" aspect="1 / 1"/></div>
    </div></div></section>;
}