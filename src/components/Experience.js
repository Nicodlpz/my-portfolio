import React from 'react';

const Experience = () => {
  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-100 pb-2">Experience</h2>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 underline decoration-blue-200">Academic Projects</h3>
          <p className="text-slate-500 font-mono text-sm">2025 - 2026</p>
          <ul className="list-disc ml-5 mt-2 text-slate-600 space-y-2">
            <li>Configured VLANs and OSPF protocols in Cisco Packet Tracer.</li>
            <li>Developed a landing page for an e-commerce brand using React and Tailwind.</li>
            <li>Performed regression analysis on house price datasets for Data Mining coursework.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;