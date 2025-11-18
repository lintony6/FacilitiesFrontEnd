/* ======================================
   MOCK DATA - Simulating API responses for GitHub Pages
====================================== */

const MOCK_DATA = {
  emergencyStats: {
    today: 3,
    week: 12,
    date: "2025-11-17",
    week_start: "2025-11-11",
    emergency_list: [
      {
        proposal: "WO-2025-1143",
        description: "HVAC System Failure - Science Building",
        location: "Science and Technology Building",
        date: "2025-11-17",
        status: "ASSIGNED"
      },
      {
        proposal: "WO-2025-1144",
        description: "Water Main Break - Parking Lot",
        location: "Bull Street Garage",
        date: "2025-11-17",
        status: "WORK IN PROGRESS"
      },
      {
        proposal: "WO-2025-1142",
        description: "Power Outage - Library Wing",
        location: "Thomas Cooper Library",
        date: "2025-11-17",
        status: "WORK DONE"
      }
    ]
  },
  priorities: [
    {
      description: "Annual HVAC inspection - All Buildings",
      priority: "COORDINATED",
      location: "Multiple Buildings",
      scheduled_date: "2025-11-20",
      proposal: "WO-2025-1100",
      fullData: {
        workOrderNumber: "WO-2025-1100",
        priority: "COORDINATED",
        status: "SCHEDULED",
        building: "Campus-wide",
        description: "Annual HVAC inspection - All Buildings",
        assignedShop: "Temperature/HVAC",
        scheduledDate: "2025-11-20",
        estimatedDuration: "2 days"
      }
    },
    {
      description: "Fire safety system upgrade - Russell House",
      priority: "URGENT",
      location: "Russell House",
      scheduled_date: "2025-11-22",
      proposal: "WO-2025-1101",
      fullData: {
        workOrderNumber: "WO-2025-1101",
        priority: "URGENT",
        status: "SCHEDULED",
        building: "Russell House",
        description: "Fire safety system upgrade",
        assignedShop: "Electrical & Lighting",
        scheduledDate: "2025-11-22",
        estimatedDuration: "1 week"
      }
    }
  ],
  chatHistory: [],
  keyIssues: [
    {
      title: "HVAC System Failure - Science Building",
      priority: "EMERGENCY",
      date: "Nov 14, 2025",
      workOrderNumber: "WO-2025-1143",
      fullData: {
        workOrderNumber: "WO-2025-1143",
        priority: "EMERGENCY",
        status: "ASSIGNED",
        building: "Science and Technology Building",
        location: "Floor 3 - Lab Wing",
        problem: "Complete HVAC failure causing temperature to rise above safe limits",
        assignedShop: "Temperature/HVAC",
        createdDate: "2025-11-14T08:30:00",
        assignedTo: "Team Alpha"
      }
    },
    {
      title: "Water Leak - Library",
      priority: "URGENT",
      date: "Nov 14, 2025",
      workOrderNumber: "WO-2025-1145",
      fullData: {
        workOrderNumber: "WO-2025-1145",
        priority: "URGENT",
        status: "WORK IN PROGRESS",
        building: "Thomas Cooper Library",
        location: "3rd Floor Restroom",
        problem: "Ceiling water leak affecting reading area",
        assignedShop: "Plumbing",
        createdDate: "2025-11-14T09:15:00",
        assignedTo: "Team Beta"
      }
    },
    {
      title: "Elevator Out of Service - Russell House",
      priority: "URGENT",
      date: "Nov 13, 2025",
      workOrderNumber: "WO-2025-1138",
      fullData: {
        workOrderNumber: "WO-2025-1138",
        priority: "URGENT",
        status: "WORK IN PROGRESS",
        building: "Russell House",
        location: "Main Elevator Bank",
        problem: "Elevator #2 stuck between floors",
        assignedShop: "Elevators & Escalators",
        createdDate: "2025-11-13T14:22:00",
        assignedTo: "Team Gamma"
      }
    },
    {
      title: "Electrical Panel Overheating - Darla Moore",
      priority: "EMERGENCY",
      date: "Nov 13, 2025",
      workOrderNumber: "WO-2025-1135",
      fullData: {
        workOrderNumber: "WO-2025-1135",
        priority: "EMERGENCY",
        status: "SHOP DONE",
        building: "Darla Moore School of Business",
        location: "Basement - Electrical Room",
        problem: "Main electrical panel showing signs of overheating",
        assignedShop: "Electrical & Lighting",
        createdDate: "2025-11-13T11:05:00",
        assignedTo: "Team Delta"
      }
    },
    {
      title: "Broken Entry Door Lock - Capstone",
      priority: "PROMPT",
      date: "Nov 12, 2025",
      workOrderNumber: "WO-2025-1129",
      fullData: {
        workOrderNumber: "WO-2025-1129",
        priority: "PROMPT",
        status: "NEW",
        building: "Capstone",
        location: "Main Entrance",
        problem: "Security lock mechanism not engaging properly",
        assignedShop: "Access Control",
        createdDate: "2025-11-12T16:30:00",
        assignedTo: "Unassigned"
      }
    },
    {
      title: "Classroom Lighting Issues - Swearingen",
      priority: "ROUTINE",
      date: "Nov 12, 2025",
      workOrderNumber: "WO-2025-1122",
      fullData: {
        workOrderNumber: "WO-2025-1122",
        priority: "ROUTINE",
        status: "ASSIGNED",
        building: "Swearingen Engineering Center",
        location: "Room 2A15",
        problem: "Half of classroom lights not functioning",
        assignedShop: "Electrical & Lighting",
        createdDate: "2025-11-12T10:20:00",
        assignedTo: "Team Echo"
      }
    },
    {
      title: "Sidewalk Damage - Horseshoe Area",
      priority: "PROMPT",
      date: "Nov 11, 2025",
      workOrderNumber: "WO-2025-1115",
      fullData: {
        workOrderNumber: "WO-2025-1115",
        priority: "PROMPT",
        status: "WORK IN PROGRESS",
        building: "Horseshoe - Outdoor",
        location: "Main Walkway near Rutledge",
        problem: "Large crack in sidewalk creating tripping hazard",
        assignedShop: "Grounds",
        createdDate: "2025-11-11T13:45:00",
        assignedTo: "Team Zeta"
      }
    },
    {
      title: "Fire Alarm System Malfunction - Bates",
      priority: "URGENT",
      date: "Nov 11, 2025",
      workOrderNumber: "WO-2025-1110",
      fullData: {
        workOrderNumber: "WO-2025-1110",
        priority: "URGENT",
        status: "AWAITING",
        building: "Bates House",
        location: "2nd Floor North Wing",
        problem: "Fire alarm pulling randomly without trigger",
        assignedShop: "Access Control",
        createdDate: "2025-11-11T08:00:00",
        assignedTo: "Team Eta"
      }
    },
    {
      title: "Broken Window - Patterson Hall",
      priority: "COORDINATED",
      date: "Nov 10, 2025",
      workOrderNumber: "WO-2025-1098",
      fullData: {
        workOrderNumber: "WO-2025-1098",
        priority: "COORDINATED",
        status: "RESCHEDULED",
        building: "Patterson Hall",
        location: "Room 412",
        problem: "Window pane cracked, needs replacement",
        assignedShop: "Carpentry & Building Repairs",
        createdDate: "2025-11-10T15:30:00",
        assignedTo: "Team Theta"
      }
    },
    {
      title: "Pest Control Request - McClintock",
      priority: "ROUTINE",
      date: "Nov 10, 2025",
      workOrderNumber: "WO-2025-1093",
      fullData: {
        workOrderNumber: "WO-2025-1093",
        priority: "ROUTINE",
        status: "NEW",
        building: "McClintock at Women's Quad",
        location: "1st Floor Common Area",
        problem: "Multiple reports of insects in common areas",
        assignedShop: "Pest",
        createdDate: "2025-11-10T09:00:00",
        assignedTo: "Unassigned"
      }
    }
  ],
  
  emergencyStats: {
    today: 3,
    week: 12,
    date: "2025-11-14",
    week_start: "2025-11-11"
  },
  
  chatHistory: [
    {
      role: "user",
      content: "How many emergency work orders do we have today?"
    },
    {
      role: "assistant",
      content: "Based on the current data, there are 3 emergency work orders today (November 14, 2025). This includes issues such as HVAC system failures and electrical panel overheating."
    }
  ],
  
  archiveReports: [
    {
      id: 1,
      title: "Supervisor Report - November 13, 2025",
      date: "2025-11-13",
      generated: "2025-11-13T16:30:00",
      filename: "report_20251113.pdf"
    },
    {
      id: 2,
      title: "Supervisor Report - November 12, 2025",
      date: "2025-11-12",
      generated: "2025-11-12T17:05:00",
      filename: "report_20251112.pdf"
    },
    {
      id: 3,
      title: "Weekly Summary - November 4-10, 2025",
      date: "2025-11-10",
      generated: "2025-11-10T18:00:00",
      filename: "weekly_report_20251110.pdf"
    },
    {
      id: 4,
      title: "Supervisor Report - November 06, 2025",
      date: "2025-11-06",
      generated: "2025-11-06T16:45:00",
      filename: "report_20251106.pdf"
    },
    {
      id: 5,
      title: "Monthly Report - October 2025",
      date: "2025-10-31",
      generated: "2025-10-31T20:00:00",
      filename: "monthly_report_202510.pdf"
    }
  ]
};

