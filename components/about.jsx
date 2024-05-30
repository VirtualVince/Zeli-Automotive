import React from "react";

const About = () => {
  return (
    <div className="flex justify-center p-8 bg-gray-900 text-white rounded-xl">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
