import CertificateCard from '../components/CertificateCard';

export default function Certificates() {
  const certs = [
    {
      title: 'Odoo Development Training',
      provider: 'EB Tech',
      date: '2024',
      duration: '55 Hours',
      description:
        'Comprehensive workshop covering module development, backend logic, and UI customization for real world ERP solutions.',
      skills: ['Odoo Dev', 'Backend Logic', 'UI Customization'],
      link: '/Portfolio/OdooDevEBTech.jpg',
    },
    {
      title: 'Advanced Cost Accounting Odoo 18',
      provider: 'EB Tech',
      date: '2025',
      duration: '22 Hours',
      description:
        'Advanced specialization in Odoo 18 Accounting & Inventory modules. Focused on analytic accounting, landed costs, and inventory valuation for financial accuracy in ERP systems.',
      skills: ['Accounting', 'Inventory Valuation', 'Odoo 18'],
      link: '/Portfolio/masteringCostAccountingOdoo18EBTech.jpg',
    },
    {
      title: 'Full-Stack JavaScript',
      provider: 'IBM / Coursera',
      date: '2025',
      description:
        'Professional certification focused on developing frontend apps with React and backend services with Node.js and Express.',
      skills: ['React', 'Node.js', 'Express'],
    },
    {
      title: 'Containers, Docker & Kubernetes',
      provider: 'IBM / Coursera',
      date: '2025',
      description:
        'Developed proficiency in Docker containerization and cloud-native orchestration using Kubernetes and OpenShift for scalable application deployment.',
      skills: ['Docker', 'Kubernetes', 'Cloud Native'],
      link: '/Portfolio/CourseraDockerKubernetes.pdf',
    },
  ];

  return (
    <div className="container py-5">
      <header className="mb-5">
        <h2 className="display-5 fw-bold">Certifications</h2>
        <p className="text-muted">
          Professional training and technical specializations
        </p>
      </header>

      <div className="row">
        {certs.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
}
