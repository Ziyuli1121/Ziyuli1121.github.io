// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-education",
          title: "Education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-honors-amp-awards",
          title: "Honors &amp; Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/honor/";
          },
        },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blogs/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-team-won-the-2nd-place-2-51-in-the-2024-sandia-national-lab-data-challenge",
          title: 'My team won the 2nd place (2/51) in the 2024 Sandia National Lab...',
          description: "",
          section: "News",},{id: "news-my-team-won-the-1st-place-1-180-in-the-2025-illinois-statistics-datathon",
          title: 'My team won the 1st place (1/180) in the 2025 Illinois Statistics Datathon...',
          description: "",
          section: "News",},{id: "news-arxiv-insight-tracker-is-released-i-designed-the-research-intelligence-tool-for-trend-analysis-and-daily-frontier-paper-discovery-in-ai",
          title: 'ArXiv insight tracker is released! I designed the research intelligence tool for trend...',
          description: "",
          section: "News",},{id: "news-i-received-the-distinguished-undergraduate-researcher-certificate-from-uiuc",
          title: 'I received the Distinguished Undergraduate Researcher Certificate from UIUC.',
          description: "",
          section: "News",},{id: "news-i-received-the-edmund-j-james-scholar-certificate-from-uiuc",
          title: 'I received the Edmund J James Scholar Certificate from UIUC.',
          description: "",
          section: "News",},{id: "projects-tongji-university",
          title: 'Tongji University',
          description: "Mechanical Engineering - Mechatronics Concentration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/education_tongji/";
            },},{id: "projects-university-of-illinois-urbana-champaign",
          title: 'University of Illinois Urbana-Champaign',
          description: "Bachelor of Science in Mathematics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/education_uiuc/";
            },},{id: "projects-education-lead",
          title: 'Education Lead',
          description: "Illinois Data Science Club",
          section: "Projects",handler: () => {
              window.location.href = "/projects/experience_education_lead/";
            },},{id: "projects-undergraduate-researcher",
          title: 'Undergraduate Researcher',
          description: "Zhao Group @ Carl R. Woese Institute for Genomic Biology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/experience_researcher/";
            },},{id: "projects-undergraduate-research-symposium-presenter",
          title: 'Undergraduate Research Symposium Presenter',
          description: "2025 Undergraduate Research Symposium (URS)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/experience_urs/";
            },},{id: "projects-2024-honors",
          title: '2024 Honors',
          description: "Academic and Competition Achievements in 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/honor_2024/";
            },},{id: "projects-2025-honors",
          title: '2025 Honors',
          description: "Academic and Competition Achievements in 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/honor_2025/";
            },},{id: "projects-earlier-honors-2020-2023",
          title: 'Earlier Honors (2020-2023)',
          description: "Academic and Competition Achievements from 2020-2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/honor_earlier/";
            },},{id: "projects-credit-card-spending-prediction-framework",
          title: 'Credit Card Spending Prediction Framework',
          description: "A Multi-Stage Learning Framework for Credit Card Spending Prediction, Risk Segmentation, and Limit Recommendation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_credit_card/";
            },},{id: "projects-eeg-based-bilingual-proficiency-prediction",
          title: 'EEG-Based Bilingual Proficiency Prediction',
          description: "Interpretable Spatiotemporal Neural Networks for EEG-Based Bilingual Proficiency Prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_eeg/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ziyuperryli", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
