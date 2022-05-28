import React from "react";

const MeetSection = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
      <div>
        <h1 className="text-4xl font-bold mb-10 mt-24">
          Meet Our <br /> Honorable Employees.
        </h1>
        <p className="text-primary underline mb-10">Meet Our Team</p>

        <hr className=" mb-5" />

        <div>
          <div>
            <h1 className="text-4xl font-bold mb-5">Open Job</h1>
            <div className="border-l-2 pl-2 border-primary my-10">
              <h2 className="text-2xl font-semibold">
                Warehouse General Laborer
              </h2>
              <h2 className="text-2xl">Warehouse General Laborer</h2>
            </div>
            <div className="border-l-2 pl-2 border-primary my-10">
              <h2 className="text-2xl font-semibold">
                Warehouse General Laborer
              </h2>
              <h2 className="text-2xl">Warehouse General Laborer</h2>
            </div>
            <div className="border-l-2 pl-2 border-primary my-10">
              <h2 className="text-2xl font-semibold">
                Warehouse General Laborer
              </h2>
              <h2 className="text-2xl">Warehouse General Laborer</h2>
            </div>
          </div>
          <div>
            <p className="text-primary underline mb-20 mt-5">View all jobs</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://castro.jamstacktemplates.dev/assets/img/team/team.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MeetSection;
