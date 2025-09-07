// Example usage in your main preview component
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ATSAnalyzer from '../ats/ATSAnalyzer';
import HtmlPreview from './HtmlPreview';
import PlainTextPreview, { extractPlainText } from './PlainTextPreview';
import ExportButtons from '../export/ExportButtons';

const LOCAL_KEY = 'resumes';

const PreviewPage = () => {
  const { id } = useParams();
  const htmlRef = useRef(null);
  const [missingKeywords, setMissingKeywords] = useState([]);

  const resumes = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  const resumeData = resumes.find(r => String(r.id) === String(id));
  const plainText = extractPlainText(resumeData);

  const highlight = (missing) => setMissingKeywords(missing);

  if (!resumeData) return <div className="p-8 text-red-600">Resume not found.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen overflow-auto">
      <ATSAnalyzer resume={resumeData} onHighlight={highlight} />
      <ExportButtons plainText={plainText} htmlRef={htmlRef} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={htmlRef}>
        <div className="w-full border rounded p-4">
          <h2 className="text-lg font-bold mb-2">HTML Preview</h2>
          <HtmlPreview resume={resumeData} highlightKeywords={missingKeywords} />
        </div>
        <div className="w-full border rounded p-4">
          <h2 className="text-lg font-bold mb-2">Plain Text Preview</h2>
          <PlainTextPreview resume={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;