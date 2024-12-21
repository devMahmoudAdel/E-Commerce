import React from "react";
import {
  LucideReact,
  Store,
  DollarSign,
  Users,
  Wallet,
  Twitter,
  Instagram,
  Linkedin,
  Truck,
  Headphones,
  Shield,
} from "lucide-react";
import "./about.css";
import product1Image from "../assets/Images/image 51.jpg";
import product2Image from "../assets/Images/image 52.jpg";
import product3Image from "../assets/Images/image 53.jpg";
import product4Image from "../assets/Images/image 54.jpg";
import product5Image from "../assets/Images/image 55.jpg";
import product6Image from "../assets/Images/image 56.jpg";

const About = () => {
  const stats = [
    {
      icon: <Store className="stat-icon" />,
      value: "10.5k",
      label: "Sellers active on our site",
    },
    {
      icon: <DollarSign className="stat-icon" />,
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      icon: <Users className="stat-icon" />,
      value: "45.5k",
      label: "Customers active on our site",
    },
    {
      icon: <Wallet className="stat-icon" />,
      value: "25k",
      label: "Annual gross sale on our site",
    },
  ];

  const teamMembers = [
    {
      name: "Hazem Hussein",
      position: "الأسطى حازم نقاشة",
      image: product1Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
    {
      name: "Mahmoud Adel",
      position: "الأسطى حودةالمعلم الكبير",
      image: product2Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
    {
      name: "noor monfa5",
      position: "منفاخ فكرة والفكرة لا تموت",
      image: product3Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
    {
      name: "Capa",
      position: " بتاع الشاي والقهوة",
      image: product5Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
    {
      name: "Omar Hassan",
      position: "عامل النضافة ",
      image: product4Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
    {
      name: "Youssef Ahmed",
      position: "الأسطى يوسف أحمد للنقاشة",
      image: product6Image,
      socials: [
        { type: "twitter", icon: <Twitter /> },
        { type: "instagram", icon: <Instagram /> },
        { type: "linkedin", icon: <Linkedin /> },
      ],
    },
  ];

  const services = [
    {
      icon: <Truck className="service-icon" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones className="service-icon" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <Shield className="service-icon" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="about-container">
      <div className="story-section">
        <div className="story-content">
          <h1>Our Story</h1>
          <div className="story-text">
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods.
            </p>
          </div>
        </div>
        <div className="story-image">
          <img src={product1Image} alt="Shopping women" />
        </div>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${index === 1 ? "highlight" : ""}`}
          >
            <div className="icon-container">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <div className="social-links">
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={`#${social.type}`}
                    className={`social-icon ${social.type}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
