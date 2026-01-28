// ============================================
// KALASALINGAM UNIVERSITY ATTENDANCE SYSTEM
// Main Application Script
// ============================================

// Application State
let attendance = {};
let selectedCourse = null;
let selectedDate = null;

// DOM Elements
const courseSelect = document.getElementById('courseSelect');
const facultyDisplay = document.getElementById('facultyDisplay');
const dateInput = document.getElementById('dateInput');
const studentsGrid = document.getElementById('studentsGrid');
const presentCount = document.getElementById('presentCount');
const absentCount = document.getElementById('absentCount');
const absenteesList = document.getElementById('absenteesList');
const absenteesSection = document.getElementById('absenteesSection');
const submitBtn = document.getElementById('submitBtn');
const markAllAbsentBtn = document.getElementById('markAllAbsentBtn');
const markAllPresentBtn = document.getElementById('markAllPresentBtn');
const menuBtn = document.getElementById('menuBtn');
const historyPanel = document.getElementById('historyPanel');
const panelOverlay = document.getElementById('panelOverlay');
const closeHistory = document.getElementById('closeHistory');
const historyContent = document.getElementById('historyContent');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const resultSummary = document.getElementById('resultSummary');
const absenteesResult = document.getElementById('absenteesResult');
const copyWhatsAppBtn = document.getElementById('copyWhatsAppBtn');
const saveExcelBtn = document.getElementById('saveExcelBtn');
const toast = document.getElementById('toast');

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Set today's date
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    selectedDate = today;

    // Populate courses
    populateCourses();

    // Initialize attendance (all present by default)
    initializeAttendance();

    // Render students
    renderStudents();

    // Update counts
    updateCounts();

    // Setup event listeners
    setupEventListeners();

    // Load any saved data
    loadSavedData();
}

function populateCourses() {
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = `${course.code} - ${course.name}`;
        courseSelect.appendChild(option);
    });
}

function initializeAttendance() {
    students.forEach(student => {
        attendance[student.id] = true; // true = present
    });
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderStudents() {
    studentsGrid.innerHTML = '';

    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = `student-card ${attendance[student.id] ? 'present' : 'absent'}`;
        card.dataset.id = student.id;

        card.innerHTML = `
            <div class="student-number">${index + 1}</div>
            <div class="student-info">
                <span class="student-reg">${student.regNo}</span>
                <span class="student-name" title="${student.name}">${student.name}</span>
            </div>
            <div class="status-toggle">${attendance[student.id] ? 'Present' : 'Absent'}</div>
        `;

        card.addEventListener('click', () => toggleAttendance(student.id));
        studentsGrid.appendChild(card);

        // Add staggered animation
        card.style.animationDelay = `${index * 0.02}s`;
        card.classList.add('slide-up');
    });
}

function updateStudentCard(studentId) {
    const card = document.querySelector(`.student-card[data-id="${studentId}"]`);
    if (card) {
        const isPresent = attendance[studentId];
        card.className = `student-card ${isPresent ? 'present' : 'absent'}`;
        card.querySelector('.status-toggle').textContent = isPresent ? 'Present' : 'Absent';
    }
}

function updateCounts() {
    const present = Object.values(attendance).filter(v => v).length;
    const absent = Object.values(attendance).filter(v => !v).length;

    presentCount.textContent = present;
    absentCount.textContent = absent;

    updateAbsenteesList();
}

function updateAbsenteesList() {
    const absentees = students.filter(s => !attendance[s.id]);

    if (absentees.length === 0) {
        absenteesList.innerHTML = '<p class="no-absentees">No absentees - All students are present!</p>';
    } else {
        absenteesList.innerHTML = `
            <div class="absentee-chips">
                ${absentees.map(s => `<span class="absentee-chip">${s.regNo}</span>`).join('')}
            </div>
        `;
    }
}

// ============================================
// ATTENDANCE FUNCTIONS
// ============================================

function toggleAttendance(studentId) {
    attendance[studentId] = !attendance[studentId];
    updateStudentCard(studentId);
    updateCounts();
}

function markAllAbsent() {
    students.forEach(student => {
        attendance[student.id] = false;
    });
    renderStudents();
    updateCounts();
    showToast('All students marked as absent', 'error');
}

function markAllPresent() {
    students.forEach(student => {
        attendance[student.id] = true;
    });
    renderStudents();
    updateCounts();
    showToast('All students marked as present', 'success');
}

// ============================================
// SUBMIT & EXPORT FUNCTIONS
// ============================================

