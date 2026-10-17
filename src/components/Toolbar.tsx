import React from 'react';
import { Printer, Eye, CheckCircle2, AlertTriangle, FileText, ZoomIn } from 'lucide-react';
import { PaperSize, ZoomScale } from '../data/types';

interface ToolbarProps {
  paperSize: PaperSize;
  onPaperSizeChange: (size: PaperSize) => void;
  zoom: ZoomScale;
  onZoomChange: (zoom: ZoomScale) => void;
  showGuides: boolean;
  onToggleGuides: () => void;
  overflowAmount: number;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  paperSize,
  onPaperSizeChange,
  zoom,
  onZoomChange,
  showGuides,
  onToggleGuides,
  overflowAmount,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const isOverflow = overflowAmount > 1; // 1px threshold for subpixel rounding

  return (
    <header className="toolbar-header no-print">
      <div className="toolbar-brand">
        <FileText size={18} className="text-blue-400" aria-hidden="true" focusable="false" />
        <span className="toolbar-brand-title">Resume as Code</span>
        <span className="toolbar-badge">Print Engine</span>
      </div>

      <div className="toolbar-controls">
        {/* Paper Size Selector */}
        <div className="segmented-control" role="group" aria-label="Paper size">
          <button
            type="button"
            className={`segmented-btn ${paperSize === 'a4' ? 'active' : ''}`}
            onClick={() => onPaperSizeChange('a4')}
          >
            A4 (210×297mm)
          </button>
          <button
            type="button"
            className={`segmented-btn ${paperSize === 'letter' ? 'active' : ''}`}
            onClick={() => onPaperSizeChange('letter')}
          >
            US Letter (8.5×11in)
          </button>
        </div>

        {/* Zoom Selector */}
        <div className="segmented-control" role="group" aria-label="Canvas zoom">
          <span style={{ padding: '0 4px', display: 'flex', alignItems: 'center' }}>
            <ZoomIn size={14} color="#94a3b8" aria-hidden="true" focusable="false" />
          </span>
          {(['fit', '100', '90', '80'] as ZoomScale[]).map((level) => (
            <button
              key={level}
              type="button"
              className={`segmented-btn ${zoom === level ? 'active' : ''}`}
              onClick={() => onZoomChange(level)}
            >
              {level === 'fit' ? 'Fit' : `${level}%`}
            </button>
          ))}
        </div>

        {/* Margin Guides Toggle */}
        <button
          type="button"
          className={`toolbar-toggle-btn ${showGuides ? 'active' : ''}`}
          onClick={onToggleGuides}
          title="Toggle printable margin guidelines"
        >
          <Eye size={14} aria-hidden="true" focusable="false" />
          <span>Margin Guides</span>
        </button>

        {/* Overflow Status Badge */}
        {isOverflow ? (
          <div className="status-pill warning" title="Content exceeds 1 physical page">
            <AlertTriangle size={14} aria-hidden="true" focusable="false" />
            <span>⚠️ Overflows +{Math.round(overflowAmount)}px</span>
          </div>
        ) : (
          <div className="status-pill ok" title="Fits comfortably within 1 physical page">
            <CheckCircle2 size={14} aria-hidden="true" focusable="false" />
            <span>1 Page Bound OK</span>
          </div>
        )}

        {/* Native Print Action Button */}
        <button
          type="button"
          className="btn-print"
          onClick={handlePrint}
          title="Open native browser print to export vector PDF"
        >
          <Printer size={15} aria-hidden="true" focusable="false" />
          <span>Print to PDF</span>
        </button>
      </div>
    </header>
  );
};
