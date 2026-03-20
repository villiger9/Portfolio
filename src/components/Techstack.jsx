export default function Techstack() {
  const stacks = [
    { title: 'Frontend', bg: 'bg-secondary', items: ['React', 'OWL', 'Vite'] },
    {
      title: 'Backend & ERP',
      bg: 'bg-primary',
      items: ['Odoo 18', 'Python', 'PostgreSQL'],
    },
    {
      title: 'DevOps',
      bg: 'bg-info text-dark',
      items: ['Docker', 'Kubernetes'],
    },
  ];

  return (
    <div className="card h-100 shadow-sm border-0 text-white bg-dark">
      <div className="card-body p-4">
        <h3 className="card-title fw-bold mb-4">Tech Stack</h3>
        {stacks.map((stack) => (
          <div key={stack.title} className="mb-3">
            <h6 className="text-uppercase small fw-bold text-muted">
              {stack.title}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span key={item} className={`badge ${stack.bg}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
