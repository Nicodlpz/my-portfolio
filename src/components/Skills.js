import React from 'react';

const Skills = () => {
  const skills = ["Packet Tracer", "VLANs & Trunking", "React JS", "Tailwind CSS", "JavaScript"];
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Technical Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;