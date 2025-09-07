import React from 'react';
// import ProfExp from '../forms/ProfExp.jsx';

export const extractPlainText = (resume) => {
  if (!resume) return '';
  let text = `${resume.firstname}\n${resume.jobTitle}\n${resume.email} | ${resume.number}\n${resume.city}\n\n`;
  if (resume.summary) text += `Summary:\n${resume.summary}\n\n`;
  if (resume.experiences && Array.isArray(resume.experiences)) {
    text += 'Experience:\n';
    resume.experiences.forEach(exp => {
      text += `- ${exp.role} at ${exp.company} (${exp.years})\n  ${exp.description}\n`;
    });
    text += '\n';
  }
  if (resume.education) {
    text += 'Education:\n';
    resume.education.forEach(edu => {
      text += `- ${edu.degree} - ${edu.institution} (${edu.years})\n`;
    });
    text += '\n';
  }
  if (resume.skills && Array.isArray(resume.skills)) {
    text += 'Skills:\n' + resume.skills.map(s => typeof s === 'string' ? s : s.skill).join(', ') + '\n';
  }
  return text;
};

const PlainTextPreview = ({ resume }) => (
  <pre
    style={{ color: '#222' }} // bg-gray-100
    className="p-4 rounded whitespace-pre-wrap"
  >
    {extractPlainText(resume)}
  </pre>
);

export default PlainTextPreview;