function submitAttendance() {
    // Validate
    if (!selectedCourse) {
        showToast('Please select a course first!', 'error');
        return;
    }

    if (!selectedDate) {
        showToast('Please select a date!', 'error');
        return;
    }

    // Get course details
    const course = courses.find(c => c.code === selectedCourse);
    const absentees = students.filter(s => !attendance[s.id]);

    // Format date nicely
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Show result modal with Period and Date at top
    resultSummary.innerHTML = `
        <div class="period-date-info">
            <div class="info-row">
                <span class="info-label">📖 Period:</span>
                <span class="info-value">${course ? course.name : selectedCourse}</span>
            </div>
            <div class="info-row">
                <span class="info-label">📅 Date:</span>
                <span class="info-value">${formattedDate}</span>
            </div>
        </div>
    `;

    if (absentees.length === 0) {
        absenteesResult.innerHTML = `
            <div class="absentees-box">
                <h3>🚫 Absentees Register Numbers</h3>
                <p class="no-abs">All students are present! 🎉</p>
            </div>
        `;
    } else {
        absenteesResult.innerHTML = `
            <div class="absentees-box">
                <h3>🚫 Absentees Register Numbers (${absentees.length})</h3>
                <div class="reg-numbers-list">
                    ${absentees.map(s => s.regNo).join(', ')}
                </div>
            </div>
        `;
    }

    resultModal.classList.add('active');

    // Save to history
    saveToHistory();
}

function saveToHistory() {
    const course = courses.find(c => c.code === selectedCourse);
    const absentees = students.filter(s => !attendance[s.id]);

    const record = {
        id: Date.now(),
        date: selectedDate,
        courseCode: selectedCourse,
        courseName: course ? course.name : 'Unknown',
        faculty: course ? course.faculty : 'Unknown',
        totalStudents: students.length,
        present: Object.values(attendance).filter(v => v).length,
        absent: absentees.length,
        absentees: absentees.map(s => ({ regNo: s.regNo, name: s.name })),
        timestamp: new Date().toISOString()
    };

    // Get existing history
    let history = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');

    // Add new record
    history.unshift(record);

    // Keep only last 30 records
    if (history.length > 30) {
        history = history.slice(0, 30);
    }

    // Save back
    localStorage.setItem('attendanceHistory', JSON.stringify(history));
}

function copyToWhatsApp() {
    const course = courses.find(c => c.code === selectedCourse);
    const absentees = students.filter(s => !attendance[s.id]);

    const formattedDate = new Date(selectedDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let message = `📖 *Period:* ${course ? course.name : selectedCourse}\n`;
    message += `📅 *Date:* ${formattedDate}\n`;
    message += `━━━━━━━━━━━━━━━\n`;

    if (absentees.length > 0) {
        message += `🚫 *Absentees (${absentees.length}):*\n`;
        message += absentees.map(s => s.regNo).join(', ');
    } else {
        message += `🎉 *All students present!*`;
    }

    navigator.clipboard.writeText(message).then(() => {
        showToast('Copied to clipboard! Paste in WhatsApp', 'success');
    }).catch(() => {
        showToast('Failed to copy. Please try again.', 'error');
    });
}

function saveToExcel() {
    const course = courses.find(c => c.code === selectedCourse);
    const absentees = students.filter(s => !attendance[s.id]);

    // Format date nicely
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Prepare data for Excel - simplified format
    const wsData = [
        ['ATTENDANCE RECORD'],
        [],
        ['Period:', course ? course.name : selectedCourse],
        ['Date:', formattedDate],
        [],
        ['ABSENTEES REGISTER NUMBERS'],
        ['S.No', 'Reg. Number']
    ];

    // Add absentees only
    if (absentees.length > 0) {
        absentees.forEach((student, index) => {
            wsData.push([index + 1, student.regNo]);
        });
    } else {
        wsData.push(['', 'All students present']);
    }

    // Create workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Set column widths
    ws['!cols'] = [
        { wch: 8 },   // S.No
        { wch: 20 }   // Reg Number
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');

    // Generate filename
    const filename = `Attendance_${selectedCourse}_${selectedDate}.xlsx`;

    // Save file
    XLSX.writeFile(wb, filename);
    showToast(`Saved as ${filename}`, 'success');
}

function loadSavedData() {
    // For now, we just render the history
    renderHistory();
}

// ============================================
// HISTORY FUNCTIONS
// ============================================

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');

    if (history.length === 0) {
        historyContent.innerHTML = `
            <div class="history-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p>No attendance history yet.</p>
                <p>Submit attendance to see records here.</p>
            </div>
        `;
        return;
    }

    historyContent.innerHTML = history.map(record => `
        <div class="history-item" data-id="${record.id}">
            <div class="history-item-content">
                <div class="history-date">${formatDate(record.date)}</div>
                <div class="history-course">${record.courseName}</div>
                <div class="history-stats">
                    <span>✅ ${record.present} Present</span>
                    <span>❌ ${record.absent} Absent</span>
                </div>
            </div>
            <button class="delete-history-btn" data-id="${record.id}" title="Delete">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>
    `).join('');

    // Add click handlers for viewing
    historyContent.querySelectorAll('.history-item-content').forEach(item => {
        item.addEventListener('click', () => viewHistoryRecord(item.parentElement.dataset.id));
    });

    // Add click handlers for deleting
    historyContent.querySelectorAll('.delete-history-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteHistoryRecord(btn.dataset.id);
        });
    });
}

