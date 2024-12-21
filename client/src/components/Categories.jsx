import React, { useState } from 'react';
import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';
import './Categories.css';

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    "Laptop",
    "HeadPhones",
    "Mouses",
    "Keyboards",
    "Accessories",
    "Electorincs"
  ];

  const slides = [
    {
      title: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      image: product1Image,
    },
    {
      title: "Latest Electronics",
      discount: "Up to 15% off Voucher",
      image: product2Image,
    },
    {
      title: "New Arrivals",
      discount: "Special Offers",
      image: product3Image,
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="categories-container">
      <div className="categories-sidebar">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
          >
            <span>{category}</span>
            <span></span>
          </div>
        ))}
      </div>

      <div className="slider-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="slide-content">
              <div className="slide-image-container">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                />
              </div>
              <button className="shop-now-button">
                Shop Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="nav-button left"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="nav-button right"
        >
          →
        </button>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator ${currentSlide === index ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;