import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      <div className="resume-section-content">{children}</div>
    </section>
  );
};
