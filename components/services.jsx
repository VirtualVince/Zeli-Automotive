import React from "react";

const services = [
  {
    title: "Engine Repair",
    description: "Specialized in European motor vehicles engine repair.",
    image: [
      "/assets/zeliphoto3",
      "/assets/zeliphoto4",
      "/assets/zeliphoto6",
      "/assets/zeliphoto7",
    ],
  },
  // add more services
];

const Services = () => {
  return (
    <div className="services p-4 md:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#1a4df6]">
          Our Services
        </h2>
        <div className="mt-10">
          <ul className="list-disc pl-6 text-base md:text-lg text-black">
            {services.map((service) => (
              <li key={service.title}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-12 w-12"
                    src={service.image || defaultImage}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{service.title}</h3>
                      <p className="text-indigo-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
