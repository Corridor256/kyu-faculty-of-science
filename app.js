// ============================================================
//  ORIGINAL CODE (PRESERVED)
// ============================================================

//Calling the buttons from html
const chemMathBtn = document.getElementById('chem-math-btn');
const phyMathBtn = document.getElementById('phy-math-btn');
const bioChemBtn = document.getElementById('bio-chem-btn');

//Creating objects to store the content for each button
//Chemistry and Mathematics content
let chemMathContent = {
    name: "ESP (Chemistry and Mathematics)",
    description: "Welcome to the ESP (Chemistry and Mathematics) section! Here, you will find a variety of resources and materials to help you excel in both chemistry and mathematics. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SED 2201 - Kinetics and Electrochemistry II", "SED 2202 - Analytical and Applied Chemistry", "SED 2203 - Chemistry Methods and Research Methods", "SMT 221 - Numerical Analysis I", "SMT 222 - Probability Theory", "SMT 223 - Mathematics Education", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Chemistry textbooks", "Mathematics textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "08:00AM-10:00AM", course: "None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "12:00PM-02:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "02:00PM-04:00PM", course: "Analytical and Aplied Organic Chemistry", lecturer: "Dr. Hilda D. Kyomuhimbo", code: "SED 2202"}
        ],
        tuesday: [
            {time: "08:00AM-10:00AM", course: "Numerical Analysis", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"},
            {time: "10:00AM-12:00PM", course: "Probability Theory", lecturer: "Dr.Nampala Hasifah", code: "SMT 222"},
            {time: "12:00PM-02:00PM", course: "General methods, education technology and school prsctice", lecturer: "Dr. Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course: "Kinetics and Electrochemistry II", lecturer: "Dr. Jastus Masa", code: "SED 2201"}
        ],
        wednesday: [
            {time: "08:00AM-10:00AM", course: "Probability Theory", lecturer: "Dr.Nampala Hasifah", code: "SMT 222"},
            {time: "10:00AM-12:00PM", course: "Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-02:00PM", course: "General methods, education technology and school prsctice", lecturer: "Dr. Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course: "Numerical Analysis", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"}
        ],
        thursday: [
            {time: "08:00AM-10:00AM", course: "Chemistry methods and Research methods", lecturer: "Dr. Sarah Nanyonga", code: "SED 2203"},
            {time: "10:00AM-12:00PM", course: "Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-02:00PM", course: "Learning measurements and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course: "None", lecturer: "None", code: "None"}
        ],
        friday: [
            {time: "08:00AM-10:00AM", course: "None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course: "None", lecturer: "None", code: "None"},
            {time: "12:00PM-02:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course: "None", lecturer: "None", code: "None"}
        ]
    }
};
//Physics and Mathematics content
let phyMathContent = {
    name: "ESP (Physics and Mathematics)",
    description: "Welcome to the ESP (Physics and Mathematics) section! Here, you will find a variety of resources and materials to help you excel in both physics and mathematics. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SPH 2201 - Physics Education II", "SPH 2202 - Electromagnetism", "SPH 2203 - Digital Electronics", "SPH 2204 - Nuclear Physics", "SMT 221 - Numerical Analysis I", "SMT 222 - Probability Theory", "SMT 223 - Mathematics Education", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Physics textbooks", "Mathematics textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "08:00AM-10:00AM", course: "Digital Electronics", lecturer: "Dr. Okullo Michael", code: "SPH 2203"},
            {time: "10:00AM-12:00PM", course: "Nuclear Physics", lecturer: "Dr. William Ochen", code: "SPH 2204"},
            {time: "12:00PM-02:00PM", course: "Physics Education II", lecturer: "Dr. Joyce Mbambu", code: "SPH 2201"},
            {time: "02:00PM-04:00PM", course: "Physics Education II", lecturer: "Dr. Joyce Mbambu", code: "SPH 2201"}
        ],
        tuesday: [
            {time: "08:00AM-10:00AM", course:"Numerical Analysis I", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"},
            {time: "10:00AM-12:00PM", course:"Probability Theory", lecturer: "Dr. Nampala Hasifah", code: "SMT 222"},
            {time: "12:00PM-02:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course:"Digital Electronics", lecturer: "Dr. Okullo Michael", code: "SPH 2203"}
        ],
        wednesday: [
            {time: "08:00AM-10:00AM", course:"Probability Theory", lecturer: "Dr. Nampala Hasifah", code: "SMT 222"},
            {time: "10:00AM-12:00PM", course:"Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-02:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course:"Numerical Analysis I", lecturer: "Dr. Nuwagaba Savannah", code: "SMT 221"}
        ],
        thursday: [
            {time: "08:00AM-10:00AM", course:"Electromagnetism", lecturer: "Dr. Bakulu Thomas", code: "SPH 2202"},
            {time: "10:00AM-12:00PM", course:"Mathematics Education", lecturer: "Dr. Namuwaya Jalilah", code: "SMT 223"},
            {time: "12:00PM-02:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course:"Nuclear Physics", lecturer: "Dr. William Ochen", code: "SPH 2204"}
        ],
        friday: [
            {time: "08:00AM-10:00AM", course:"Electromagnetism", lecturer: "Dr. Bakulu Thomas", code: "SPH 2202"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-02:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course:"PRACTICALS", lecturer: "xxxxx", code: "xxxxx"}
        ]
        }
};
//Biology and Chemistry content
let bioChemContent = {
    name: "ESB (Biology and Chemistry)",
    description: "Welcome to the ESB (Biology and Chemistry) section! Here, you will find a variety of resources and materials to help you excel in both biology and chemistry. Whether you're looking for study guides, practice problems, or interactive lessons, we've got you covered. Dive into our comprehensive content to enhance your understanding and boost your performance in these subjects!",
    courseUnits: ["SBE 2201 - Genetics", "SBE 2202 - Evolution", "SBE 2203 - Animal Physiology", "SBE 2204 - Human Ecology", "SBE 2205 - Biology Education", "SED 2201 - Kinetics and Electrochemistry II", "SED 2202 - Analytical and Applied Chemistry", "SED 2203 - Chemistry Methods and Research Methods", "EPS 2201 - General Methods, Educational Technology and School Practice", "EPS 2202 - Learning Measurement and Evaluation"],
    resources: ["Biology textbooks", "Chemistry textbooks", "Online tutorials", "Practice problems", "Interactive simulations"],
    timetable: {
        monday: [
            {time: "08:00AM-10:00AM", course:"Human Ecology", lecturer: "Dr. Mutekanga Norah Mbeiza", code: "SBE 2203"},
            {time: "10:00AM-12:00PM", course:"Evolution", lecturer: "Dr. Muwonge Abubaker", code: "SBE 2202"},
            {time: "12:00PM-02:00PM", course:"Evolution", lecturer: "Dr. Muwonge Abubaker", code: "SBE 2202"},
            {time: "02:00PM-04:00PM", course:"Analytical and Applied Organic Chemistry", lecturer: "Dr. Hilda D. Kyomuhimbo", code: "SED 2202"}
        ],
        tuesday: [
            {time: "08:00AM-10:00AM", course:"Genetics", lecturer: "Dr. Kigozi Stephen", code: "SBE 2201"},
            {time: "10:00AM-12:00PM", course:"Genetics", lecturer: "Dr. Kigozi Stephen", code: "SBE 2201"},
            {time: "12:00PM-02:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course:"Kinetics and Electrochemistry II", lecturer: "Dr. Jastus Masa", code: "SED 2201"}
        ],
        wednesday: [
            {time: "08:00AM-10:00AM", course:"Biology Education", lecturer: "Mr. Ndyagumizamu Moses", code: "SBE 2205"},
            {time: "10:00AM-12:00PM", course:"Biology Education", lecturer: "Mr. Ndyagumizamu Moses", code: "SBE 2205"},
            {time: "12:00PM-02:00PM", course:"General Methods, Educational Technology and School Practice", lecturer: "Dr. Kishabale Bashir", code: "EPS 2201"},
            {time: "02:00PM-04:00PM", course:"Animal Physiology", lecturer: "Dr. Amatre Gerald", code: "SBE 2203"}
        ],
        thursday: [
            {time: "08:00AM-10:00AM", course:"Chemistry Methods I and Research Methods", lecturer: "Dr. Nanyonga", code: "SED 2203"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-02:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course:"None", lecturer: "None", code: "None"}
        ],
        friday: [
            {time: "08:00AM-10:00AM", course:"None", lecturer: "None", code: "None"},
            {time: "10:00AM-12:00PM", course:"None", lecturer: "None", code: "None"},
            {time: "12:00PM-02:00PM", course:"Learning Measurement and Evaluation", lecturer: "Assoc Prof Joseph Ssenyonga", code: "EPS 2202"},
            {time: "02:00PM-04:00PM", course:"None", lecturer: "None", code: "None"}
        ]
        }
};

//Creating a single function to accept the data as parameters and display the content
function showProgramme(data) {
    document.getElementById('text-area').innerHTML = `<h2>${data.name}</h2>
    <p>${data.description}</p>
    <h3>Course Units</h3>
    <ul>
    ${data.courseUnits.map(Course=>`<li>${Course}</li>`).join('')}
    </ul>
    <h3>Resources</h3>
    <ul>
    ${data.resources.map(resource=>`<li>${resource}</li>`).join('')}
    </ul>
    <div class="tab-buttons">
        <button onclick="showDay('monday')">Monday</button>
        <button onclick="showDay('tuesday')">Tuesday</button>
        <button onclick="showDay('wednesday')">Wednesday</button>
        <button onclick="showDay('thursday')">Thursday</button>
        <button onclick="showDay('friday')">Friday</button>
    </div>
    <div id="day-monday">
        <h3>Monday</h3>
        ${buildDayTable(data.timetable.monday)}
    </div>
    <div id="day-tuesday">
        <h3>Tuesday</h3>
        ${buildDayTable(data.timetable.tuesday)}
    </div>
    <div id="day-wednesday">
        <h3>Wednesday</h3>
        ${buildDayTable(data.timetable.wednesday)}
    </div>
    <div id="day-thursday">
        <h3>Thursday</h3>
        ${buildDayTable(data.timetable.thursday)}
    </div>
    <div id="day-friday">
        <h3>Friday</h3>
        ${buildDayTable(data.timetable.friday)}
    </div>
`;
showDay('monday');
}
//Function to build the timetable for each day
function buildDayTable(slots) {
    return `
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Course Unit</th>
                <th>Lecturer</th>
                <th> Course Code</th>
            </tr>
        </thead>
        <tbody>
            ${slots.map(slot => `
                <tr>
                    <td>${slot.time}</td>
                    <td>${slot.course}</td>
                    <td>${slot.lecturer}</td>
                    <td>${slot.code}</td>
                </tr>`).join ('')}
        </tbody>
    </table> `
}

/*Adding event listeners to the buttons
These will call the new modified function */
chemMathBtn.addEventListener('click', function() {
    showProgramme(chemMathContent);
});
phyMathBtn.addEventListener('click', function() {
    showProgramme(phyMathContent);
});
bioChemBtn.addEventListener('click', function() {
    showProgramme(bioChemContent)
});

//Function to show the timetable for each day and hide the others
function showDay(day) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    for (let i=0; i<days.length; i++) {
        if (days[i] === day) {
            document.getElementById(`day-${day}`).style.display = "block";
        } else {
            document.getElementById(`day-${days[i]}`).style.display = "none";
        }
    }
    // Highlight active tab
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    tabButtons.forEach(btn => {
        btn.classList.remove('active-tab');
        if (btn.textContent.toLowerCase() === day) {
            btn.classList.add('active-tab');
        }
    });
}


// ============================================================
//  NEW FEATURES CODE
// ============================================================

// ---------- UTILITY: Toast Notifications ----------
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        toast.style.transition = '0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ---------- UTILITY: Modal Open / Close ----------
function openModal(id) {
    document.getElementById(id).classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal(overlay.id);
    });
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id));
    }
});

