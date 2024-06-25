import React from "react";

const About = () => {
  return (
    <div
      className="flex justify-center p-8 bg-gray-900 text-white rounded-xl"
      id="about"
    >
      <div className="max-w-2xl mx-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Zeli Automotive</h1>
        <section className="space-y-6">
          <div>
            <h3 className="text-3xl font-semibold mb-3">Our History</h3>
            <p className="text-lg">
              Established in 1995, Zeli Automotive has been serving the Greater
              Toronto Area community with passion and dedication. From our
              humble beginnings to becoming a reliable name in automotive care,
              we have always prioritized customer satisfaction and quality
              service.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-3">Mission and Values</h3>
            <p className="text-lg">
              At Zeli Automotive, our mission is clear - to deliver exceptional
              automotive services with integrity, transparency, and a
              customer-centric approach. We value honesty, reliability, and a
              commitment to excellence in every service we provide.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-3">
              Expertise and Services
            </h3>
            <ul className="list-disc pl-6 text-lg">
              <li>Regular maintenance</li>
              <li>Tune-ups</li>
              <li>Brake and tire services</li>
              <li>Engine diagnostics and repairs</li>
              <li>
                Specialized in European Automotive Vehicles Maintenance and
                Repair
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-3">Contact Us</h3>
            <p className="text-lg">
              Ready to experience the Zeli Automotive difference? Reach out to
              us today!
              <br />
              Address: 4-2456 Royal Windsor Dr, Oakville, Ontario L6J 7Y3
              <br />
              Phone: 905-337-9346
            </p>
            <div className="mt-4">
              <iframe
                title="Zeli Automotive Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5788.803093718181!2d-79.65033128827838!3d43.4939581709896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b449f9eada4e7%3A0xee2f7dee43e4e9aa!2sZeli%20Automotive%20Ltd.!5e0!3m2!1sen!2sca!4v1719349159185!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
