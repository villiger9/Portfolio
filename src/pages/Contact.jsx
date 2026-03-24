export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Left Column: Get in Touch Text */}
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold mb-4">Let's Connect</h2>
          <p className="lead text-muted mb-4">
            Whether you're interested in discussing **Odoo implementations**,
            **React development**, or just want to say hi, feel free to reach
            out!
          </p>

          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <span className="text-accent me-3">📍</span>
              <span>Based in Syria (Available for Remote Work)</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <span className="text-accent me-3">✉️</span>
              <a
                href="mailto:ali.shaker93@gmail.com"
                className="text-decoration-none text-body"
              >
                ali.shaker93@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <span className="text-accent me-3">📞</span>
              <span>+963 959 990 030 </span>
            </div>
          </div>
        </div>

        {/* Right Column: Social Links / Action Buttons */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm bg-body-tertiary p-4">
            <h4 className="fw-bold mb-4">Socials</h4>

            <a
              href="https://linkedin.com/in/alishaker93"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark text-white w-100 mb-3 d-flex align-items-center justify-content-center"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/villiger9"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark text-white w-100 mb-3 d-flex align-items-center justify-content-center"
            >
              GitHub
            </a>

            <a
              href="/Portfolio/Ali_Shaker_CV.pdf"
              target="_blank"
              className="btn btn-primary w-100 mt-2"
            >
              Download Full CV (.pdf)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
