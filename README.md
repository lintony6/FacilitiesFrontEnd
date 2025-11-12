# Facilities Management Frontend Demo

This directory contains the static HTML/CSS/JavaScript version of the Facilities Management Dashboard for demonstration purposes on GitHub Pages.

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
