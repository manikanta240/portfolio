# Professional Portfolio Website

A modern, responsive portfolio website built with React, GSAP animations, and Tailwind CSS. Showcasing skills, projects, and professional experience with smooth animations and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: GSAP-powered animations for engaging user experience
- **Scroll Animations**: ScrollTrigger for scroll-based animations
- **Professional Sections**:
  - Hero section with profile and introduction
  - About section with story, experience, and education
  - Skills showcase with animated icons
  - Projects portfolio with detailed cards
  - Contact form with validation
- **Navigation**: Fixed navigation bar with mobile menu
- **Footer**: Professional footer with links and social media

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router** - Navigation
- **GSAP** - Animation library
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Navigation bar component
│   └── Footer.jsx        # Footer component
├── pages/
│   ├── Home.jsx          # Hero/Home page
│   ├── About.jsx         # About page
│   ├── Skill.jsx         # Skills page
│   ├── Projects.jsx      # Projects showcase
│   └── Contact.jsx       # Contact form
├── assets/               # Images and static assets
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme. You can modify colors in the Tailwind classes:
- Primary: `#5D866C` (green)
- Secondary: `fuchsia-700` (purple)
- Background: Gradient from `#C9B59C` to `#F5E6D3`

### Content
Update the following files to customize content:
- `src/pages/Home.jsx` - Hero section content
- `src/pages/About.jsx` - Personal information, experience, education
- `src/pages/Skill.jsx` - Skills and technologies
- `src/pages/Projects.jsx` - Project portfolio
- `src/pages/Contact.jsx` - Contact information

### Images
Replace `src/assets/mine.png` with your profile image.

## 📝 Notes

- **ScrollTrigger**: This project uses GSAP's ScrollTrigger plugin. For production use, you may need a GSAP license or can remove ScrollTrigger and use regular GSAP animations.
- **Social Links**: Update social media links in the respective components.
- **Contact Form**: The contact form currently shows an alert. Integrate with a backend service or email service for production use.

## 🚀 Deployment

The portfolio can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use the build output

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Seelam Naga Manikanta**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using React and GSAP
