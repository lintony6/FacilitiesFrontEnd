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

// Placeholder for updating dashboard stats dynamically
function updateDashboardStats() {
  console.log("Fetching latest dashboard metrics... TODO: call backend API.");
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

  const mockReplies = [
    "Based on the current metrics, your emergency tickets are trending upward this week.",
    "Performance looks stable. The key issues count has decreased by 15% compared to last week.",
    "I see 6 priority items. Would you like a breakdown by category?",
    "Your team resolved 25 key issues this month. Great progress!",
    "The data shows peak activity on Tuesdays and Wednesdays.",
  ];

  function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message user-message';
    userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
    chatMessages.appendChild(userDiv);

    // Clear input
    chatInput.value = '';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Mock AI reply after short delay
    setTimeout(() => {
      const aiDiv = document.createElement('div');
      aiDiv.className = 'chat-message ai-message';
      const randomReply = mockReplies[Math.floor(Math.random() * mockReplies.length)];
      aiDiv.innerHTML = `<strong>AI Assistant:</strong> ${randomReply}`;
      chatMessages.appendChild(aiDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
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
    filterBtn.addEventListener('click', () => filterOptions.classList.toggle('active'));
  }
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => alert('Filters cleared.'));
  }

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
  const pageHeading = document.getElementById('pageHeading');
  const messageDisplay = document.getElementById('messageDisplay');

  if (!form) return;

  // Handle page heading based on referrer
  if (pageHeading) {
    const ref = document.referrer.split('/').pop();
    if (ref === 'signup.html') {
      sessionStorage.setItem('fromPage', 'signup');
      pageHeading.textContent = 'Account Verification';
    } else if (ref === 'forgot_password.html') {
      sessionStorage.setItem('fromPage', 'forgot');
      pageHeading.textContent = 'Reset Password Verification';
    }
  }

  // Check for URL parameter messages
  if (messageDisplay) {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
      messageDisplay.textContent = decodeURIComponent(message);
      messageDisplay.style.display = 'block';
    }
  }

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (otpInput && otpInput.value.trim() === '') {
      alert('Please enter your verification code.');
      return;
    }

    // Decide redirect based on previous page
    const from = sessionStorage.getItem('fromPage');
    if (from === 'signup') {
      window.location.href = 'login.html';
    } else if (from === 'forgot') {
      window.location.href = 'reset_password.html';
    } else {
      // fallback (if opened directly)
      window.location.href = 'login.html';
    }
  });

  // Handle resend button
  if (resendBtn && messageDisplay) {
    resendBtn.addEventListener('click', () => {
      messageDisplay.textContent = 'Verification code resent!';
      messageDisplay.style.display = 'block';
      setTimeout(() => {
        messageDisplay.style.display = 'none';
      }, 3000);
    });
  }
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

