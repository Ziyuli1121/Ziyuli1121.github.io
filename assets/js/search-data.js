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
  },{id: "nav-portfolio",
          title: "Portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-writing-notes",
          title: "Writing / Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blogs/";
          },
        },{id: "news-my-team-won-the-2nd-place-2-51-in-the-2024-sandia-national-lab-data-challenge",
          title: 'My team won the 2nd place (2/51) in the 2024 Sandia National Lab...',
          description: "",
          section: "News",},{id: "news-my-team-won-the-1st-place-1-180-in-the-2025-illinois-statistics-datathon",
          title: 'My team won the 1st place (1/180) in the 2025 Illinois Statistics Datathon...',
          description: "",
          section: "News",},{id: "news-i-received-the-distinguished-undergraduate-researcher-certificate-from-uiuc",
          title: 'I received the Distinguished Undergraduate Researcher Certificate from UIUC.',
          description: "",
          section: "News",},{id: "news-i-received-the-edmund-j-james-scholar-certificate-from-uiuc",
          title: 'I received the Edmund J James Scholar Certificate from UIUC.',
          description: "",
          section: "News",},{id: "news-our-paper-epd-solver-via-rdpo-has-been-accepted-to-ieee-tpami",
          title: '🎉 Our paper EPD-Solver via RDPO has been accepted to IEEE TPAMI.',
          description: "",
          section: "News",},{
        id: 'social-cv_pdf',
        title: 'Cv_pdf',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ziyuli1121", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ziyuperryli", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ZiyuLi21", "_blank");
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
