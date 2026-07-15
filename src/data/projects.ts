export type Project = {
    title: string
    description: string
    tags: string[]
    status: string
    link?: string
    fullDescription?: string
    architecture?: string
    techDetails?: string
    repoUrl?: string
    liveUrl?: string
}

/*
* Project Status Options:
* * Planning Phase
* * In Progress
* * Complete
* * Abandoned
* * Live
* */

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description:
            'The site you\'re on right now. Built from scratch with React, TypeScript, and Vite, deployed on AWS with automated CI/CD. Custom animations, a maker\'s eye for details, and a real appreciation for making things that just work.',
        tags: ['JavaScript', 'React', 'TypeScript', 'AWS', 'CI/CD', 'Git', 'Claude'],
        status: 'Live',
        fullDescription:
            'A portfolio for two audiences at once — recruiters who need to know I can ship, and collaborators who want to know if I\'m worth building alongside. Every interaction is intentional, from the paper airplane that draws my name to the way the whole site collapses gracefully on mobile.',
        architecture:
            'React + TypeScript frontend built with Vite, structured around reusable components and a shared design token system so everything stays consistent as the site grows. Content lives in dedicated data files, separate from the components that render it. Hosted on AWS S3 with CloudFront for HTTPS and edge caching, and a custom domain routed through Route 53 and Namecheap.',
        techDetails:
            'CI/CD runs through GitHub Actions — every push to main builds the site, uploads it to S3, and invalidates the CloudFront cache automatically. The paper airplane animation was the tricky part — it uses a mix of SVG, CSS transitions, and dynamic width measurement via useRef and useEffect so it stays aligned with my name at any screen size. Also uses the browser\'s Font Loading API to wait for custom fonts before measuring, which fixed a subtle race condition that broke the animation on first page load.',
        repoUrl: 'https://github.com/Kaito321/portfolio',
        liveUrl: 'https://rosabuilds.dev',
    },
    {
        title: 'JobSearch App with Claude',
        description:
            'A local, privacy-first job-application agent. It scrapes company career pages in a real browser, scores each posting against my resume with Claude, drafts tailored cover letters, and pre-fills applications for me to review — while checking each site\'s ToS so it doesn\'t touch anything that bans bots.',
        tags: ['React', 'JavaScript', 'Claude', 'Puppeteer', 'SQL', 'Database', 'Git'],
        status: 'In Progress',
        fullDescription:
            'Built out of frustration with typing the same information into the same job sites over and over — looking at you, Workday. Job searching is already exhausting; the goal was to remove the parts that don\'t need to be manual so I can spend more time on the parts that do.',
        architecture:
            'React frontend for setup and monitoring. Claude is the backbone — it handles resume-to-posting analysis, candidate scoring, cover letter generation, and application-filling prompts. Puppeteer drives a real browser under the hood so nothing looks synthetic to the target sites. User data — resume, cover letter template, preferences, saved postings — lives in SQL tables. The app has two modes: manual, where you feed it a specific posting URL, and automatic, where it searches the web based on criteria you set and works through a session cap you define.',
        techDetails:
            'The agent never submits applications on its own — it fills tabs and leaves them open for me to review. Built-in failsafes stop the whole flow if it hits a CAPTCHA or lands on a site that explicitly bans bots (LinkedIn being the obvious one). The trickiest part so far has been two things at once: learning to communicate intent precisely to Claude so it does what I actually mean rather than what I loosely said, and navigating the legal edges of what automation is and isn\'t allowed to do on job sites. Balancing "make this useful" with "don\'t get myself banned" is an ongoing conversation.',
        repoUrl: 'https://github.com/Kaito321/jobsearchagent',
    },
]