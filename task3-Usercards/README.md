# 👥 UserCard Component Demo

A stunning React application showcasing modern UserCard components with a beautiful black and yellow gradient theme, glassmorphism effects, and smooth animations.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![Theme](https://img.shields.io/badge/Theme-Black%20%26%20Yellow-yellow.svg)]()
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-brightgreen.svg)]()

## ✨ Features

### 🎨 **Modern Design**
- **Black & Yellow Gradient Theme**: Striking color combination
- **Glassmorphism Effects**: Semi-transparent backgrounds with backdrop blur
- **Animated Gradient Borders**: Flowing yellow gradients that animate continuously
- **3D Hover Effects**: Cards lift and rotate on hover for depth

### 🧩 **UserCard Component**
- **Avatar Support**: Image or automatic initials fallback
- **Status Indicators**: Color-coded status with animated dots
- **Interactive Buttons**: View Profile and Message actions
- **Floating Elements**: Subtle animated decorative dots

### 📱 **Interactive Features**
- **Filter System**: Filter users by status (All, Active, Pending, Inactive)
- **Responsive Grid**: Automatically adjusts to screen size
- **Smooth Animations**: 60fps performance with CSS animations
- **Hover Effects**: Enhanced user experience with micro-interactions

### ♿ **Accessibility**
- **Keyboard Navigation**: Full keyboard support
- **Focus Indicators**: Clear focus states
- **Screen Reader**: Proper semantic structure
- **High Contrast**: Readable text and elements

## 🎯 **Live Demo**

**Try it out:** [http://localhost:3000](http://localhost:3000)

## 🚀 **Quick Start**

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd task3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧩 **Component Usage**

### **Basic UserCard**
```jsx
<UserCard
  name="John Doe"
  email="john.doe@example.com"
  role="Software Developer"
  status="active"
/>
```

### **With Avatar Image**
```jsx
<UserCard
  name="Jane Smith"
  email="jane.smith@example.com"
  role="UI/UX Designer"
  status="active"
  avatar="/path/to/avatar.jpg"
/>
```

### **Different Status Types**
```jsx
// Active user
<UserCard name="Active User" email="active@example.com" status="active" />

// Pending user
<UserCard name="Pending User" email="pending@example.com" status="pending" />

// Inactive user
<UserCard name="Inactive User" email="inactive@example.com" status="inactive" />
```

## 🎨 **Design System**

### **Color Palette**
```css
/* Primary Colors */
--primary-black: #0a0a0a, #1a1a1a, #2d2d2d
--primary-yellow: #ffd700, #ffed4e, #ffb347

/* Status Colors */
--status-active: #00ff88
--status-pending: #ffd700
--status-inactive: #ff6b6b

/* Accent Colors */
--text-white: #ffffff
--text-light: #b0b0b0
--overlay-dark: rgba(18, 18, 18, 0.95)
```

### **Typography**
- **Font Family**: Inter, system fonts
- **Main Title**: 800 weight with gradient
- **User Names**: 700 weight with yellow gradient
- **Body Text**: 400 weight for readability

### **Animations**
- **Gradient Shift**: 6-second flowing border animation
- **Floating Dots**: 8-second float cycle with delays
- **Hover Effects**: Transform and shadow changes
- **Page Transitions**: Fade-in animations

## 🛠️ **Project Structure**

```
task3/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── UserCard.js            # UserCard component
│   │   └── UserCard.css           # UserCard styling
│   ├── App.js                     # Main app component
│   ├── App.css                    # App-level styling
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 📋 **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm eject` | Ejects from Create React App |

## 🔧 **Customization**

### **Theme Colors**
Modify the CSS variables in `src/index.css`:
```css
body {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### **UserCard Styling**
Customize the card appearance in `src/components/UserCard.css`:
```css
.user-card {
  max-width: 400px; /* Change card width */
}

.gradient-border {
  background: linear-gradient(135deg, #your-color1, #your-color2); /* Custom gradient */
}
```

### **Filter Options**
Add new filter options in `src/App.js`:
```javascript
const filterOptions = [
  { id: 'all', label: 'All Users' },
  { id: 'active', label: 'Active Users' },
  { id: 'custom', label: 'Custom Status' } // Add new status
];
```

## 📱 **Responsive Breakpoints**

| Device | Breakpoint | Features |
|--------|------------|----------|
| **Mobile** | Up to 480px | Single column, stacked filters |
| **Tablet** | 481px - 768px | Responsive grid, horizontal filters |
| **Desktop** | 769px+ | Multi-column grid, enhanced hover effects |

## 🌟 **Key Features Explained**

### **1. Glassmorphism Design**
- **Backdrop Filter**: Blur effects for modern glass look
- **Semi-transparent Backgrounds**: Layered depth perception
- **Border Effects**: Subtle borders with gradient accents
- **Shadow System**: Multiple shadow layers for depth

### **2. Animation System**
- **CSS Transitions**: Smooth state changes
- **Keyframe Animations**: Complex floating elements
- **Transform Effects**: 3D hover transformations
- **Performance**: Hardware-accelerated animations

### **3. Status Management**
- **Dynamic Filtering**: Real-time user filtering
- **Status Indicators**: Visual status representation
- **Count Display**: Live user count updates
- **Responsive Filters**: Adaptive filter layout

## 🚀 **Deployment**

### **Build for Production**
```bash
npm run build
```

### **Deploy to Netlify**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### **Deploy to Vercel**
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow React best practices
- Maintain consistent code style
- Add comments for complex logic
- Test on multiple devices
- Ensure accessibility compliance

## 🐛 **Troubleshooting**

### **Common Issues**

| Problem | Solution |
|---------|----------|
| Cards not displaying | Check component imports and CSS |
| Animations not working | Verify CSS animation properties |
| Filter not functioning | Check state management in App.js |
| Styling issues | Clear browser cache and restart dev server |

### **Browser Support**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **React Team** for the amazing framework
- **CSS Working Group** for modern CSS features
- **Design Community** for inspiration and best practices

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/yourusername/react-usercard-demo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/react-usercard-demo/discussions)
- **Email**: your.email@example.com

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ and ☕

</div>