/* ======================================
   Global Utility Functions
====================================== */

// Helper: Get CSRF token for secure POSTs (not needed for static site but kept for structure)
function getCSRFToken() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; csrftoken=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return "";
}

// Placeholder: Global error handler
function handleError(message) {
  console.error(message);
  alert("An error occurred: " + message);
}

// Mock API request - returns mock data instead of making real API calls
async function apiRequest(url, method = "GET", body = null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate API responses with mock data
      if (url.includes('/api/dashboard-stats/')) {
        resolve(MOCK_DATA.emergencyStats);
      } else if (url.includes('/api/dashboard-issues/')) {
        resolve({
          issues: MOCK_DATA.keyIssues,
          count: MOCK_DATA.keyIssues.length
        });
      } else if (url.includes('/api/dashboard-priorities/')) {
        resolve({
          work_orders: MOCK_DATA.priorities,
          count: MOCK_DATA.priorities.length
        });
      } else if (url.includes('/api/dashboard-chat/')) {
        if (method === 'GET') {
          resolve({
            history: MOCK_DATA.chatHistory
          });
        } else if (method === 'POST') {
          if (body && body.clear_history) {
            MOCK_DATA.chatHistory = [];
            resolve({ success: true });
          } else if (body && body.message) {
            // Simulate AI response
            const response = generateMockChatResponse(body.message);
            MOCK_DATA.chatHistory.push({
              role: "user",
              content: body.message
            });
            MOCK_DATA.chatHistory.push({
              role: "assistant",
              content: response
            });
            resolve({
              reply: response,
              records_found: Math.floor(Math.random() * 50) + 20
            });
          }
        }
      }
    }, 300); // Simulate network delay
  });
}

// Generate mock AI chat responses
function generateMockChatResponse(message) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('emergency') || lowerMsg.includes('urgent')) {
    return "Based on recent data, we currently have 3 emergency tickets today and 12 for the week. The main issues involve HVAC failures and electrical problems. Response times have averaged 18 minutes, which is within our target range.";
  } else if (lowerMsg.includes('hvac') || lowerMsg.includes('temperature')) {
    return "HVAC-related work orders show an increase this week. The most critical is the Science Building HVAC failure (WO-2025-1143) which is currently assigned and being addressed. We've had 8 HVAC tickets this month with an average resolution time of 4.2 hours.";
  } else if (lowerMsg.includes('building') || lowerMsg.includes('location')) {
    return "The most active buildings this week are: Thomas Cooper Library (5 tickets), Russell House (4 tickets), and Science & Technology Building (3 tickets). Most issues are related to HVAC and plumbing systems.";
  } else if (lowerMsg.includes('performance') || lowerMsg.includes('metrics')) {
    return "Current performance metrics show: 94% work order completion rate, 2.3 hour average resolution time (down 15% from last month), and 4.6/5 customer satisfaction rating. Emergency response time averages 18 minutes.";
  } else if (lowerMsg.includes('priority')) {
    return "Work order breakdown by priority: Emergency (12%), Urgent (28%), Prompt (25%), Routine (30%), Coordinated (3%), Administrative (2%). Emergency response compliance is at 98%.";
  } else if (lowerMsg.includes('shop') || lowerMsg.includes('team')) {
    return "Shop performance this week: HVAC has the highest ticket volume (18), followed by Electrical (15) and Plumbing (12). Team Alpha leads in completion rate at 96%, with Team Beta close behind at 94%.";
  } else {
    return "I've analyzed the dashboard data. We're currently tracking " + MOCK_DATA.keyIssues.length + " key issues, with strong performance metrics overall. Is there a specific aspect you'd like me to focus on - work order priorities, building-specific issues, shop performance, or response times?";
  }
}

/* ======================================
   Auth Functions (Login / Signup / Password Reset)
====================================== */

// Login form handling
function handleLoginSubmit(e) {
  // Form action will navigate to dashboard.html
  // No prevent default needed for static site
  console.log("Login form submitted - navigating to dashboard");
}

