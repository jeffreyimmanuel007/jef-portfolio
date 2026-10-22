export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  summary: string;
  certifications: string[];
  pdfPath?: string; // e.g. '/resume.pdf'
  skills: {
    category: string;
    items: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }[];
  education?: {
    degree: string;
    institution: string;
    period?: string;
  }[];
}

export const resumeData: ResumeData = {
  name: 'S. Shallini Beaulah',
  title: 'Administrative Executive & Project Coordinator',
  email: 'awsjeffrey2026@gmail.com',
  phone: '7200222441',
  location: 'Chennai 600 059, India',
  pdfPath: '/resume.pdf',
  summary:
    'Dedicated professional aiming to pursue a progressive career and acquire a strong balance of technical and interpersonal skills, climbing the ladder of organizational management while remaining an invaluable asset to esteemed organizations.',
  certifications: [
    'Diploma in Personal Secretaryship',
    'Typewriting – Higher (English & Tamil)',
    'Typewriting – Lower (English & Tamil)',
  ],
  skills: [
    {
      category: 'Administration & Coordination',
      items: 'Front office administration, correspondence, donor relations, record management',
    },
    {
      category: 'Financial & Systems',
      items: 'Petty cash account management, online fee processing, file registry',
    },
    {
      category: 'Communication & Documentation',
      items: 'Report drafting, official sponsorship letters, email management, parent enquiries',
    },
    {
      category: 'Personal Competencies',
      items: 'Rapid adaptability to new systems, collaborative team player, proactive problem solving',
    },
  ],
  experience: [
    {
      role: 'Office Assistant',
      company: 'Zion Matriculation Higher Secondary School, Madambakkam',
      period: 'July 2018 – Present',
      highlights: [
        'Oversee office administration, records management, transfer certificates (TC), and bonafide documentation.',
        'Manage incoming/outgoing communications, parent enquiries, and digital fee payment coordination.',
        'Maintain petty cash accounts and audit logs for administrative expenditures.',
      ],
    },
    {
      role: 'Co-coordinator & Admin In-charge',
      company: 'Spring Matriculation School',
      period: 'June 2017 – March 2019',
      highlights: [
        'Supervised teaching and support staff operations ensuring seamless academic schedule execution.',
        'Handled comprehensive correspondence, administrative typing, and student data filing.',
      ],
    },
    {
      role: 'Programme Assistant',
      company: 'Young Women’s Christian Association (YWCA)',
      period: 'April 2011 – October 2014',
      highlights: [
        'Prepared detailed project reports and correspondence with donor networks to secure vital sponsorships.',
        'Coordinated event logistics, community outreach programmes, and official documentation.',
      ],
    },
    {
      role: 'Front Office cum Admin Staff',
      company: 'Zion Matriculation Higher Secondary School',
      period: 'September 2009 – January 2011',
      highlights: [
        'Managed front office operations, visitor reception, call dispatch, and student enquiry desk.',
      ],
    },
    {
      role: 'Project Secretary',
      company: 'Young Women’s Christian Association (YWCA)',
      period: '1999 – 2007',
      highlights: [
        'Led secretarial support for key community development projects over an 8-year tenure.',
        'Authored donor communications, maintained mailing lists, and managed financial petty cash documentation.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Arts in Economics',
      institution: 'University Qualification',
    },
    {
      degree: 'Diploma in Personal Secretaryship',
      institution: 'Secretarial Certification Board',
    },
  ],
};
