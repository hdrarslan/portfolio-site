import { useState, useMemo } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Work.css';

const CATEGORY_COLORS = {
  'All': null,
  'Product Design': 'product-design',
  'Photography': 'photography',
  'Social Media': 'branding',
  'Web Design': 'web',
  'Digital Product': 'digital-product',
};

export default function Work({ onProjectClick }) {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(
    () => filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );
  return (
    <section
      id="work"
      className="work"
      data-category={filter === 'All' ? undefined : filter}
      aria-labelledby="work-heading"
    >
      <div className="work-inner">
        <h2 id="work-heading" className="work-title">Work</h2>
        <div className="work-filters" role="group" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`work-filter-btn work-filter-btn--${CATEGORY_COLORS[cat] ?? 'all'} ${filter === cat ? 'work-filter-btn--active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <ul className="work-grid">
          {filtered.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} onClick={onProjectClick} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
