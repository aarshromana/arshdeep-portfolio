export const SITE = { name:"Arshdeep Singh", title:"Digital Marketing & Growth Specialist",
  tagline:"Social Media • Content • SEO • Performance Marketing • Lead Generation",
  url:"https://aarshromana-arshdeep-portfolio-zcph.vercel.app", // TODO: replace after first Vercel deploy
  email:"aromana1313@gmail.com", linkedin:"https://www.linkedin.com/in/arshdeep-romana-b470b8290/", resume:"/Arshdeep_Singh_Resume.pdf" };

export type Img = { src:string; alt:string; caption?:string };
export type Project = { slug:string; name:string; kind:string; industry:string; services:string[]; badge:string; summary:string; cover?:string;
  overview:string; objective:string; audience:string; role:string; strategy:string[]; execution:string[]; content:string; tools:string[]; results:string; learning:string; gallery?:Img[]; link?:string; contain?:boolean; wide?:boolean; videos?:{title:string;url:string;note?:string}[] };

const NO_RESULTS = "This project demonstrates strategy and execution rather than verified live campaign results.";

export const projects: Project[] = [
{ slug:"mrr-global-services", name:"MRR Global Services", kind:"Social Media & Content Strategy", industry:"Career development / Business services",
  services:["Social media","Content planning","LinkedIn creatives"], badge:"Real brand work", cover:"/work/mrr/dont-just-apply.webp",
  summary:"Career-focused LinkedIn content that turns advice on resumes, interviews and skills into posts people actually stop for.",
  overview:"MRR Global Services helps students, graduates and working professionals with career readiness: resume strategy, interview preparation, personal branding and mentoring. I created social content and LinkedIn creatives to communicate that offer clearly.",
  objective:"Make a service business feel credible and approachable on LinkedIn, and give every post one clear next step.",
  audience:"Students, fresh graduates, career-gap returners and early-career professionals looking for direction.",
  role:"Planned content angles and created the creatives and messaging. (Confirm exact scope with MRR before publishing.)",
  strategy:["Lead with a problem the audience already feels (standing out, career gaps, interview nerves), then show the service as the answer.","Keep one idea per post, with a short headline and a single call to action.","Use a consistent navy and cyan look so the feed reads as one brand."],
  execution:["Designed a set of posts in 4:5 portrait format for LinkedIn feeds.","Wrote the headline, supporting line and CTA for each post.","Built a LinkedIn cover banner that states the brand promise at a glance."],
  content:"Pillars: career readiness, interview preparation, future skills and global opportunities. Formats: single-image posts, a skills infographic and a profile banner.",
  tools:["Canva","LinkedIn","Google Workspace"], results:NO_RESULTS,
  learning:"A post works better when it names one specific worry. 'Career Gap?' gets more attention than a general 'we offer career support', so I now start every brief with the audience's worry.",
  gallery:[
   {src:"/work/mrr/dont-just-apply.webp",alt:"Post: Don't Just Apply. Stand Out.",caption:"Don't Just Apply. Stand Out. Aim: differentiate. Audience: job seekers. CTA: free profile audit."},
   {src:"/work/mrr/interview.webp",alt:"Post: The Interview Starts Before the Interview",caption:"Interview prep angle: preparation starts well before the meeting room. CTA: prepare smarter."},
   {src:"/work/mrr/career-gap.webp",alt:"Post: Career Gap? Your Future Still Has Global Opportunities",caption:"Reassurance angle for people returning to work. CTA: start your career journey."},
   {src:"/work/mrr/future-skills.webp",alt:"Infographic: The Future Skills Employers Want",caption:"Educational infographic on in-demand skills, built to be saved and shared."},
   {src:"/work/mrr/global-doors.webp",alt:"Post: Skills Open Global Doors",caption:"Aspiration angle linking skills to wider opportunities."},
   {src:"/work/mrr/confidence.webp",alt:"Post: Confidence Creates Opportunities",caption:"Confidence angle with a direct 'Build Confidence' CTA."},
   {src:"/work/mrr/cover.webp",alt:"MRR Global Services LinkedIn cover banner",caption:"Profile banner: Training, Guidance, Growth, Success."}] },

{ slug:"smsf-audits", name:"SMSF Audits", kind:"B2B Content, SEO & Paid Search", industry:"Australian accounting / SMSF / Financial services",
  services:["SEO","Google Ads","LinkedIn content"], badge:"Professional experience", cover:"/work/smsf/choose-auditor.webp",
  summary:"Explaining a technical compliance service clearly to trustees and accounting firms, supported by SEO and Google Ads.",
  overview:"SMSF Audits provides independent audits for self-managed super funds in Australia. I worked there as Digital Marketing Executive (June 2025 – Jan 2026), covering SEO, Google Ads and content.",
  objective:"Help accountants and trustees find the firm, understand what an independent audit involves, and feel confident enough to enquire.",
  audience:"SMSF trustees, accounting and financial planning firms, and advisers who outsource audits.",
  role:"SEO strategy, Google Ads management and educational content for LinkedIn and the website.",
  strategy:["Audit topics are technical, so the content explains one rule or question at a time.","Speak to two audiences: trustees ('how do I choose?') and firms ('why outsource?').","Pair content with search and paid campaigns so people can also find the firm when they are looking."],
  execution:["Ran SEO work focused on target keywords.","Managed Google Ads campaigns.","Created educational carousel content, including a 5-tip guide on choosing an approved SMSF auditor, plus a FAQ and a 'what an auditor does and doesn't do' post.","Created offer-led posts for accounting and financial planning firms."],
  content:"Pillars: choosing an auditor, independence and compliance, how the audit works, and offers for firms. Formats: 10-slide LinkedIn carousel, FAQ graphic and single-image offer posts.",
  tools:["Google Ads","Google Analytics","SEO tools","LinkedIn","Canva"],
  results:"Selected results from my Digital Marketing Executive experience at SMSF Audits: improved rankings for 10+ target keywords; managed Google Ads with a monthly budget above $2,000 USD; contributed to a 45% increase in organic traffic over the engagement. These are role-level results and are not tied to any single post shown here.",
  learning:"Simple wording earns trust in a compliance niche. The FAQ and 'does / doesn't do' formats were the easiest to scan, so I would build more content around real questions.",
  gallery:[
   {src:"/work/smsf/choose-auditor.webp",alt:"Carousel cover: How to choose an approved SMSF auditor",caption:"Carousel cover: a 5-tip guide for trustees."},
   {src:"/work/smsf/free-consult.webp",alt:"Carousel tip 1: Start with a free consultation",caption:"Tip 1: questions trustees should ask before hiring."},
   {src:"/work/smsf/asic-independent.webp",alt:"Carousel tip 2: Confirm they're ASIC registered and independent",caption:"Tip 2: registration and independence."},
   {src:"/work/smsf/does-doesnt.webp",alt:"Graphic: What an SMSF auditor does and doesn't do",caption:"Sets expectations: what the audit covers and what it doesn't."},
   {src:"/work/smsf/cta.webp",alt:"Carousel closing slide: Book your free consultation",caption:"Closing slide with one clear CTA."},
   {src:"/work/smsf/flat-fee.webp",alt:"Offer post for accounting and financial planning firms",caption:"Offer-led post aimed at accounting and planning firms."}],
  videos:[
   {title:"ATO scrutiny on SMSFs is increasing, and audit delays",url:"https://lnkd.in/p/gm-g2Taw"},
   {title:"Crypto in SMSFs is no longer a trend — it’s becoming mainstream",url:"https://lnkd.in/p/g6TAiNe9"},
   {title:"Why Strong Documentation Safeguards SMSF Audits",url:"https://lnkd.in/p/gfHymURC"},
   {title:"5 Key Considerations to Find the Best Auditing Firm in Australia",url:"https://lnkd.in/p/g_ijm5Wi"}] },

{ slug:"income-toolkit", name:"Income Toolkit", kind:"Digital Product & Growth Project", industry:"Digital product / Salary & freelancing tools",
  services:["Product thinking","SEO","Content","Analytics"], badge:"My own project", cover:"/work/income-toolkit/cover.webp", link:"https://income-toolkit-sigma.vercel.app/",
  summary:"An India-first set of salary and freelancer calculators, planned around search demand and built, launched and tracked end to end.",
  overview:"Income Toolkit is a free website for India with CTC, take-home pay, HRA and gratuity calculators, a freelance rate calculator, an invoice generator and plain-English guides. It is my own project.",
  objective:"Build a useful, no-signup product for a search-driven audience, and use it to practise the full growth loop: research, build, publish, measure.",
  audience:"Salaried professionals checking CTC vs in-hand pay, and freelancers pricing work and invoicing clients in India.",
  role:"Owner of the idea, keyword and market research, content plan, SEO set-up and analytics. Built in Next.js using AI-assisted development.",
  strategy:["Chose the concept after keyword analysis and product validation.","Organised tools and guides into clear sections (Salary, Freelancer, Guides) that match how people search.","Added a methodology page and plain India-specific wording to build trust."],
  execution:["Launched 6 calculators and 5 guides; calculation logic covered by 88 automated tests.","Set up sitemap, robots, Open Graph tags and Google Search Console.","Added Vercel Analytics and Speed Insights to watch visitors and page speed.","Shared the launch on LinkedIn and fixed issues found in testing."],
  content:"Guides explain the number behind each tool (how CTC is calculated, CTC vs in-hand, HRA, gratuity, pricing freelance work) and link back to the matching calculator.",
  tools:["Next.js","Tailwind CSS","Vercel Analytics","Google Search Console","Google Keyword research"],
  results:"Live and public. It is a new site with early, small traffic, so I am not claiming growth numbers. Search indexing is still building.",
  learning:"A new site needs weeks to earn trust with search engines. Content and internal links come first, and traffic follows slowly.",
  gallery:[
   {src:"/work/income-toolkit/shot-home.webp",alt:"Income Toolkit homepage with headline and calculator cards",caption:"Homepage: one clear promise, two calls to action and the four most-used calculators up front."},
   {src:"/work/income-toolkit/shot-ctc.webp",alt:"Income Toolkit CTC calculator form",caption:"CTC calculator: breaks a CTC into Basic, HRA, PF and special allowance, with optional advanced settings."},
   {src:"/work/income-toolkit/shot-rate.webp",alt:"Income Toolkit freelance rate calculator form",caption:"Freelance rate calculator: works out the hourly, daily and monthly rate needed to hit an income target."}], wide:true },

{ slug:"rentalease-meta-ads", name:"RentalEase", kind:"Meta Ads Campaign Strategy", industry:"Rental / Consumer digital marketing",
  services:["Meta Ads","Audience research","Funnel design"], badge:"Campaign strategy project", cover:"/work/rentalease/logo.webp", contain:true,
  summary:"A lead-generation campaign plan: personas, structure, creative angles and a three-stage funnel.",
  overview:"A Meta Ads strategy project completed during my Digital Marketing internship at Unified Mentor. It is a planned campaign, not a live one.",
  objective:"Generate qualified leads for a rental service at a sensible cost.",
  audience:"Defined through audience research and customer segmentation into high-intent personas.",
  role:"Audience research, segmentation, campaign structure, creative and messaging plan, and funnel design.",
  strategy:["Group people by what they need and how ready they are to act.","Match each ad angle to a funnel stage: problem, benefit, trust and CTA messages.","Plan for a lead objective, with testing built in."],
  execution:["Segmented audiences into personas.","Mapped Campaign → Ad Set → Creative → Landing Page → Lead.","Planned creative angles for each stage: Awareness, Consideration, Conversion."],
  content:"Four message angles: problem-focused, benefit-focused, trust-focused and CTA-focused.",
  tools:["Meta Ads Manager (planning)","Google Workspace"], results:NO_RESULTS,
  learning:"Planning the funnel first made the creative briefs simpler, because every ad had one job." },

{ slug:"brightmark-seo", name:"BrightMark", kind:"SEO Audit Project", industry:"SEO / Website optimisation",
  services:["Keyword research","On-page SEO","Technical review"], badge:"SEO audit / practice project", cover:"/work/brightmark/logo.webp", contain:true,
  summary:"An on-page SEO audit on a demo WordPress site, with before/after changes and an honest scorecard.",
  overview:"BrightMark Digital Agency is a demo site I built on a local WordPress install (XAMPP) with the Yoast SEO plugin, as an MBA / internship project in May 2026. It is a practice project, not a paid client engagement.",
  objective:"Run a full on-page audit, fix what was found and document it the way a client report would.",
  audience:"Small and medium businesses in India looking for digital marketing services (the demo site's audience).",
  role:"Keyword research, competitor research, on-page fixes, internal linking, technical review and the written report.",
  strategy:["Give each page one focus keyphrase based on search intent.","Fix titles, descriptions, headings, URLs, image names and alt text, then link pages to each other.","Report the score honestly, including what is still open."],
  execution:["Researched 15 keywords and mapped them to the 4 pages.","Rewrote meta titles and descriptions and cleaned up URL slugs.","Renamed images, added alt text and added internal links with keyword anchors.","Rebuilt pages with proper headings in the block editor."],
  content:"Result in Yoast: About, Services and Contact pages scored green. The Home page stayed orange because it had only 69 words, so it was listed as the next fix.",
  tools:["WordPress","Yoast SEO","Google Keyword Planner","Excel"],
  results:"Practice project on a local demo site, so there are no live ranking or traffic results. Yoast scores went from unconfigured to green on 3 of 4 pages.",
  learning:"Scores can look perfect and still hide thin pages. A good audit lists what is still weak. For a real site, next steps are a sitemap, schema, page speed and Analytics." }
];
export const bySlug=(s:string)=>projects.find(p=>p.slug===s);

