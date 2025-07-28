export const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Career Development Expert",
    expertise: ["Career Counseling", "Resume Building", "Interview Prep"],
    bio: "Career coach with 10+ years experience helping students find their dream jobs.",
    rating: 3.5,
    price: 50,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "Dr. Sarah Johnson is a certified career coach with over a decade of experience in helping students and professionals navigate their career paths. She specializes in resume building, interview preparation, and career transition strategies.\n\nWith a PhD in Organizational Psychology from Stanford University, Sarah has helped over 500 clients land jobs at top companies including Google, McKinsey, and Amazon. Her approach combines practical job search strategies with personalized coaching to help clients discover their unique strengths and career paths.",
    availability: ["Monday 9am-12pm", "Wednesday 2pm-5pm", "Friday 10am-1pm"],
    sessionsCompleted: 245,
    experienceYears: 12,
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Mark Williams",
    title: "Senior Software Engineer at Google",
    expertise: ["Tech Interviews", "Coding Skills", "System Design"],
    bio: "Senior software engineer at Google, passionate about teaching coding.",
    rating: 3.9,
    price: 75,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "Mark is a senior software engineer at Google with 8 years of experience in the tech industry. He specializes in helping students prepare for technical interviews at FAANG companies and improving their problem-solving skills.\n\nMark has conducted over 300 mock interviews and helped candidates land offers at Google, Facebook, Amazon, and other top tech companies. His teaching approach focuses on breaking down complex problems into manageable steps and developing efficient coding habits.",
    availability: ["Tuesday 3pm-6pm", "Thursday 4pm-7pm", "Saturday 9am-12pm"],
    sessionsCompleted: 189,
    experienceYears: 8,
    languages: ["English", "Mandarin"]
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "College Admissions Consultant",
    expertise: ["College Applications", "Study Abroad", "Personal Statements"],
    bio: "Education consultant helping students get into top universities worldwide.",
    rating: 4.7,
    price: 60,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "Priya has helped over 300 students get into their dream universities across the US, UK, and Canada. She specializes in crafting compelling personal statements and navigating the complex college application process.\n\nAs a former admissions officer at Harvard University, Priya has insider knowledge of what top universities look for in applicants. Her clients have been accepted to Ivy League schools, Oxford, Cambridge, and other prestigious institutions with significant scholarships.",
    availability: ["Monday 10am-2pm", "Tuesday 1pm-5pm", "Thursday 3pm-7pm", "Saturday 9am-1pm"],
    sessionsCompleted: 312,
    experienceYears: 9,
    languages: ["English", "Hindi", "French"]
  },
  {
    id: 4,
    name: "David Chen",
    title: "Financial Analyst at Goldman Sachs",
    expertise: ["Finance Careers", "Investment Banking", "Financial Modeling"],
    bio: "Investment banking expert helping students break into finance.",
    rating: 4.9,
    price: 85,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "David is a financial analyst at Goldman Sachs with 6 years of experience in investment banking and private equity. He helps students prepare for finance interviews and understand complex financial concepts.\n\nDavid specializes in technical interview preparation, including financial modeling, valuation techniques, and case studies. His mentees have secured positions at top investment banks, hedge funds, and private equity firms.",
    availability: ["Monday 6pm-9pm", "Wednesday 7pm-10pm", "Sunday 10am-2pm"],
    sessionsCompleted: 178,
    experienceYears: 6,
    languages: ["English", "Mandarin"]
  },
  {
    id: 5,
    name: "Emily Wilson",
    title: "UX Design Lead at Airbnb",
    expertise: ["UX Design", "Portfolio Review", "Design Thinking"],
    bio: "Design leader helping aspiring designers build outstanding portfolios.",
    rating: 4.8,
    price: 70,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "Emily is a UX Design Lead at Airbnb with 7 years of experience in product design. She mentors aspiring designers on building strong portfolios and preparing for design interviews.\n\nEmily's approach focuses on teaching design thinking principles, user research methods, and effective presentation skills. Her mentees have gone on to work at companies like Airbnb, Facebook, IDEO, and other leading design firms.",
    availability: ["Tuesday 10am-2pm", "Thursday 1pm-5pm", "Friday 3pm-7pm"],
    sessionsCompleted: 203,
    experienceYears: 7,
    languages: ["English", "Spanish"]
  },
  {
    id: 6,
    name: "James Rodriguez",
    title: "Startup Founder & Entrepreneur",
    expertise: ["Startups", "Pitching", "Business Strategy"],
    bio: "Serial entrepreneur with 3 successful exits mentoring founders.",
    rating: 4.6,
    price: 90,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    fullBio: "James is a serial entrepreneur with 3 successful startup exits. He mentors aspiring founders on everything from ideation to fundraising and scaling.\n\nWith experience raising over $50M in venture capital, James provides practical advice on building products, assembling teams, and pitching to investors. His mentees have gone on to build successful companies and raise funding from top VC firms.",
    availability: ["Monday 8am-12pm", "Wednesday 10am-2pm", "Friday 1pm-5pm"],
    sessionsCompleted: 156,
    experienceYears: 10,
    languages: ["English", "Spanish", "Portuguese"]
  }
];

export const mockBookings = [
  {
    id: 1,
    mentorId: 1,
    mentorName: "Dr. Sarah Johnson",
    mentorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    date: "2023-06-15",
    time: "14:00",
    status: "confirmed",
    duration: "60 min",
    price: 50
  },
  {
    id: 2,
    mentorId: 2,
    mentorName: "Mark Williams",
    mentorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    date: "2023-06-18",
    time: "16:00",
    status: "confirmed",
    duration: "45 min",
    price: 75
  }
];