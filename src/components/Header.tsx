import React from 'react';
import { Globe, Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '../data/types';

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="resume-header">
      <h1 className="resume-header-name">{name}</h1>
      <div className="resume-header-title">{title}</div>

      <div className="resume-header-contacts">
        {contact.website && (
          <a
            href={contact.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <Globe size={13} className="contact-icon" aria-hidden="true" focusable="false" />
            <span>{contact.website.label}</span>
          </a>
        )}

        {contact.email && (
          <>
            <span className="contact-separator" aria-hidden="true">
              •
            </span>
            <a href={contact.email.href} className="contact-item">
              <Mail size={13} className="contact-icon" aria-hidden="true" focusable="false" />
              <span>{contact.email.label}</span>
            </a>
          </>
        )}

        {contact.github && (
          <>
            <span className="contact-separator" aria-hidden="true">
              •
            </span>
            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Github size={13} className="contact-icon" aria-hidden="true" focusable="false" />
              <span>{contact.github.label}</span>
            </a>
          </>
        )}

        {contact.linkedin && (
          <>
            <span className="contact-separator" aria-hidden="true">
              •
            </span>
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Linkedin size={13} className="contact-icon" aria-hidden="true" focusable="false" />
              <span>{contact.linkedin.label}</span>
            </a>
          </>
        )}

        {contact.phone && (
          <>
            <span className="contact-separator" aria-hidden="true">
              •
            </span>
            <span className="contact-item">
              <Phone size={13} className="contact-icon" aria-hidden="true" focusable="false" />
              <span>{contact.phone}</span>
            </span>
          </>
        )}

        {contact.location && (
          <>
            <span className="contact-separator" aria-hidden="true">
              •
            </span>
            <span className="contact-item">
              <MapPin size={13} className="contact-icon" aria-hidden="true" focusable="false" />
              <span>{contact.location}</span>
            </span>
          </>
        )}
      </div>
    </header>
  );
};
