export interface NotificationItem {
  id: string;
  title: string;
  category: 'Examination Notifications' | 'Government Job Notifications' | 'Application Updates' | 'Hall Ticket Updates' | 'Examination Dates' | 'Results' | 'Academy Announcements';
  publishedDate: string;
  status: 'Urgent' | 'New' | 'Important' | 'General';
  description: string;
  officialSourceOrDepartment: string;
  documentUrlOrReference?: string;
  actionLabel: string;
  isOfficialDemonstration: boolean;
  importantDates?: {
    label: string;
    value: string;
  }[];
}

export const NOTIFICATION_CATEGORIES = [
  'All Notifications',
  'Examination Notifications',
  'Government Job Notifications',
  'Application Updates',
  'Hall Ticket Updates',
  'Examination Dates',
  'Results',
  'Academy Announcements',
] as const;

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'TNPSC Annual Planner & Upcoming Group 1 & Group 2 Notification Schedule',
    category: 'Examination Notifications',
    publishedDate: 'Official Annual Release',
    status: 'Important',
    description: 'Tamil Nadu Public Service Commission has outlined the tentative examination schedule for upcoming state service recruitments. Aspirants are advised to structure prelims and mains preparation according to official gazette milestones.',
    officialSourceOrDepartment: 'Tamil Nadu Public Service Commission (TNPSC)',
    actionLabel: 'View Schedule Details',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Official Portal', value: 'tnpsc.gov.in' },
      { label: 'Status', value: 'Active Annual Calendar' },
      { label: 'Advisory', value: 'Verify One Time Registration (OTR) validity' },
    ],
  },
  {
    id: 'notif-2',
    title: 'TNUSRB Sub-Inspector of Police (Taluk & AR) Recruitment Notification & Guidelines',
    category: 'Government Job Notifications',
    publishedDate: 'Official Board Announcement',
    status: 'New',
    description: 'Tamil Nadu Uniformed Services Recruitment Board (TNUSRB) releases details for direct recruitment of Sub-Inspectors of Police. Candidates must satisfy prescribed educational, age, and physical standard metrics.',
    officialSourceOrDepartment: 'TN Uniformed Services Recruitment Board (TNUSRB)',
    actionLabel: 'Check Eligibility & Syllabus',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Official Portal', value: 'tnusrb.tn.gov.in' },
      { label: 'Minimum Qualification', value: 'Any Recognized Bachelor Degree' },
      { label: 'Exam Mode', value: 'OMR Written Test followed by PET/PMT' },
    ],
  },
  {
    id: 'notif-3',
    title: 'TAF IAS Academy State-Level Free Scholarship Mock Test Across All 92 Branches',
    category: 'Academy Announcements',
    publishedDate: 'Upcoming Weekend Event',
    status: 'Urgent',
    description: 'Annual scholarship entrance evaluation conducted across all TAF centers for aspiring TNPSC and UPSC students. Top scorers receive up to 100% fee waiver for classroom and hostel residential batches in Tenkasi and Thanjavur.',
    officialSourceOrDepartment: 'TAF Academic Council',
    actionLabel: 'Register at Nearest Center',
    isOfficialDemonstration: false,
    importantDates: [
      { label: 'Mode', value: 'Classroom OMR Test' },
      { label: 'Eligible Aspirants', value: 'College Final Years & Graduates' },
      { label: 'Centres Participating', value: 'All Active Branches Statewide' },
    ],
  },
  {
    id: 'notif-4',
    title: 'UPSC Civil Services Preliminary Examination Official Application Portal Alert',
    category: 'Application Updates',
    publishedDate: 'UPSC Notification Gazette',
    status: 'Important',
    description: 'Union Public Service Commission invites online applications for Civil Services Examination (CSE) and Indian Forest Service (IFS). Candidates must review OTR guidelines and center choices early to secure preferred examination centers.',
    officialSourceOrDepartment: 'Union Public Service Commission (UPSC)',
    actionLabel: 'UPSC Portal Notice',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Official Portal', value: 'upsconline.nic.in' },
      { label: 'Age Criteria', value: '21 to 32 Years (Reservations apply)' },
      { label: 'Language Options', value: 'English & Hindi (Mains in Tamil allowed)' },
    ],
  },
  {
    id: 'notif-5',
    title: 'TNPSC Group 4 Hall Ticket Download & Examination Center Protocol Instructions',
    category: 'Hall Ticket Updates',
    publishedDate: 'Candidate Advisory Bulletin',
    status: 'New',
    description: 'Candidates appearing for TNPSC Combined Civil Services IV must download official memo of admission with application number and date of birth. Strictly observe reporting time, valid black ballpoint pen instructions, and prohibited electronic items.',
    officialSourceOrDepartment: 'TNPSC Controller of Examinations',
    actionLabel: 'View Candidate Guidelines',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Mandatory Requirement', value: 'Downloaded Hall Ticket + Valid Photo ID' },
      { label: 'Entry Cutoff', value: 'Gates close strictly 30 mins prior to exam' },
    ],
  },
  {
    id: 'notif-6',
    title: 'Staff Selection Commission (SSC) CGL Tier-1 Examination Schedule & Shift Guidelines',
    category: 'Examination Dates',
    publishedDate: 'Staff Selection Commission Release',
    status: 'General',
    description: 'Computer Based Examination (CBT) dates released for Combined Graduate Level. Aspirants must verify city intimation slip and adhere to biometric attendance requirements at designated exam centers.',
    officialSourceOrDepartment: 'Staff Selection Commission (SSC)',
    actionLabel: 'Check Exam Schedule',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Official Portal', value: 'ssc.gov.in' },
      { label: 'Test Mode', value: 'Computer Based Test (Multiple Shifts)' },
    ],
  },
  {
    id: 'notif-7',
    title: 'Railway Recruitment Board (RRB) NTPC & Technician Merit Lists & Cutoff Analysis',
    category: 'Results',
    publishedDate: 'RRB Regional Portal Update',
    status: 'General',
    description: 'Southern Railway RRB Chennai publishes normalized cut-off marks and document verification candidate lists. TAF IAS Academy congratulates our selected students who cleared both CBT stages.',
    officialSourceOrDepartment: 'Railway Recruitment Board (Chennai)',
    actionLabel: 'Check Analysis & Cutoffs',
    isOfficialDemonstration: true,
    importantDates: [
      { label: 'Stage', value: 'Document Verification & Medical Examination' },
      { label: 'TAF Support', value: 'Free Guidance for Document Verification' },
    ],
  },
];
