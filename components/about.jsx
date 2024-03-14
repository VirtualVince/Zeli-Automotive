import React from "react";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl p-8 mx-4 bg-gray-900 rounded-xl text-white">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Welcome to Zeli Automotive
          </h1>

          <section className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Our History</h3>
              <p>
                Established in 1995, Zeli Automotive has been serving the
                Greater Toronto Area community with passion and dedication. From
                our humble beginnings to becoming a reliable name in automotive
                care, we have always prioritized customer satisfaction and
                quality service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Mission and Values</h3>
              <p>
                At Zeli Automotive, our mission is clear - to deliver
                exceptional automotive services with integrity, transparency,
                and a customer-centric approach. We value honesty, reliability,
                and a commitment to excellence in every service we provide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Expertise and Services
              </h3>
              <ul className="list-disc pl-6">
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
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p>
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
      <div className="mt-8 mx-4">
        <h2 className="text-xl font-semibold mb-4">
          Visit Us at Zeli Automotive
        </h2>
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4015468533116!2d-79.65032592383159!3d43.49395817111017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b449f9eada4e7%3A0xee2f7dee43e4e9aa!2sZeli%20Automotive%20Ltd.!5e0!3m2!1sen!2sca!4v1709743897533!5m2!1sen!2sca"
            width="100%"
            height="100%"
            className="absolute inset-0 rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
