'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [showTools, setShowTools] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null);

  const incomePaths = [
    {
      id: 'content',
      title: 'AI Content Creation',
      subtitle: 'Blogs, Articles & Copywriting',
      potential: '$2000-5000/month',
      time: '2-4 weeks to first income',
      difficulty: 'Beginner',
      icon: '✍️'
    },
    {
      id: 'design',
      title: 'AI Design Services',
      subtitle: 'Logos, Graphics & Social Media',
      potential: '$2000-4000/month',
      time: '3-5 weeks to first income',
      difficulty: 'Beginner-Intermediate',
      icon: '🎨'
    },
    {
      id: 'video',
      title: 'AI Video Production',
      subtitle: 'YouTube, Shorts & Faceless Channels',
      potential: '$2000-8000/month',
      time: '4-8 weeks to first income',
      difficulty: 'Intermediate',
      icon: '🎬'
    },
    {
      id: 'coding',
      title: 'AI-Assisted Development',
      subtitle: 'Web Apps, Automation & Tools',
      potential: '$2000-10000/month',
      time: '2-6 weeks to first income',
      difficulty: 'Intermediate-Advanced',
      icon: '💻'
    },
    {
      id: 'consulting',
      title: 'AI Consulting & Training',
      subtitle: 'Help Businesses Implement AI',
      potential: '$2000-6000/month',
      time: '3-6 weeks to first income',
      difficulty: 'Intermediate',
      icon: '🎯'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Multi-Service',
      subtitle: 'Combine Multiple AI Skills',
      potential: '$2000-12000/month',
      time: '4-8 weeks to first income',
      difficulty: 'Intermediate',
      icon: '🚀'
    }
  ];

  const freeAITools = {
    writing: [
      { name: 'ChatGPT Free', use: 'Content writing, brainstorming, editing', limit: 'Unlimited with rate limits' },
      { name: 'Claude.ai', use: 'Long-form content, analysis, research', limit: 'Free tier available' },
      { name: 'Perplexity AI', use: 'Research, fact-checking, citations', limit: 'Limited free searches/day' },
      { name: 'Google Bard', use: 'Content creation, Google integration', limit: 'Free unlimited' },
      { name: 'Grammarly Free', use: 'Grammar & spell checking', limit: 'Basic features free' },
      { name: 'QuillBot Free', use: 'Paraphrasing, summarizing', limit: '125 words/time' }
    ],
    design: [
      { name: 'DALL-E (Bing)', use: 'Image generation via Bing Image Creator', limit: '15 boosts/day, then slower' },
      { name: 'Leonardo.ai', use: 'Professional AI images', limit: '150 tokens/day free' },
      { name: 'Canva Free', use: 'Design templates with AI features', limit: 'Basic templates free' },
      { name: 'Playground AI', use: 'Image generation', limit: '500 images/day' },
      { name: 'Craiyon', use: 'Basic AI images', limit: 'Unlimited with ads' },
      { name: 'Microsoft Designer', use: 'Social media graphics', limit: 'Free with Microsoft account' },
      { name: 'Photopea', use: 'Image editing (Photoshop alternative)', limit: 'Completely free' }
    ],
    video: [
      { name: 'Runway Gen-2 Free', use: 'AI video generation', limit: '125 credits free' },
      { name: 'CapCut', use: 'Video editing with AI features', limit: 'Free desktop version' },
      { name: 'DaVinci Resolve', use: 'Professional video editing', limit: 'Free version fully featured' },
      { name: 'D-ID Free Tier', use: 'AI avatar videos', limit: '5 minutes/month' },
      { name: 'ElevenLabs Free', use: 'AI voiceovers', limit: '10k characters/month' },
      { name: 'Pictory Free Trial', use: 'Text to video', limit: 'Limited trial' },
      { name: 'Loom Free', use: 'Screen recording', limit: '25 videos, 5 min each' }
    ],
    coding: [
      { name: 'GitHub Copilot (Students)', use: 'Code completion', limit: 'Free for students/OSS' },
      { name: 'ChatGPT', use: 'Code generation, debugging', limit: 'Free with limits' },
      { name: 'Replit AI', use: 'Coding with built-in IDE', limit: 'Free tier available' },
      { name: 'Cursor Free Trial', use: 'AI-powered code editor', limit: 'Limited free usage' },
      { name: 'Vercel', use: 'Free hosting', limit: 'Generous free tier' },
      { name: 'GitHub Pages', use: 'Static site hosting', limit: 'Unlimited for public repos' },
      { name: 'Netlify', use: 'App hosting', limit: 'Generous free tier' }
    ],
    marketing: [
      { name: 'ChatGPT', use: 'Marketing copy, strategies', limit: 'Free with limits' },
      { name: 'HubSpot Free CRM', use: 'Client management', limit: 'Free forever plan' },
      { name: 'Mailchimp Free', use: 'Email marketing', limit: '500 contacts' },
      { name: 'Buffer Free', use: 'Social media scheduling', limit: '3 channels' },
      { name: 'Google Analytics', use: 'Traffic tracking', limit: 'Completely free' },
      { name: 'Notion Free', use: 'Project management', limit: 'Generous free plan' }
    ]
  };

  const detailedPlans = {
    content: {
      overview: 'Leverage AI to create high-quality content at scale for clients who need blogs, articles, website copy, and marketing materials.',
      weekByWeek: [
        {
          week: 'Week 1',
          title: 'Setup & Skill Building',
          tasks: [
            'Create profiles on Upwork, Fiverr, and Freelancer.com',
            'Master ChatGPT prompts for different content types (blog posts, product descriptions, email copy)',
            'Learn to use Claude for long-form content (2000+ words)',
            'Study Perplexity AI for research and fact-checking',
            'Build a portfolio: Write 5 sample articles in different niches (tech, health, business, lifestyle, finance)',
            'Use Canva Free to design a simple portfolio website or PDF',
            'Join Facebook groups: "Freelance Writers Den", "Bloggers Helping Bloggers"'
          ],
          aiWorkflow: 'Use ChatGPT for outlines → Claude for drafting → Perplexity for fact-checking → Grammarly for editing',
          earnings: '$0'
        },
        {
          week: 'Week 2',
          title: 'Launch Services',
          tasks: [
            'Create 3-5 service packages: Basic blog post ($25-50), Premium article ($75-150), Content bundle ($200-400)',
            'List services on Upwork (bid 10-15 jobs daily), Fiverr (3 gigs), Freelancer.com',
            'Reach out to 20 small businesses via email offering free sample article',
            'Join content mills as backup: Textbroker, WriterAccess (for quick smaller gigs)',
            'Start a LinkedIn presence: Post AI content tips daily',
            'Cold outreach: Find 30 businesses with poor blog content and pitch improvements',
            'Optimize profiles with keywords: "AI-powered content", "SEO blog writing", "fast turnaround"'
          ],
          aiWorkflow: 'Create templates in ChatGPT for different content types, build a prompt library',
          earnings: '$100-400'
        },
        {
          week: 'Week 3-4',
          title: 'Scale & Optimize',
          tasks: [
            'Aim for 5-10 clients, $200-400 each/month for regular content',
            'Develop content systems: Create 50+ reusable prompts for common topics',
            'Offer content packages: "4 blogs/month" ($300), "8 blogs/month" ($550), "12 blogs/month" ($800)',
            'Upsell existing clients: Add social media posts, email newsletters',
            'Build case studies from successful projects',
            'Request testimonials and use them on all platforms',
            'Increase rates by 20-30% for new clients',
            'Create a lead magnet: "Free Blog Content Audit" to attract clients'
          ],
          aiWorkflow: 'Batch content creation: Use AI to write multiple articles in one session, edit later',
          earnings: '$800-1500'
        },
        {
          week: 'Week 5-8',
          title: 'Hit $2000+ Target',
          tasks: [
            'Maintain 8-15 recurring clients at $150-300/month each',
            'Specialize in 2-3 niches (e.g., SaaS, ecommerce, health tech) for premium rates',
            'Create content templates that reduce writing time by 50%',
            'Subcontract overflow work to other writers (managed by you)',
            'Launch a mini-course: "How I use AI for content" (sell for $27-47 using Gumroad)',
            'Start email list offering weekly AI content tips',
            'Raise rates to $100-200 per article for new premium clients',
            'Apply to higher-paying platforms: Contently, Skyword (if accepting)',
            'Network with agency owners who need white-label content writers'
          ],
          aiWorkflow: 'Advanced: Chain multiple AI tools (GPT-4 outline → Claude draft → Perplexity research → final polish)',
          earnings: '$2000-4000'
        }
      ],
      pricing: {
        services: [
          '500-word blog post: $50-75',
          '1000-word article: $100-150',
          '2000-word long-form: $200-350',
          'Product descriptions (10 items): $75-120',
          'Email sequence (5 emails): $150-300',
          'Website copy (5 pages): $400-800',
          'Content bundle (4 blogs/month): $300-500'
        ],
        calculation: 'To reach $2000/month: 4 clients × $500/month OR 10 clients × $200/month OR 20 one-time projects × $100'
      },
      successTips: [
        'Speed is your advantage: Deliver in 24-48 hours while maintaining quality',
        'Always fact-check AI output with Perplexity before delivering',
        'Develop a unique voice: Train AI with examples of the client\'s existing content',
        'Offer unlimited revisions (AI makes this easy) to build trust',
        'Create content calendars for clients to show strategic thinking',
        'Bundle services: Sell blog + social media posts + email newsletter as package',
        'Use Notion to organize all client briefs, prompts, and content',
        'Build a swipe file of high-performing headlines and structures'
      ]
    },
    design: {
      overview: 'Use AI image generators and design tools to offer logo design, social media graphics, marketing materials, and branding services.',
      weekByWeek: [
        {
          week: 'Week 1-2',
          title: 'Master AI Design Tools',
          tasks: [
            'Daily practice: Generate 20-30 images in Leonardo.ai exploring different styles',
            'Master DALL-E via Bing: Understand prompt engineering for consistent results',
            'Learn Canva deeply: Templates, AI features, brand kits',
            'Study design principles: Color theory, typography, composition (free YouTube courses)',
            'Create portfolio: 15-20 pieces (logos, social posts, flyers, business cards)',
            'Use Photopea to edit and refine AI-generated images',
            'Join design communities: r/logo_critique, Dribbble (for inspiration)',
            'Study successful Fiverr/Upwork design gigs to understand market demand'
          ],
          aiWorkflow: 'Leonardo.ai for base images → Photopea for refinement → Canva for final layouts',
          earnings: '$0'
        },
        {
          week: 'Week 3',
          title: 'Launch Design Services',
          tasks: [
            'Create Fiverr gigs: Logo design ($25-100), Social media pack ($40-80), Business card ($20-40)',
            'List on Upwork, 99designs contests, DesignCrowd',
            'Offer introductory rates: First 10 clients get 30% off',
            'Join Facebook groups for small business owners and entrepreneurs',
            'Create Instagram showcasing your AI designs (post 2-3 daily)',
            'Reach out to 50 small businesses offering free logo redesign (then upsell)',
            'Create design packages: "Startup Branding Bundle" ($150-300)'
          ],
          aiWorkflow: 'Build a prompt library for different design styles (minimalist, vintage, modern, etc.)',
          earnings: '$200-600'
        },
        {
          week: 'Week 4-6',
          title: 'Scale & Specialize',
          tasks: [
            'Focus on high-demand services: Podcast cover art, YouTube thumbnails, Instagram templates',
            'Create 5-10 template packs to sell on Etsy, Creative Market ($5-20 each)',
            'Offer subscription services: "5 social posts weekly" ($200/month)',
            'Partner with content creators who need consistent graphics',
            'Build case studies showcasing before/after transformations',
            'Raise rates: Logo $75-200, Full branding $400-800',
            'Develop niche expertise: Real estate, coaches, podcasters, or ecommerce',
            'Create Reels/TikToks showing AI design process (viral potential)'
          ],
          aiWorkflow: 'Batch production: Generate 50 variations, pick best 10, refine to perfection',
          earnings: '$1000-1800'
        },
        {
          week: 'Week 7-10',
          title: 'Hit $2000+ Target',
          tasks: [
            'Maintain 10-15 recurring clients at $150-300/month each',
            'Sell design templates passively on Etsy/Creative Market ($200-500/month passive)',
            'Offer white-label design services to marketing agencies',
            'Create a mini-course: "AI Design for Non-Designers" ($27-47)',
            'Build an email list with free design resources weekly',
            'Expand to print-on-demand: Use AI designs on Redbubble, Merch by Amazon (passive income)',
            'Network with web developers who need design partners',
            'Premium services: Full brand identity packages ($800-1500)'
          ],
          aiWorkflow: 'Advanced: Create consistent brand systems using AI + manual refinement',
          earnings: '$2000-4000'
        }
      ],
      pricing: {
        services: [
          'Logo design: $50-200',
          'Social media pack (10 posts): $75-150',
          'Business card design: $30-60',
          'Flyer/poster: $40-80',
          'Instagram template pack: $50-100',
          'YouTube thumbnail (10 pack): $80-150',
          'Full branding package: $500-1500',
          'Monthly social media graphics: $200-400'
        ],
        calculation: 'To reach $2000: 8 full branding projects × $250 OR 15 clients × $133/month OR mix of one-time + recurring'
      },
      successTips: [
        'Fast delivery wins: Offer 24-hour turnaround for rush orders (+50% fee)',
        'Always provide 3-5 initial concepts to show range',
        'Learn to refine AI outputs manually - this separates you from pure AI users',
        'Build niche authority: Become "the AI design person" for a specific industry',
        'Offer unlimited revisions (AI makes this feasible) to reduce buyer anxiety',
        'Create styled portfolios showing cohesive brand systems, not just individual pieces',
        'Use client testimonials prominently - social proof is everything',
        'Package services: Don\'t sell a logo alone, sell logo + business card + social media headers'
      ]
    },
    video: {
      overview: 'Create YouTube channels, short-form content, or offer video editing services using AI tools for scripting, voiceovers, and editing.',
      weekByWeek: [
        {
          week: 'Week 1-2',
          title: 'Learn AI Video Stack',
          tasks: [
            'Master CapCut: Learn all AI features (auto captions, effects, templates)',
            'Practice with DaVinci Resolve for advanced editing',
            'Explore Runway Gen-2: Generate AI video clips with your free credits',
            'Master ElevenLabs: Create 10+ different voiceover styles',
            'Study successful faceless YouTube channels in your niche',
            'Learn ChatGPT for script writing (hooks, storytelling, CTAs)',
            'Create 5 test videos combining AI tools',
            'Choose your path: Own channel vs. client services (or both)'
          ],
          aiWorkflow: 'ChatGPT scripts → ElevenLabs voiceover → Stock footage/AI clips → CapCut editing',
          earnings: '$0'
        },
        {
          week: 'Week 3-4',
          title: 'Launch Content or Services',
          tasks: [
            'PATH A (Own Channel): Launch YouTube channel in profitable niche (finance, tech reviews, productivity, AI tools)',
            'PATH B (Services): List video editing on Fiverr ($50-200/video), Upwork',
            'Create 8-12 videos (3 per week) to test thumbnails and topics',
            'Use AI for thumbnails: Leonardo.ai + Canva',
            'Optimize titles and descriptions with ChatGPT-generated SEO keywords',
            'Start TikTok/Instagram Reels repurposing the same content',
            'For services: Offer YouTube channel management ($300-600/month)',
            'Join creator communities to find clients needing editors'
          ],
          aiWorkflow: 'Build video templates in CapCut for consistency and speed',
          earnings: '$0-400 (services) or $0-50 (AdSense - building)'
        },
        {
          week: 'Week 5-8',
          title: 'Scale Production',
          tasks: [
            'PATH A: Increase to 5-7 videos/week using AI automation, apply for monetization (1000 subs + 4000 watch hours)',
            'PATH B: Handle 5-10 clients at $400-800/month each for regular video editing',
            'Create content systems: Batch-produce 10 scripts in one AI session',
            'Use AI to analyze top-performing videos and replicate patterns',
            'Expand to YouTube Shorts (easier to go viral, faster growth)',
            'For services: Offer complete video production (scripting + editing + thumbnails)',
            'Build a portfolio website with before/after examples',
            'Network with coaches, course creators, and agencies needing video content'
          ],
          aiWorkflow: 'Advanced: Automate as much as possible - script to final video in under 2 hours',
          earnings: '$800-2000'
        },
        {
          week: 'Week 9-12',
          title: 'Hit $2000+ Target',
          tasks: [
            'PATH A: Monetized channel earning $500-1000/month + affiliate links + sponsorships ($1000-2000)',
            'PATH B: 4-8 clients × $300-600/month for ongoing video work',
            'HYBRID: Run your channel + take selective high-paying client work',
            'Create video courses: "Faceless YouTube with AI" ($27-97) on Gumroad',
            'Offer video consulting: "YouTube channel audits" ($100-200/audit)',
            'Scale with templates: Sell CapCut templates on Etsy',
            'Build email list for passive income opportunities',
            'Explore sponsored content for your channel ($100-500/video depending on niche)'
          ],
          aiWorkflow: 'Full pipeline: Idea generation → Scripting → Voiceover → B-roll → Editing all AI-powered',
          earnings: '$2000-5000'
        }
      ],
      pricing: {
        services: [
          'Video editing (10-15 min): $100-250',
          'YouTube Shorts editing (10 videos): $80-150',
          'Complete video production: $200-500',
          'Monthly package (4 videos): $400-800',
          'Thumbnail design (10 pack): $50-100',
          'Channel management: $500-1500/month',
          'Video ad creation: $150-400'
        ],
        calculation: 'To reach $2000: Own channel ($800) + 3 clients × $400 OR 6 clients × $333/month OR pure channel earnings + digital products'
      },
      successTips: [
        'For own channel: Consistency beats perfection - publish regularly',
        'Faceless channels work: Finance tips, tech tutorials, motivation, AI news',
        'Study viral patterns: Analyze top videos in your niche and replicate structure',
        'Hook is everything: First 3 seconds determine if people watch',
        'Shorts strategy: Easy path to 1000 subs, then pivot to long-form',
        'For services: Fast turnaround (24-48 hours) is your competitive advantage',
        'Always include captions: AI makes this instant with CapCut',
        'Build a system: The more repeatable your process, the more you can scale'
      ]
    },
    coding: {
      overview: 'Build websites, web apps, automation tools, and custom solutions using AI coding assistants even with minimal programming experience.',
      weekByWeek: [
        {
          week: 'Week 1-2',
          title: 'AI Coding Bootcamp',
          tasks: [
            'Master ChatGPT for code generation: Practice building 5 small projects',
            'Learn to use Replit AI: Build and deploy simple web apps',
            'Understand HTML, CSS, JavaScript basics (free: FreeCodeCamp, The Odin Project)',
            'Study how to prompt AI for code: Be specific, provide context, iterate',
            'Build portfolio projects: Todo app, landing page, calculator, API integration, dashboard',
            'Learn Git basics and create GitHub account',
            'Deploy projects to Vercel, Netlify, GitHub Pages for free',
            'Join communities: r/webdev, Dev.to, Discord coding groups'
          ],
          aiWorkflow: 'Describe what you want → AI generates code → You test and refine → Deploy',
          earnings: '$0'
        },
        {
          week: 'Week 3',
          title: 'Launch Coding Services',
          tasks: [
            'Create Upwork/Fiverr profiles: "AI-Powered Web Development"',
            'Services: Landing pages ($100-300), simple websites ($300-800), automation scripts ($150-400)',
            'Reach out to small businesses needing websites (local restaurants, contractors, coaches)',
            'Offer free website to one business for testimonial and case study',
            'List on Facebook Marketplace, local business groups',
            'Create templates for common requests (business landing page, portfolio site, booking form)',
            'Build relationships with designers who need development partners',
            'Cold email 50 businesses with outdated websites offering modernization'
          ],
          aiWorkflow: 'Use AI to generate boilerplate, then customize for client needs',
          earnings: '$300-800'
        },
        {
          week: 'Week 4-6',
          title: 'Scale & Specialize',
          tasks: [
            'Focus on high-demand niches: Automation tools, Chrome extensions, business dashboards',
            'Build SaaS tools: Simple apps solving specific problems (waitlist builders, link-in-bio tools, calculators)',
            'Offer no-code solutions with AI: Build in Replit, deploy instantly',
            'Create WordPress sites with AI-generated custom plugins',
            'Partner with marketing agencies needing development work',
            'Raise rates: Landing pages $200-500, custom apps $800-2000',
            'Develop specialization: "Shopify customization", "API integrations", "automation expert"',
            'Build in public: Share projects on Twitter/LinkedIn to attract clients'
          ],
          aiWorkflow: 'Build faster by combining AI code generation + templates + your custom tweaks',
          earnings: '$1200-2500'
        },
        {
          week: 'Week 7-10',
          title: 'Hit $2000+ Target',
          tasks: [
            'Maintain 3-6 clients with recurring work ($400-800/month each)',
            'Launch your own micro-SaaS: Charge $9-29/month (target 50-100 users)',
            'Sell code templates on Gumroad, Etsy ($20-100 each)',
            'Offer monthly retainers: "Website maintenance + updates" ($300-600/month)',
            'Create technical content showing your expertise (leads to inbound clients)',
            'Build agency relationships for white-label development',
            'Premium services: Custom web apps ($2000-5000) - take 1-2 per month',
            'Teach: Create "Build with AI" course ($47-197) or offer consulting'
          ],
          aiWorkflow: 'Advanced: Use AI to generate documentation, write tests, debug issues',
          earnings: '$2000-6000'
        }
      ],
      pricing: {
        services: [
          'Landing page: $200-600',
          'Business website (5-10 pages): $800-2000',
          'Custom web app: $1500-5000',
          'Chrome extension: $300-1000',
          'API integration: $200-800',
          'Automation script: $150-500',
          'Website maintenance: $300-600/month',
          'Shopify customization: $400-1200'
        ],
        calculation: 'To reach $2000: 1 big project ($2000) OR 4 medium projects × $500 OR 3 retainer clients × $666/month + small projects'
      },
      successTips: [
        'You don\'t need to be an expert - AI fills knowledge gaps',
        'Focus on solving problems, not writing perfect code',
        'Always test thoroughly before delivery - AI code can have bugs',
        'Learn to read and debug code so you can fix AI mistakes',
        'Build a "components library" of AI-generated reusable code',
        'Offer ongoing support - recurring revenue is key',
        'Specialize in frameworks AI knows well: React, Next.js, Vue',
        'Document everything: Use AI to generate documentation for clients',
        'Price based on value delivered, not hours worked'
      ]
    },
    consulting: {
      overview: 'Position yourself as an AI implementation expert, helping businesses integrate AI tools, train staff, and optimize workflows.',
      weekByWeek: [
        {
          week: 'Week 1-2',
          title: 'Build AI Expertise',
          tasks: [
            'Master 20+ AI tools across categories (writing, design, video, automation, analysis)',
            'Study business use cases: How different industries can use AI',
            'Create case studies: Document how YOU use AI to save time/money',
            'Learn prompt engineering deeply - this is your core skill',
            'Build a "AI Transformation Framework" for businesses',
            'Study common business problems: Customer service, content creation, data entry, hiring',
            'Join LinkedIn: Post daily about AI business applications',
            'Research competitors: See what AI consultants are offering and charging'
          ],
          aiWorkflow: 'Use AI to research AI (meta!) - analyze industry trends, build knowledge base',
          earnings: '$0'
        },
        {
          week: 'Week 3',
          title: 'Launch Consulting Offer',
          tasks: [
            'Create clear offers: "AI Audit" ($300-500), "AI Implementation" ($1000-2000), "AI Training" ($500-1000)',
            'Build a simple website showcasing your services (use AI to build it)',
            'Reach out to 100 small-medium businesses via LinkedIn, email',
            'Offer free "AI Opportunity Assessment" (30-min call) to 10 businesses',
            'Create lead magnet: "10 AI Tools Every Business Should Use" PDF',
            'Join business owner groups on Facebook, LinkedIn',
            'Partner with marketing agencies, business coaches who can refer clients',
            'Publish articles: "How [Industry] Can Save 10 Hours/Week with AI"'
          ],
          aiWorkflow: 'Use AI to create all your marketing materials, proposals, email templates',
          earnings: '$500-1500'
        },
        {
          week: 'Week 4-6',
          title: 'Deliver & Scale',
          tasks: [
            'Conduct 5-10 audits, converting 50-70% to full implementations',
            'Develop standard packages: Starter ($500), Professional ($1500), Enterprise ($3000)',
            'Create training materials: Video courses, documentation, prompt libraries',
            'Offer ongoing support retainers: $300-800/month per client',
            'Build case studies from successful implementations',
            'Speak at local business events about AI (free marketing)',
            'Create templates for common implementations (save time)',
            'Upsell existing clients: Start with content, expand to design, video, automation'
          ],
          aiWorkflow: 'Systematize everything - use AI to create client onboarding, training docs, follow-up sequences',
          earnings: '$1500-3000'
        },
        {
          week: 'Week 7-10',
          title: 'Hit $2000+ Target',
          tasks: [
            'Maintain 5-8 retainer clients at $300-800/month each',
            'Complete 2-3 implementation projects monthly ($1000-2000 each)',
            'Launch group training: "AI for Business" workshops ($97-297/person, 10-20 people)',
            'Create online course: Sell on Teachable, Gumroad ($197-497)',
            'Build affiliate income: Recommend AI tools (many have affiliate programs)',
            'Expand to corporate: One corporate training gig ($2000-5000) quarterly',
            'Create "AI Newsletter" with business tips - monetize with sponsors/affiliates',
            'Scale with recorded trainings instead of always live consulting'
          ],
          aiWorkflow: 'Use AI to create course content, newsletters, client deliverables at scale',
          earnings: '$2000-8000'
        }
      ],
      pricing: {
        services: [
          'AI Audit (2-3 hours): $300-600',
          'Implementation project: $1000-3000',
          'Staff training (half-day): $800-1500',
          'Monthly retainer (ongoing support): $400-1000',
          'Custom AI workflow setup: $800-2000',
          'Group workshop: $97-297/person',
          'Done-for-you AI systems: $2000-5000'
        ],
        calculation: 'To reach $2000: 4 retainer clients × $500 OR 2 implementations × $1000 OR 1 big project + retainers'
      },
      successTips: [
        'You\'re selling transformation, not tools - focus on ROI',
        'Quantify everything: "Save 15 hours/week" or "Reduce costs by 40%"',
        'Niche down: "AI for real estate agents" or "AI for law firms" (easier to market)',
        'Build authority through content: Blog, LinkedIn, YouTube',
        'Start with small wins: Help them automate one task, then expand',
        'Create before/after workflows showing dramatic improvements',
        'Offer money-back guarantee to reduce risk (you\'re using free AI, so low risk)',
        'Partner with industry insiders who can introduce you to their networks',
        'Keep learning: New AI tools launch weekly, stay current'
      ]
    },
    hybrid: {
      overview: 'Combine multiple AI skills to create diverse income streams and maximize earning potential while spreading risk.',
      weekByWeek: [
        {
          week: 'Week 1-3',
          title: 'Multi-Skill Foundation',
          tasks: [
            'Master core skills: Content writing, basic design, AI consulting',
            'Build portfolio covering 3 services: Writing samples, design work, AI implementation case',
            'Create "AI Agency" brand offering full-service AI-powered solutions',
            'Study how to package services together for higher value',
            'Set up infrastructure: Website, email, project management (all free tools)',
            'Define your stack: Which AI tools for which services',
            'Practice cross-selling: Content + graphics, or consulting + implementation',
            'Join communities for all your service areas'
          ],
          aiWorkflow: 'Build systems that let you switch between service types efficiently',
          earnings: '$0'
        },
        {
          week: 'Week 4-5',
          title: 'Launch Multi-Service Offer',
          tasks: [
            'Create tiered packages combining services: "Content + Graphics" ($400), "Website + Content" ($800), "Full AI Marketing" ($1500)',
            'List all services on freelance platforms',
            'Reach out to small businesses offering "complete AI solutions"',
            'Position as "one-stop shop" for AI-powered business growth',
            'Offer "AI Starter Package": Audit + 4 blog posts + 10 social graphics + 2 automation workflows ($1200-2000)',
            'Cold outreach targeting businesses that need multiple services',
            'Build case study showing end-to-end transformation'
          ],
          aiWorkflow: 'Use AI to manage projects: ChatGPT for strategy, different tools for execution',
          earnings: '$800-2000'
        },
        {
          week: 'Week 6-8',
          title: 'Scale Multiple Streams',
          tasks: [
            'Maintain 4-6 clients with bundled services ($400-800/month each)',
            'Launch own products: Templates, courses, tools ($200-500/month passive)',
            'Start YouTube channel teaching AI business skills (future income)',
            'Subcontract specialized work: Keep project management, outsource execution',
            'Create "AI Membership": Monthly training + resources ($27-47/month, target 20-50 members)',
            'Develop industry-specific solutions you can replicate',
            'Build referral network: Partner with complementary service providers',
            'Focus on retainers over one-time projects'
          ],
          aiWorkflow: 'Systematize with AI: Project templates, client communications, content creation all automated',
          earnings: '$2000-4000'
        },
        {
          week: 'Week 9-12',
          title: 'Optimize & Expand',
          tasks: [
            'Diversify income: 40% client services, 30% retainers, 20% products, 10% other',
            'Raise rates: You\'re no longer a beginner, charge accordingly',
            'Create signature offer: Premium package at $2000-3000 (sell 1-2/month)',
            'Scale with team: Use AI to manage freelancers/contractors',
            'Launch second revenue stream: Course, membership, or SaaS tool',
            'Build email list: 1000+ subscribers for promotions',
            'Create content marketing machine: AI-powered blog, newsletter, social',
            'Achieve $3000-5000/month to create buffer and room for growth'
          ],
          aiWorkflow: 'Advanced: Full business operations powered by AI - marketing, sales, delivery, support',
          earnings: '$3000-7000'
        }
      ],
      pricing: {
        services: [
          'Bronze Package: $400-600 (content + social graphics)',
          'Silver Package: $800-1200 (website + content + graphics)',
          'Gold Package: $1500-2500 (full AI transformation)',
          'Monthly retainer: $500-1500 (ongoing multi-service support)',
          'Custom projects: $1000-5000',
          'Training + Implementation: $1500-3000',
          'Membership: $27-97/month'
        ],
        calculation: 'To reach $2000: 2 Gold packages OR 4 Silver packages OR 4 retainers × $500 OR mix of all'
      },
      successTips: [
        'Your advantage: You can solve multiple problems, not just one',
        'Bundle creatively: "Blog + Graphics" costs you little more time with AI',
        'Cross-sell aggressively: Every client is a candidate for multiple services',
        'Build systems early: Document everything so you can delegate later',
        'Focus on transformation: Show how all services work together',
        'Create "done-for-you" packages at premium prices',
        'Don\'t spread too thin: Master 3-4 skills deeply, not 10 shallowly',
        'Use AI to manage complexity: Project management, tracking, communications',
        'Build passive income streams to stabilize monthly revenue',
        'Stay flexible: If one income stream slows, others compensate'
      ]
    }
  };

  const universalTools = [
    {
      category: 'Project Management',
      tools: [
        'Notion (free) - Organize clients, projects, prompts',
        'Trello (free) - Visual project tracking',
        'Google Workspace (free) - Docs, Sheets, Drive'
      ]
    },
    {
      category: 'Communication',
      tools: [
        'Gmail (free)',
        'Calendly (free) - Scheduling',
        'Zoom (40 min free) - Client calls',
        'Loom (free tier) - Video messages'
      ]
    },
    {
      category: 'Finance',
      tools: [
        'PayPal (free account) - Receive payments',
        'Stripe (free account) - Payment processing',
        'Wave (free) - Invoicing & accounting',
        'Google Sheets (free) - Financial tracking'
      ]
    },
    {
      category: 'Marketing',
      tools: [
        'LinkedIn (free) - Networking & content',
        'Twitter (free) - Build audience',
        'Facebook Groups (free) - Find clients',
        'Beacons.ai (free) - Link in bio',
        'Mailchimp (free 500 contacts) - Email list'
      ]
    }
  ];

  const criticalSuccessFactors = [
    {
      factor: 'Speed to Market',
      description: 'Launch services within 7-14 days. AI allows rapid skill acquisition - use this advantage. Don\'t wait for perfection.',
      action: 'Set deadline: "First paid client by Day 14"'
    },
    {
      factor: 'Volume Strategy',
      description: 'Early days = volume game. Apply to 15-20 jobs daily. Reach out to 20-30 prospects weekly. Some will convert.',
      action: 'Daily quota: 15 applications + 10 cold emails'
    },
    {
      factor: 'Pricing Strategy',
      description: 'Start lower to get testimonials (not free!), raise rates every 2-4 weeks as you build portfolio and confidence.',
      action: 'First 5 clients: -30% rate. Clients 6-10: Full rate. Client 11+: +20% rate'
    },
    {
      factor: 'Quality Control',
      description: 'AI generates fast, but YOU ensure quality. Always review, fact-check, and add human touch. This separates pros from amateurs.',
      action: 'Checklist: AI generates → You review → Fact-check → Polish → Deliver'
    },
    {
      factor: 'System Building',
      description: 'Build reusable systems from day one. Templates, prompts, workflows. Systematization = scalability.',
      action: 'Create: Prompt library, email templates, project templates, pricing calculator'
    },
    {
      factor: 'Recurring Revenue',
      description: 'One-time projects are income rollercoaster. Prioritize retainers and subscriptions for stable $2000/month.',
      action: 'Goal: 50%+ income from recurring sources by Month 3'
    },
    {
      factor: 'Niche Authority',
      description: 'Generalist = competing with millions. Specialist = unique positioning. Pick 2-3 niches within your service.',
      action: 'Choose: Industry niche (SaaS, health, real estate) + Service niche (blogs, logos, videos)'
    },
    {
      factor: 'Continuous Learning',
      description: 'AI evolves weekly. New tools launch constantly. Spend 1 hour daily testing new AI tools and techniques.',
      action: 'Subscribe: Product Hunt, AI newsletters, YouTube AI channels, Reddit r/artificial'
    }
  ];

  const monthlyBreakdown = {
    conservative: {
      title: 'Conservative Path ($2000/month)',
      breakdown: [
        '10 clients × $200/month retainer = $2000',
        'OR 8 small projects × $250 = $2000',
        'OR 4 medium projects × $500 = $2000',
        'OR 2 large projects × $1000 = $2000'
      ],
      workload: '15-25 hours/week with AI efficiency',
      timeline: '6-10 weeks to reach $2000'
    },
    balanced: {
      title: 'Balanced Path ($2500-3500/month)',
      breakdown: [
        '5 retainer clients × $300 = $1500',
        '3 project clients × $400 = $1200',
        'Passive income (templates, affiliates) = $300',
        'Total = $3000/month'
      ],
      workload: '20-30 hours/week',
      timeline: '8-12 weeks to reach $3000'
    },
    aggressive: {
      title: 'Aggressive Path ($4000-6000/month)',
      breakdown: [
        '5 premium retainers × $600 = $3000',
        '2 large projects × $1000 = $2000',
        'Digital products/courses = $500',
        'Total = $5500/month'
      ],
      workload: '30-40 hours/week',
      timeline: '10-16 weeks to reach $5000'
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>💰 AI Income Challenge</h1>
        <p className={styles.subtitle}>Complete Plan to Earn $2000/Month with 100% Free AI Tools</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>$0</div>
            <div className={styles.statLabel}>Investment Required</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>6-12 weeks</div>
            <div className={styles.statLabel}>To $2000/month</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Free AI Tools</div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📊 Choose Your Income Path</h2>
        <p className={styles.sectionDescription}>
          Select the path that matches your skills, interests, and goals. Each has detailed week-by-week execution plans.
        </p>
        <div className={styles.pathGrid}>
          {incomePaths.map((path) => (
            <div
              key={path.id}
              className={`${styles.pathCard} ${selectedPath === path.id ? styles.pathCardSelected : ''}`}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              <div className={styles.pathIcon}>{path.icon}</div>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathSubtitle}>{path.subtitle}</p>
              <div className={styles.pathMeta}>
                <div className={styles.pathMetaItem}>
                  <strong>Potential:</strong> {path.potential}
                </div>
                <div className={styles.pathMetaItem}>
                  <strong>Timeline:</strong> {path.time}
                </div>
                <div className={styles.pathMetaItem}>
                  <strong>Difficulty:</strong> <span className={styles.difficulty}>{path.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedPath && detailedPlans[selectedPath] && (
        <section className={styles.detailedPlan}>
          <h2 className={styles.sectionTitle}>🗺️ Detailed Execution Plan: {incomePaths.find(p => p.id === selectedPath)?.title}</h2>

          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>{detailedPlans[selectedPath].overview}</p>
          </div>

          <div className={styles.timeline}>
            <h3>Week-by-Week Action Plan</h3>
            {detailedPlans[selectedPath].weekByWeek.map((week, index) => (
              <div key={index} className={styles.weekCard}>
                <div
                  className={styles.weekHeader}
                  onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
                >
                  <div>
                    <h4>{week.week}: {week.title}</h4>
                    <span className={styles.weekEarnings}>Target Earnings: {week.earnings}</span>
                  </div>
                  <span className={styles.expandIcon}>{expandedWeek === index ? '▼' : '▶'}</span>
                </div>
                {expandedWeek === index && (
                  <div className={styles.weekContent}>
                    <h5>Daily Tasks & Actions:</h5>
                    <ul className={styles.taskList}>
                      {week.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                    <div className={styles.workflow}>
                      <strong>AI Workflow:</strong> {week.aiWorkflow}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.pricingSection}>
            <h3>💵 Pricing Guide</h3>
            <div className={styles.pricingGrid}>
              <div>
                <h4>Service Pricing</h4>
                <ul className={styles.pricingList}>
                  {detailedPlans[selectedPath].pricing.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Path to $2000/Month</h4>
                <p className={styles.calculation}>{detailedPlans[selectedPath].pricing.calculation}</p>
              </div>
            </div>
          </div>

          <div className={styles.successTips}>
            <h3>🎯 Critical Success Tips</h3>
            <ul className={styles.tipsList}>
              {detailedPlans[selectedPath].successTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛠️ Complete Free AI Tool Arsenal</h2>
        <button
          className={styles.toggleButton}
          onClick={() => setShowTools(!showTools)}
        >
          {showTools ? 'Hide Tools' : 'Show All Free AI Tools'}
        </button>

        {showTools && (
          <div className={styles.toolsGrid}>
            {Object.entries(freeAITools).map(([category, tools]) => (
              <div key={category} className={styles.toolCategory}>
                <h3 className={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className={styles.toolsList}>
                  {tools.map((tool, i) => (
                    <div key={i} className={styles.toolCard}>
                      <div className={styles.toolName}>{tool.name}</div>
                      <div className={styles.toolUse}>{tool.use}</div>
                      <div className={styles.toolLimit}>{tool.limit}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⚙️ Universal Business Tools (All Free)</h2>
        <div className={styles.universalTools}>
          {universalTools.map((cat, i) => (
            <div key={i} className={styles.universalCategory}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.tools.map((tool, j) => (
                  <li key={j}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🎯 8 Critical Success Factors</h2>
        <div className={styles.factorsGrid}>
          {criticalSuccessFactors.map((factor, i) => (
            <div key={i} className={styles.factorCard}>
              <h3>{factor.factor}</h3>
              <p>{factor.description}</p>
              <div className={styles.factorAction}>
                <strong>Action:</strong> {factor.action}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📈 Monthly Income Scenarios</h2>
        <div className={styles.scenariosGrid}>
          {Object.values(monthlyBreakdown).map((scenario, i) => (
            <div key={i} className={styles.scenarioCard}>
              <h3>{scenario.title}</h3>
              <div className={styles.scenarioBreakdown}>
                {scenario.breakdown.map((item, j) => (
                  <div key={j} className={styles.breakdownItem}>{item}</div>
                ))}
              </div>
              <div className={styles.scenarioMeta}>
                <div><strong>Workload:</strong> {scenario.workload}</div>
                <div><strong>Timeline:</strong> {scenario.timeline}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🚀 Quick Start Checklist</h2>
        <div className={styles.checklist}>
          <h3>Week 1 Essential Actions:</h3>
          <ul className={styles.checklistItems}>
            <li>✅ Create accounts on ChatGPT, Claude, Perplexity, Leonardo.ai</li>
            <li>✅ Set up freelance profiles on Upwork + Fiverr + Freelancer.com</li>
            <li>✅ Build 3-5 portfolio samples using AI tools</li>
            <li>✅ Choose your primary income path from the options above</li>
            <li>✅ Join 5-10 relevant Facebook/LinkedIn groups where clients hang out</li>
            <li>✅ Set up payment methods: PayPal + Stripe</li>
            <li>✅ Create simple portfolio site using free tools (Notion, Carrd, or AI-built)</li>
            <li>✅ Write your "pitch" explaining what you do and how AI helps you deliver faster/better</li>
            <li>✅ Set daily goals: 15 job applications OR 20 cold outreach messages</li>
            <li>✅ Block 2-3 hours daily for learning AI tools and building skills</li>
          </ul>
        </div>
      </section>

      <section className={styles.finalSection}>
        <h2 className={styles.sectionTitle}>💡 Final Thoughts</h2>
        <div className={styles.finalThoughts}>
          <div className={styles.thoughtCard}>
            <h3>Reality Check</h3>
            <p>This is completely achievable with free AI tools, BUT it requires consistent daily action. AI is the leverage, but you are the operator. Expect 15-30 hours/week of focused work, especially in the first month.</p>
          </div>
          <div className={styles.thoughtCard}>
            <h3>The AI Advantage</h3>
            <p>You can now compete with experienced professionals because AI fills skill gaps. A beginner with AI can outperform a 5-year veteran without it in speed and scale. Use this window of opportunity.</p>
          </div>
          <div className={styles.thoughtCard}>
            <h3>Scaling Beyond $2000</h3>
            <p>Once you hit $2000/month, the next $3000 is easier. You have proof, testimonials, and systems. Many using this approach reach $5000-10000/month within 6-12 months by combining services, creating products, and building teams.</p>
          </div>
          <div className={styles.thoughtCard}>
            <h3>Most Important Advice</h3>
            <p><strong>START TODAY.</strong> Not Monday. Not next month. Today. Create one profile. Make one portfolio piece. Send one message. The gap between those who succeed and those who don't is simply taking action.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Built with AI • 100% Free Tools • Your $2000/Month Journey Starts Now</p>
        <p className={styles.footerNote}>
          Remember: Every expert started as a beginner. Every successful freelancer sent their first cold email. Every six-figure creator published their first piece of content. Your turn.
        </p>
      </footer>
    </div>
  );
}
