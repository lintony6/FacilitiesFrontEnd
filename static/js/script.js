/* ======================================
   Global Utility Functions
====================================== */

// Helper: Get CSRF token for secure POSTs
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

// Placeholder: Generic fetch wrapper for backend calls
async function apiRequest(url, method = "GET", body = null) {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": getCSRFToken(),
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error.message);
    return null;
  }
}

/* ======================================
   Auth Functions (Login / Signup / Password Reset)
====================================== */

// Placeholder for login logic
function handleLoginSubmit(e) {
  e.preventDefault();
  console.log("Login form submitted. TODO: add authentication logic here.");
}

// Placeholder for signup logic
function handleSignupSubmit(e) {
  e.preventDefault();
  console.log("Signup form submitted. TODO: add user registration logic here.");
}

// Placeholder for forgot password flow
function handleForgotPassword(e) {
  e.preventDefault();
  console.log("Forgot password triggered. TODO: send password reset email.");
}

// Placeholder for reset password confirmation
function handleResetPassword(e) {
  e.preventDefault();
  console.log("Reset password submitted. TODO: update password on server.");
}

/* ======================================
   Dashboard Functions
====================================== */

// Open modal placeholder (used on dashboard)
function openDashboardModal(id) {
  const modal = typeof id === "string" ? document.getElementById(id) : id;
  if (!modal) return;
  modal.setAttribute("aria-hidden", "false");
  // focus the first focusable element inside the modal
  const focusable = modal.querySelector(
    'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable) focusable.focus();
  console.log(`Dashboard modal '${id}' opened.`);
}

// Close modal placeholder
function closeDashboardModal(id) {
  const modal = typeof id === "string" ? document.getElementById(id) : id;
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  console.log(`Dashboard modal '${id}' closed.`);
}

// Fetch and update emergency ticket counts
function updateDashboardStats() {
  console.log("Dashboard stats - using placeholder data for GitHub Pages demo");
  
  const todayElement = document.getElementById('emergencyToday');
  const weekElement = document.getElementById('emergencyWeek');
  const todayDateElement = document.getElementById('todayDate');
  const weekDateRangeElement = document.getElementById('weekDateRange');
  
  // Only update if we're on the dashboard page
  if (!todayElement || !weekElement) {
    return;
  }
  
  // For GitHub Pages demo, use placeholder data
  // In production with Django backend, this would fetch from '/api/dashboard-stats/'
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - 6);
  
  const todayFormatted = formatDate(today.toISOString().split('T')[0]);
  const weekStartFormatted = formatDate(weekStart.toISOString().split('T')[0]);
  const weekEndFormatted = todayFormatted;
  
  // Placeholder data
  todayElement.innerHTML = `<span class="count-number">-</span>`;
  weekElement.innerHTML = `<span class="count-number">-</span>`;
  
  if (todayDateElement) {
    todayDateElement.textContent = todayFormatted;
  }
  if (weekDateRangeElement) {
    weekDateRangeElement.textContent = `${weekStartFormatted} - ${weekEndFormatted}`;
  }
  
  console.log('Dashboard stats updated with placeholder data (backend API required for live data)');
}

// Helper function to format date strings
function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString + 'T00:00:00'); // Add time to avoid timezone issues
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/* ======================================
   Calendar Functions
====================================== */

// Placeholder for fetching calendar data (tasks/events)
function loadCalendarData() {
  console.log("Loading calendar data... TODO: fetch events from backend.");
}

// Placeholder for saving AI prompt and date range
function generateReport() {
  console.log("Generating report...");
  const prompt = document.getElementById("aiPrompt")?.value || "";
  const selectedDates = Array.from(
    document.querySelectorAll(".calendar-grid td.selected, .calendar-grid td.range")
  ).map((td) => td.textContent.trim());
  console.log("Selected dates:", selectedDates);
  console.log("AI Prompt:", prompt);
  // TODO: POST this info to Django to generate a report
}

// Placeholder for date cell click handling
function handleDateSelection() {
  console.log("Calendar date clicked. TODO: highlight date or range.");
}

/* ======================================
   Inline JS consolidation: initialize per-page interactions
   These were previously embedded in templates — moved here for centralization.
====================================== */

