# 🌐 Blue Rock Capital – Next.js Website

![Blue Rock Capital](./public/blue-rock-capital.jpg)

A modern **Next.js 14** based website for **Blue Rock Capital** built with Next, Tailwind CSS and an extensive set of Radix UI components.  
All dependencies and tools used in this project are listed below.

---

## 📦 Scripts

| Command         | Description                            |
|-----------------|----------------------------------------|
| `npm run dev`   | Start local development server          |
| `npm run build` | Build production-optimized application  |
| `npm run start` | Run production build locally            |
| `npm run lint`  | Run Next.js linting                     |

---

## 🛠️ Tech & Dependencies

This project uses:

- **Framework**: [Next.js 14.2.16](https://nextjs.org/) with React 18  
- **Styling**: [Tailwind CSS 4.1.13](https://tailwindcss.com/), tailwind-animate, tw-animate-css, clsx, tailwind-merge, class-variance-authority  
- **UI Components**: Extensive [Radix UI](https://www.radix-ui.com/) packages (accordion, dialog, dropdown, hover-card, menubar, navigation-menu, popover, slider, tabs, toast, tooltip, etc.)  
- **Forms & Validation**: react-hook-form, @hookform/resolvers, Zod  
- **Charts & Data**: Recharts  
- **Date Utilities**: date-fns, react-day-picker  
- **Themes**: next-themes  
- **Carousel**: embla-carousel-react  
- **Icons**: lucide-react  
- **Email**: nodemailer  
- **Analytics**: @vercel/analytics  

Dev dependencies:

- TypeScript 5  
- @tailwindcss/postcss, @tailwindcss/typography  
- PostCSS, Autoprefixer  

> Some experimental packages like @remix-run/react, svelte, vue and vue-router are included for future use.

---

## 📂 Project Structure

```bash
blue-rock-capital/
├── public/             # Static assets (images, icons)
├── pages/              # Next.js pages & routing
├── components/         # Reusable UI components
├── styles/             # Global styles
└── README.md


🚀 Getting Started

git clone https://github.com/myasirweb/bluerock-capital-nextjs.git
cd blue-rock-capital
npm install
npm run dev


Build for production:

npm run build
npm start


🌍 Live Website

https://bluerock.capital

📝 License

This project is proprietary to Blue Rock Capital.
All rights reserved.