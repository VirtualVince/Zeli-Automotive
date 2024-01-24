import React from "react";

const about = () => {
  return (
    <div>
      <h1> Welcome to Zeli Automotive in Mississauga! </h1>
      <div className="w-full md:h-screen p-2 flex py-16">
        <h3> Our History </h3>
        <h3> Mission and Values </h3>
        <h3> Expertise and Services</h3>{" "}
        <ol>
          <li>Regular maintenance</li>
          <li>Tune-ups</li>
          <li>Brake and tire services</li>
          <li>Engine diagnostics and repairs</li>
          <li>
            Specialized in European Automotive Vechiles Maintenance and Repair
          </li>
        </ol>{" "}
        <h3> Contact Us </h3>{" "}
        <p>
          Ready to experience the Zeli Automotive difference? Reach out to us
          today!
          <br />
          Address: 4-2456 Royal Windsor Dr, Oakville, Ontario L6J 7Y3
          <br />
          Phone: 905-337-9346
        </p>
      </div>
    </div>
  );
};

export default about;
