export default function CertificateCard({
  title,
  provider,
  date,
  duration,
  description,
  skills,
  link,
}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title fw-bold text-accent mb-0">{title}</h5>
            <span className="badge bg-dark text-light">{date}</span>
          </div>
          <h6 className="text-muted mb-3">
            {provider} {duration && `• ${duration}`}
          </h6>
          <p className="card-text small text-secondary flex-grow-1">
            {description}
          </p>
          <div className="mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge border text-secondary me-1 mb-1"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm w-100 mt-auto"
          >
            View Credential ↗
          </a>
        </div>
      </div>
    </div>
  );
}
