/**
 * NEWS ARTICLES DATA
 *
 * Easy-to-edit news articles for the Big Moments website.
 *
 * HOW TO ADD/EDIT NEWS:
 * 1. Each article is an object in the array below
 * 2. Copy an existing article object and modify the fields
 * 3. Make sure to increment the ID number for new articles
 * 4. The imageUrl should be a placeholder URL or your own image
 * 5. Full content supports multiple paragraphs - just add more strings to the array
 *
 * FIELDS:
 * - id: Unique number for each article (increment for new ones)
 * - title: Main headline (keep it concise and impactful)
 * - excerpt: Short preview shown in the card (2-3 sentences)
 * - fullContent: Array of paragraphs for the full article
 * - date: Display date (e.g., "December 15, 2025")
 * - category: Tag for the article (Transfers, Partnerships, Programs, etc.)
 * - imageUrl: Placeholder image URL (will show icon if not loaded)
 */

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string[];
  date: string;
  category: string;
  imageUrl: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Rising Star Signs with Top European Club",
    excerpt: "One of our talented players secures a major move to a top-tier European league, marking a significant milestone in their career journey.",
    fullContent: [
      "Big Moments Sport Management Agency is proud to announce that one of our rising stars has successfully signed with a top-tier European football club, marking a pivotal moment in their professional career.",
      "The transfer represents years of dedicated work, strategic planning, and careful career development. Our team worked closely with the player, their family, and club representatives to ensure all aspects of the move were handled professionally and in the player's best interests.",
      "This move to a top European league provides the player with an incredible platform to showcase their talent on the international stage. The club's excellent training facilities, experienced coaching staff, and competitive environment will be instrumental in the player's continued development.",
      "We are committed to supporting our players through every stage of their career, from initial contract negotiations to settling into their new environment. This transfer exemplifies our agency's dedication to creating life-changing opportunities for talented athletes."
    ],
    date: "December 15, 2025",
    category: "Transfers",
    imageUrl: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "New Partnership Expands Global Network",
    excerpt: "Big Moments announces strategic partnership with leading scouts across three continents, strengthening our global reach and enhancing opportunities for our players.",
    fullContent: [
      "Big Moments Sport Management Agency is excited to announce a groundbreaking partnership with a network of elite scouts spanning Europe, South America, and Africa.",
      "This strategic collaboration significantly enhances our ability to identify emerging talent and create opportunities for players across multiple continents. Our expanded network includes connections with top clubs, academies, and football organizations worldwide.",
      "The partnership strengthens our position as a truly global agency, capable of facilitating international transfers and providing our players with unprecedented access to opportunities in major football markets.",
      "Our scouts bring decades of combined experience and deep relationships within the football community, ensuring we can offer our players the best possible career guidance and opportunities."
    ],
    date: "December 10, 2025",
    category: "Partnerships",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Player Development Program Launches",
    excerpt: "Introducing our comprehensive development initiative focused on mental health, financial literacy, and career transition planning to ensure long-term success.",
    fullContent: [
      "Big Moments is launching a comprehensive Player Development Program designed to support our athletes both on and off the pitch.",
      "The program includes mental health resources, financial literacy workshops, career transition planning, and personal branding guidance. We recognize that success in professional sports extends far beyond match day performance.",
      "Our mental health initiative provides players with access to sports psychologists and counselors who understand the unique pressures of professional athletics. We're committed to ensuring our players have the support they need to thrive mentally and emotionally.",
      "The financial literacy component helps players make informed decisions about their earnings, investments, and long-term financial security. We partner with certified financial advisors who specialize in working with professional athletes.",
      "Career transition planning prepares players for life after professional sports, helping them identify interests, develop new skills, and explore opportunities in coaching, business, media, or other fields."
    ],
    date: "December 5, 2025",
    category: "Programs",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Success Story: From Academy to Professional",
    excerpt: "Following the inspiring journey of a young player who went from youth academy to signing their first professional contract with expert guidance.",
    fullContent: [
      "Today we celebrate an incredible success story that exemplifies the power of dedication, talent, and expert guidance in professional football.",
      "When we first met this player at age 16, they were showing promise in a youth academy but needed strategic guidance to reach the professional level. Our team immediately recognized their potential and began working closely with them and their family.",
      "Over the next three years, we provided comprehensive support including technical training recommendations, exposure to scouts, and guidance through the complex world of professional football. We helped navigate contract negotiations, ensured proper legal representation, and provided mentorship throughout the journey.",
      "Last week, the player signed their first professional contract with a respected club known for developing young talent. This is just the beginning of what we believe will be an outstanding professional career.",
      "This success story reminds us why we do what we do - to help talented young players achieve their dreams and build sustainable careers in professional football."
    ],
    date: "November 28, 2025",
    category: "Success Stories",
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Record-Breaking Transfer Window Success",
    excerpt: "Our agency facilitated multiple high-profile transfers this season, setting new benchmarks for player representation and deal negotiation.",
    fullContent: [
      "This transfer window has been the most successful in Big Moments' history, with multiple high-profile player moves completed across Europe's top leagues.",
      "Our team successfully negotiated contracts for five players moving to premier division clubs, representing a combined transfer value that exceeds all previous records for our agency. These deals showcase our growing reputation and influence in international football.",
      "Each transfer was approached with meticulous attention to detail, ensuring our players secured not only competitive salaries but also optimal playing conditions, development opportunities, and long-term career security.",
      "The success of this transfer window reflects years of relationship building with clubs, scouts, and football executives across Europe. Our reputation for professionalism and integrity has made us a trusted partner for clubs seeking quality players.",
      "As we look ahead to future transfer windows, we remain committed to our core principle: every player is treated as family, not just another entry in a database."
    ],
    date: "November 20, 2025",
    category: "Transfers",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Community Outreach Initiative Kicks Off",
    excerpt: "Big Moments launches community program connecting professional athletes with youth development projects, giving back to grassroots football.",
    fullContent: [
      "Big Moments Sport Management Agency is proud to announce the launch of our Community Outreach Initiative, connecting professional athletes with youth football development programs across multiple regions.",
      "The initiative focuses on giving back to grassroots football by providing young players with access to professional mentorship, training resources, and inspirational role models who have successfully navigated the path to professional football.",
      "Our players will participate in coaching clinics, motivational speaking events, and skill development sessions at youth academies and community programs. We believe professional athletes have a responsibility to inspire and support the next generation.",
      "Beyond football skills, the program emphasizes life skills including education, discipline, teamwork, and perseverance. We want young players to understand that success requires commitment both on and off the pitch.",
      "This initiative reflects our core values and commitment to the broader football community. We're not just building careers - we're building character and giving back to the game that has given us so much."
    ],
    date: "November 15, 2025",
    category: "Community",
    imageUrl: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&h=600&fit=crop",
  },
];