// Quick action button listeners
document.getElementById('open-add-course').addEventListener('click', () => openModal('add-course-modal'));
document.getElementById('open-share-material').addEventListener('click', () => openModal('share-material-modal'));
document.getElementById('open-post-announcement').addEventListener('click', () => openModal('post-announcement-modal'));
document.getElementById('toggle-chat-btn').addEventListener('click', () => toggleChat());


// ============================================================
//  1. ADD YOUR COURSE
// ============================================================
function handleAddCourse(e) {
    e.preventDefault();

    const program = document.getElementById('course-program').value;
    const code = document.getElementById('course-code').value.trim();
    const name = document.getElementById('course-name').value.trim();
    const lecturer = document.getElementById('course-lecturer').value.trim();
    const day = document.getElementById('course-day').value;
    const time = document.getElementById('course-time').value;

    // Pick the right data object
    let target;
    if (program === 'chem-math') target = chemMathContent;
    else if (program === 'phy-math') target = phyMathContent;
    else if (program === 'bio-chem') target = bioChemContent;
    else return;

    // Add to course units if not already listed
    const unitStr = `${code} - ${name}`;
    if (!target.courseUnits.includes(unitStr)) {
        target.courseUnits.push(unitStr);
    }

    // Add to timetable
    target.timetable[day].push({ time, course: name, lecturer, code });

    // Sort the day's slots by time
    target.timetable[day].sort((a, b) => a.time.localeCompare(b.time));

    closeModal('add-course-modal');
    e.target.reset();
    showToast(`"${name}" added to ${program.replace('-', ' & ').toUpperCase()}!`, 'success');

    // Re-render if that programme is currently showing
    const currentTitle = document.querySelector('#text-area h2');
    if (currentTitle && currentTitle.textContent === target.name) {
        showProgramme(target);
    }
}


