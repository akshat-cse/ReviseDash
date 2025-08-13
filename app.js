this.studyData = window.EMBEDDED_STUDY_DATA.studyTopics;

// Main Study App Class
class StudyApp {
  constructor() {
    this.currentTopic = null;
    this.studyData = EMBEDDED_STUDY_DATA.studyTopics;
    this.sidebarOpen = false;

    // DOM Elements
    this.elements = {
      sidebar: document.getElementById('sidebar'),
      sidebarNav: document.getElementById('sidebarNav'),
      sidebarToggle: document.getElementById('sidebarToggle'),
      sidebarClose: document.getElementById('sidebarClose'),
      sidebarOverlay: document.getElementById('sidebarOverlay'),
      welcomeScreen: document.getElementById('welcomeScreen'),
      topicContent: document.getElementById('topicContent'),
      topicTitle: document.getElementById('topicTitle'),
      topicDescription: document.getElementById('topicDescription'),
      keyPointsList: document.getElementById('keyPointsList'),
      backBtn: document.getElementById('backBtn')
    };

    this.init();
  }

  init() {
    console.log('🚀 Study App loading...');
    console.log(`📚 Loaded ${Object.keys(this.studyData).length} study topics`);

    this.setupEventListeners();
    this.renderSidebar();
    this.showWelcomeScreen();

    console.log('✅ Study App ready!');
  }

