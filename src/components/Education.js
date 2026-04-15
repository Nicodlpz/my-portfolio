import React from 'react';

const Education = () => {
  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-100 pb-2">Education</h2>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-800">Bachelor of Science in Information Technology</h3>
        <p className="text-blue-600 font-medium italic">Current Student | Philippines</p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Focused on network administration and systems security. Gained foundational knowledge in 
          routing, switching, and database management.
        </p>
      </div>
    </section>
  );
};

export default Education;