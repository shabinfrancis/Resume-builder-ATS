import React from 'react';
import TemplateRenderer from './TemplateRenderer';

const HtmlPreview = ({ resume }) => (
  <div>
    <TemplateRenderer resume={resume} />
  </div>
);

export default HtmlPreview;