// Dashboard modal behaviors (click outside to close, ESC handling)
function initDashboardModals() {
  const topButtons = document.querySelectorAll('.top-btn[data-modal]');
  const closeButtons = document.querySelectorAll('.close-btn');
  const modals = document.querySelectorAll('.modal');

  topButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal');
      const modal = document.getElementById(id);
      if (modal) openDashboardModal(modal);
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) closeDashboardModal(modal);
    });
  });

  // click outside to close
  window.addEventListener('click', (e) => {
    modals.forEach((m) => {
      if (e.target === m) closeDashboardModal(m);
    });
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach((m) => closeDashboardModal(m));
    }
  });
}

// Dashboard AI Chat functionality
function initDashboardChat() {
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');

  if (!chatInput || !chatSendBtn || !chatMessages) return;

  // Store conversation history
  const conversationHistory = [];

  async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    // Add user message to UI
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message user-message';
    userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
    chatMessages.appendChild(userDiv);

    // Clear input
    chatInput.value = '';
    
    // Disable send button while processing
    chatSendBtn.disabled = true;
    chatSendBtn.textContent = 'Thinking...';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message ai-message typing-indicator';
    typingDiv.innerHTML = `<strong>AI Assistant:</strong> <em>Analyzing data...</em>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      // NOTE: This is a demo version for GitHub Pages
      // In production with Django backend, uncomment the following:
      /*
      const response = await apiRequest('/api/dashboard-chat/', 'POST', {
        message: userMessage,
        history: conversationHistory
      });
      */
      
      // For demo purposes, show a placeholder response
      setTimeout(() => {
        // Remove typing indicator
        typingDiv.remove();
        
        // Show demo message
        const aiDiv = document.createElement('div');
        aiDiv.className = 'chat-message ai-message';
        aiDiv.innerHTML = `<strong>AI Assistant:</strong> This is a demo version. The AI chat feature requires a Django backend with Gemini AI integration. In production, I can analyze work orders, provide metrics, and answer questions about your facilities data.`;
        chatMessages.appendChild(aiDiv);
        
        // Re-enable send button
        chatSendBtn.disabled = false;
        chatSendBtn.textContent = 'Send';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
      
      return; // Exit early for demo
      
      /* Production code would continue here:
      if (response && response.reply) {
        conversationHistory.push({
          role: 'assistant',
          content: response.reply,
          data: response.data || []
        });

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
      } else {
        throw new Error('Invalid response from server');
      }
      */
    } catch (error) {
      // Remove typing indicator
      typingDiv.remove();
      
      // Show error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'chat-message ai-message error';
      errorDiv.innerHTML = `<strong>AI Assistant:</strong> Sorry, I encountered an error processing your request. Please try again.`;
      chatMessages.appendChild(errorDiv);
      console.error('Chat error:', error);
    } finally {
      // Re-enable send button
      chatSendBtn.disabled = false;
      chatSendBtn.textContent = 'Send';
      
      // Scroll to bottom
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
}


// Calendar interactions: filtering, selection, and report generation
function initCalendarInteractions() {
  const filterBtn = document.getElementById('filterToggle');
  const filterOptions = document.getElementById('filterOptions');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const generateBtn = document.getElementById('generateBtn');
  const table = document.getElementById('calendarTable');

  if (filterBtn && filterOptions) {
    filterBtn.addEventListener('click', () => {
      filterOptions.classList.toggle('active');
      // Show first category by default when opening
      if (filterOptions.classList.contains('active')) {
        const firstCategory = document.querySelector('.filter-category');
        if (firstCategory && !document.querySelector('.filter-category.active')) {
          firstCategory.click();
        }
      }
    });
  }

  // Handle filter category clicks
  const filterCategories = document.querySelectorAll('.filter-category');
  filterCategories.forEach(category => {
    category.addEventListener('click', () => {
      const categoryName = category.dataset.category;
      
      // Remove active from all categories
      filterCategories.forEach(c => c.classList.remove('active'));
      
      // Add active to clicked category
      category.classList.add('active');
      
      // Hide all sub-options
      document.querySelectorAll('.filter-sub-options').forEach(sub => {
        sub.classList.remove('active');
      });
      
      // Show corresponding sub-options
      const subPanel = document.querySelector(`.filter-sub-options[data-for="${categoryName}"]`);
      if (subPanel) {
        subPanel.classList.add('active');
      }
    });
  });
  
  // Clear Filters functionality
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      // Clear all checkboxes
      document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      
      // Clear search inputs
      document.querySelectorAll('.filter-search-input').forEach(input => input.value = '');
      
      // Show all labels
      document.querySelectorAll('.checkbox-group label').forEach(label => {
        label.classList.remove('hidden');
      });
      
      console.log('All filters cleared');
      applyFilters(); // Re-apply to show all data
    });
  }
  
  // Autocomplete functionality for building and location filters
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
        
        // Show/hide based on search match
        if (searchTerm === '' || labelText.includes(searchTerm) || checkboxValue.toLowerCase().includes(searchTerm)) {
          label.classList.remove('hidden');
        } else {
          label.classList.add('hidden');
        }
      });
    });
    
    // Clear search when clicking clear filters
    searchInput.addEventListener('focus', () => {
      searchInput.select();
    });
  }
  
  // Initialize search for building and location filters
  initFilterSearch('buildingSearch', 'building');
  initFilterSearch('locationSearch', 'location');
  
  // Apply filters function
  const applyFilters = () => {
    // Get all checked priorities
    const selectedPriorities = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="priority"]:checked')
    ).map(cb => cb.value);
    
    // Get all checked statuses
    const selectedStatuses = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="status"]:checked')
    ).map(cb => cb.value);
    
    // Get all checked shops
    const selectedShops = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="shop"]:checked')
    ).map(cb => cb.value);
    
    // Get all checked buildings
    const selectedBuildings = Array.from(
      document.querySelectorAll('input[type="checkbox"][name="building"]:checked')
    ).map(cb => cb.value);
    
    // Get all checked locations
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
    
    // TODO: Apply filters to calendar data / fetch filtered work orders
  };
  
  // Attach change listeners to all checkboxes
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

  if (!table) return; // nothing else to do if calendar table not present

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
      const selected = [...table.querySelectorAll('.selected, .range')].map((td) => td.textContent.trim());
      const prompt = document.getElementById('aiPrompt')?.value.trim() || '';
      alert(`Generating report for days: ${selected.join(', ') || 'none'}\n\nPrompt: ${prompt || 'No AI input.'}`);
    });
  }
}

// OTP / Enter Code form behaviors
function initOTPForm() {
  const form = document.getElementById('otpForm');
  const otpInput = document.getElementById('otpInput');
  const resendBtn = document.getElementById('resendBtn');

  if (!form) return;

  if (resendBtn && otpInput) {
    resendBtn.addEventListener('click', (e) => {
      // Temporarily disable required validation when clicking Resend
      otpInput.removeAttribute('required');
    });
  }

  form.addEventListener('submit', (e) => {
    const isResend = e.submitter && e.submitter.name === 'resend';

    if (!isResend && otpInput && otpInput.value.trim() === '') {
      e.preventDefault();
      alert('Please enter your verification code.');
    }
  });
}

/* ======================================
   Archives Functions
====================================== */

// Placeholder for loading archived reports
function loadArchiveList() {
  console.log("Loading archived reports... TODO: call backend to list files.");
}

// Placeholder for previewing an archive entry
function previewArchiveItem(id) {
  console.log(`Previewing archive item ${id}. TODO: load file preview modal.`);
}

// Placeholder for downloading archive file
function downloadArchiveItem(id) {
  console.log(`Downloading archive item ${id}. TODO: trigger file download.`);
}

/* ======================================
   Event Listeners Initialization
====================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Global JS initialized.");

  // Attach login form handler
  const loginForm = document.querySelector("form#loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  // Attach signup form handler
  const signupForm = document.querySelector("form#signupForm");
  if (signupForm) signupForm.addEventListener("submit", handleSignupSubmit);

  // Attach signup/login handlers remain

  // Initialize page-specific behaviors centralized in this file
  try {
    initDashboardModals();
  } catch (e) {
    console.warn('initDashboardModals failed:', e);
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

  // Placeholder initialization
  updateDashboardStats();
  loadCalendarData();
  loadArchiveList();
});
