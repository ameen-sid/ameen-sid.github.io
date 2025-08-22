// gitprofile.config.ts

const CONFIG = {
    github: {
        username: 'ameen-sid', // Your GitHub org/user name. (This is the only required config)
    },
    /**
     * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
     * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
     * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
     */
    base: '/',
    projects: {
        github: {
            display: true, // Display GitHub projects?
            header: 'Github Projects',
            mode: 'manual', // Mode can be: 'automatic' or 'manual'
            automatic: {
                sortBy: 'updated', // Sort projects by 'stars' or 'updated'
                limit: 8, // How many projects to display.
                exclude: {
                    forks: true, // Forked projects will not be displayed if set to true.
                    projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
                },
            },
            manual: {
                // Properties for manually specifying projects
                projects: [
                    'ameen-sid/streakify',
                    'ameen-sid/CodeHell_Frontend',
                    'ameen-sid/Admission_Management_System',
                    'ameen-sid/web-clone-one',
                    'ameen-sid/React_Projects',
                    'ameen-sid/Express_Backend_Projects',
                    'ameen-sid/CodeHell_Backend',
                    'ameen-sid/Team-Eagles-Website',
                ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
            },
        },
        external: {
            header: 'Projects',
            // To hide the `External Projects` section, keep it empty.
            projects: [
                {
                    title: 'Streakify',
                    description:
                        'AI powered Discipline Planner',
                    imageUrl:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyYWluLWNpcmN1aXQtaWNvbiBsdWNpZGUtYnJhaW4tY2lyY3VpdCI+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAwLTUuOTk3LjEyNSA0IDQgMCAwIDAtMi41MjYgNS43NyA0IDQgMCAwIDAgLjU1NiA2LjU4OEE0IDQgMCAxIDAgMTIgMThaIi8+PHBhdGggZD0iTTkgMTNhNC41IDQuNSAwIDAgMCAzLTQiLz48cGF0aCBkPSJNNi4wMDMgNS4xMjVBMyAzIDAgMCAwIDYuNDAxIDYuNSIvPjxwYXRoIGQ9Ik0zLjQ3NyAxMC44OTZhNCA0IDAgMCAxIC41ODUtLjM5NiIvPjxwYXRoIGQ9Ik02IDE4YTQgNCAwIDAgMS0xLjk2Ny0uNTE2Ii8+PHBhdGggZD0iTTEyIDEzaDQiLz48cGF0aCBkPSJNMTIgMThoNmEyIDIgMCAwIDEgMiAydjEiLz48cGF0aCBkPSJNMTIgOGg4Ii8+PHBhdGggZD0iTTE2IDhWNWEyIDIgMCAwIDEgMi0yIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxMyIgcj0iLjUiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjMiIHI9Ii41Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMSIgcj0iLjUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjgiIHI9Ii41Ii8+PC9zdmc+',
                    link: 'https://streakifyy.vercel.app',
                },
                {
                    title: 'CodeHell',
                    description:
                        'Ad-tech Platform',
                    imageUrl:
                        'https://res.cloudinary.com/dcq0t9ts0/image/upload/v1755557996/rzp_logo_bzzxai.png',
                    link: 'https://codehell.vercel.app',
                },
            ],
        },
    },
    seo: { title: 'Portfolio of Ameen Sid', description: '', imageURL: '' },
    social: {
        linkedin: 'ameen-sid',
        x: 'AmeenSid7',
        mastodon: '',
        researchGate: '',
        facebook: '',
        instagram: 'ameensid7',
        reddit: '',
        threads: '',
        youtube: '', // example: 'pewdiepie'
        udemy: '',
        dribbble: '',
        behance: '',
        medium: '',
        dev: '',
        stackoverflow: '', // example: '1/jeff-atwood'
        discord: '',
        telegram: '',
        website: '',
        phone: '',
        email: 'ameensid7@gmail.com',
    },
    resume: {
        fileUrl:
            'https://drive.google.com/file/d/1Tt3hWxyZ2WPykl9VBo3k3AdUJqxfIW85/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'C++',
        'Data Structures',
        'Algorithms',
        'JavaScript',
        'Node.js',
        'Express',
        'REST APIs',
        'MySQL',
        'MongoDB',
        'Next.js',
        'Git',
        'Docker',
    ],
    // experiences: [
    //     {
    //         company: 'Company Name',
    //         position: 'Position',
    //         from: 'September 2021',
    //         to: 'Present',
    //         companyLink: 'https://example.com',
    //     },
    //     {
    //         company: 'Company Name',
    //         position: 'Position',
    //         from: 'July 2019',
    //         to: 'August 2021',
    //         companyLink: 'https://example.com',
    //     },
    // ],
    // certifications: [
    //     {
    //         name: 'Lorem ipsum',
    //         body: 'Lorem ipsum dolor sit amet',
    //         year: 'March 2022',
    //         link: 'https://example.com',
    //     },
    // ],
    educations: [
        {
            institution: 'Mewar Institute of Management',
            degree: 'Bachelor of Computer Application',
            from: '2022',
            to: '2025',
        },
        {
            institution: 'Indian Institute of Computer Science',
            degree: 'Master Diploma in Computer Engineering',
            from: '2021',
            to: '2024',
        },
    ],
    // publications: [
    //   {
    //     title: 'Publication Title',
    //     conferenceName: '',
    //     journalName: 'Journal Name',
    //     authors: 'John Doe, Jane Smith',
    //     link: 'https://example.com',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    //   {
    //     title: 'Publication Title',
    //     conferenceName: 'Conference Name',
    //     journalName: '',
    //     authors: 'John Doe, Jane Smith',
    //     link: 'https://example.com',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   },
    // ],
    // Display articles from your medium or dev account. (Optional)
    // blog: {
    //   source: 'dev', // medium | dev
    //   username: 'ameen-sid', // to hide blog section, keep it empty
    //   limit: 2, // How many articles to display. Max is 10.
    // },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: { id: '', snippetVersion: 6 },
    themeConfig: {
        defaultTheme: 'luxury',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Display the ring in Profile picture
        displayAvatarRing: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'dim',
            'nord',
            'sunset',
            'caramellatte',
            'abyss',
            'silk',
            'procyon',
        ],
    },

    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

    enablePWA: true,
};

export default CONFIG;
