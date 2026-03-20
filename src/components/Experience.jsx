import { NavLink } from 'react-router-dom';

export default function Experience() {
  return (
    <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
      <div className="card-body p-4">
        <h3 className="card-title fw-bold mb-3">Professional Experience</h3>

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
            href="/Portfolio/Ali_Shaker_CV.pdf"
            target="_blank"
            className="btn btn-primary shadow-sm"
          >
            Download Full CV (.pdf)
          </a>
        </div>
      </div>
    </div>
  );
}
