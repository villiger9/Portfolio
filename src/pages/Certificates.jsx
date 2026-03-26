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
    {
      title: 'Data Analysis with Python',
      provider: 'IBM / Cognitive Class',
      date: '2023',
      description:
        'Mastered the data analysis pipeline using Python, including data wrangling with Pandas, numerical computing with NumPy, and predictive modeling using Scikit-learn.',
      skills: ['Python', 'Pandas', 'Data Wrangling', 'Statistical Modeling'],
      link: 'https://courses.cognitiveclass.ai/certificates/4caf49e453d44adfb1b9bb9d89209383',
    },
    {
      title: 'Python 101 for Data Science',
      provider: 'IBM / Cognitive Class',
      date: '2023',
      description:
        'Established a solid foundation in Python programming, covering fundamental data structures, logic control, and the basics of data-driven development using libraries like NumPy.',
      skills: ['Python Fundamentals', 'Data Structures', 'Logic Flow', 'NumPy'],
      link: 'https://courses.cognitiveclass.ai/certificates/8a7b9c3e1a74415fb20c3d6d351478ae',
    },
    {
      title: 'Application Development using Microservices and Serverless',
      provider: 'IBM / Coursera',
      date: '2025',
      description:
        'Developed expertise in modern cloud architectures, focusing on the design and deployment of microservices and serverless functions to build resilient, scalable applications.',
      skills: [
        'Microservices',
        'Serverless',
        'Cloud Architecture',
        'IBM Cloud',
      ],
      link: 'https://coursera.org/verify/1ZU3NDJRT480',
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
