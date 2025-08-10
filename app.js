// Study App JavaScript functionality

// Topic data
const studyData = {
  "Class 1": {
    "title": "Positivism & Classical Evolution",
    "subtopics": {
      "Positivism": {
        "description": "Theoretical approach that advocates application of methods of natural sciences such as observation, experimentation, and empirical verification to the study of social phenomena. It seeks to uncover general laws of human behaviour relying on collected data.",
        "keyPoints": [
          "Application of natural science methods",
          "Observation, experimentation, and empirical verification",
          "Study of social phenomena",
          "General laws of human behavior"
        ]
      },
      "Classical Evolution": {
        "description": "Theory states that social development & culture experienced successive developments in sequences. Evolution occurred from simple → complex, homogeneity → heterogeneity, and indefinite → definite.",
        "keyPoints": [
          "Every culture passes through same stages: savagery, barbarianism, civilization",
          "Similarities due to invention and psychic unity of mankind",
          "Survivals are practices carried on due to force of habit without contemporary relevance"
        ]
      }
    }
  },
  "Class 2": {
    "title": "Edward Burnett Tylor & Cultural Evolution",
    "subtopics": {
      "Edward Burnett Tylor (1832-1917)": {
        "description": "Founding father of modern anthropology. Discovered similarities between Mexican tribes and communities worldwide.",
        "keyPoints": [
          "Founding father of modern anthropology",
          "Research into the Early History of Mankind and Development",
          "Cultural similarities due to similar inventions",
          "People think alike under similar conditions"
        ]
      },
      "Definition of Culture": {
        "description": "A complex whole consisting of knowledge, belief, arts, morals, laws, customs, and other capabilities.",
        "keyPoints": [
          "Knowledge, belief, arts, morals, laws, customs",
          "Complex whole of human capabilities",
          "Foundation for anthropological study"
        ]
      },
      "Two Key Principles": {
        "description": "Tylor reconstructed human cultural history on two main principles:",
        "keyPoints": [
          "Uniformitarianism — Geological processes observable today shaped Earth in the past",
          "Doctrine of Survivals — Habits continued without relevance (e.g., handshake)"
        ]
      },
      "Idea of Cultural Evolution": {
        "description": "Tylor's framework for understanding human cultural development.",
        "keyPoints": [
          "One human culture in different stages of development",
          "Development progresses unilinearly (Savagery → Barbarianism → Civilization)",
          "Humanity united by one mind (Psychic Unity of Mankind)",
          "History as improvement of mankind"
        ]
      },
      "Religious Evolution": {
        "description": "Tylor's theory of how religion evolved through stages:",
        "keyPoints": [
          "Animism — all objects (living or non-living) have a soul",
          "Polytheism — worship of multiple gods representing natural forces in agricultural societies",
          "Monotheism — one supreme being controlling interconnected natural processes"
        ]
      },
      "Language Evolution": {
        "description": "Development from gestures & sounds to structured grammar & vocabulary.",
        "keyPoints": [
          "Evolution from gestures and sounds",
          "Development to structured grammar and vocabulary",
          "Ancient beliefs survive in modern speech (e.g., lunatic from 'luna' meaning moon)"
        ]
      },
      "Criticism of Tylor's Theory": {
        "description": "Major criticisms of Tylor's evolutionary approach:",
        "keyPoints": [
          "Ethnocentric cultural ranking",
          "Justified colonization & slavery",
          "Assumption of always-progressive change is flawed",
          "Assumption that some groups are 'static' is inaccurate",
          "Based on conjectural history ('armchair anthropology') without fieldwork"
        ]
      },
      "Conclusion": {
        "description": "Tylor initiated anthropology as a scientific study of culture.",
        "keyPoints": [
          "Established anthropology as scientific discipline",
          "Created framework for cultural study",
          "Despite criticisms, laid foundation for modern anthropology"
        ]
      }
    }
  },
  "Class 3": {
    "title": "Lewis Henry Morgan & Kinship Systems",
    "subtopics": {
      "Lewis Henry Morgan": {
        "description": "Pioneer of American anthropology who documented Iroquois social systems.",
        "keyPoints": [
          "Pioneer of American anthropology",
          "Wrote 'League of the Iroquois'",
          "Recorded religious, linguistic, cultural, and social practices",
          "Observed kinship patterns among Iroquois"
        ]
      },
      "Kinship Typology": {
        "description": "Morgan's classification system for kinship terminology.",
        "keyPoints": [
          "Classificatory — same term for lineal & lateral relatives",
          "Descriptive — different terms for lineal & lateral relatives",
          "Same terms for father & father's brother in some systems"
        ]
      },
      "Global Kinship Study": {
        "description": "Morgan's comprehensive study of kinship systems worldwide.",
        "keyPoints": [
          "Compiled global kinship data",
          "Published 'Systems of Consanguinity and Affinity of the Human Family'",
          "Established comparative kinship methodology"
        ]
      }
    }
  }
};

// Map subtopic keys to data keys
const subtopicKeyMap = {
  'positivism': 'Positivism',
  'classical-evolution': 'Classical Evolution',
  'edward-burnett-tylor': 'Edward Burnett Tylor (1832-1917)',
  'definition-of-culture': 'Definition of Culture',
  'two-key-principles': 'Two Key Principles',
  'idea-of-cultural-evolution': 'Idea of Cultural Evolution',
  'religious-evolution': 'Religious Evolution',
  'language-evolution': 'Language Evolution',
  'criticism-of-tylors-theory': 'Criticism of Tylor\'s Theory',
  'conclusion': 'Conclusion',
  'lewis-henry-morgan': 'Lewis Henry Morgan',
  'kinship-typology': 'Kinship Typology',
  'global-kinship-study': 'Global Kinship Study'
};

