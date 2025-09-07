import React, { useState } from 'react';
import Personal from '../components/forms/Personal';
import Education from '../components/forms/Education';
import ProfExp from '../components/forms/ProfExp';
import Skills from '../components/forms/Skills';
import Hobby from '../components/forms/Hobby';
import { useNavigate, useParams } from 'react-router-dom';

const steps = [
  { label: 'Personal', component: Personal },
  { label: 'Education', component: Education },
  { label: 'Experience', component: ProfExp },
  { label: 'Skills', component: Skills },
  { label: 'Hobbies', component: Hobby },
];

const LOCAL_KEY = 'resumes';

const Builder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const resumes = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  const editingResume = resumes.find(r => String(r.id) === String(id));
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(editingResume || {});

  const CurrentStep = steps[step].component;

  const handleNext = (data) => {
    const mergedData = { ...formData, ...data };

    if (step < steps.length - 1) {
      setFormData(mergedData);
      setStep(step + 1);
    } else {
      let updatedResumes;
      let resumeId = id;

      if (editingResume) {
        // Update existing resume
        updatedResumes = resumes.map(r =>
          String(r.id) === String(id) ? { ...mergedData, id } : r
        );
      } else {
        // Create new resume
        resumeId = Date.now();
        updatedResumes = [{ ...mergedData, id: resumeId }, ...resumes];
      }

      localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedResumes));
      navigate(`/preview/${resumeId}`);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="m-10 p-6">
      <div className="flex justify-center mb-6 space-x-2">
        {steps.map((s, idx) => (
          <div
            key={s.label}
            className={`flex justify-center items-center px-3 py-1 rounded-full text-sm font-semibold ${
              idx === step ? 'bg-blue-600 text-white w-40' : 'bg-gray-200 text-gray-600 w-40'
            }`}
          >
            {s.label}
          </div>
        ))}
      </div>
      <CurrentStep
        defaultValues={formData}
        onSubmit={handleNext}
        onBack={handleBack}
        isLast={step === steps.length - 1}
        isFirst={step === 0}
      />
    </div>
  );
};

export default Builder;