import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { callBusiness } from '../../utils/phone';
import { openMachineWhatsApp } from '../../utils/whatsapp';

export default function Footer(){
  return <footer className="footer"><div className="container"><div className="footer__main">
    <div><Link to="/" className="brand brand--footer"><span className="brand__mark">LV</span><span>LinterVale</span></Link><p>Construction • Civil • Concrete Finishing</p></div>
    <div className="footer__links"><div><span className="footer__label">Explore</span><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div><span className="footer__label">Enquiries</span><button onClick={callBusiness}><PhoneCall size={15}/> Call Now</button><button onClick={openMachineWhatsApp}>WhatsApp <ArrowUpRight size={15}/></button><Link to="/machine">Machine Booking</Link></div></div>
  </div><div className="footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. Business information placeholders are ready to configure.</span><span>Built for practical local enquiries.</span></div></div></footer>;
}