import React, { useState, useEffect, useCallback } from 'react';
import { Toolbar } from './components/Toolbar';
import { ResumePaper } from './components/ResumePaper';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { sampleResume } from './data/sampleResume';
import { PaperSize, ZoomScale } from './data/types';
import './styles/index.css';
import './styles/resume.css';
import './styles/print.css';

export const App: React.FC = () => {
  const [paperSize, setPaperSize] = useState<PaperSize>('a4');
  const [zoom, setZoom] = useState<ZoomScale>('fit');
  const [showGuides, setShowGuides] = useState<boolean>(false);
  const [overflowAmount, setOverflowAmount] = useState<number>(0);
  const [fitScale, setFitScale] = useState<number>(1);

  // Compute fit scale dynamically based on viewport dimensions
  const updateFitScale = useCallback(() => {
    const isA4 = paperSize === 'a4';
    // 96 DPI pixel approximations
    const targetWidth = isA4 ? 794 : 816;
    const targetHeight = isA4 ? 1123 : 1056;

    const availableWidth = window.innerWidth - 64;
    const availableHeight = window.innerHeight - 110; // offset for toolbar and canvas paddings

    const scaleW = availableWidth / targetWidth;
    const scaleH = availableHeight / targetHeight;
    const calculated = Math.min(scaleW, scaleH);

    // Limit maximum scale on giant screens to 1.1x, min 0.4x
    const clamped = Math.max(0.4, Math.min(calculated, 1.1));
    setFitScale(clamped);
  }, [paperSize]);

  useEffect(() => {
    updateFitScale();
    window.addEventListener('resize', updateFitScale);
    return () => window.removeEventListener('resize', updateFitScale);
  }, [updateFitScale]);

  // Determine current effective zoom transform scale
  const currentScale = (() => {
    switch (zoom) {
      case 'fit':
        return fitScale;
      case '100':
        return 1;
      case '90':
        return 0.9;
      case '80':
        return 0.8;
      default:
        return 1;
    }
  })();

  // Helper to parse inline markdown **bold** markers for authentic ATS/print emphasis
  const formatTextWithBold = (text: string) => {
    if (!text) return null;
    const segments = text.split(/(\*\*.*?\*\*)/g);
    return segments.map((seg, i) => {
      if (seg.startsWith('**') && seg.endsWith('**')) {
        return <strong key={i}>{seg.slice(2, -2)}</strong>;
      }
      return seg;
    });
  };

  return (
    <div className="app-container">
      <Toolbar
        paperSize={paperSize}
        onPaperSizeChange={setPaperSize}
        zoom={zoom}
        onZoomChange={setZoom}
        showGuides={showGuides}
        onToggleGuides={() => setShowGuides((prev) => !prev)}
        overflowAmount={overflowAmount}
      />

      <main className="preview-canvas">
        <div
          className="canvas-transform-wrapper"
          style={{ transform: `scale(${currentScale})` }}
        >
          <ResumePaper
            paperSize={paperSize}
            showGuides={showGuides}
            onOverflowChange={setOverflowAmount}
          >
            <div className="resume-content">
              {/* Header */}
              <Header
                name={sampleResume.name}
                title={sampleResume.title}
                contact={sampleResume.contact}
              />

              {/* Professional Summary */}
              {sampleResume.summary && (
                <Section title="Professional Summary">
                  <p className="resume-summary-text">{formatTextWithBold(sampleResume.summary)}</p>
                </Section>
              )}

              {/* Skills */}
              {sampleResume.skills.length > 0 && (
                <Section title="Skills">
                  <div className="skills-list">
                    {sampleResume.skills.map((category) => (
                      <div key={category.id} className="skill-row">
                        <span className="skill-row-title">{category.name}:</span>
                        <span className="skill-row-items">
                          {category.skills.join(', ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Experiences */}
              {sampleResume.experiences.length > 0 && (
                <Section title="Experiences">
                  <div className="experience-list">
                    {sampleResume.experiences.map((exp) => (
                      <article key={exp.id} className="entry-item">
                        <div className="entry-header">
                          <div className="entry-title-group">
                            <h3 className="entry-role">{exp.role}</h3>
                          </div>
                          <span className="entry-meta-right">
                            {exp.company} | {exp.period}
                          </span>
                        </div>

                        {exp.techStack && exp.techStack.length > 0 && (
                          <div className="entry-tech-line">
                            {exp.techStack.join(', ')}
                          </div>
                        )}

                        {exp.summary && (
                          <p className="entry-summary">{formatTextWithBold(exp.summary)}</p>
                        )}

                        <ul className="entry-bullets">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="entry-bullet">
                              {formatTextWithBold(bullet)}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Section>
              )}

              {/* Projects */}
              {sampleResume.projects.length > 0 && (
                <Section title="Projects">
                  <div className="project-list">
                    {sampleResume.projects.map((proj) => (
                      <article key={proj.id} className="entry-item">
                        <div className="entry-header">
                          <div className="entry-title-group">
                            <h3 className="entry-role">
                              {proj.name}
                              {proj.link && (
                                <>
                                  {' | '}
                                  <a
                                    href={proj.link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-item"
                                    style={{ display: 'inline', color: '#1d4ed8' }}
                                  >
                                    {proj.link.label}
                                  </a>
                                </>
                              )}
                            </h3>
                          </div>
                          {proj.period && (
                            <span className="entry-meta-right">{proj.period}</span>
                          )}
                        </div>

                        {proj.techStack && proj.techStack.length > 0 && (
                          <div className="entry-tech-line">
                            {proj.techStack.join(', ')}
                          </div>
                        )}

                        {proj.summary && (
                          <p className="entry-summary">{formatTextWithBold(proj.summary)}</p>
                        )}

                        <ul className="entry-bullets">
                          {proj.bullets.map((bullet, idx) => (
                            <li key={idx} className="entry-bullet">
                              {formatTextWithBold(bullet)}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Section>
              )}

              {/* Education */}
              {sampleResume.education.length > 0 && (
                <Section title="Education">
                  <div className="education-list">
                    {sampleResume.education.map((edu) => (
                      <div key={edu.id} className="entry-item">
                        <div className="education-row">
                          <span>
                            <strong>{edu.institution}</strong> | {edu.degree}
                            {edu.gpa && ` | ${edu.gpa}`}
                          </span>
                          <span className="entry-meta-right">{edu.period}</span>
                        </div>
                        {edu.honors && edu.honors.length > 0 && (
                          <div className="education-honors">
                            Additional: {edu.honors.join(' | ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              )}
            </div>
          </ResumePaper>
        </div>
      </main>
    </div>
  );
};

export default App;
