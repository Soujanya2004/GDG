import React, { useState, useEffect } from "react";

// Google theme colors
const googleColors = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC05",
  green: "#34A853",
  white: "#FFFFFF", // Added white color for better usage
};

const GDGEventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Example dynamic event fetching
    const fetchEvents = async () => {
      const eventList = [
        {
          id: 1,
          title: "Open Source Event",
          date: "January 1, 2025",
          description: "Learn about the future of open source.",
          image:
            "https://www.openlogic.com/sites/default/files/image/2020-01/image-blog-ol-future-of-oss.jpg",
        },
        {
          id: 2,
          title: "Hackathon",
          date: "February 10, 2025",
          description: "Join us for a coding marathon!",
          image:
            "https://th.bing.com/th/id/OIP.zhNFVeh7vMU1mPFE_TqbaQHaE8?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          title: "Women in Tech Event",
          date: "March 15, 2025",
          description: "Empowering women in the tech industry.",
          image:
            "https://th.bing.com/th/id/OIP.b9OyVJzx8L2ja3HELo081wHaE7?rs=1&pid=ImgDetMain",
        },
      ];
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://pbs.twimg.com/media/D22N_huX4AEbb1y.jpg"
              alt="GDG Logo"
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <h1 className="text-2xl font-bold">GDGoC Presidency University</h1>
          </div>
          <nav>
            <ul className="flex justify-center space-x-12">
              <li>
                <a
                  href="#leaderboard"
                  className="text-xl font-semibold transition-colors duration-300 pb-2 border-b-4 border-transparent hover:border-red-500"
                  style={{ color: googleColors.white }}
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-xl font-semibold transition-colors duration-300 pb-2 border-b-4 border-transparent hover:border-red-500"
                  style={{ color: googleColors.white }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-xl font-semibold transition-colors duration-300 pb-2 border-b-4 border-transparent hover:border-red-500"
                  style={{ color: googleColors.white }}
                >
                  Community
                </a>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>

      {/* Events Section */}
      <section id="events" className="container mx-auto p-6 flex-grow">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-1">Date: {event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="p-6 mt-8"
        style={{
          backgroundColor: googleColors.blue,
          color: googleColors.yellow,
        }}
      >
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 GDG Presidency University. All rights reserved.</p>
          <div className="mt-4">
            <h4 className="font-semibold text-lg" style={{ color: googleColors.white }}>
              Connect with us:
            </h4>
            <div className="flex justify-center space-x-6 mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124011.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-lg" style={{ color: googleColors.green }}>
              Contact Us:
            </h4>
            <p>
              Email:{" "}
              <a href="mailto:info@yourdomain.com" className="underline">
                info@yourdomain.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GDGEventPage;