export const experience=[
 {org:"MRR Global Services",role:"CRM Associate",dates:"May 2026 – Jul 2026",pts:["Managed lead tracking and pipeline activity to support timely follow-ups.","Coordinated customer communication across the sales cycle.","Prepared CRM performance reports and tracked key metrics.","Supported workflow and process improvements."]},
 {org:"Unified Mentor Private Limited",role:"Digital Marketing Intern",dates:"Apr 2026 – Jun 2026",pts:["Completed two projects: RentalEase (Meta Ads strategy) and BrightMark (SEO audit).","Worked with mentors on campaign plans, audience research and SEO recommendations."]},
 {org:"SMSF Audits",role:"Digital Marketing Executive",dates:"Jun 2025 – Jan 2026",pts:["SEO strategy: improved rankings for 10+ target keywords.","Managed Google Ads with a monthly budget above $2,000 USD.","Contributed to a 45% increase in organic traffic."]},
 {org:"NJ Group",role:"Sales Intern",dates:"May 2024 – Jul 2024",pts:["Helped with client onboarding and mutual fund sales campaigns.","Supported customer communication and daily operations."]}];

export const skills:Record<string,string[]>={
 "Digital Marketing":["Marketing strategy","Social media marketing","Content marketing","Lead generation","Campaign management"],
 "Performance Marketing":["Google Ads","Meta Ads","Campaign planning","Audience research"],
 "SEO":["Keyword research","On-page SEO","Technical SEO basics","Website optimisation","Competitor analysis"],
 "CRM & Analytics":["CRM operations","Lead management","Google Analytics","Reporting","Microsoft Excel"],
 "Web & Creative":["WordPress","Canva","Google Workspace","Basic web technologies"]};