// Signup form handling
function handleSignupSubmit(e) {
  e.preventDefault();
  alert("Account created successfully! Redirecting to login...");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 500);
}

// Forgot password flow
function handleForgotPassword(e) {
  e.preventDefault();
  alert("Reset code sent to your email! Redirecting to verification...");
  setTimeout(() => {
    window.location.href = "enter_otp.html";
  }, 500);
}

// Reset password confirmation
function handleResetPassword(e) {
  e.preventDefault();
  alert("Password reset successfully! Redirecting to login...");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 500);
}

/* ======================================
   Dashboard Functions
====================================== */

// Open modal
function openDashboardModal(id) {
  const modal = typeof id === "string" ? document.getElementById(id) : id;
  if (!modal) return;
  modal.setAttribute("aria-hidden", "false");
  const focusable = modal.querySelector(
    'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable) focusable.focus();
}

// Close modal
function closeDashboardModal(id) {
  const modal = typeof id === "string" ? document.getElementById(id) : id;
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
}

// Fetch and update emergency ticket counts (using mock data)
function updateDashboardStats() {
  console.log("Fetching emergency ticket stats...");
  
  const todayElement = document.getElementById('emergencyToday');
  const weekElement = document.getElementById('emergencyWeek');
  const todayDateElement = document.getElementById('todayDate');
  const weekDateRangeElement = document.getElementById('weekDateRange');
  
  if (!todayElement || !weekElement) {
    return;
  }
  
  apiRequest('/api/dashboard-stats/', 'GET')
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      
      const todayFormatted = formatDate(data.date);
      const weekStartFormatted = formatDate(data.week_start);
      const weekEndFormatted = formatDate(data.date);
      
      todayElement.innerHTML = `<span class="count-number">${data.today}</span>`;
      weekElement.innerHTML = `<span class="count-number">${data.week}</span>`;
      
      if (todayDateElement) {
        todayDateElement.textContent = todayFormatted;
      }
      if (weekDateRangeElement) {
        weekDateRangeElement.textContent = `${weekStartFormatted} - ${weekEndFormatted}`;
      }
      
      console.log(`Updated stats: Today=${data.today}, Week=${data.week}`);
    })
    .catch(error => {
      console.error('Error fetching dashboard stats:', error);
      todayElement.innerHTML = '<span class="error-text">Error</span>';
      weekElement.innerHTML = '<span class="error-text">Error</span>';
      if (todayDateElement) todayDateElement.textContent = '';
      if (weekDateRangeElement) weekDateRangeElement.textContent = '';
    });
}

// Helper function to format date strings
function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString + 'T00:00:00');
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/* ======================================
   Calendar Functions
====================================== */

// Placeholder for fetching calendar data
function loadCalendarData() {
  console.log("Calendar data loaded (mock mode)");
}

// Generate report
function generateReport() {
  console.log("Generating report...");
  const prompt = document.getElementById("aiPrompt")?.value || "";
  const selectedDates = Array.from(
    document.querySelectorAll(".calendar-grid td.selected, .calendar-grid td.range")
  ).map((td) => td.textContent.trim());
  console.log("Selected dates:", selectedDates);
  console.log("AI Prompt:", prompt);
  alert(`Report generated for ${selectedDates.length} days!\n\nPrompt: "${prompt || 'No prompt specified'}"\n\nThis would normally generate a detailed supervisor report.`);
}

/* ======================================
   Dashboard Card Selection
====================================== */

