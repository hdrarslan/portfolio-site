/**
 * Project card: thumbnail visible (no blur). Hover = static monitor overlay (CSS noise + scanlines) behind title; title on top.
 */
import './ProjectCard.css';

const BASE = import.meta.env.BASE_URL;

export default function ProjectCard({ project, onClick }) {
  const thumbSrc = `${BASE}${project.thumbnail}`;
  return (
    <article className="project-card">
      <button
        type="button"
        className="project-card-button"
        onClick={() => onClick(project)}
        aria-label={`View project: ${project.title}`}
      >
        <img
          src={thumbSrc}
          alt=""
          className="project-card-thumb"
          loading="lazy"
        />
        <span className="project-card-overlay" aria-hidden="true">
          <span className="project-card-static">
            <span className="project-card-scanlines" />
          </span>
          <span className="project-card-title">{project.title}</span>
        </span>
      </button>
    </article>
  );
}