// ============================================================
//  2. SHARE COURSE MATERIALS
// ============================================================
// File input display
const fileInput = document.getElementById('material-file');
const fileNameDisplay = document.getElementById('file-name-display');
if (fileInput) {
    fileInput.addEventListener('change', () => {
        fileNameDisplay.textContent = fileInput.files.length ? `📎 ${fileInput.files[0].name}` : '';
    });
}

function handleShareMaterial(e) {
    e.preventDefault();

    const title = document.getElementById('material-title').value.trim();
    const type = document.getElementById('material-type').value;
    const author = document.getElementById('material-author').value.trim();
    const desc = document.getElementById('material-description').value.trim();
    const link = document.getElementById('material-link').value.trim();
    const file = document.getElementById('material-file').files[0];

    const iconMap = {
        notes: 'fa-file-alt',
        'past-paper': 'fa-scroll',
        link: 'fa-link',
        other: 'fa-folder-open'
    };

    const card = document.createElement('div');
    card.className = 'material-card';
    card.dataset.type = type;
    card.innerHTML = `
        <div class="material-icon ${type}"><i class="fas ${iconMap[type]}"></i></div>
        <div class="material-info">
            <h4>${title}</h4>
            <p class="material-meta"><i class="fas fa-user"></i> Shared by ${author} &bull; <i class="fas fa-tag"></i> ${type.replace('-', ' ')}</p>
            <p class="material-desc">${desc}</p>
        </div>
        <div class="material-actions">
            ${link ? `<a href="${link}" target="_blank" class="material-download" title="Open link"><i class="fas fa-external-link-alt"></i></a>` : ''}
            ${file ? `<button class="material-download" title="${file.name}" onclick="alert('File: ${file.name}')"><i class="fas fa-download"></i></button>` : ''}
        </div>
    `;

    document.getElementById('materials-list').prepend(card);
    closeModal('share-material-modal');
    e.target.reset();
    fileNameDisplay.textContent = '';
    showToast(`Material "${title}" shared successfully!`, 'success');
}

