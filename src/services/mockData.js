export const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    expertise: ["Career Counseling", "Resume Building"],
    bio: "Career coach with 10+ years experience helping students find their dream jobs.",
    rating: 4.8,
    price: 50,
    image: "/images/mentor1.jpg",
    fullBio: "Dr. Sarah Johnson is a certified career coach with over a decade of experience in helping students and professionals navigate their career paths. She specializes in resume building, interview preparation, and career transition strategies.",
    availability: ["Mon", "Wed", "Fri"],
    sessionsCompleted: 245
  },
  {
    id: 2,
    name: "Mark Williams",
    expertise: ["Tech Interviews", "Coding Skills"],
    bio: "Senior software engineer at Google, passionate about teaching coding.",
    rating: 4.9,
    price: 75,
    image: "/images/mentor2.jpg",
    fullBio: "Mark is a senior software engineer at Google with 8 years of experience in the tech industry. He specializes in helping students prepare for technical interviews at FAANG companies and improving their problem-solving skills.",
    availability: ["Tue", "Thu", "Sat"],
    sessionsCompleted: 189
  },
  {
    id: 3,
    name: "Priya Patel",
    expertise: ["College Applications", "Study Abroad"],
    bio: "Education consultant helping students get into top universities worldwide.",
    rating: 4.7,
    price: 60,
    image: "/images/mentor3.jpg",
    fullBio: "Priya has helped over 300 students get into their dream universities across the US, UK, and Canada. She specializes in crafting compelling personal statements and navigating the complex college application process.",
    availability: ["Mon", "Tue", "Thu", "Sat"],
    sessionsCompleted: 312
  }
];

export const mockBookings = [
  {
    id: 1,
    mentorId: 1,
    mentorName: "Dr. Sarah Johnson",
    date: "2023-06-15",
    time: "14:00",
    status: "confirmed"
  },
  {
    id: 2,
    mentorId: 2,
    mentorName: "Mark Williams",
    date: "2023-06-18",
    time: "16:00",
    status: "confirmed"
  }
];