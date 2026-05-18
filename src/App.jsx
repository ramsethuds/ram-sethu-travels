

export default function App() {
  return (
    <div>

      <header className="header">
        <div className="header-container">

          <div className="logo-section">
            <img src="/logo.jpg" alt="logo" />

            <h1>RAM SETHU DS TOUR AND TRAVELS</h1>
          </div>

          <a href="tel:+917483908290" className="call-btn">
            Call Now
          </a>
<a
  href="https://wa.me/917483908290"
  target="_blank"
  className="call-btn"
>
  WhatsApp
</a>
        </div>
      </header>

      <section className="hero">

        <div className="hero-container">

          <div>
            <h1>
              Reliable Cab & Mini Truck Services in Bangalore
            </h1>

            <p>
              Safe rides, goods transport and tours at affordable prices.
            </p>

            <button className="call-btn">
              Book Now
            </button>
          </div>

          <div className="booking-box">

            <h2>Quick Booking</h2>

            <input type="text" placeholder="Pickup Location" />

            <input type="text" placeholder="Drop Location" />

            <select>
              <option>Select Service</option>
              <option>Cab Service</option>
              <option>Mini Truck</option>
              <option>Tours & Travels</option>
            </select>

            <button>Confirm Booking</button>

          </div>

        </div>

      </section>

      {/* Cab Vehicles */}

      <section className="services">

        <h2>Cab Vehicles</h2>

        <div className="service-grid">

          <div className="service-card">
            <img src="/cab1.jpg" alt="Swift" width="100%" />
            <h3>Innova Crysta</h3>
          </div>

          <div className="service-card">
            <img src="/cab2.jpg" alt="Etios" width="100%" />
            <h3>Toyota Etios</h3>
          </div>

          <div className="service-card">
            <img src="/cab3.jpg" alt="Innova" width="100%" />
            <h3>Suzuki Dizer</h3>
          </div>
<div className="service-card">
  <img src="/traveller.jpg" alt="Traveller" width="100%" />
  <h3>Force Traveller</h3>
</div>
        </div>

      </section>

      {/* Mini Truck Vehicles */}

      <section className="services">

        <h2>Mini Truck Vehicles</h2>

        <div className="service-grid">

          <div className="service-card">
            <img src="/truck1.jpg" alt="Mini Truck" width="100%" />
            <h3>Mini Truck</h3>
          </div>

          <div className="service-card">
            <img src="/truck2.jpg" alt="Tata Ace" width="100%" />
            <h3>Tata Ace</h3>
          </div>

          <div className="service-card">
            <img src="/truck3.jpg" alt="Traveller" width="100%" />
            <h3>Tata Ace 8ft</h3>
          </div>

        </div>

      </section>

      <section className="contact">

        <h2>Contact Us</h2>

        <div className="contact-grid">

          <div className="contact-box">
            <h3>📍 Location</h3>
            <p>Bangalore</p>
          </div>

          <div className="contact-box">
            <h3>📞 Phone</h3>
            <p>7483908290</p>
          </div>

          <div className="contact-box">
            <h3>✉ Email</h3>
            <p>ramsethuds@gmail.com</p>
          </div>

        </div>

      </section>

      <footer className="footer">
        © 2026 RAM SETHU DS TOUR AND TRAVELS
      </footer>

    </div>
  );
}