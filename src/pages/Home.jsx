import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold">&lt;ali shaker /&gt;</h1>
        <p className="lead text-muted">
          Computer Engineer | Odoo Functional & Technical Consultant | React
          Developer
        </p>
      </section>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold mb-3">
                Professional Experience
              </h3>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 fw-semibold text-accent">
                    Logistics & Odoo Consultant
                  </h5>
                  <span className="text-muted small">2024 - 2025</span>
                </div>
                <p className="text-secondary">Results (Riva Fashion)</p>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 fw-semibold">AI Specialist</h5>
                  <span className="text-muted small">2023 - 2024</span>
                </div>
                <p className="text-secondary">PH. Vision</p>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <NavLink
                  to="/projects"
                  className="btn btn-link p-0 text-decoration-none text-accent"
                >
                  View Full Career Timeline →
                </NavLink>

                <a
                  href="/Ali Shaker__CV.pdf"
                  target="_blank"
                  className="btn btn-primary shadow-sm"
                >
                  Download Full CV (.pdf)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0 text-white bg-dark">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold mb-4">Tech Stack</h3>

              <div className="mb-3">
                <h6 className="text-uppercase small fw-bold text-muted">
                  Frontend
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary">React</span>
                  <span className="badge bg-secondary">OWL</span>
                  <span className="badge bg-secondary">Vite</span>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="text-uppercase small fw-bold text-muted">
                  Backend & ERP
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">Odoo 18</span>
                  <span className="badge bg-primary">Python</span>
                  <span className="badge bg-primary">PostgreSQL</span>
                </div>
              </div>

              <div>
                <h6 className="text-uppercase small fw-bold text-muted">
                  DevOps
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-info text-dark">Docker</span>
                  <span className="badge bg-info text-dark">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