  setupEventListeners() {
    // Sidebar toggle
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleSidebar();
      });
    }
    if (this.elements.sidebarClose) {
      this.elements.sidebarClose.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSidebar();
      });
    }
    if (this.elements.sidebarOverlay) {
      this.elements.sidebarOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSidebar();
      });
    }

    // Back button
    if (this.elements.backBtn) {
      this.elements.backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showWelcomeScreen();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeSidebar();
      }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.sidebarOpen) {
        this.closeSidebar();
      }
    });
  }

  renderSidebar() {
    if (!this.elements.sidebarNav) return;

    const nav = this.elements.sidebarNav;
    nav.innerHTML = '';

    Object.entries(this.studyData).forEach(([classKey, classData]) => {
      const topicGroup = this.createTopicGroup(classKey, classData);
      nav.appendChild(topicGroup);
    });
  }

  createTopicGroup(classKey, classData) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'topic-group';

    // Create header button
    console.log(classData)
    const header = document.createElement('button');
    header.className = 'topic-group__header';
    header.setAttribute('aria-expanded', 'false');
    header.innerHTML = `
      <span>Class ${classData.class} : ${classData.title} </span>
      <span class="toggle-icon">▶</span>
    `;

    // Create content container
    const content = document.createElement('div');
    content.className = 'topic-group__content';

    // Create subtopic links
    Object.entries(classData.subtopics).forEach(([subtopicKey, subtopicData]) => {
      const link = document.createElement('a');
      link.href = '#';
      link.className = 'subtopic-link';
      link.textContent = subtopicKey;

      // Add click event for subtopic navigation
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Clicked subtopic: ${subtopicKey}`);
        this.showTopic(subtopicKey, subtopicData);
        this.updateActiveLink(link);

        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
          this.closeSidebar();
        }
      });

      content.appendChild(link);
    });

    // Add toggle functionality for topic group expansion
    header.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      console.log(`Toggling topic group: ${classData.title}, will be expanded: ${newState}`);

      // Update aria-expanded attribute
      header.setAttribute('aria-expanded', newState.toString());

      // Toggle content visibility using CSS class
      if (newState) {
        content.classList.add('expanded');
      } else {
        content.classList.remove('expanded');
      }
    });

    groupDiv.appendChild(header);
    groupDiv.appendChild(content);

    return groupDiv;
  }

  updateActiveLink(activeLink) {
    // Remove active class from all links
    document.querySelectorAll('.subtopic-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked link
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  showTopic(title, topicData) {
    console.log(`Showing topic: ${title}`);
    console.log('Topic data:', topicData);

    this.currentTopic = { title, ...topicData };

    // Update topic title
    if (this.elements.topicTitle) {
      this.elements.topicTitle.textContent = title;
      console.log(`Set topic title to: ${title}`);
    }

    // Update topic description
    if (this.elements.topicDescription) {
      this.elements.topicDescription.textContent = topicData.description;
      console.log('Set topic description');
    }

    // Clear and update key points list
    if (this.elements.keyPointsList) {
      this.elements.keyPointsList.innerHTML = '';
      if (topicData.keyPoints && Array.isArray(topicData.keyPoints)) {
        topicData.keyPoints.forEach(point => {
          const li = document.createElement('li');
          li.textContent = point;
          this.elements.keyPointsList.appendChild(li);
        });
        console.log(`Added ${topicData.keyPoints.length} key points`);
      }
    }

    // Hide welcome screen and show topic content
    if (this.elements.welcomeScreen) {
      this.elements.welcomeScreen.classList.add('hidden');
      console.log('Hid welcome screen');
    }
    if (this.elements.topicContent) {
      this.elements.topicContent.classList.remove('hidden');
      console.log('Showed topic content');
    }

    console.log('✅ Topic content displayed successfully');
  }

  showWelcomeScreen() {
    console.log('Showing welcome screen');

    this.currentTopic = null;

    // Remove active class from all sidebar links
    document.querySelectorAll('.subtopic-link').forEach(link => {
      link.classList.remove('active');
    });

    // Hide topic content and show welcome screen
    if (this.elements.topicContent) {
      this.elements.topicContent.classList.add('hidden');
      console.log('Hid topic content');
    }
    if (this.elements.welcomeScreen) {
      this.elements.welcomeScreen.classList.remove('hidden');
      console.log('Showed welcome screen');
    }

    console.log('✅ Welcome screen displayed successfully');
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;

    if (this.elements.sidebar) {
      this.elements.sidebar.classList.toggle('open', this.sidebarOpen);
    }
    if (this.elements.sidebarOverlay) {
      this.elements.sidebarOverlay.classList.toggle('active', this.sidebarOpen);
    }
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.classList.toggle('active', this.sidebarOpen);
    }

    console.log(`Sidebar ${this.sidebarOpen ? 'opened' : 'closed'}`);
  }

  closeSidebar() {
    this.sidebarOpen = false;

    if (this.elements.sidebar) {
      this.elements.sidebar.classList.remove('open');
    }
    if (this.elements.sidebarOverlay) {
      this.elements.sidebarOverlay.classList.remove('active');
    }
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.classList.remove('active');
    }

    console.log('Sidebar closed');
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing Study App...');
  const app = new StudyApp();

  // Make app globally available for debugging
  window.studyApp = app;
});

// Console information for developers
console.log(`
🎓 Study App - Developer Information

📝 TO EDIT STUDY CONTENT:
1. Open this app.js file in a text editor
2. Find the EMBEDDED_STUDY_DATA section at the top
3. Edit the JSON structure with your content
4. Keep the same format: classes contain subtopics with descriptions and key points
5. Save the file and refresh the page

📚 CURRENT DATA STRUCTURE:
- Classes: ${Object.keys(EMBEDDED_STUDY_DATA.studyTopics).length}
- Total Subtopics: ${Object.values(EMBEDDED_STUDY_DATA.studyTopics).reduce((total, classData) => total + Object.keys(classData.subtopics).length, 0)}

✨ FEATURES:
- Instant loading with embedded data
- Responsive sidebar navigation  
- Mobile-friendly design
- Clean, distraction-free interface
- Easy content editing in JavaScript

🛠️ STRUCTURE EXAMPLE:
{
  "studyTopics": {
    "Your Class": {
      "title": "Your Class Title",
      "subtopics": {
        "Topic Name": {
          "description": "Detailed description...",
          "keyPoints": ["Point 1", "Point 2", "Point 3"]
        }
      }
    }
  }
}
`);

// Export for debugging if needed
window.StudyApp = StudyApp;
window.STUDY_DATA = EMBEDDED_STUDY_DATA;