function deleteHistoryRecord(recordId) {
    if (!confirm('Are you sure you want to delete this record?')) return;

    let history = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');
    history = history.filter(r => r.id != recordId);
    localStorage.setItem('attendanceHistory', JSON.stringify(history));

    renderHistory();
    showToast('Record deleted successfully', 'success');
}

function viewHistoryRecord(recordId) {
    const history = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');
    const record = history.find(r => r.id == recordId);

    if (!record) return;

    // Format date nicely
    const formattedDate = new Date(record.date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Show details in modal with Period and Date at top
    resultSummary.innerHTML = `
        <div class="period-date-info">
            <div class="info-row">
                <span class="info-label">📖 Period:</span>
                <span class="info-value">${record.courseName}</span>
            </div>
            <div class="info-row">
                <span class="info-label">📅 Date:</span>
                <span class="info-value">${formattedDate}</span>
            </div>
        </div>
    `;

    const absentees = record.absentees || [];
    if (absentees.length === 0) {
        absenteesResult.innerHTML = `
            <div class="absentees-box">
                <h3>🚫 Absentees Register Numbers</h3>
                <p class="no-abs">All students were present! 🎉</p>
            </div>
        `;
    } else {
        absenteesResult.innerHTML = `
            <div class="absentees-box">
                <h3>🚫 Absentees Register Numbers (${absentees.length})</h3>
                <div class="reg-numbers-list">
                    ${absentees.map(s => s.regNo).join(', ')}
                </div>
            </div>
        `;
    }

    // Close history panel and show modal
    closeHistoryPanel();
    resultModal.classList.add('active');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// ============================================
// UI FUNCTIONS
// ============================================

function showToast(message, type = 'success') {
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type} active`;

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function openHistoryPanel() {
    historyPanel.classList.add('active');
    panelOverlay.classList.add('active');
    renderHistory();
}

function closeHistoryPanel() {
    historyPanel.classList.remove('active');
    panelOverlay.classList.remove('active');
}

function closeResultModal() {
    resultModal.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Course selection
    courseSelect.addEventListener('change', (e) => {
        selectedCourse = e.target.value;
        const course = courses.find(c => c.code === selectedCourse);

        if (course) {
            facultyDisplay.innerHTML = `<span class="faculty-name">${course.faculty}</span>`;
        } else {
            facultyDisplay.innerHTML = '<span class="placeholder-text">Select a course first</span>';
        }
    });

    // Date selection
    dateInput.addEventListener('change', (e) => {
        selectedDate = e.target.value;
    });

    // Quick actions
    markAllAbsentBtn.addEventListener('click', markAllAbsent);
    markAllPresentBtn.addEventListener('click', markAllPresent);

    // Submit
    submitBtn.addEventListener('click', submitAttendance);

    // History panel
    menuBtn.addEventListener('click', openHistoryPanel);
    closeHistory.addEventListener('click', closeHistoryPanel);
    panelOverlay.addEventListener('click', closeHistoryPanel);

    // Modal
    closeModal.addEventListener('click', closeResultModal);
    resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) closeResultModal();
    });

    // Export buttons
    copyWhatsAppBtn.addEventListener('click', copyToWhatsApp);
    saveExcelBtn.addEventListener('click', saveToExcel);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeHistoryPanel();
            closeResultModal();
        }
    });
}

// ============================================
// INITIALIZE APP
// ============================================

document.addEventListener('DOMContentLoaded', init);
