import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeCard from '../components/common/ResumeCard';

const LOCAL_KEY = 'resumes';

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    setResumes(stored ? JSON.parse(stored) : []);
  }, []);

  const saveResumes = (newResumes) => {
    setResumes(newResumes);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newResumes));
  };

  const createResume = () => {
    const newResume = {
      id: Date.now(),
      name: 'New Resume',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      experience: [],
      education: [],
      skills: []
    };
    const updated = [newResume, ...resumes];
    saveResumes(updated);
    navigate(`/resume/new`);
  };

  const duplicateResume = (id) => {
    const resume = resumes.find(r => r.id === id);
    if (resume) {
      const baseName = resume.name.replace(/\d+$/, '').trim();
      const count = resumes.filter(r => r.name.startsWith(baseName)).length;
      const copy = { ...resume, id: Date.now(), name: `${baseName} ${count + 1}` };
      saveResumes([copy, ...resumes]);
    }
  };

  const deleteResume = (id) => {
    const updated = resumes.filter(r => r.id !== id);
    saveResumes(updated);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Resumes</h1>
      <button
        onClick={createResume}
        className="mb-4 px-4 py-2 rounded bg-blue-600 text-white"
      >
        + Create Resume
      </button>
      <ul>
        {resumes.map(resume => (
          <ResumeCard
            key={resume.id}
            resume={resume}
            onPreview={() => navigate(`/preview/${resume.id}`)}
            onDuplicate={() => duplicateResume(resume.id)}
            onDelete={() => deleteResume(resume.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;