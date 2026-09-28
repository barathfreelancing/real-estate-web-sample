export default function Footer(){
  return <footer className="foot"><div className="wrap foot-grid">
    <div><h4>MANO RESIDENCES</h4><p>CHENNAI · INDIA</p></div>
    <nav>{['PROJECT','RESIDENCES','AMENITIES','LOCATION'].map(l=><a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}<a href="#enquire">ENQUIRE</a></nav>
    <div><a href="mailto:hello@manoresidences.example">hello@manoresidences.example</a><p>+91 80 0000 0000</p></div>
    <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a></div></div>
    <div className="wrap foot-base"><span>© MANO Residences. Fictional sample project.</span><span><a href="#top">Privacy</a> · <a href="#top">Terms</a></span></div></footer>;
}
