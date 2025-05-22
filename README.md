This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


📘 Project Description
This project is a dynamic web application developed using Next.js, Tailwind CSS and some libararies such as shadcn as part of final project. It showcases core frontend development skills including responsive UI design, API integration, user authentication using zod, and role-based access control. The app is deployed via Vercel and utilizes third-party tools for enhanced functionality.

🎯 Objectives
Develop a responsive and interactive web app using modern frontend tools.

Integrate external APIs such as JSON Placeholder for data handling.

Implement features such as user authentication, registration, data visualization, and map-based address selection.

Demonstrate proficiency in libraries like React Hook Form, Zod, ApexCharts, and Leaflet.

🔧 Key Features
User Listing: Displays user profiles fetched from JSON Placeholder with address shown on an interactive Leaflet map.

Post & Comments: Shows posts and comments with conditional access based on user role.

Login Form
Authentication: Admin and regular user login using email and password (JSON Placeholder logic).
Admin Login: Hardcoded credentials for instant access (username: admin@admin.com, password: admin123).
A login system where the email is used as the username and the password is the username from the JSON Placeholder API (
    "username": "Sincere@april.biz", "Shanna@melissa.tv", "Nathan@yesenia.net",
    "password": "Bret", "Antonette", "Samantha",
    ).
User Login: Authenticates via fetched user data, requiring password to match username.
Error Handling: Displays clear feedback for incorrect credentials or fetch errors.
Routing & State: Uses useState and useRouter for input management and redirection.
UX Design: Responsive layout, accessible fields, and interactive feedback using Tailwind CSS.

Registration Form
Registration: Validated form with live address selection via map.
Validation Rules: Includes checks for name, email, phone, address, password match, and terms acceptance.
Form Libraries: Built with react-hook-form, validated using zod.
Map Integration: Leaflet map enables users to visually select and populate their address.
Data Handling: On successful validation, user data is stored in localStorage and a success alert is shown.

Admin Dashboard
Features:
Data Visualization: Admin dashboard features using Apex charts showing  total users, post, and comment statistics stored in JSON Placeholder API.
Display All Users Profile stored in JSON Placeholder API.
Display Posts with name of posted by, and view posts and comments with their email who posted that stored in JSON Placeholder API.
Dark Mode

Regular Users Dashboard
Key Features:
View Login User Profile with name, email, address that used from JSON Placeholder API.
Display Posts with name of posted by, and view posts and comments with their email who posted that stored in JSON Placeholder API.
Logout
Dark Mode
Deployment: Live application hosted on Vercel.

This project demonstrates real-world web development practices including form validation, API consumption, and role-based UI logic.
