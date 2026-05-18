

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

          <form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();

    const pickup = e.target.pickup.value;
    const drop = e.target.drop.value;
    const service = e.target.service.value;

    const message =
      `Booking Request:%0A` +
      `Pickup: ${pickup}%0A` +
      `Drop: ${drop}%0A` +
      `Service: ${service}`;

    window.open(
      `https://wa.me/917483908290?text=${message}`,
      "_blank"
    );
  }}
>
  <input
    type="text"
    name="pickup"
    placeholder="Pickup Location"
    required
  />

  <input
    type="text"
    name="drop"
    placeholder="Drop Location"
    required
  />

  <select name="service" required>
    <option value="">Select Service</option>
    <option>Cab Booking</option>
    <option>Mini Truck</option>
    <option>Airport Drop</option>
  </select>

  <button type="submit">
    Book on WhatsApp
  </button>
</form>

          

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
            <h3>Innova</h3>
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
<div style={{ marginTop: "40px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243.0287666048835!2d77.65377940947299!3d12.942393946737157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1779107826500!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0, borderRadius: "20px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
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