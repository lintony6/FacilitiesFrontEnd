# FacilitiesFrontEnd - Static Demo Site

This directory contains the frontend-only version of the facilities management application, designed to be hosted on GitHub Pages for client demonstrations. It mirrors the functionality of the Django webapp but uses mock data instead of live API calls.

## 🎯 Purpose

This static site allows you to showcase your development progress to clients without requiring a backend server. All data is simulated using JavaScript with realistic mock data that demonstrates the full user experience.

## 📁 Structure

```
FacilitiesFrontEnd/
├── index.html              # Redirects to login.html
├── login.html              # Login page
├── signup.html             # Registration page
├── forgot_password.html    # Password reset request
├── enter_otp.html          # OTP verification
├── reset_password.html     # Password reset form
├── dashboard.html          # Main dashboard with metrics and AI chat
├── calendar.html           # Calendar with filters and date selection
├── archives.html           # Report archives listing
├── static/
│   ├── js/
│   │   └── script.js       # All functionality with mock data
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── themes.css      # Theme definitions
│   ├── icons/              # Navigation and UI icons
│   └── images/             # Logo and images
└── README.md               # This file
```

## ✨ Features

### Dashboard
- **Key Issues Panel**: Displays 10 mock work orders with priorities and dates
- **Performance Metrics**: 16 different performance indicators
- **Current Priorities**: 6 ongoing priority tasks
- **Analytics Overview**: Emergency ticket counts for today and this week
- **AI Chat Assistant**: Simulated AI responses based on common queries
- **Work Order Modal**: Click any issue to see full JSON details

### Calendar
- **Comprehensive Filters**: Priority, Status, Shop, Building, and Location
- **Date Selection**: Click and drag to select date ranges
- **Search Functionality**: Filter buildings and locations with autocomplete
- **Generate Reports**: Create summaries with AI prompts

### Archives
- **Report Listing**: 5 mock archived reports
- **Preview & Download**: Interactive buttons (simulated)
- **Pagination**: Navigate through pages

### Authentication Flow
- **Login** → Dashboard
- **Sign Up** → OTP Verification
- **Forgot Password** → OTP Verification → Reset Password → Login

## 🔄 Mock Data

All data is defined in `static/js/script.js` in the `MOCK_DATA` object:

- **10 Work Orders**: Covering various buildings, priorities, and statuses
- **Emergency Stats**: Today (3) and Week (12) 
- **Chat History**: Sample conversation
- **Archive Reports**: 5 dated reports
- **Performance Metrics**: 16 different KPIs
- **Priorities**: 6 ongoing tasks

## 🤖 AI Chat Simulation

The AI chat responds intelligently to keywords:
- "emergency" / "urgent" → Emergency ticket statistics
- "hvac" / "temperature" → HVAC-related issues
- "building" / "location" → Building statistics
- "performance" / "metrics" → Performance data
- "priority" → Priority breakdown
- "shop" / "team" → Shop performance
- Generic queries → Overview response

## 🚀 Deployment to GitHub Pages

1. Push this directory to your GitHub repository
2. Go to Settings → Pages
3. Select the branch containing FacilitiesFrontEnd
4. Set the folder to `/FacilitiesFrontEnd` (or root if this is the only content)
5. Save and wait for deployment
6. Your site will be live at: `https://[username].github.io/[repo-name]/`

## 🔗 Navigation

All pages include a bottom navigation bar:
- **Dashboard** (Home icon)
- **Archives** (Archive icon)
- **Calendar** (Calendar icon)
- **Log Out** (Logout icon) → Returns to login

## 🎨 Styling

- Fully responsive design
- Uses CSS themes (themes.css)
- Matches the Django webapp styling exactly
- Professional USC branding

## 📝 Notes for Client Demos

1. **Realistic Data**: All mock data uses real building names, work order numbers, and realistic scenarios
2. **Interactive**: All buttons and features work (with simulated responses)
3. **No Backend Required**: Everything runs in the browser
4. **Persistent Feel**: Chat history and data persist during the session
5. **Full Flow**: Complete auth flow from login through all features

## 🔧 Customization

To update mock data, edit the `MOCK_DATA` object in `static/js/script.js`:

```javascript
const MOCK_DATA = {
  keyIssues: [...],        // Work orders
  emergencyStats: {...},   // Statistics
  chatHistory: [...],      // Chat messages
  archiveReports: [...]    // Reports
};
```

## ✅ Completed Updates

All HTML files now match the Django webapp:
- ✅ Full dashboard with modal support
- ✅ Complete calendar with all filters
- ✅ Archives with multiple entries
- ✅ All auth pages functional
- ✅ Comprehensive JavaScript with mock data
- ✅ Proper navigation with active states

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Purpose**: Client demonstrations and GitHub Pages deployment

## Overview

This is a **frontend-only demo** that showcases the UI/UX of the facilities management system. It includes:

- **Dashboard**: Main view with quick links, emergency ticket stats, and AI chat interface
- **Calendar**: Work order calendar with advanced filtering (Priority, Status, Shop, Building, Location)
- **Archives**: Historical reports and data access

## Features Demonstrated

### Dashboard
- Quick access cards for Key Issues, Performance, and Priorities
- Emergency ticket statistics (placeholder data)
- AI chat interface (requires backend for full functionality)

### Calendar
- Interactive calendar grid
- Advanced filtering system with:
  - Priority filters (Emergency, Urgent, Prompt, etc.)
  - Phase Status filters
  - Shop filters
  - Building filters with autocomplete search
  - Location Code filters with autocomplete search
- Date range selection
- Report generation interface

### Archives
- Document search and sorting
- Preview and download functionality

## Backend Integration

**Note**: This is a static demo. Full functionality requires the Django backend from the `Capstone` directory, which includes:

- AIM API integration for real work order data
- Google Gemini AI for intelligent chat responses and data analysis
- User authentication
- Real-time data fetching and updates

## File Structure

```
FacilitiesFrontEnd/
├── dashboard.html          # Main dashboard page
├── calendar.html           # Calendar with filtering
├── archives.html           # Archives page
├── login.html             # Login page
├── signup.html            # Signup page
├── forgot_password.html   # Password reset
├── static/
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── themes.css     # USC theme colors
│   ├── js/
│   │   └── script.js      # Client-side functionality
│   └── icons/             # UI icons
```

## Recent Updates

- Added autocomplete search bars for Building and Location filters in calendar
- Implemented emergency ticket statistics on dashboard with date displays
- Enhanced AI chat interface (backend-dependent)
- Improved filter organization with expandable categories
- Added loading states and error handling

## USC Branding

The interface uses official University of South Carolina colors:
- Primary: Garnet (#73000a)
- Accent colors defined in themes.css

## Demo vs Production

### Demo (GitHub Pages)
- Static data and placeholders
- No backend API calls
- Simulated interactions

### Production (Django Backend)
- Live work order data from AIM API
- AI-powered analysis with Google Gemini
- Real-time statistics and metrics
- User authentication and authorization
- Database-backed session management

---

Last Updated: November 2025
