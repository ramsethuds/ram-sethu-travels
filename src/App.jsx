import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);
  return (
    <div>

      <header className="header">
        

        <div className="header-container">


 <div className="logo-section">

  <img
    src="/logo.png"
    alt="Logo"
    className="logo"
  />

  <h1 className="logo-title">
    RAM SETHU DS TOUR AND TRAVELS
  </h1>

</div>

</div>
<nav className="navbar">

  <a href="#home">Home</a>

  <a href="#vehicles">Vehicles</a>

  <a href="#reviews">Reviews</a>

  <a href="#contact">Contact</a>

</nav>

        <div className="header-buttons">

          <a
            href="tel:+917483908290"
            className="call-btn"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917483908290"
            target="_blank"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>

        </div>

      </header>

    <section className="hero" id="home">
      <div className="overlay"></div>

        <div className="hero-left">

         <h2 className="main-heading">
  Reliable Cab & Mini Truck Services
</h2>

          <p className="hero-text">
  Safe rides, airport pickup,
  mini truck booking and outstation
  travel services at affordable prices.
</p>
<a
  href="https://wa.me/917483908290"
  target="_blank"
  className="hero-button"
>
  Book Your Ride Now
</a>

        </div>

        <div className="booking-box">
          

          <input
            type="text"
            placeholder="Pickup Location"
          />

          <input
            type="text"
            placeholder="Drop Location"
          />

          <select>
            <input
  type="date"
  className="booking-date"
  
/><input
  type="time"
  className="booking-time"
/><textarea
  placeholder="Additional Message"
  className="booking-message"
></textarea>
<label className="terms-box">

  <input type="checkbox" />

  I confirm booking details are correct

</label>

            <option>Select Vehicle</option>

            <option>Sedan</option>

            <option>SUV</option>

            <option>Mini Truck</option>

          </select>
          <input
  type="date"
  className="booking-date"
/>

<input
  type="time"
  className="booking-time"
/>

<textarea
  placeholder="Additional Message"
  className="booking-message"
></textarea>

          <a
            href="https://wa.me/917483908290?text=Hello%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            className="confirm-btn"
          >
            Confirm Booking
          </a>

        </div>

      </section>

      <section className="vehicles" id="vehicles" data-aos="fade-up">
        <p className="vehicle-text">
  Choose from our comfortable cab and transport vehicles.
</p>

        <h2>Our Vehicles</h2>

        <div className="vehicle-grid">

          
          <div className="vehicle-card">
  <img
    src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
    alt="Sedan"
    className="vehicle-image"
  />

  <h3>Sedan</h3>

  <p>Comfortable city rides.</p>
  <div className="social-links">

  <a
    href="https://wa.me/917483908290"
    target="_blank"
  >
    WhatsApp
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
  >
    Facebook
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
  >
    Instagram
  </a>

</div>
</div>
<div className="vehicle-card">

  <img
    src="https://cdn-icons-png.flaticon.com/512/3085/3085337.png"
    alt="SUV"
    className="vehicle-image"
  />

  <h3>SUV</h3>

  <p>
    Perfect for family trips.
  </p>

</div>


          <div className="vehicle-card">

  <img
    src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
    alt="Mini Truck"
    className="vehicle-image"
  />

  <h3>Mini Truck</h3>

  <p>
    Goods transport services.
  </p>

</div>

        </div>

      </section>
      <section className="stats-section">

  <div className="stat-box">
    <h2>500+</h2>
    <p>Happy Customers</p>
  </div>

  <div className="stat-box">
    <h2>24/7</h2>
    <p>Service Available</p>
  </div>

  <div className="stat-box">
    <h2>100%</h2>
    <p>Safe Rides</p>
  </div>

</section>
      <section className="reviews" data-aos="fade-right">

  <h2>Customer Reviews</h2>
  <p className="review-subtitle">
  Trusted by happy customers across Bangalore.
</p>

  <div className="review-grid">

    <div className="review-card">
      <h3>Rahul</h3>
      <p>
        Excellent cab service and professional drivers.
      </p>
    </div>

    <div className="review-card">
      <h3>Priya</h3>
      <p>
        Very affordable mini truck booking service.
      </p>
    </div>

    <div className="review-card">
      <h3>Arun</h3>
      <p>
        Clean vehicles and on-time airport pickup.
      </p>
    </div>

  </div>

</section>
<section className="faq" data-aos="fade-up">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-box">

    <h3>Do you provide airport pickup?</h3>

    <p>
      Yes, we provide 24/7 airport pickup and drop services.
    </p>

  </div>

  <div className="faq-box">

    <h3>Can I book mini trucks?</h3>

    <p>
      Yes, mini truck booking is available for goods transport.
    </p>

  </div>

  <div className="faq-box">

    <h3>Are outstation rides available?</h3>

    <p>
      Yes, we provide outstation cab services across Karnataka.
    </p>

  </div>

</section>
<section className="gallery" data-aos="zoom-in">

  <h2>Our Service Gallery</h2>

  <div className="gallery-grid">

    <img
      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c"
      alt="Cab"
    />

    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      alt="SUV"
    />

    <img
      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
      alt="Travel"
    />

  </div>

</section>
<footer className="footer">

  <h2>RAM SETHU DS TOUR AND TRAVELS</h2>

  <p>
    Reliable Cab, Mini Truck and Travel Services
  </p>

  <p>
    📞 +91 7483908290
  </p>

  <p>
    Bangalore, Karnataka
  </p>
  <p className="footer-copy">
  © 2026 RAM SETHU DS TOUR AND TRAVELS
</p>

</footer>
<a
  href="https://wa.me/917483908290"
  target="_blank"
  className="floating-whatsapp"
>
  WhatsApp
</a>
    </div>
  );
}

export default App;