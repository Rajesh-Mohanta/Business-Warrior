import {
  loan,
  loanmng,
  decision,
  marketing,
  risk,
  profit,
  scale,
  antony,
  nick,
  men,
  pam,
  twitter,
  linkedin,
  youtube,
  sign,
} from "../assets/asset";

export const benefits = [
  {
    imgURL: risk,
    label: "Reduce Risk and Fraud",
    subtext:
      " PayPlan includes sophisticated built-in risk and fraud algorithms, ensuring your customers are real and have real capacity to pay back their loans.",
    learn: "Learn More",
  },
  {
    imgURL: profit,
    label: "Become More Profitable",
    subtext:
      "PayPlan's primary focus is increasing lending profitability through automation, efficiency, visibility, security, intelligence, and more.",
    learn: "Learn More",
  },
  {
    imgURL: scale,
    label: "Scale and Grow Your Business",
    subtext:
      "PayPlan's core infrastructure is built on a modern technology stack. You can easily connect to your enterprise or any 3rd party data provider needed.",
    learn: "Learn More",
  },
];

export const navLinks = [
  { href: "payplan", label: "Payplan" },
  { href: "services", label: "Services" },
  { href: "blog", label: "Blog" },
  { href: "contact-us", label: "About" },
  { href: "investor", label: "Investor" },
];
export const statistics = [
  { value: "$300M", label: "Loans Processed" },
  { value: "50+", label: "Total Lenders" },
  { value: "+40%", label: "Lender Profitability" },
  { value: "3.75M", label: "Credit Records" },
];
export const payPlan2 = [
  {
    icon: loan,
    description: "Loan Origination",
  },
  {
    icon: loanmng,
    description: "Loan Management",
  },
  {
    icon: decision,
    description: "Decision Engine",
  },
  {
    icon: marketing,
    description: "Marketing Services",
  },
];

export const aboutCEO = [
  {
    img: men,
    about: "“We’re Fighting for  Lenders Everyday”",
    desc: "Every lender needs an expert software team in their corner.  That’s us.  We’re in the trenches everyday, fighting for lenders to profit through better technology, data and automation.  Our expert lending technology team does the work, so you don’t have to.",
    position: "CEO & Chairman",
    sign1: sign,
    name: "Rhett Doolittle",
  },
];

export const testimonials = [
  {
    imgURL: antony,
    customerName: "Antony Ribas",
    desc: "Owner,TansactionData",
    feedback:
      "Our partnership with Business Warrior allows us to identify and pursue strategic financing opportunities that would be otherwise impossible. Their lending platform completes our offering and allows us to provide client solutions with exponential value. They are beyond experts in the lending space, and always ready to level up our projects with leading edge lending solutions.",
  },
  {
    imgURL: nick,
    customerName: "Nick Curry",
    desc: "VP, CFO, Modern Health",
    feedback:
      "Partnering with Business Warrior back in 2019 has enabled Modern Health Finance to scale our business with confidence beyond our imagination. Because of their robust capabilities & endless commitment to our business, we are now serving thousands of new patients annually & consistently achieving better loan performance than ever before.",
  },
  {
    imgURL: pam,
    customerName: "Pam Perdue",
    desc: "Chief Compliance Officer, Kifi",
    feedback:
      "My team and I had a great experience working with Business Warrior teams on our customized lending application. We received appropriate dedication of resources and time under the contracts we have engaged. The teams interact with ours in the spirit of a collaborative partnership versus merely a 'vendor' who is selling us time and labor.",
  },
];

export const footerLinks = [
  {
    title: "PayPlan",
    links: [
      { name: "Decision Engine", link: "/" },
      { name: "Loan Orientation", link: "/" },
      { name: "Loan Management", link: "/" },
      { name: "Marketing Services", link: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Mission", link: "/" },
      { name: "Values", link: "/" },
      { name: "Founder", link: "/" },
      { name: "Culture", link: "/" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "Recent", link: "/" },
      { name: "Category", link: "/" },
    ],
  },
  {
    title: "Investor",
    links: [
      { name: "Highlights & History", link: "/" },
      { name: "Stock Chart", link: "/" },
      { name: "Mosts Recent Quarter", link: "/" },
      { name: "Most Recent Annual", link: "/" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Privacy Policy", link: "/" },
      { name: "Terms Of Use", link: "/" },
      { name: "Book A Demo", link: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Legal/SLA", link: "/" },
      { name: "Customer Support", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: linkedin, alt: "linkedin logo" },
  { src: twitter, alt: "twitter logo" },
  { src: youtube, alt: "Youtube logo" },
];
