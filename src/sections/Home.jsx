import './Home.css';

const BASE = import.meta.env.BASE_URL;
const PROFILE_IMAGE = `${BASE}assets/me/about me.png`;

export default function Home() {
  return (
    <section id="home" className="home" aria-label="About Me">
      <div className="home-inner">
        <div className="home-image-wrap">
          <img src={PROFILE_IMAGE} alt="About Hidir Arslan" className="home-image" />
        </div>
      </div>
    </section>
  );
}
