export type Certification = {
  title: string;
  issuer: string;
  type: 'Certification' | 'Training';
};

export const certifications: Certification[] = [
  {
    title: 'Core Java',
    issuer: 'A.E.C.',
    type: 'Certification',
  },
  {
    title: 'Advanced Java',
    issuer: 'A.E.C.',
    type: 'Certification',
  },
  {
    title: 'Practical training in Java, with a project',
    issuer:
      'Engineering Projects (India) Ltd. (EPI), a Government of India Enterprise',
    type: 'Training',
  },
  {
    title: 'Summer training in Plone and Python, with a project',
    issuer:
      'National Informatics Centre (NIC), Government of India, New Delhi',
    type: 'Training',
  },
];
