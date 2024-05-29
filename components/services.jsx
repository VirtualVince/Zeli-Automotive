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
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
