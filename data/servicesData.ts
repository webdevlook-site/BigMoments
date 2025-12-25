/**
 * SERVICES DATA
 *
 * Extended service information for the Big Moments website.
 * Each service includes detailed information shown in the expanded modal view.
 */

export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  iconName: string;
  detailedDescription: string[];
  keyPoints: string[];
  approach: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 1,
    title: "Career Management",
    description:
      "Ensuring the best possible training and working conditions to help you make the most of your talent.",
    iconName: "Briefcase",
    detailedDescription: [
      "Our career management service is built on a foundation of personalized attention and strategic planning. We work closely with each player to understand their unique goals, strengths, and aspirations.",
      "From contract negotiations to transfer management, we handle every aspect of your professional career with meticulous attention to detail. Our extensive network across European football ensures you have access to the best opportunities.",
      "We provide ongoing support throughout your career journey, from your first professional contract to navigating career transitions at every stage.",
    ],
    keyPoints: [
      "Strategic career planning and goal setting",
      "Contract negotiation and review",
      "Transfer management and club liaison",
      "Performance tracking and development planning",
      "Long-term career roadmap development",
    ],
    approach:
      "We believe every player's career path is unique. Our approach combines data-driven insights with personal mentorship to create opportunities that align with your individual goals and playing style.",
  },
  {
    id: 2,
    title: "Legal Support",
    description:
      "Comprehensive legal support and advice ensuring your rights and contracts are always secure.",
    iconName: "Scale",
    detailedDescription: [
      "Navigate the complex world of professional football contracts with confidence. Our legal team specializes in sports law and understands the unique challenges athletes face.",
      "We provide comprehensive contract review, ensuring every clause protects your interests and secures your future. From image rights to termination clauses, we cover every detail.",
      "Our legal support extends beyond contracts to include dispute resolution, regulatory compliance, and protection of your professional interests across all jurisdictions.",
    ],
    keyPoints: [
      "Contract drafting and negotiation",
      "Legal compliance and regulatory guidance",
      "Dispute resolution and arbitration support",
      "Image rights and intellectual property protection",
      "Employment law and player rights advocacy",
    ],
    approach:
      "We partner with leading sports law firms across Europe to ensure you receive expert legal counsel. Every contract is thoroughly reviewed to protect your interests and secure favorable terms.",
  },
  {
    id: 3,
    title: "Medical & Rehab",
    description:
      "Crucial medical support for development and rehabilitation to maintain peak physical condition.",
    iconName: "HeartPulse",
    detailedDescription: [
      "Your physical health is paramount to your career success. We coordinate with top medical professionals and rehabilitation specialists to ensure you receive world-class care.",
      "Our medical network includes sports physicians, physiotherapists, nutritionists, and rehabilitation experts who specialize in football-specific injuries and conditioning.",
      "We provide proactive injury prevention strategies, rapid response to injuries, and comprehensive rehabilitation programs designed to get you back to peak performance safely and efficiently.",
    ],
    keyPoints: [
      "Access to elite sports medicine professionals",
      "Injury prevention and monitoring programs",
      "Rehabilitation coordination and support",
      "Nutritional planning and guidance",
      "Mental wellness and sports psychology",
    ],
    approach:
      "Prevention is better than cure. We work with medical experts to create personalized wellness programs that keep you performing at your best while minimizing injury risk.",
  },
  {
    id: 4,
    title: "Financial Planning",
    description:
      "Expert investment advice and financial planning to secure your wealth and future prosperity.",
    iconName: "TrendingUp",
    detailedDescription: [
      "Professional athletes face unique financial opportunities and challenges. Our financial planning services are specifically tailored to the needs of football professionals.",
      "We work with certified financial advisors who specialize in athlete wealth management, helping you make informed decisions about savings, investments, and long-term financial security.",
      "From tax optimization to retirement planning, we ensure your financial future is as successful as your playing career.",
    ],
    keyPoints: [
      "Personalized wealth management strategies",
      "Tax planning and optimization across jurisdictions",
      "Investment portfolio development",
      "Retirement planning and pension advice",
      "Financial education and literacy programs",
    ],
    approach:
      "We believe financial education is empowerment. Our advisors take time to explain every decision, ensuring you understand and control your financial future.",
  },
  {
    id: 5,
    title: "PR & Branding",
    description:
      "Strategic PR representation, marketing, and branding opportunities to grow your personal image.",
    iconName: "Mic2",
    detailedDescription: [
      "In modern football, your personal brand is as important as your performance on the pitch. We help you build and protect a powerful personal brand that opens doors beyond your playing career.",
      "Our PR and marketing team manages your public image, social media presence, and media relations, ensuring you're represented professionally and authentically.",
      "We identify and negotiate sponsorship deals, endorsement opportunities, and commercial partnerships that align with your values and enhance your profile.",
    ],
    keyPoints: [
      "Personal brand development and strategy",
      "Social media management and content creation",
      "Media training and press relations",
      "Sponsorship and endorsement negotiations",
      "Crisis management and reputation protection",
    ],
    approach:
      "Authenticity builds lasting brands. We help you communicate your genuine personality and values while maximizing commercial opportunities that feel right for you.",
  },
  {
    id: 6,
    title: "Life Transition",
    description:
      "Dedicated planning for life after professional sport and easing the transition into your next chapter.",
    iconName: "GraduationCap",
    detailedDescription: [
      "Every playing career eventually comes to an end, but your success doesn't have to. We help you plan and prepare for a fulfilling life beyond professional football.",
      "Our transition planning begins early in your career, helping you develop skills, interests, and connections that will serve you long after you hang up your boots.",
      "Whether you're interested in coaching, business, media, or other fields, we provide guidance, networking opportunities, and practical support to help you succeed in your next chapter.",
    ],
    keyPoints: [
      "Career transition planning and counseling",
      "Education and skills development programs",
      "Coaching license and qualification support",
      "Business and entrepreneurship guidance",
      "Networking and mentorship opportunities",
    ],
    approach:
      "Your playing career is just the beginning. We help you leverage your football experience and build new skills that create opportunities for long-term success and fulfillment.",
  },
];
