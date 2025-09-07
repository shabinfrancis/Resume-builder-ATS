import React from 'react';

const TemplateRenderer = ({ resume }) => {
  if (!resume) return <div>No resume data.</div>;

  return (
    <article className="max-w-2xl mx-auto p-8 rounded shadow" style={{ background: '#fff' }}>
      <header>
        <h1 className="font-bold" style={{ fontSize: '1.875rem', color: '#000' }}>{resume.firstname}</h1>
        <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>{resume.jobTitle}</p>
        <p style={{ color: '#6b7280' }}>{resume.email} | {resume.number}</p>
        <p style={{ color: '#6b7280' }}>{resume.city}</p>
      </header>
      <section className="mt-6">
        <h2 className="font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#000' }}>Summary</h2>
        <p style={{ color: '#000' }}>{resume.summary}</p>
      </section>
      {resume.experiences && Array.isArray(resume.experiences) && (
        <section className="mt-6">
          <h2 className="font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#000' }}>Experience</h2>
          <ul>
            {resume.experiences.map((exp, i) => (
              <li key={i} className="mb-4">
                <strong style={{ color: '#000' }}>{exp.role}</strong> at <span style={{ color: '#000' }}>{exp.company}</span> ({exp.years})
                <div style={{ color: '#374151' }}>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.educations && Array.isArray(resume.educations) && (
        <section className="mt-6">
          <h2 className="font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#000' }}>Education</h2>
          <ul>
            {resume.educations.map((edu, i) => (
              <li key={i} className="mb-2">
                <strong style={{ color: '#000' }}>{edu.degree}</strong> - <span style={{ color: '#000' }}>{edu.institution}</span> ({edu.years})
                {edu.grade && <> | Grade: {edu.grade}</>}
                {edu.description && <div>{edu.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.skills && Array.isArray(resume.skills) && (
        <section className="mt-6">
          <h2 className="font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#000' }}>Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {resume.skills.map((skill, i) => (
              <li
                key={i}
                style={{ background: '#e5e7eb', color: '#000' }}
                className="px-2 py-1 rounded"
              >
                {typeof skill === 'string' ? skill : skill.skill}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.hobbies && Array.isArray(resume.hobbies) && (
        <section className="mt-6">
          <h2 className="font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#000' }}>Hobbies & Interests</h2>
          <ul className="flex flex-wrap gap-2">
            {resume.hobbies.map((hobby, i) => (
              <li
                key={i}
                style={{ background: '#e5e7eb', color: '#000' }}
                className="px-2 py-1 rounded"
              >
                {typeof hobby === 'string' ? hobby : hobby.hobby}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

export default TemplateRenderer;