import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your one-stop shop for all your e-commerce needs!</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to our e-commerce platform! We are a team of passionate
          developers, designers, and entrepreneurs dedicated to delivering the
          best online shopping experience.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make online shopping easy, accessible, and enjoyable
          for everyone. We believe in quality products, exceptional customer
          service, and a seamless user experience.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>A wide range of products at competitive prices</li>
          <li>Fast and secure checkout process</li>
          <li>Reliable delivery services</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>
          &copy; {new Date().getFullYear()} Your E-Commerce. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

// import './About.css';
// import product1Image from '../assets/productsimages/product1.jpg';
// import product2Image from '../assets/productsimages/product2.jpg';
// import product3Image from '../assets/productsimages/product3.jpg';

// const About = () => {
//   // Simplified icons using minimal SVG paths
//   const Icons = {
//     store: <path d="M3 3h18v4H3V3zM9 13h6M10 17h4M3 7h18v11H3V7z" />,
//     dollar: <path d="M12 8c-1.11 0-2 .89-2 2 0 .74.4 1.37 1 1.73v2.54c-.6.36-1 .99-1 1.73 0 1.11.89 2 2 2s2-.89 2-2c0-.74-.4-1.37-1-1.73v-2.54c.6-.36 1-.99 1-1.73 0-1.11-.89-2-2-2z" />,
//     users: <path d="M6 9v12m12-12v12M3 6h18M4 6l2-2h12l2 2" />,
//     wallet: <path d="M12 5v14M5 12h14" />,
//     twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
//     instagram: <path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />,
//     linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />,
//     delivery: <path d="M5 8h14M5 8a2 2 0 1 0 0-4h14a2 2 0 1 0 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4" />,
//     service: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />,
//     guarantee: <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
//   };

//   const stats = [
//     {
//       icon: <svg viewBox="0 0 24 24" className="stat-icon">{Icons.store}</svg>,
//       value: "10.5k",
//       label: "Sellers active on our site"
//     },
//     {
//       icon: <svg viewBox="0 0 24 24" className="stat-icon">{Icons.dollar}</svg>,
//       value: "33k",
//       label: "Monthly Product Sale"
//     },
//     {
//       icon: <svg viewBox="0 0 24 24" className="stat-icon">{Icons.users}</svg>,
//       value: "45.5k",
//       label: "Customers active on our site"
//     },
//     {
//       icon: <svg viewBox="0 0 24 24" className="stat-icon">{Icons.wallet}</svg>,
//       value: "25k",
//       label: "Annual gross sale on our site"
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "Tom Cruise",
//       position: "Founder & Chairman",
//       image: product1Image,
//       socials: [
//         { type: "twitter", icon: Icons.twitter },
//         { type: "instagram", icon: Icons.instagram },
//         { type: "linkedin", icon: Icons.linkedin }
//       ]
//     },
//     {
//       name: "Emma Watson",
//       position: "Managing Director",
//       image: product2Image,
//       socials: [
//         { type: "twitter", icon: Icons.twitter },
//         { type: "instagram", icon: Icons.instagram },
//         { type: "linkedin", icon: Icons.linkedin }
//       ]
//     },
//     {
//       name: "Will Smith",
//       position: "Product Designer",
//       image: product3Image,
//       socials: [
//         { type: "twitter", icon: Icons.twitter },
//         { type: "instagram", icon: Icons.instagram },
//         { type: "linkedin", icon: Icons.linkedin }
//       ]
//     }
//   ];

//   const services = [
//     {
//       icon: <svg viewBox="0 0 24 24" className="service-icon">{Icons.delivery}</svg>,
//       title: "FREE AND FAST DELIVERY",
//       description: "Free delivery for all orders over $140"
//     },
//     {
//       icon: <svg viewBox="0 0 24 24" className="service-icon">{Icons.service}</svg>,
//       title: "24/7 CUSTOMER SERVICE",
//       description: "Friendly 24/7 customer support"
//     },
//     {
//       icon: <svg viewBox="0 0 24 24" className="service-icon">{Icons.guarantee}</svg>,
//       title: "MONEY BACK GUARANTEE",
//       description: "We return money within 30 days"
//     }
//   ];

//   return (
//     <div className="about-container">
//       <div className="story-section">
//         <div className="story-content">
//           <h1>Our Story</h1>
//           <div className="story-text">
//             <p>
//               Launched in 2015, Exclusive is South Asia's premier online shopping
//               marketplace with an active presence in Bangladesh. Supported by wide
//               range of tailored marketing, data, and service solutions, Exclusive
//               has 10,500 sellers and 300 brands and serves 3 million customers
//               across the region.
//             </p>
//             <p>
//               Exclusive has more than 1 Million products to offer, growing at a
//               very fast pace. Exclusive offers a diverse assortment in categories
//               ranging from consumer goods.
//             </p>
//           </div>
//         </div>
//         <div className="story-image">
//           <img src={product1Image} alt="Shopping women" />
//         </div>
//       </div>

//       <div className="stats-section">
//         {stats.map((stat, index) => (
//           <div key={index} className={`stat-card ${index === 1 ? 'highlight' : ''}`}>
//             <div className="icon-container">{stat.icon}</div>
//             <h3>{stat.value}</h3>
//             <p>{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="team-section">
//         <h2>Our Team</h2>
//         <div className="team-grid">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="team-member">
//               <img src={member.image} alt={member.name} />
//               <h3>{member.name}</h3>
//               <p>{member.position}</p>
//               <div className="social-links">
//                 {member.socials.map((social, idx) => (
//                   <a key={idx} href={`#${social.type}`} className={`social-icon ${social.type}`}>
//                     <svg viewBox="0 0 24 24" className="social-svg">
//                       {social.icon}
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon-container">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default About;
