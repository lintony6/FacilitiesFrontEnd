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
  const modal = document.getElementById(id);
  if (modal) modal.setAttribute("aria-hidden", "false");
  console.log(`Dashboard modal '${id}' opened.`);
}

// Close modal placeholder
function closeDashboardModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.setAttribute("aria-hidden", "true");
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

  // Attach dashboard modals
  const topButtons = document.querySelectorAll(".top-btn[data-modal]");
  topButtons.forEach((btn) => {
    btn.addEventListener("click", () =>
      openDashboardModal(btn.getAttribute("data-modal"))
    );
  });

  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () =>
      closeDashboardModal(btn.closest(".modal").id)
    );
  });

  // Attach Generate Summary button on calendar
  const genBtn = document.getElementById("generateBtn");
  if (genBtn) genBtn.addEventListener("click", generateReport);

  // Placeholder initialization
  updateDashboardStats();
  loadCalendarData();
  loadArchiveList();
});
