export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectType: string;
  initials: string;
  rating: number;
}

export interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  technologies: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Oakley transformed our online presence completely. The new website is fast, beautiful, and has already brought in new customers. Couldn't be happier.",
    name: "Jordan M.",
    role: "Owner",
    company: "CD Entertainment",
    projectType: "Web Development",
    initials: "JM",
    rating: 5,
  },
  {
    id: 2,
    quote: "Professional, responsive, and genuinely cares about results. Oakley delivered our project on time and exceeded every expectation we had.",
    name: "Sarah K.",
    role: "Operations Manager",
    company: "O.R.E. Plumbing",
    projectType: "Custom Application",
    initials: "SK",
    rating: 5,
  },
  {
    id: 3,
    quote: "The attention to detail and technical expertise is remarkable. Our booking system works flawlessly and saves us hours every week.",
    name: "Mike T.",
    role: "Studio Manager",
    company: "44th Street Tattoo",
    projectType: "Business Consulting",
    initials: "MT",
    rating: 5,
  },
  {
    id: 4,
    quote: "Working with Oakley was a seamless experience from start to finish. He understood our vision and built exactly what we needed.",
    name: "Emily R.",
    role: "Founder",
    company: "Rosebud Quilting",
    projectType: "Web Design",
    initials: "ER",
    rating: 5,
  },
  {
    id: 5,
    quote: "Our new website has dramatically improved how clients find and contact us. The SEO work alone has paid for the project many times over.",
    name: "Lisa E.",
    role: "Realtor",
    company: "Kristina Eck Real Estate",
    projectType: "SEO & Web Development",
    initials: "LE",
    rating: 5,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "CD Entertainment",
    industry: "Entertainment / Event Services",
    challenge: "No web presence; all bookings handled via phone. Losing clients to competitors with modern websites.",
    solution: "Built a full Next.js website with responsive design, contact forms, photo gallery, and service showcase pages.",
    results: [
      { metric: "Online Inquiries", value: "+300%" },
      { metric: "Page Load Speed", value: "< 1.2s" },
      { metric: "Mobile Traffic", value: "68%" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
  },
  {
    id: 2,
    client: "O.R.E. Plumbing",
    industry: "Home Services",
    challenge: "Manual scheduling and quoting processes consuming 10+ hours per week of admin time.",
    solution: "Developed a custom quoting and scheduling application with .NET Core backend and PostgreSQL database.",
    results: [
      { metric: "Admin Hours Saved", value: "10+/week" },
      { metric: "Quote Turnaround", value: "80% faster" },
      { metric: "Customer Satisfaction", value: "4.9★" },
    ],
    technologies: [".NET Core", "PostgreSQL", "React", "Azure"],
  },
];
