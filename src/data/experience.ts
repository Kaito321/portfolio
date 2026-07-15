export type Bullet = { text: string; highlights?: string[] }
export type Role = { role: string; period: string; bullets: Bullet[] }
export type Company = { company: string; location: string; roles: Role[] }

export const experiences: Company[] = [
    {
        company: 'Paycom',
        location: 'Grapevine, Texas',
        roles: [
            {
                role: 'Software Developer IV',
                period: '2025 — 2026',
                bullets: [
                    {
                        text: 'Engineered cross-application provincial tax logic in C# compatible across both .NET Framework 4.8 and .NET Core 8, automating complex Employer Health Tax (EHT) multi-bracket calculations for clients across four Canadian provinces.',
                        highlights: [
                            'C# compatible across both .NET Framework 4.8 and .NET Core 8',
                            'Employer Health Tax (EHT) multi-bracket calculations',
                        ],
                    },
                    {
                        text: 'Proactively developed a self-correction mechanism that dynamically honors client-specific tax overrides while automatically correcting conflicting inputs, eliminating manual interventions and ensuring 100% compliance against over-taxation.',
                        highlights: [
                            'self-correction mechanism',
                            '100% compliance against over-taxation',
                        ],
                    },
                    {
                        text: 'Decoupled monolithic calculation routines by isolating province-specific rules into dedicated services, condensing redundant code and establishing an extensible pattern for frictionless onboarding of future provincial requirements.',
                        highlights: [
                            'Decoupled monolithic calculation routines',
                            'extensible pattern',
                        ],
                    },
                    {
                        text: 'Spearheaded the full-stack delivery of new filing frequency feature, including SQL database architecture, C# API extensions, PHP backend logic, and JavaScript UI components.',
                        highlights: [
                            'full-stack delivery of new filing frequency feature',
                            'SQL database architecture, C# API extensions, PHP backend logic, and JavaScript UI components',
                        ],
                    },
                    {
                        text: 'Designed and executed data pipeline automations that established self-serve data access for domestic tax updates, reducing manual database record maintenance by 90% for the tax analyst team.',
                        highlights: [
                            'data pipeline automations',
                            'reducing manual database record maintenance by 90%',
                        ],
                    },
                    {
                        text: 'Established standardized testing patterns for provincial tax calculations and comprehensive documentation, including exhaustive edge case coverage across various tax jurisdictions, significantly minimizing tax calculation defects.',
                        highlights: [
                            'standardized testing patterns',
                            'exhaustive edge case coverage',
                        ],
                    },
                    {
                        text: 'Elevated team technical baseline by training QA and Development peers on complex international calculations and providing architectural peer reviews for 12 major merge requests.',
                        highlights: [
                            'training QA and Development peers',
                            'architectural peer reviews for 12 major merge requests',
                        ],
                    },
                    {
                        text: 'Served as primary technical subject matter expert (SME) for international compliance, bridging gaps between Product, QA, and Support.',
                        highlights: [
                            'primary technical subject matter expert (SME) for international compliance',
                        ],
                    },
                ],
            },
            {
                role: 'Software Developer I',
                period: '2021 — 2025',
                bullets: [
                    {
                        text: 'Designed and implemented C# REST API endpoints for real-time minimum wage calculations and compliance alerts for Nevada, enabling rapid software adaptation to changing government regulations.',
                        highlights: [
                            'C# REST API endpoints',
                            'real-time minimum wage calculations and compliance alerts for Nevada',
                        ],
                    },
                    {
                        text: 'Developed reusable validation logic and configuration-driven UI components in PHP and JavaScript to support country-specific compliance rules for international users, changing deduction form displays for clients based on the country they are setting up taxes for.',
                        highlights: [
                            'reusable validation logic and configuration-driven UI components in PHP and JavaScript',
                            'country-specific compliance rules for international users',
                        ],
                    },
                    {
                        text: 'Refactored legacy PHP code into modular, maintainable MVC-style patterns, significantly reducing maintenance friction and improving system scalability.',
                        highlights: [
                            'Refactored legacy PHP code into modular, maintainable MVC-style patterns',
                        ],
                    },
                ],
            },
        ],
    },
    {
        company: 'Accenture',
        location: 'Remote',
        roles: [
            {
                role: 'Business Analyst Intern',
                period: 'Jun 2020 — Jul 2020',
                bullets: [
                    {
                        text: 'Developed Excel reports to enhance data visualization, uncover trends, and streamline the estimation process.',
                        highlights: ['Excel reports', 'streamline the estimation process'],
                    },
                    {
                        text: 'Automated data extraction using Python and Regex, efficiently processing hundreds of rows of code snippets and reducing manual effort by approximately 60%.',
                        highlights: [
                            'Automated data extraction using Python and Regex',
                            'reducing manual effort by approximately 60%',
                        ],
                    },
                ],
            },
        ],
    },
    {
        company: 'Accenture Federal Services',
        location: 'Remote',
        roles: [
            {
                role: 'Data Scientist Intern',
                period: 'Mar 2020 — May 2020',
                bullets: [
                    {
                        text: 'Collaborated with a team of interns to analyze data using Python, visualizing findings and identifying correlations to propose actionable business solutions to clients.',
                        highlights: [
                            'analyze data using Python',
                            'actionable business solutions',
                        ],
                    },
                    {
                        text: 'Mentored fellow interns on Python fundamentals and data visualization techniques.',
                        highlights: ['Mentored fellow interns on Python fundamentals'],
                    },
                    {
                        text: 'Leveraged Pandas and machine learning to manipulate databases, train predictive models, assess model accuracy, and conduct comparative analyses.',
                        highlights: [
                            'Pandas and machine learning',
                            'train predictive models',
                        ],
                    },
                ],
            },
        ],
    },
]