# Web Developer Portfolio

A modern, responsive portfolio website built with React. Featuring a clean design with dark mode support, showcasing projects, skills, experience, and a contact form.

## ✨ Features

- ✅ **Responsive Design** - Mobile-friendly layout that works on all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent storage
- 🎨 **Modern UI** - Clean and professional design with smooth animations
- 📱 **Mobile Optimized** - Touch-friendly navigation and adaptive layouts
- 🚀 **Performance** - Fast loading and smooth interactions
- 📧 **Contact Form** - Functional contact form for inquiries
- 🎯 **Smooth Scrolling** - Enhanced navigation experience

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with theme toggle
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills showcase
│   ├── Projects.js        # Featured projects
│   ├── Experience.js      # Work experience timeline
│   ├── Contact.js         # Contact section with form
│   ├── Footer.js          # Footer with links
│   └── [Component].css    # Component styles
├── App.js                 # Main app component
├── App.css                # App styles
├── index.js               # Entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web-developer-portfolio.git
cd web-developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## �� Customization

### Update Personal Information
Edit the following files to customize with your information:
- `src/components/Hero.js` - Update intro text and social links
- `src/components/About.js` - Add your bio and achievements
- `src/components/Skills.js` - List your skills and technologies
- `src/components/Projects.js` - Add your projects
- `src/components/Experience.js` - Update your work experience
- `src/components/Contact.js` - Add your contact information

### Color Scheme
Modify the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00d4ff;
  /* ... other colors ... */
}
```

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to [Netlify](https://netlify.com)
3. Netlify will automatically deploy on push

### Deploy to GitHub Pages
1. Add to `package.json`: `"homepage": "https://yourusername.github.io/web-developer-portfolio"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Run: `npm run deploy`

## 📦 Technologies Used

- **React** - UI framework
- **React Icons** - Icon library
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Programming language

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📞 Contact

For questions or suggestions, feel free to reach out.

---

**Made with ❤️ by [Your Name]**
