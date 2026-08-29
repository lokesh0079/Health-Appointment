# Health Appointment App

A frontend health appointment application built using React.js.

The application allows users to view doctors, open their profiles, and book an appointment.

## Features

- Home page with health appointment introduction
- Display list of doctors
- View individual doctor details
- Navigate between pages using React Router
- Doctor profile routing using dynamic doctor IDs
- Handle invalid doctor IDs
- Appointment booking page
- Basic appointment form
- Header and footer components
- Doctor data managed using JavaScript objects and arrays

## Technologies Used

- React.js
- JavaScript
- React Router
- HTML5
- CSS3
- Bootstrap
- Vite

## React Concepts Used

- Functional Components
- Props
- `useState`
- `useNavigate`
- `useParams`
- Conditional Rendering
- Array methods such as `map()` and `find()`
- Component-based architecture

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Doctors.jsx
│   ├── Footer.jsx
│   ├── HeaderName.jsx
│   ├── Hero.jsx
│   ├── InvalidId.jsx
│   └── Specialization.jsx
├── data/
│   └── doctors.js
├── pages/
│   ├── BookAppointment.jsx
│   └── DoctorDetails.jsx
├── App.css
├── App.jsx
└── main.jsx


How to Run the Project
1. Clone the repository
git clone YOUR-GITHUB-REPOSITORY-URL
2. Navigate to the project directory
cd health_appointment
3. Install dependencies
npm install
4. Start the development server
npm run dev

Open the local development URL provided by Vite in your browser.

Project Status

🚧 Initial frontend version.

The project is currently under development, and new features and UI improvements will be added gradually.


## Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Doctor List

![Doctor List](./screenshots/doctors.png)

### Doctor Details

![Doctor Details](./screenshots/doctor-details.png)

### Book Appointment

![Book Appointment](./screenshots/book-appointment.png)

### Confirmation Page
![Confirmatiom Page](./screenshots/confirmation-page.png)