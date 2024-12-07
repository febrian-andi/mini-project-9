import React from "react";

function SuccesMetrics() {
  return (
    <section className="bg-black grid grid-cols-2 md:grid-cols-4 py-10 px-6 md:px-10 gap-8 md:gap-4">
      <div>
        <h2 className="font-bold text-4xl text-yellow-primary-darker">350 +</h2>
        <p className="text-white text-lg">Clients Worldwide</p>
      </div>
      <div>
        <h2 className="font-bold text-4xl text-yellow-primary-darker">20 +</h2>
        <p className="text-white text-lg">Team Members</p>
      </div>
      <div>
        <h2 className="font-bold text-4xl text-yellow-primary-darker">100 +</h2>
        <p className="text-white text-lg">Projects Completed</p>
      </div>
      <div>
        <h2 className="font-bold text-4xl text-yellow-primary-darker">85M +</h2>
        <p className="text-white text-lg">Revenue Generated</p>
      </div>
    </section>
  );
}

export default SuccesMetrics;
