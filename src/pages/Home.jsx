import TechStack from '../components/Techstack';
import ExperiencePreview from '../components/Experience';

export default function Home() {
  return (
    <div className="home container py-5">
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold">&lt;ali shaker /&gt;</h1>
        <p className="lead text-muted">
          Computer Engineer | Odoo Functional & Technical Consultant | React
          Developer
        </p>
      </section>

      <div className="row g-4">
        <div className="col-lg-8">
          <ExperiencePreview />
        </div>
        <div className="col-lg-4">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
