/**
 * ProjectModal — project details. Themed by category (controller colors).
 */
import { useEffect } from 'react';
import './ProjectModal.css';

const ACCENT_MAP = {
  'Product Design': 'var(--color-product)',
  'Photography': 'var(--color-product)',
  'Social Media': 'var(--color-social)',
  'Web Design': 'var(--color-stopmotion)',
  'Digital Product': 'var(--color-shortfilm)',
};

const CASE_STUDY_SECTIONS = [
  ['overview', 'Overview'],
  ['challenge', 'Challenge'],
  ['approach', 'Approach'],
  ['outcome', 'Outcome'],
];

export default function ProjectModal({ project, onClose }) {
  const accent = ACCENT_MAP[project.category] || 'var(--color-product)';

  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-desc"
    >
      <div className="project-modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="project-modal-content" style={{ '--modal-accent': accent }}>
        <div className="project-modal-grain" aria-hidden="true" />
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="project-modal-body">
          <h2 id="project-modal-title" className="project-modal-title">{project.title}</h2>
          <p id="project-modal-meta" className="project-modal-meta">
            {project.category}{project.year ? ` · ${project.year}` : ''}
            {project.tags?.length ? ` · ${project.tags.join(', ')}` : ''}
          </p>
          {project.role && (
            <p className="project-modal-detail">
              <strong>Role</strong> · {project.role}
            </p>
          )}
          {project.client && (
            <p className="project-modal-detail">
              <strong>Client</strong> · {project.client}
            </p>
          )}
          {project.projectType && (
            <p className="project-modal-detail">
              <strong>Project Type</strong> · {project.projectType}
            </p>
          )}
          <p id="project-modal-desc" className="project-modal-desc">{project.description}</p>
          {CASE_STUDY_SECTIONS.some(([field]) => project[field]) && (
            <div className="project-modal-case-study">
              {CASE_STUDY_SECTIONS.map(([field, label]) => project[field] ? (
                <section key={field}>
                  <h3 className="project-modal-section-title">{label}</h3>
                  <p>{project[field]}</p>
                </section>
              ) : null)}
            </div>
          )}
          {project.techStack?.length > 0 && (
            <div className="project-modal-tech-stack">
              <h3 className="project-modal-section-title">Tech Stack</h3>
              <ul className="project-modal-tech-list">
                {project.techStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
          {project.media?.length > 0 && (
            <div className="project-modal-media">
              {project.media.map((item, i) =>
                item.type === 'image' ? (
                  <img key={i} src={item.url} alt={item.alt || project.title} />
                ) : item.type === 'video' ? (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">Watch video</a>
                ) : null
              )}
            </div>
          )}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-link"
            >
              View project
            </a>
          )}
          {project.visitWebsite && (
            <a
              href={project.visitWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-link"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
