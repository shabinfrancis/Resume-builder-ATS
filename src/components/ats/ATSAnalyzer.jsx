import React, { useState } from 'react';

// Utility to extract keywords (simple split, can be improved)
const extractKeywords = text =>
  Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')
        .split(/\s+/)
        .filter(w => w.length > 3)
    )
  );

const getResumeText = resume => {
  let text = '';
  if (!resume) return text;
  text += `${resume.name} ${resume.title} ${resume.summary} `;
  if (resume.experience)
    text += resume.experience.map(e => `${e.role} ${e.company} ${e.description}`).join(' ');
  if (resume.education)
    text += resume.education.map(e => `${e.degree} ${e.institution}`).join(' ');
  if (resume.skills) text += resume.skills.join(' ');
  return text.toLowerCase();
};

const ATSAnalyzer = ({ resume, onHighlight }) => {
  const [jobDesc, setJobDesc] = useState('');
  const [missing, setMissing] = useState([]);
  const [match, setMatch] = useState(0);

  const analyze = () => {
    const jobKeywords = extractKeywords(jobDesc);
    const resumeText = getResumeText(resume);
    const missingKeywords = jobKeywords.filter(
      kw => !resumeText.includes(kw)
    );
    const matched = jobKeywords.length - missingKeywords.length;
    const percent = jobKeywords.length
      ? Math.round((matched / jobKeywords.length) * 100)
      : 0;
    setMissing(missingKeywords);
    setMatch(percent);
    if (onHighlight) onHighlight(missingKeywords);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">ATS Analyzer</h2>
      <textarea
        className="w-full border p-2 mb-2"
        rows={5}
        placeholder="Paste job description here..."
        value={jobDesc}
        onChange={e => setJobDesc(e.target.value)}
      />
      <button
        className="px-4 py-2 rounded bg-blue-600 text-white mb-2"
        onClick={analyze}
      >
        Analyze
      </button>
      <div>
        <strong>Match:</strong> {match}%
      </div>
      {missing.length > 0 && (
        <div className="mt-2">
          <strong>Missing Keywords:</strong>
          <ul className="list-disc ml-6">
            {missing.map((kw, i) => (
              <li key={i}>{kw}</li>
            ))}
          </ul>
          <div className="mt-2 text-sm text-gray-600">
            Suggestion: Add these keywords to your resume for a better match!
          </div>
        </div>
      )}
    </div>
  );
};

export default ATSAnalyzer;