// Material filter
function filterMaterials(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.material-card').forEach(card => {
        card.style.display = (type === 'all' || card.dataset.type === type) ? 'flex' : 'none';
    });
}


// ============================================================
//  3. POST ANNOUNCEMENT
// ============================================================
function handlePostAnnouncement(e) {
    e.preventDefault();

    const author = document.getElementById('announce-author').value.trim();
    const category = document.getElementById('announce-category').value;
    const title = document.getElementById('announce-title').value.trim();
    const body = document.getElementById('announce-body').value.trim();

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-UG', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    const initials = author.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

    const card = document.createElement('div');
    card.className = 'announcement-card';
    card.dataset.category = category;
    card.innerHTML = `
        <div class="announcement-header">
            <div class="announcement-avatar">${initials}</div>
            <div class="announcement-meta">
                <span class="announcement-author">${author}</span>
                <span class="announcement-date">${dateStr}</span>
            </div>
            <span class="announcement-badge badge-${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </div>
        <h3 class="announcement-title">${title}</h3>
        <p class="announcement-body">${body}</p>
        <div class="announcement-footer">
            <button class="like-btn" onclick="likeAnnouncement(this)"><i class="far fa-heart"></i> <span>0</span></button>
            <button class="reply-btn" onclick="toggleReply(this)"><i class="far fa-comment"></i> Reply</button>
        </div>
        <div class="reply-section" style="display:none;">
            <div class="replies-container"></div>
            <div class="reply-input-row">
                <input type="text" placeholder="Write a reply..." class="reply-input">
                <button class="reply-send-btn" onclick="sendReply(this)"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    const list = document.getElementById('announcements-list');
    // Insert after pinned posts
    const pinned = list.querySelectorAll('.announcement-card.pinned');
    if (pinned.length) {
        pinned[pinned.length - 1].after(card);
    } else {
        list.prepend(card);
    }

    closeModal('post-announcement-modal');
    e.target.reset();
    showToast('Announcement posted!', 'success');

    // Smooth scroll to the new announcement
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Like button toggle
function likeAnnouncement(btn) {
    const span = btn.querySelector('span');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        icon.classList.replace('fas', 'far');
        span.textContent = Math.max(0, parseInt(span.textContent) - 1);
    } else {
        btn.classList.add('liked');
        icon.classList.replace('far', 'fas');
        span.textContent = parseInt(span.textContent) + 1;
    }
}

// Reply toggle
function toggleReply(btn) {
    const card = btn.closest('.announcement-card');
    const section = card.querySelector('.reply-section');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
    if (section.style.display === 'block') {
        section.querySelector('.reply-input').focus();
    }
}

// Send reply
function sendReply(btn) {
    const row = btn.closest('.reply-input-row');
    const input = row.querySelector('.reply-input');
    const text = input.value.trim();
    if (!text) return;

    const container = btn.closest('.reply-section').querySelector('.replies-container');
    const bubble = document.createElement('div');
    bubble.className = 'reply-bubble';
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-UG', { hour: '2-digit', minute: '2-digit' });
    bubble.innerHTML = `<strong>You</strong> · <small>${timeStr}</small><br>${text}`;
    container.appendChild(bubble);
    input.value = '';
    input.focus();
}


// ============================================================
//  4. GROUP LIVE CHAT
// ============================================================
let chatUsername = '';
let chatOpen = false;
let unreadCount = 0;

const chatWidget = document.getElementById('chat-widget');
const chatFab = document.getElementById('chat-fab');
const chatFabBadge = document.getElementById('chat-fab-badge');
const chatMessages = document.getElementById('chat-messages');
const chatBody = document.getElementById('chat-body');
const chatNameBar = document.getElementById('chat-name-bar');
const chatInputBar = document.getElementById('chat-input-bar');
const chatInput = document.getElementById('chat-input');
const chatJoinBtn = document.getElementById('chat-join-btn');
const chatSendBtn = document.getElementById('chat-send');
const chatMinimize = document.getElementById('chat-minimize');
const chatCloseBtn = document.getElementById('chat-close-btn');
const chatEmojiBtn = document.getElementById('chat-emoji-btn');
const emojiPicker = document.getElementById('emoji-picker');
const chatTyping = document.getElementById('chat-typing');

// Toggle chat open/close
function toggleChat() {
    chatOpen = !chatOpen;
    chatWidget.classList.toggle('open', chatOpen);
    if (chatOpen) {
        unreadCount = 0;
        chatFabBadge.style.display = 'none';
        scrollChatBottom();
    }
}

chatFab.addEventListener('click', toggleChat);

chatCloseBtn.addEventListener('click', () => {
    chatOpen = false;
    chatWidget.classList.remove('open');
});

chatMinimize.addEventListener('click', () => {
    chatWidget.classList.toggle('minimized');
});

// Join chat
chatJoinBtn.addEventListener('click', joinChat);
document.getElementById('chat-username').addEventListener('keydown', e => {
    if (e.key === 'Enter') joinChat();
});

function joinChat() {
    const nameInput = document.getElementById('chat-username');
    const name = nameInput.value.trim();
    if (!name) { nameInput.focus(); return; }

    chatUsername = name;
    chatNameBar.style.display = 'none';
    chatInputBar.style.display = 'flex';
    chatInput.focus();

    addSystemMessage(`${chatUsername} joined the chat 🎉`);
    showToast(`Welcome, ${chatUsername}!`, 'info');

    // Simulate online count
    const onlineEl = document.getElementById('online-count');
    const current = parseInt(onlineEl.textContent) || 1;
    onlineEl.textContent = `${current + 1} online`;
}

// Send message
chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendChatMessage();
});

function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text || !chatUsername) return;

    addChatMessage(chatUsername, text, true);
    chatInput.value = '';
    chatInput.focus();

    // Simulate bot response occasionally
    simulateBotResponse(text);
}

function addChatMessage(name, text, isSelf = false) {
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-UG', { hour: '2-digit', minute: '2-digit' });

    const msg = document.createElement('div');
    msg.className = `chat-msg ${isSelf ? 'self' : ''}`;
    msg.innerHTML = `
        <div class="chat-msg-avatar">${initials}</div>
        <div class="chat-msg-content">
            <div class="chat-msg-name">${name}</div>
            <div class="chat-msg-text">${escapeHtml(text)}</div>
            <div class="chat-msg-time">${timeStr}</div>
        </div>
    `;
    chatMessages.appendChild(msg);
    scrollChatBottom();

    // If chat is closed, increment badge
    if (!chatOpen && !isSelf) {
        unreadCount++;
        chatFabBadge.textContent = unreadCount;
        chatFabBadge.style.display = 'flex';
    }
}

function addSystemMessage(text) {
    const msg = document.createElement('div');
    msg.style.cssText = 'text-align:center; font-size:0.78rem; color:#636e72; padding:6px 0; font-style:italic;';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    scrollChatBottom();
}

function scrollChatBottom() {
    setTimeout(() => { chatBody.scrollTop = chatBody.scrollHeight; }, 50);
}

// Emoji picker
chatEmojiBtn.addEventListener('click', () => {
    emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'grid' : 'none';
});

function insertEmoji(emoji) {
    chatInput.value += emoji;
    chatInput.focus();
    emojiPicker.style.display = 'none';
}

// Close emoji picker when clicking outside
document.addEventListener('click', e => {
    if (!e.target.closest('.emoji-picker') && !e.target.closest('.chat-emoji-btn')) {
        emojiPicker.style.display = 'none';
    }
});

// HTML escape
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ---------- Simulated Bot Responses ----------
const botResponses = [
    "Hello, I am your ai assistant, feel free to ask any question in this group chat",
    "That's a great question! 🤔",
    "Please dont laugh at me, we are just checking if a grroup chat could work",
    "Has anyone checked the notice board? 📋",
    "Good luck with the exams everyone! 💪",
    "Don't forget to submit your coursework! ⏰",
    "Thanks for sharing! 👍",
    "Can someone share the notes for that? 📚",
    "See you all in class tomorrow! 👋",
    "Please not that this may be a simulated response from the developer not a real time user.",
    "Let's form a study group this weekend 📖"
];

function simulateBotResponse(userText) {
    // 40% chance of a simulated response
    if (Math.random() > 0.4) return;

    chatTyping.style.display = 'flex';
    const delay = 1500 + Math.random() * 2000;

    setTimeout(() => {
        chatTyping.style.display = 'none';
        const names = ['Allwise', 'Jairus', 'Grace', 'Corridor ai', 'Kakulu', 'Shutter', 'Rhoda'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomReply = botResponses[Math.floor(Math.random() * botResponses.length)];
        addChatMessage(randomName, randomReply, false);
    }, delay);
}
