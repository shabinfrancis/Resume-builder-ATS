import React from 'react';

const ResumeCard = ({ resume, onPreview, onDuplicate, onDelete }) => (
  <li className="flex items-center justify-between border p-4 mb-3 rounded">
    <div>
      <div className="font-semibold">{resume.firstname ? `${resume.firstname}-resume` : 'Untitled-resume'}</div>
      <div className="text-sm text-gray-500">{resume.jobTitle}</div>
    </div>
    <div className="flex gap-2">
      <button onClick={onPreview} className="px-3 py-1 rounded bg-blue-500 text-white">Preview</button>
      <button onClick={onDuplicate} className="px-3 py-1 rounded bg-gray-300">Duplicate</button>
      <button onClick={onDelete} className="px-3 py-1 rounded bg-red-500 text-white">Delete</button>
    </div>
  </li>
);

export default ResumeCard;