function initDashboardCards() {
  const cards = document.querySelectorAll('.quick-card');
  const detailsTitle = document.getElementById('detailsTitle');
  const detailsContent = document.getElementById('detailsContent');

  // Data storage
  const data = {
    issues: MOCK_DATA.keyIssues,
    emergencyStats: MOCK_DATA.emergencyStats,
    performance: [
      { title: 'Avg ticket resolution time', value: '2.3 hours', trend: '-15%' },
      { title: 'Work order completion rate', value: '94%', trend: '+3%' },
      { title: 'Emergency response time', value: '18 min', trend: '-5%' },
      { title: 'Customer satisfaction', value: '4.6/5', trend: '+0.2' },
      { title: 'Maintenance backlog', value: '12 items', trend: '-8' },
      { title: 'First-time fix rate', value: '87%', trend: '+4%' },
      { title: 'Preventive maintenance compliance', value: '91%', trend: '+2%' },
      { title: 'Average cost per ticket', value: '$285', trend: '-10%' },
      { title: 'Technician utilization', value: '89%', trend: '+5%' },
      { title: 'Parts availability', value: '96%', trend: '+1%' },
      { title: 'Equipment downtime', value: '2.1 hrs', trend: '-12%' },
      { title: 'Safety incident rate', value: '0.3%', trend: '-0.1%' },
      { title: 'Energy efficiency score', value: '88/100', trend: '+3' },
      { title: 'Asset reliability', value: '94%', trend: '+2%' },
      { title: 'Vendor response time', value: '3.2 hrs', trend: '-8%' },
      { title: 'Overtime hours', value: '45 hrs', trend: '-12%' },
    ],
    priorities: MOCK_DATA.priorities
  };

  // Load key issues on initialization
  async function loadKeyIssues() {
    console.log('[DEBUG] Loading key issues (mock data)...');
    
    // Update the count in the card
    const issuesCard = document.querySelector('[data-category="issues"] .category-count');
    if (issuesCard) {
      issuesCard.textContent = data.issues.length;
    }
    
    // Refresh display if issues category is selected
    const selectedCard = document.querySelector('.quick-card.selected');
    if (selectedCard && selectedCard.getAttribute('data-category') === 'issues') {
      renderDetails('issues');
    }
  }
  
  // Load emergency stats
  function loadEmergencyStats() {
    console.log('[DEBUG] Loading emergency stats (mock data)...');
    
    const stats = data.emergencyStats;
    if (stats) {
      // Update emergency card count
      const emergencyCardCount = document.getElementById('emergencyCardCount');
      if (emergencyCardCount) {
        emergencyCardCount.textContent = `${stats.today} + ${stats.week}`;
      }
    }
  }
  
  // Load priorities
  function loadPriorities() {
    console.log('[DEBUG] Loading priorities (mock data)...');
    
    // Update the count in the card
    const prioritiesCard = document.querySelector('[data-category="priorities"] .category-count');
    if (prioritiesCard) {
      prioritiesCard.textContent = data.priorities.length;
    }
  }
  
  // Load performance metrics
  function loadPerformanceMetrics() {
    console.log('[DEBUG] Loading performance metrics (mock data)...');
    
    // Update the count in the card
    const perfCard = document.querySelector('[data-category="performance"] .category-count');
    if (perfCard) {
      perfCard.textContent = data.performance.length;
    }
    
    // Render performance charts if container exists
    const container = document.getElementById('performanceChartsContainer');
    if (container) {
      renderPerformanceCharts();
    }
  }
  
  // Global variable to track selected distribution type
  let selectedDistribution = 'priority';

  // Render performance charts (mock version with complete data)
  function renderPerformanceCharts() {
    const container = document.getElementById('performanceChartsContainer');
    if (!container) return;
    
    // Mock performance data matching Capstone structure
    const perfData = {
      avg_resolution_time: "2.3 hours",
      avg_resolution_hours: 2.3,
      completion_rate: "94%",
      completion_percentage: 94,
      emergency_response_time: "18 min",
      emergency_response_minutes: 18,
      backlog_count: 12,
      total_orders: 247,
      period_days: 7,
      priCode_distribution: {
        "ROUTINE": { count: 98, percentage: 39.7 },
        "PROMPT ATTN": { count: 52, percentage: 21.1 },
        "URGENT": { count: 38, percentage: 15.4 },
        "COORDINATED": { count: 32, percentage: 13.0 },
        "EMERGENCY": { count: 15, percentage: 6.1 },
        "IN HOUSE CONSTR": { count: 8, percentage: 3.2 },
        "ADMINISTRATIVE": { count: 4, percentage: 1.6 }
      },
      statusCode_distribution: {
        "NEW": { count: 45, percentage: 18.2 },
        "ASSIGNED": { count: 62, percentage: 25.1 },
        "WORK IN PROGRESS": { count: 48, percentage: 19.4 },
        "WORK DONE": { count: 38, percentage: 15.4 },
        "SHOP DONE": { count: 28, percentage: 11.3 },
        "COMPLETED": { count: 15, percentage: 6.1 },
        "AWAITING VEND/PARTS": { count: 7, percentage: 2.8 },
        "CANCELED": { count: 4, percentage: 1.6 }
      },
      top_buildings: [
        { building: "103", building_name: "Thomas Cooper Library", count: 18 },
        { building: "112", building_name: "Russell House", count: 15 },
        { building: "085", building_name: "Science and Technology Building", count: 14 },
        { building: "173", building_name: "Swearingen Engineering Center", count: 12 },
        { building: "234", building_name: "Darla Moore School of Business", count: 11 },
        { building: "138", building_name: "Blatt Physical Education Center", count: 10 },
        { building: "100", building_name: "Coker Life Sciences", count: 9 },
        { building: "158", building_name: "Colonial Life Arena", count: 8 },
        { building: "051", building_name: "Gambrell Hall", count: 7 },
        { building: "056", building_name: "Williams-Brice Building (Nursing)", count: 6 }
      ],
      top_crafts: [
        { craft: "HVAC", count: 45 },
        { craft: "Electrical & Lighting", count: 38 },
        { craft: "Plumbing", count: 32 },
        { craft: "Custodial", count: 28 },
        { craft: "Carpentry & Building Repairs", count: 24 },
        { craft: "Access Control", count: 18 },
        { craft: "Grounds", count: 15 },
        { craft: "Elevators & Escalators", count: 12 },
        { craft: "Furniture & Appliances", count: 10 },
        { craft: "Signage", count: 8 }
      ],
      trend_analysis: {
        changes: {
          total_orders: { current: 247, previous: 265, change_percent: -6.8 },
          completion_rate: { current: 94, previous: 91, change_percent: 3.3 },
          emergency_count: { current: 15, previous: 18, change_percent: -16.7 },
          avg_resolution_hours: { current: 2.3, previous: 2.7, change_percent: -14.8 }
        }
      }
    };
    
    const resolutionDays = perfData.avg_resolution_hours / 24;
    const resolutionColor = resolutionDays < 2 ? '#4CAF50' : resolutionDays < 5 ? '#FF9800' : '#f44336';
    const completionColor = perfData.completion_percentage < 20 ? '#f44336' : perfData.completion_percentage < 50 ? '#FF9800' : '#4CAF50';
    const emergencyHours = perfData.emergency_response_minutes / 60;
    const emergencyColor = emergencyHours < 4 ? '#4CAF50' : emergencyHours < 24 ? '#FF9800' : '#f44336';
    const backlogColor = perfData.backlog_count < 50 ? '#4CAF50' : perfData.backlog_count < 150 ? '#FF9800' : '#f44336';
    
    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h4 style="margin: 0;">Performance Overview</h4>
        <select id="timePeriodSelect" style="padding: 5px 10px; font-size: 0.9rem; border-radius: 4px; border: 1px solid #ccc;">
          <option value="1">Today</option>
          <option value="7" selected>Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>
      
      <!-- Core Performance Metrics -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; margin-bottom: 25px;">
        <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">Avg Resolution Time</div>
          <div style="font-size: 1.8rem; font-weight: bold; color: ${resolutionColor}; margin-bottom: 5px;">${perfData.avg_resolution_time}</div>
          <div style="font-size: 0.8rem; color: #999;">Based on ${perfData.total_orders} work orders</div>
        </div>
        <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">Completion Rate</div>
          <div style="font-size: 1.8rem; font-weight: bold; color: ${completionColor}; margin-bottom: 5px;">${perfData.completion_rate}</div>
          <div style="font-size: 0.8rem; color: #999;">Last ${perfData.period_days} days (${perfData.total_orders} orders)</div>
        </div>
        <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">Emergency Response</div>
          <div style="font-size: 1.8rem; font-weight: bold; color: ${emergencyColor}; margin-bottom: 5px;">${perfData.emergency_response_time}</div>
          <div style="font-size: 0.8rem; color: #999;">Avg time to start work</div>
        </div>
        <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">Maintenance Backlog</div>
          <div style="font-size: 1.8rem; font-weight: bold; color: ${backlogColor}; margin-bottom: 5px;">${perfData.backlog_count}</div>
          <div style="font-size: 0.8rem; color: #999;">Orders > 7 days old</div>
        </div>
      </div>
      
      <!-- Distribution Chart with Toggle -->
      <div class="chart-section" style="margin-bottom: 25px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h5 style="margin: 0;">Work Order Distribution</h5>
          <div style="display: inline-flex; background: #f5f5f5; border-radius: 4px; padding: 2px;">
            <button id="priorityDistBtn" class="dist-toggle-btn ${selectedDistribution === 'priority' ? 'active' : ''}" style="padding: 6px 16px; border: none; background: ${selectedDistribution === 'priority' ? '#73000a' : 'transparent'}; color: ${selectedDistribution === 'priority' ? 'white' : '#666'}; border-radius: 3px; cursor: pointer; font-size: 0.85rem; font-weight: 500; transition: all 0.2s;">Priority</button>
            <button id="statusDistBtn" class="dist-toggle-btn ${selectedDistribution === 'status' ? 'active' : ''}" style="padding: 6px 16px; border: none; background: ${selectedDistribution === 'status' ? '#73000a' : 'transparent'}; color: ${selectedDistribution === 'status' ? 'white' : '#666'}; border-radius: 3px; cursor: pointer; font-size: 0.85rem; font-weight: 500; transition: all 0.2s;">Status</button>
          </div>
        </div>
        <div id="distributionContent" class="distribution-bars">
    `;
    
    // Build priority distribution HTML
    let priorityHTML = '';
    for (const [priority, data] of Object.entries(perfData.priCode_distribution)) {
      priorityHTML += `
        <div class="bar-item" style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="font-weight: 500;">${priority}</span>
            <span>${data.count} orders (${data.percentage}%)</span>
          </div>
          <div style="background: #e0e0e0; height: 20px; border-radius: 4px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #4CAF50, #2196F3); height: 100%; width: ${data.percentage}%;"></div>
          </div>
        </div>
      `;
    }
    
    // Build status distribution HTML
    let statusHTML = '';
    for (const [status, data] of Object.entries(perfData.statusCode_distribution)) {
      // Color code by status category
      let statusColor = '#2196F3'; // Default blue
      if (status === 'NEW' || status === 'ASSIGNED') {
        statusColor = '#FF9800'; // Orange for new/assigned
      } else if (status === 'WORK IN PROGRESS' || status === 'AWAITING VEND/PARTS') {
        statusColor = '#FFC107'; // Amber for in progress
      } else if (status === 'COMPLETED' || status === 'WORK DONE' || status === 'SHOP DONE') {
        statusColor = '#4CAF50'; // Green for completed
      } else if (status === 'CANCELED') {
        statusColor = '#9E9E9E'; // Gray for canceled
      }
      
      statusHTML += `
        <div class="bar-item" style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="font-weight: 500;">${status}</span>
            <span>${data.count} orders (${data.percentage}%)</span>
          </div>
          <div style="background: #e0e0e0; height: 20px; border-radius: 4px; overflow: hidden;">
            <div style="background: ${statusColor}; height: 100%; width: ${data.percentage}%;"></div>
          </div>
        </div>
      `;
    }
    
    // Show the currently selected distribution
    html += (selectedDistribution === 'status') ? statusHTML : priorityHTML;
    
    html += `
        </div>
      </div>
      
      <!-- Top Buildings and Crafts -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div class="chart-section" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5>Top 10 Buildings by Work Orders</h5>
          <div class="top-list">
    `;
    
    perfData.top_buildings.forEach((item, index) => {
      html += `
        <div class="top-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
          <span><strong>#${index + 1}</strong> ${item.building_name}</span>
          <span style="color: #666;">${item.count} orders</span>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
        <div class="chart-section" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5>Top 10 Craft/Shop Types</h5>
          <div class="top-list">
    `;
    
    perfData.top_crafts.forEach((item, index) => {
      html += `
        <div class="top-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
          <span><strong>#${index + 1}</strong> ${item.craft}</span>
          <span style="color: #666;">${item.count} orders</span>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
      </div>
      
      <!-- Trend Analysis -->
      <div class="chart-section" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h5>Trend Analysis (vs Previous Period)</h5>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
    `;
    
    const trends = perfData.trend_analysis.changes;
    const trendLabels = {
      'total_orders': 'Total Orders',
      'completion_rate': 'Completion Rate',
      'emergency_count': 'Emergency Count',
      'avg_resolution_hours': 'Avg Resolution'
    };
    
    for (const [key, trend] of Object.entries(trends)) {
      let trendColor = '#666';
      let changeText = '';
      
      if (Math.abs(trend.change_percent) < 0.1) {
        changeText = 'No change';
        trendColor = '#666';
      } else if (key === 'completion_rate') {
        if (trend.change_percent > 0) {
          changeText = `+${trend.change_percent.toFixed(1)}% vs previous period`;
          trendColor = '#4CAF50';
        } else {
          changeText = `${trend.change_percent.toFixed(1)}% vs previous period`;
          trendColor = '#f44336';
        }
      } else if (key === 'avg_resolution_hours') {
        if (trend.change_percent < 0) {
          changeText = `${trend.change_percent.toFixed(1)}% (faster)`;
          trendColor = '#4CAF50';
        } else {
          changeText = `+${trend.change_percent.toFixed(1)}% (slower)`;
          trendColor = '#f44336';
        }
      } else {
        if (trend.change_percent > 0) {
          changeText = `+${trend.change_percent.toFixed(1)}% vs previous period`;
        } else {
          changeText = `${trend.change_percent.toFixed(1)}% vs previous period`;
        }
        trendColor = '#2196F3';
      }
      
      html += `
        <div class="trend-card" style="background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: center;">
          <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">${trendLabels[key] || key}</div>
          <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">
            ${typeof trend.current === 'number' && !Number.isInteger(trend.current) ? trend.current.toFixed(1) : trend.current}
          </div>
          <div style="color: ${trendColor}; font-weight: 500; font-size: 0.85rem;">
            ${changeText}
          </div>
        </div>
      `;
    }
    
    html += `
        </div>
      </div>
    `;
    
    container.innerHTML = html;
    
    // Add event listener for time period selector
    const selector = document.getElementById('timePeriodSelect');
    if (selector) {
      selector.addEventListener('change', (e) => {
        alert('Time period changed to: ' + e.target.options[e.target.selectedIndex].text + '\n\n(Mock mode - data remains the same)');
      });
    }
    
    // Add event listeners for distribution toggle buttons
    const priorityBtn = document.getElementById('priorityDistBtn');
    const statusBtn = document.getElementById('statusDistBtn');
    
    if (priorityBtn) {
      priorityBtn.addEventListener('click', () => {
        if (selectedDistribution !== 'priority') {
          selectedDistribution = 'priority';
          renderPerformanceCharts(); // Re-render with priority selected
        }
      });
    }
    
    if (statusBtn) {
      statusBtn.addEventListener('click', () => {
        if (selectedDistribution !== 'status') {
          selectedDistribution = 'status';
          renderPerformanceCharts(); // Re-render with status selected
        }
      });
    }
  }

  function renderDetails(category) {
    let html = '';
    
    if (category === 'issues') {
      detailsTitle.textContent = 'Key Issues (Past 7 Days)';
      
      data.issues.forEach((item, index) => {
        const priorityColor = 
          item.priority === 'EMERGENCY' ? '#d32f2f' : 
          item.priority === 'URGENT' ? '#f57c00' : 
          item.priority === 'PROMPT' ? '#fbc02d' : '#666';
        
        html += `
          <div class="detail-item" data-issue-index="${index}" onclick="showWorkOrderDetails(${index})" style="cursor: pointer;">
            <div class="title">${item.title}</div>
            <div class="info">
              <span style="color: ${priorityColor}; font-weight: 600;">${item.priority}</span> • 
              ${item.date} • WO# ${item.workOrderNumber}
            </div>
          </div>
        `;
      });
    } else if (category === 'emergency') {
      detailsTitle.textContent = 'Emergency Tickets';
      
      const stats = data.emergencyStats;
      const todayCount = stats ? stats.today : '<span class="loading-spinner">Loading...</span>';
      const weekCount = stats ? stats.week : '<span class="loading-spinner">Loading...</span>';
      const todayDate = stats ? formatDate(stats.date) : '...';
      const weekRange = stats ? `${formatDate(stats.week_start)} - ${formatDate(stats.date)}` : '...';
      
      html = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div class="detail-item" style="text-align: center; padding: 30px;">
            <div class="title" style="font-size: 1.2rem; margin-bottom: 10px;">Today</div>
            <div class="info" style="font-size: 2.5rem; font-weight: bold; color: #d32f2f;" id="emergencyTodayDetail">
              ${todayCount}
            </div>
            <div style="font-size: 0.9rem; color: #666; margin-top: 10px;" id="todayDateDetail">${todayDate}</div>
          </div>
          <div class="detail-item" style="text-align: center; padding: 30px;">
            <div class="title" style="font-size: 1.2rem; margin-bottom: 10px;">Past 7 Days</div>
            <div class="info" style="font-size: 2.5rem; font-weight: bold; color: #d32f2f;" id="emergencyWeekDetail">
              ${weekCount}
            </div>
            <div style="font-size: 0.9rem; color: #666; margin-top: 10px;" id="weekDateRangeDetail">${weekRange}</div>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #fff3e0; border-left: 4px solid #ff9800; border-radius: 4px;">
          <strong>📊 Emergency Tickets:</strong> EMERGENCY priority work orders requiring immediate attention. 
          Tracking today vs past 7 days to identify trends.
        </div>
      `;
      
      // Attach click handlers after rendering (use setTimeout to ensure DOM is ready)
      setTimeout(() => {
        const todayCard = document.querySelector('#emergencyTodayDetail')?.closest('.detail-item');
        const weekCard = document.querySelector('#emergencyWeekDetail')?.closest('.detail-item');
        
        if (todayCard && stats) {
          todayCard.style.cursor = 'pointer';
          todayCard.onclick = () => showEmergencyList('today');
        }
        
        if (weekCard && stats) {
          weekCard.style.cursor = 'pointer';
          weekCard.onclick = () => showEmergencyList('week');
        }
      }, 100);
    } else if (category === 'performance') {
      detailsTitle.textContent = 'Performance Metrics';
      data.performance.forEach(item => {
        html += `
          <div class="detail-item">
            <div class="title">${item.title}</div>
            <div class="info">${item.value} (${item.trend})</div>
          </div>
        `;
      });
    } else if (category === 'priorities') {
      detailsTitle.textContent = 'Scheduled Priorities';
      data.priorities.forEach((item, index) => {
        const priorityColor = 
          item.priority === 'EMERGENCY' ? '#d32f2f' : 
          item.priority === 'URGENT' ? '#f57c00' : 
          item.priority === 'COORDINATED' ? '#1976d2' : '#666';
        
        html += `
          <div class="detail-item" data-priority-index="${index}" onclick="showPriorityDetails(${index})" style="cursor: pointer;">
            <div class="title">${item.description}</div>
            <div class="info">
              <span style="color: ${priorityColor}; font-weight: 600;">${item.priority}</span> • 
              ${item.location} • 
              <strong>Scheduled:</strong> ${item.scheduled_date} • 
              WO# ${item.proposal}
            </div>
          </div>
        `;
      });
    }
    
    detailsContent.innerHTML = html;
  }

  // Handle card clicks
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const category = card.getAttribute('data-category');
      renderDetails(category);
    });
  });

  // Initialize with first card selected
  if (cards.length > 0) {
    cards[0].classList.add('selected');
    renderDetails('issues');
  }
  
  // Load all data
  loadKeyIssues();
  loadEmergencyStats();
  loadPriorities();
  loadPerformanceMetrics();
  
  // Make data accessible globally for modal
  window.dashboardData = data;
  
  // Refresh button handler - clears all dashboard data and reloads
  const refreshBtn = document.getElementById('refreshIssuesBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.disabled = true;
      refreshBtn.textContent = 'Refreshing...';
      
      try {
        // Clear all displayed data
        console.log('[REFRESH] Clearing all dashboard data...');
        
        // Show loading state on all cards
        const issuesCount = document.querySelector('[data-category="issues"] .category-count');
        const emergencyCount = document.getElementById('emergencyCardCount');
        const prioritiesCount = document.querySelector('[data-category="priorities"] .category-count');
        const perfCount = document.querySelector('[data-category="performance"] .category-count');
        
        if (issuesCount) issuesCount.textContent = '...';
        if (emergencyCount) emergencyCount.textContent = '...';
        if (prioritiesCount) prioritiesCount.textContent = '...';
        if (perfCount) perfCount.textContent = '...';
        
        // Clear details section with loading spinner
        const detailsContainer = document.querySelector('.details-list');
        if (detailsContainer) {
          detailsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
              <div class="spinner" style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #73000a; border-radius: 50%; animation: spin 1s linear infinite;"></div>
              <p style="margin-top: 15px; color: #666;">Loading fresh data...</p>
            </div>
          `;
        }
        
        // Clear performance charts with loading spinner
        const perfContainer = document.getElementById('performanceChartsContainer');
        if (perfContainer) {
          perfContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
              <div class="spinner" style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #73000a; border-radius: 50%; animation: spin 1s linear infinite;"></div>
              <p style="margin-top: 15px; color: #666;">Loading performance metrics...</p>
            </div>
          `;
        }
        
        // Clear chat history (visual only, keeps session)
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
          chatMessages.innerHTML = `
            <div class="chat-message ai-message">
              <strong>AI Assistant:</strong> Chat refreshed! How can I help you analyze the latest data?
            </div>
          `;
        }
        
        // Simulate API delay (800ms to show the spinner animation)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Reload all data fresh
        console.log('[REFRESH] Reloading all data...');
        await loadKeyIssues();
        loadEmergencyStats();
        loadPriorities();
        loadPerformanceMetrics();
        
        // Small delay to ensure data is loaded
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Re-render the currently selected category
        const selectedCard = document.querySelector('.quick-card.selected');
        if (selectedCard) {
          const category = selectedCard.getAttribute('data-category');
          console.log('[REFRESH] Re-rendering category:', category);
          renderDetails(category);
        } else {
          // If no card is selected, select issues by default
          console.log('[REFRESH] No card selected, defaulting to issues');
          const issuesCard = document.querySelector('[data-category="issues"]');
          if (issuesCard) {
            issuesCard.click();
          }
        }
        
        console.log('[REFRESH] Data refresh complete!');
        
      } catch (error) {
        console.error('[REFRESH] Error refreshing data:', error);
        alert('Error refreshing data. Please try again.');
      } finally {
        refreshBtn.textContent = 'Refresh Data';
        refreshBtn.disabled = false;
      }
    });
  }
}

