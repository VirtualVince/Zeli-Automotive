import React from "react";

const testimonials = [
  {
    name: "Kris",
    testimonial:
      "I have been going here for 5 years, to my complete satisfaction. This is what to expect: Quality workmanship which they stand behind, fair pricing, explanation and options, timely, courtesy. Owner Fatlum Zeli and his team of skilled mechanics have many years of experience with problem-solving and carrying out dependable repairs and service. Everything done with Fatlum’s basic way of operating: Integrity. Could not recommend more highly.",
  },
  // add more testimonials
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Testimonials
        </h2>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{testimonial.name}</h3>
                      <p className="text-indigo-600">
                        {testimonial.testimonial}
                      </p>
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

export default Testimonials;
