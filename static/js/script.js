/* ======================================
   MOCK DATA - Simulating API responses for GitHub Pages
====================================== */

const MOCK_DATA = {
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
    priorities: [
      { title: 'Annual HVAC inspection', status: 'In Progress', eta: '2 days' },
      { title: 'Fire safety system upgrade', status: 'Scheduled', eta: '1 week' },
      { title: 'Parking lot resurfacing', status: 'Not Started', eta: '2 weeks' },
      { title: 'Building roof repairs', status: 'In Review', eta: '3 days' },
      { title: 'Security system update', status: 'Pending Approval', eta: '5 days' },
      { title: 'Elevator modernization project', status: 'Planning', eta: '1 month' },
    ]
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

  function renderDetails(category) {
    let html = '';
    
    if (category === 'issues') {
      detailsTitle.textContent = 'Key Issues';
      
      data.issues.forEach((item, index) => {
        html += `
          <div class="detail-item" data-issue-index="${index}" onclick="showWorkOrderDetails(${index})">
            <div class="title">${item.title}</div>
            <div class="info">${item.priority} • ${item.date} • WO# ${item.workOrderNumber}</div>
          </div>
        `;
      });
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
      detailsTitle.textContent = 'Current Priorities';
      data.priorities.forEach(item => {
        html += `
          <div class="detail-item">
            <div class="title">${item.title}</div>
            <div class="info">${item.status} • ETA: ${item.eta}</div>
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
  
  // Load key issues
  loadKeyIssues();
  
  // Make data accessible globally for modal
  window.dashboardData = data;
  
  // Refresh button handler
  const refreshBtn = document.getElementById('refreshIssuesBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.disabled = true;
      refreshBtn.textContent = 'Refreshing...';
      
      // Simulate refresh with slight delay
      setTimeout(() => {
        alert('Data refreshed! (Mock data remains the same for demo)');
        refreshBtn.textContent = 'Refresh Data';
        refreshBtn.disabled = false;
      }, 800);
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
