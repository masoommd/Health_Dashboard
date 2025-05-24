export const calendarData = [
  { day: "Mon", date: "25", times: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: "26", times: ["08:00", "09:00", "10:00"], selected: "09:00" },
  { day: "Wed", date: "27", times: ["12:00","---", "13:00"] },
  { day: "Thurs", date: "28", times: ["10:00", "11:00", "---"] },
  { day: "Fri", date: "29", times: ["---","14:00", "16:00"] },
  { day: "Sat", date: "30", times: ["12:00", "14:00", "15:00"] },
  { day: "Sun", date: "31", times: ["09:00", "10:00", "11:00"], isDimmed: true },
];

export const cards = [
  {
    title: "Dentist",
    icon: "🦷",
    timeRange: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    bg: "bg-indigo-700",
    text: "text-white",
  },
  {
    title: "Physiotherapy Appointment",
    icon: "💪",
    timeRange: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    bg: "bg-indigo-100",
    text: "text-indigo-800",
  },
];