import { mentors, mockBookings } from './mockData';

// Simulate API calls with delays
const simulateApiCall = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const fetchMentors = (filters = {}) => {
  let filteredMentors = [...mentors];
  
  if (filters.expertise) {
    filteredMentors = filteredMentors.filter(mentor => 
      mentor.expertise.some(e => e.toLowerCase().includes(filters.expertise.toLowerCase()))
    );
  }
  
  if (filters.minRating) {
    filteredMentors = filteredMentors.filter(mentor => mentor.rating >= filters.minRating)
  }
  
  return simulateApiCall(filteredMentors);
};

export const fetchMentorById = (id) => {
  const mentor = mentors.find(m => m.id === parseInt(id));
  return simulateApiCall(mentor || null);
};

export const createBooking = (bookingData) => {
  const newBooking = {
    id: mockBookings.length + 1,
    mentorId: bookingData.mentorId,
    mentorName: bookingData.mentorName,
    date: bookingData.date,
    time: bookingData.time,
    status: "confirmed"
  };
  
  mockBookings.push(newBooking);
  return simulateApiCall(newBooking);
};

export const fetchBookings = () => {
  return simulateApiCall([...mockBookings]);
};

export const cancelBooking = (bookingId) => {
  const index = mockBookings.findIndex(b => b.id === bookingId);
  if (index !== -1) {
    mockBookings[index].status = "cancelled";
    return simulateApiCall({ success: true });
  }
  return simulateApiCall({ success: false });
};