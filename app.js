// Simplified Study App JavaScript - Uses Only Embedded Data
// App loads instantly with no external dependencies

/* 
🔧 EMBEDDED_STUDY_DATA - Edit this section to modify your study content
Keep the same JSON structure when making changes:

{
  "studyTopics": {
    "Class Key": {
      "title": "Class Title",
      "subtopics": {
        "Subtopic Name": {
          "description": "Detailed description here...",
          "keyPoints": [
            "Key point 1",
            "Key point 2",
            "Key point 3"
          ]
        }
      }
    }
  }
}

To add new content:
1. Copy the structure above
2. Replace "Class Key", "Class Title", "Subtopic Name" etc. with your content
3. Add as many classes and subtopics as needed
4. Save this file and refresh the page

💡 Tips:
- Keep class keys unique (e.g., "Class 1", "Class 2", etc.)
- Make subtopic names descriptive
- Use clear, concise key points
- Maintain proper JSON syntax (commas, quotes, brackets)
*/

const EMBEDDED_STUDY_DATA = {
  "studyTopics": {
    "Class 1": {
      "class": "1",
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
      "class": "2",
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
      "class": "3",
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
    },
    "Class 4": {
      "class": '4',
      "title": "Idea of Family & Criticism of Morgan",
      "subtopics": {
        "Idea of Family": {
          "description": "Morgan outlined 15 evolutionary stages of family, but identified 5 as the most significant in the transition from early group marriage to stable monogamy.",
          "keyPoints": [
            "Consanguineous Family — The earliest family structure with group marriage; no incest taboo existed, and it was similar to animal-like behavior. Found in the stage of lower savagery.",
            "Punaluan Family — Group marriage became more regulated; siblings no longer married, and men of one group married women of another. This laid the foundation of exogamy. Characteristic of mid/upper savagery.",
            "Syndesman Family — Transitional form with one man marrying one woman, but without exclusive rights. Such unions could be easily dissolved. Found in all barbarian stages.",
            "Polygamous/Patriarchal Family — Linked with the rise of men and private property; a man had multiple wives, focusing on progeny. Seen in early civilization.",
            "Monogamous Family — The most advanced stage, characterized by exclusive, lifelong pair bonding and connected to property rights and children. Prevalent in later civilization."
          ]
        },
        "Criticism of Morgan": {
          "description": "Morgan’s theories, influenced by the context and biases of his time, have faced several criticisms.",
          "keyPoints": [
            "Influenced by 19th-century racial theories (e.g., Morton’s claims about brain size); Morgan believed civilized people (whites) were superior.",
            "Meyer Fortes argued that Morgan's stress on property and economic growth reflected his American context, making it speculative.",
            "John Lubbock agreed with Morgan that descent evolved logically, but noted that in most present tribal societies, women have low status.",
            "Henry believed Roman society always had patrilineal descent, theorizing patria potestas was rooted in early patriliny.",
            "John M Fergusson proposed that female infanticide due to food scarcity led to polyandry, which prevented establishing paternity and led to matriliny; over time, this was replaced by capture and other systems."
          ]
        },
        "Conclusion": {
          "description": "Although Morgan’s theories had flaws and reflected biases, his work established the importance of kinship studies and scientific fieldwork in anthropology. He was among the first to attempt global, systematic research on family evolution."
        },
        "Frazer's Stages of Mental Advancement": {
          "description": "In his book 'The Golden Bough', Frazer proposed that the human psyche is marked by three elements, which correspond to three stages in human mental advancement: Magic, Religion, and Science. Each stage represents a distinctive way humans tried to understand and control their world.",
          "keyPoints": [
            "Three stages: Magic → Religion → Science",
            "Each stage reflects a different approach to explaining natural phenomena",
            "Transitions show evolution in human thinking"
          ]
        },
        "Magical Stage": {
          "description": "This stage assumes that the universe is regulated by universal, impersonal, and unchanging laws. Magicians were believed to know these laws and use them to control natural forces. Magical beliefs were classified by Frazer into two types: homeopathic magic (like produces like) and contagious magic (influence remains after contact). Over time, repeated failure of magic led to a shift towards religious thinking.",
          "keyPoints": [
            "Homeopathic magic: based on similarity (like produces like)",
            "Contagious magic: based on contact and influence",
            "Magicians believed to control nature; eventual failure in results led to rise of religion"
          ]
        },
        "Religion": {
          "description": "Religion is based on belief in superhuman or supernatural powers controlling the world. People tried to please these forces through prayers and sacrifices, showing submissiveness and seeking favors. As faith in magic faded, human psyche shifted toward religion.",
          "keyPoints": [
            "Belief in supernatural powers",
            "Use of prayer, rituals, and sacrifices",
            "Attitude of submission to unknown forces"
          ]
        },
        "Science": {
          "description": "With the development of rational thinking, humans began to explain the causes of natural phenomena. People developed the capacity to recognize patterns and trends, using empirical and rational methods to find explanations. The human psyche shifted towards science and rationality.",
          "keyPoints": [
            "Development of rationality and observation",
            "Explaining causes of natural events through empirical methods",
            "Shift toward scientific and logical thinking"
          ]
        },
        "Totemism": {
          "description": "Totemism is a belief in mystical kinship between humans and specific plants or animals, often prohibiting the killing or consumption of the totem animal or plant. Frazer argued it originated from belief in souls and cited Australian aboriginal practices. Totemism also contributed to social practices like exogamy.",
          "keyPoints": [
            "Mystical kinship with certain plants/animals (totems)",
            "Prohibition on harming or consuming the totem",
            "Linked to beliefs about the soul and origin myths"
          ]
        },
        "Criticism": {
          "description": "Frazer’s theory, while influential, faced criticism for lack of direct observation and overgeneralization. Later researchers found limitations in his reliance on secondary data and broad evolutionary assumptions. As more fieldwork was done, some of Frazer's conclusions were revised or rejected.",
          "keyPoints": [
            "Lack of first-hand observation/data",
            "Overgeneralized evolutionary framework",
            "Subsequent research led to revision of his ideas"
          ]
        },
        "Conclusion": {
          "description": "Frazer's theory had great influence during its time. He himself acknowledged the limitations of his work, stating that new evidence from direct observation of societies would eventually supersede his ideas.",
          "keyPoints": [
            "Important early contribution but with limitations",
            "Frazer foresaw his work being revised with future research",
            "Highlighted the evolutionary view of human thought"
          ]
        }
      }
    }
  }
};

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