// Function to show work order details in modal
function showWorkOrderDetails(index) {
  const data = window.dashboardData;
  if (!data || !data.issues || !data.issues[index]) {
    console.error('No work order data found for index:', index);
    return;
  }
  
  const issue = data.issues[index];
  const fullData = issue.fullData;
  
  if (!fullData) {
    alert('Full work order data not available');
    return;
  }
  
  const modal = document.getElementById('workOrderModal');
  const jsonDisplay = document.getElementById('workOrderJson');
  const closeBtn = modal.querySelector('.close-btn');
  
  jsonDisplay.textContent = JSON.stringify(fullData, null, 2);
  modal.setAttribute('aria-hidden', 'false');
  
  closeBtn.onclick = () => {
    modal.setAttribute('aria-hidden', 'true');
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  };
  
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// Show priority details in modal
function showPriorityDetails(index) {
  const data = window.dashboardData;
  if (!data || !data.priorities || !data.priorities[index]) {
    console.error('No priority data found for index:', index);
    return;
  }
  
  const priority = data.priorities[index];
  const fullData = priority.fullData || priority;
  
  const modal = document.getElementById('workOrderModal');
  const jsonDisplay = document.getElementById('workOrderJson');
  const closeBtn = modal.querySelector('.close-btn');
  
  jsonDisplay.textContent = JSON.stringify(fullData, null, 2);
  modal.setAttribute('aria-hidden', 'false');
  
  closeBtn.onclick = () => {
    modal.setAttribute('aria-hidden', 'true');
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  };
  
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// Show all emergency tickets in a modal
function showEmergencyList(period = 'week') {
  const stats = MOCK_DATA.emergencyStats;
  
  if (!stats || !stats.emergency_list) {
    alert('No emergency ticket data available');
    return;
  }
  
  // Filter based on period
  let filteredList;
  let dateRange;
  
  if (period === 'today') {
    // Only show tickets from today
    filteredList = stats.emergency_list.filter(ticket => ticket.date === stats.date);
    dateRange = `Today (${stats.date})`;
  } else {
    // Show all tickets from the past week
    filteredList = stats.emergency_list;
    dateRange = `Past 7 Days (${stats.week_start} to ${stats.date})`;
  }
  
  const modal = document.getElementById('workOrderModal');
  const jsonDisplay = document.getElementById('workOrderJson');
  const closeBtn = modal.querySelector('.close-btn');
  
  const displayData = {
    period: period === 'today' ? 'Today Only' : 'Past 7 Days',
    total_count: filteredList.length,
    date_range: dateRange,
    emergency_tickets: filteredList.map(ticket => ({
      proposal: ticket.proposal,
      description: ticket.description,
      location: ticket.location,
      date: ticket.date,
      status: ticket.status
    }))
  };
  
  jsonDisplay.textContent = JSON.stringify(displayData, null, 2);
  modal.setAttribute('aria-hidden', 'false');
  
  closeBtn.onclick = () => {
    modal.setAttribute('aria-hidden', 'true');
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  };
  
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/* ======================================
   Dashboard AI Chat
====================================== */

function initDashboardChat() {
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const clearChatBtn = document.getElementById('clearChatBtn');

  if (!chatInput || !chatSendBtn || !chatMessages) return;

  // Store conversation history
  let conversationHistory = [];

  // Load conversation history (from mock data)
  async function loadChatHistory() {
    console.log('[DEBUG] Loading chat history (mock)...');
    
    if (MOCK_DATA.chatHistory && MOCK_DATA.chatHistory.length > 0) {
      conversationHistory = MOCK_DATA.chatHistory;
      chatMessages.innerHTML = '';
      
      MOCK_DATA.chatHistory.forEach(msg => {
        if (msg.role === 'user') {
          const userDiv = document.createElement('div');
          userDiv.className = 'chat-message user-message';
          userDiv.innerHTML = `<strong>You:</strong> ${msg.content}`;
          chatMessages.appendChild(userDiv);
        } else if (msg.role === 'assistant') {
          const aiDiv = document.createElement('div');
          aiDiv.className = 'chat-message ai-message';
          aiDiv.innerHTML = `<strong>AI Assistant:</strong> ${msg.content}`;
          chatMessages.appendChild(aiDiv);
        }
      });
      
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  loadChatHistory();

  async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message user-message';
    userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
    chatMessages.appendChild(userDiv);

    chatInput.value = '';
    chatSendBtn.disabled = true;
    chatSendBtn.textContent = 'Thinking...';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message ai-message typing-indicator';
    typingDiv.innerHTML = `<strong>AI Assistant:</strong> <em>Analyzing data...</em>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await apiRequest('/api/dashboard-chat/', 'POST', {
        message: userMessage,
        history: conversationHistory
      });

      typingDiv.remove();

      if (response && response.reply) {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'chat-message ai-message';
        aiDiv.innerHTML = `<strong>AI Assistant:</strong> ${response.reply}`;
        
        if (response.records_found !== undefined) {
          const recordInfo = document.createElement('div');
          recordInfo.className = 'chat-info';
          recordInfo.innerHTML = `<small><em>Found ${response.records_found} work orders</em></small>`;
          aiDiv.appendChild(recordInfo);
        }
        
        chatMessages.appendChild(aiDiv);
      }
    } catch (error) {
      typingDiv.remove();
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'chat-message ai-message error';
      errorDiv.innerHTML = `<strong>AI Assistant:</strong> Sorry, I encountered an error. Please try again.`;
      chatMessages.appendChild(errorDiv);
      console.error('Chat error:', error);
    } finally {
      chatSendBtn.disabled = false;
      chatSendBtn.textContent = 'Send';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  chatSendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to clear the conversation history?')) {
        return;
      }

      MOCK_DATA.chatHistory = [];
      conversationHistory = [];

      chatMessages.innerHTML = `
        <div class="chat-message ai-message">
          <strong>AI Assistant:</strong> Hi! I can help you analyze dashboard metrics. Ask me anything about your performance data.
        </div>
      `;

      console.log('Chat history cleared');
    });
  }
}

/* ======================================
   Calendar Interactions
====================================== */

function initCalendarInteractions() {
  const filterBtn = document.getElementById('filterToggle');
  const filterOptions = document.getElementById('filterOptions');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const generateBtn = document.getElementById('generateBtn');
  const table = document.getElementById('calendarTable');

  if (filterBtn && filterOptions) {
    filterBtn.addEventListener('click', () => {
      filterOptions.classList.toggle('active');
      if (filterOptions.classList.contains('active')) {
        const firstCategory = document.querySelector('.filter-category');
        if (firstCategory && !document.querySelector('.filter-category.active')) {
          firstCategory.click();
        }
      }
    });
  }

  const filterCategories = document.querySelectorAll('.filter-category');
  filterCategories.forEach(category => {
    category.addEventListener('click', () => {
      const categoryName = category.dataset.category;
      
      filterCategories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');
      
      document.querySelectorAll('.filter-sub-options').forEach(sub => {
        sub.classList.remove('active');
      });
      
      const subPanel = document.querySelector(`.filter-sub-options[data-for="${categoryName}"]`);
      if (subPanel) {
        subPanel.classList.add('active');
      }
    });
  });
  
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      document.querySelectorAll('.filter-search-input').forEach(input => input.value = '');
      document.querySelectorAll('.checkbox-group label').forEach(label => {
        label.classList.remove('hidden');
      });
      
      console.log('All filters cleared');
      applyFilters();
    });
  }
  
  function initFilterSearch(inputId, filterType) {
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;
    
    const parentOptions = searchInput.closest('.filter-sub-options');
    if (!parentOptions) return;
    
    const checkboxGroup = parentOptions.querySelector('.checkbox-group');
    if (!checkboxGroup) return;
    
    const labels = checkboxGroup.querySelectorAll('label');
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      labels.forEach(label => {
        const checkboxValue = label.querySelector('input[type="checkbox"]')?.value || '';
        const labelText = label.textContent.toLowerCase().trim();
        
        if (searchTerm === '' || labelText.includes(searchTerm) || checkboxValue.toLowerCase().includes(searchTerm)) {
          label.classList.remove('hidden');
        } else {
          label.classList.add('hidden');
        }
      });
    });
    
    searchInput.addEventListener('focus', () => {
      searchInput.select();
    });
  }
  
  initFilterSearch('buildingSearch', 'building');
  initFilterSearch('locationSearch', 'location');
  
  const applyFilters = () => {
    const selectedPriorities = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="priority"]:checked')
    ).map(cb => cb.value);
    
    const selectedStatuses = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="status"]:checked')
    ).map(cb => cb.value);
    
    const selectedShops = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="shop"]:checked')
    ).map(cb => cb.value);
    
    const selectedBuildings = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="building"]:checked')
    ).map(cb => cb.value);
    
    const selectedLocations = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="location"]:checked')
    ).map(cb => cb.value);
    
    console.log('Filters applied:', {
      priorities: selectedPriorities,
      statuses: selectedStatuses,
      shops: selectedShops,
      buildings: selectedBuildings,
      locations: selectedLocations
    });
  };
  
  document.querySelectorAll('input[type="checkbox"][name="priority"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
  document.querySelectorAll('input[type="checkbox"][name="status"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
  document.querySelectorAll('input[type="checkbox"][name="shop"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
  document.querySelectorAll('input[type="checkbox"][name="building"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
  document.querySelectorAll('input[type="checkbox"][name="location"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  if (!table) return;

  let isSelecting = false;
  let startCell = null;
  let endCell = null;

  table.addEventListener('mousedown', (e) => {
    if (e.target.tagName !== 'TD') return;
    isSelecting = true;
    clearSelection(table);
    startCell = e.target;
    startCell.classList.add('selected');
  });

  table.addEventListener('mouseover', (e) => {
    if (!isSelecting || e.target.tagName !== 'TD') return;
    clearSelection(table);
    endCell = e.target;
    highlightRange(table, startCell, endCell);
  });

  document.addEventListener('mouseup', () => {
    if (isSelecting) isSelecting = false;
  });

  function clearSelection(t) {
    t.querySelectorAll('td').forEach((td) => td.classList.remove('selected', 'range'));
  }

  function highlightRange(t, start, end) {
    const allCells = Array.from(t.querySelectorAll('td'));
    const startIndex = allCells.indexOf(start);
    const endIndex = allCells.indexOf(end);
    if (startIndex === -1 || endIndex === -1) return;

    const [low, high] = startIndex < endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
    allCells.forEach((cell, i) => {
      if (i === startIndex) cell.classList.add('selected');
      else if (i >= low && i <= high) cell.classList.add('range');
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      generateReport();
    });
  }
}

/* ======================================
   OTP Form
====================================== */

function initOTPForm() {
  const form = document.getElementById('otpForm');
  const otpInput = document.getElementById('otpInput');
  const resendBtn = document.getElementById('resendBtn');

  if (!form) return;

  if (resendBtn && otpInput) {
    resendBtn.addEventListener('click', (e) => {
      otpInput.removeAttribute('required');
      alert('Verification code resent to your email!');
    });
  }

  form.addEventListener('submit', (e) => {
    const isResend = e.submitter && e.submitter.name === 'resend';

    if (!isResend && otpInput && otpInput.value.trim() === '') {
      e.preventDefault();
      alert('Please enter your verification code.');
    } else if (!isResend) {
      e.preventDefault();
      alert('Verification successful! Redirecting to reset password...');
      setTimeout(() => {
        window.location.href = 'reset_password.html';
      }, 500);
    }
  });
}

/* ======================================
   Archives Functions
====================================== */

function loadArchiveList() {
  console.log("Loading archived reports (mock data)...");
  // Archives are loaded via HTML on page load
}

function previewArchiveItem(id) {
  const report = MOCK_DATA.archiveReports.find(r => r.id === id);
  if (report) {
    alert(`Previewing: ${report.title}\n\nGenerated: ${formatDateTime(report.generated)}\n\nThis would normally open a preview modal with the report content.`);
  }
}

function downloadArchiveItem(id) {
  const report = MOCK_DATA.archiveReports.find(r => r.id === id);
  if (report) {
    alert(`Downloading: ${report.filename}\n\nThis would normally trigger a file download.`);
  }
}

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

/* ======================================
   Event Listeners Initialization
====================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Global JS initialized (Mock Mode for GitHub Pages).");

  const loginForm = document.querySelector("form#loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  const signupForm = document.querySelector("form#signupForm");
  if (signupForm) signupForm.addEventListener("submit", handleSignupSubmit);

  try {
    initDashboardCards();
  } catch (e) {
    console.warn('initDashboardCards failed:', e);
  }

  try {
    initDashboardChat();
  } catch (e) {
    console.warn('initDashboardChat failed:', e);
  }

  try {
    initCalendarInteractions();
  } catch (e) {
    console.warn('initCalendarInteractions failed:', e);
  }

  try {
    initOTPForm();
  } catch (e) {
    console.warn('initOTPForm failed:', e);
  }

  updateDashboardStats();
  loadCalendarData();
  loadArchiveList();
});
