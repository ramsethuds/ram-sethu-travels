export default function App() {
  const services = [
    {
      title: "Cab Booking",
      icon: "🚖",
      desc: "Fast and affordable cab booking services."
    },
    {
      title: "Mini Truck",
      icon: "🚚",
      desc: "Mini truck services for shifting and transport."
    },
    {
      title: "Tours & Travels",
      icon: "🌍",
      desc: "Comfortable outstation tours and travel packages."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-yellow-500 text-white p-5 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
  <img
    src="/logo.jpg"
    alt="Logo"
    className="w-20 h-20 rounded-full object-cover bg-white"
  />

  <h1 className="text-2xl md:text-3xl font-bold">
    RAM SETHU DS TOUR AND TRAVELS
  </h1>
</div>

          <a
            href="tel:+917483908290"
            className="bg-white text-yellow-600 px-5 py-2 rounded-xl font-bold"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Reliable Cab & Mini Truck Services in Bangalore
            </h2>

            <p className="text-xl mb-8">
              Safe rides, goods transport, tours and travels at affordable prices.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-2xl font-bold">
                Book Cab
              </button>

              <button className="bg-black/20 border border-white px-6 py-3 rounded-2xl font-bold">
                Hire Mini Truck
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">
              Quick Booking
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="w-full p-4 rounded-xl border"
              />

              <select className="w-full p-4 rounded-xl border">
                <option>Select Service</option>
                <option>Cab Service</option>
                <option>Mini Truck Service</option>
                <option>Tours & Travels</option>
              </select>

              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold">
                Confirm Booking
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 mb-12">
            Professional transport solutions for all your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="text-5xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-300 mb-8">
            Available 24/7 for cab and transport booking.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-800 rounded-2xl p-6">
              <p className="font-bold mb-2">📍 Location</p>
              <p>Bangalore</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <p className="font-bold mb-2">📞 Phone</p>
              <p>+91 7483908290</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <p className="font-bold mb-2">✉ Email</p>
              <p>ramsethuds@gmail.com</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p>
          © 2026 RAM SETHU DS TOUR AND TRAVELS
        </p>
      </footer>

    </div>
  );
}