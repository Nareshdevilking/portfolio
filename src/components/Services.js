import { FaLayerGroup, FaGlobe, FaWindowMaximize, FaPenNib, FaSearch, FaSyncAlt, FaExchangeAlt } from "react-icons/fa";

function Services(){
  return(

<section className="services" id="services">

<h2 className="section-title">Services</h2>

<div className="services-grid">

<div className="service-card">
<FaLayerGroup className="service-icon"/>
<h3>UI/UX Design</h3>
<p>Intuitive interfaces that delight users.</p>
</div>

<div className="service-card">
<FaGlobe className="service-icon"/>
<h3>Static & Dynamic Websites</h3>
<p>Fast, responsive sites built to convert.</p>
</div>

<div className="service-card">
<FaWindowMaximize className="service-icon"/>
<h3>Web Applications</h3>
<p>Scalable full-stack web applications.</p>
</div>

<div className="service-card">
<FaPenNib className="service-icon"/>
<h3>Logo Designing</h3>
<p>Memorable brand identities.</p>
</div>

<div className="service-card">
<FaSearch className="service-icon"/>
<h3>SEO Improvements</h3>
<p>Higher rankings and better visibility.</p>
</div>

<div className="service-card">
<FaSyncAlt className="service-icon"/>
<h3>UI Re-architecture</h3>
<p>Modernizing outdated interfaces.</p>
</div>

<div className="service-card">
<FaExchangeAlt className="service-icon"/>
<h3>Legacy Migration</h3>
<p>Smooth transition to modern stacks.</p>
</div>

</div>

</section>

  )
}

export default Services