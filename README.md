# Health Dashboard

A responsive, modern health dashboard web application built with **React** and **Vite**. The dashboard provides a comprehensive overview of health metrics, appointments, activity, and schedules, with a clean and intuitive user interface.

---

## Features

- **Responsive Design:** Fully responsive layout for desktop, tablet, and mobile devices.
- **Dashboard Overview:** Visual summary with anatomy section and health status cards.
- **Activity Feed:** Weekly activity bar chart with dynamic data.
- **Calendar:** Interactive calendar view with appointment highlights.
- **Upcoming Schedule:** List of upcoming appointments, grouped by day.
- **Sidebar Navigation:** Persistent sidebar for easy navigation.
- **Profile & Notifications:** Accessible profile and notification icons in the header.
- **Modular Components:** All UI elements are reusable and separated for maintainability.
- **Data Separation:** All static data is managed in the `/data` folder for easy updates.
- **Custom CSS:** All styles are extracted into component-specific CSS files for clarity and scalability.

---

## Project Structure

```
src/
  components/
    AnatomySection.jsx / .css
    ActivityFeed.jsx / .css
    Calendar.jsx / .css
    CalendarView.jsx / .css
    DashboardMainContent.jsx / .css
    DashboardOverview.jsx / .css
    HealthStatusCards.jsx / .css
    Sidebar.jsx / .css
    Header.jsx / .css
    SimpleAppointmentCard.jsx / .css
    UpcomingSchedule.jsx / .css
  data/
    activityBarSets.js
    calendarData.js
    healthStatusCardsData.js
  styles/
    AnatomySection.css
    ActivityFeed.css
    Calendar.css
    CalendarView.css
    DashboardMainContent.css
    DashboardOverview.css
    HealthStatusCards.css
    Sidebar.css
    Header.css
    SimpleAppointmentCard.css
    UpcomingSchedule.css
  App.jsx
  App.css
public/
  avatar.png
  humanbody.png
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---



## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Modules / Custom CSS]
- [ESLint](https://eslint.org/) (with recommended rules)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

Made with ❤️ by [Md Masoom]