// Map class keys to data keys
const classKeyMap = {
  'class1': 'Class 1',
  'class2': 'Class 2',
  'class3': 'Class 3'
};

class StudyApp {
  constructor() {
    this.currentTopic = null;
    this.isMobile = window.innerWidth <= 768;
    this.sidebarOpen = !this.isMobile;
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleResize();
    this.updateSidebarState();
  }

  bindEvents() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleSidebar();
      });
    }
    
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', () => this.closeSidebar());
    }

    // App title click - return to welcome
    const appTitle = document.getElementById('appTitle');
    if (appTitle) {
      appTitle.addEventListener('click', () => this.showWelcomeScreen());
    }

    // Topic group headers
    const topicGroupHeaders = document.querySelectorAll('.topic-group-header');
    topicGroupHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const groupId = e.currentTarget.dataset.group;
        this.toggleTopicGroup(groupId);
      });
    });

    // Subtopics
    const subtopics = document.querySelectorAll('.subtopic');
    subtopics.forEach(subtopic => {
      subtopic.addEventListener('click', (e) => {
        e.preventDefault();
        const topicClass = e.currentTarget.dataset.topic;
        const subtopicKey = e.currentTarget.dataset.subtopic;
        this.showTopicContent(topicClass, subtopicKey);
      });
    });

    // Window resize
    window.addEventListener('resize', () => this.handleResize());

    // Escape key to close sidebar on mobile
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMobile && this.sidebarOpen) {
        this.closeSidebar();
      }
    });
  }

  toggleSidebar() {
    if (this.sidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  openSidebar() {
    this.sidebarOpen = true;
    this.updateSidebarState();
  }

  closeSidebar() {
    this.sidebarOpen = false;
    this.updateSidebarState();
  }

  updateSidebarState() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (!sidebar || !sidebarToggle || !sidebarOverlay) return;

    if (this.isMobile) {
      // Mobile behavior
      if (this.sidebarOpen) {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        sidebarToggle.classList.add('active');
      } else {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        sidebarToggle.classList.remove('active');
      }
    } else {
      // Desktop behavior
      if (this.sidebarOpen) {
        sidebar.style.transform = 'translateX(0)';
        sidebarToggle.classList.add('active');
      } else {
        sidebar.style.transform = 'translateX(-100%)';
        sidebarToggle.classList.remove('active');
      }
      sidebarOverlay.classList.remove('active');
    }
  }

  toggleTopicGroup(groupId) {
    const groupElement = document.getElementById(groupId);
    const headerElement = document.querySelector(`[data-group="${groupId}"]`);
    
    if (groupElement && headerElement) {
      const isExpanded = groupElement.classList.contains('expanded');
      
      if (isExpanded) {
        groupElement.classList.remove('expanded');
        headerElement.classList.remove('expanded');
      } else {
        groupElement.classList.add('expanded');
        headerElement.classList.add('expanded');
      }
    }
  }

  showTopicContent(topicClass, subtopicKey) {
    // Clear active states
    document.querySelectorAll('.subtopic.active').forEach(el => {
      el.classList.remove('active');
    });

    // Set active state
    const clickedSubtopic = document.querySelector(`[data-topic="${topicClass}"][data-subtopic="${subtopicKey}"]`);
    if (clickedSubtopic) {
      clickedSubtopic.classList.add('active');
    }

    // Get data
    const classKey = classKeyMap[topicClass];
    const subtopicName = subtopicKeyMap[subtopicKey];
    
    if (classKey && subtopicName && studyData[classKey] && studyData[classKey].subtopics[subtopicName]) {
      const topicData = studyData[classKey].subtopics[subtopicName];
      
      // Update content
      const topicTitle = document.getElementById('topicTitle');
      const topicDescription = document.getElementById('topicDescription');
      
      if (topicTitle) topicTitle.textContent = subtopicName;
      if (topicDescription) topicDescription.textContent = topicData.description;
      
      // Update key points
      const keyPointsList = document.getElementById('keyPointsList');
      if (keyPointsList) {
        keyPointsList.innerHTML = '';
        topicData.keyPoints.forEach(point => {
          const li = document.createElement('li');
          li.textContent = point;
          keyPointsList.appendChild(li);
        });
      }

      // Show topic content, hide welcome
      const welcomeScreen = document.getElementById('welcomeScreen');
      const topicContent = document.getElementById('topicContent');
      
      if (welcomeScreen) welcomeScreen.classList.add('hidden');
      if (topicContent) topicContent.classList.remove('hidden');

      // Close sidebar on mobile after selection
      if (this.isMobile) {
        this.closeSidebar();
      }

      this.currentTopic = { topicClass, subtopicKey };
    }
  }

  showWelcomeScreen() {
    // Clear active states
    document.querySelectorAll('.subtopic.active').forEach(el => {
      el.classList.remove('active');
    });

    // Show welcome, hide topic content
    const welcomeScreen = document.getElementById('welcomeScreen');
    const topicContent = document.getElementById('topicContent');
    
    if (topicContent) topicContent.classList.add('hidden');
    if (welcomeScreen) welcomeScreen.classList.remove('hidden');

    this.currentTopic = null;
  }

  handleResize() {
    const newIsMobile = window.innerWidth <= 768;
    
    if (newIsMobile !== this.isMobile) {
      this.isMobile = newIsMobile;
      
      // Reset sidebar state for new screen size
      if (this.isMobile) {
        this.sidebarOpen = false;
      } else {
        this.sidebarOpen = true;
      }
      
      this.updateSidebarState();
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StudyApp();
});