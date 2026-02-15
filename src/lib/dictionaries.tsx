import React from "react";

export const dictionary = {
    pt: {
        header: {
            items: [
                { name: "Sobre", href: "#sobre" },
                { name: "Formação", href: "#formacao" },
                { name: "Projetos", href: "#projetos" },
                { name: "Contato", href: "#contato" },
            ],
        },
        hero: {
            greeting: "Olá, eu sou",
            role: "Estudante de Técnico em Informática com foco em Ciência da Computação e Dados. Desenvolvendo soluções com PHP, APIs, Python e Inteligência Artificial.",
            btnProject: "Ver Projetos",
            badge: "Em busca de colaborações",
            codeProfile: {
                roleLabel: "cargo",
                roleValue: "Dev & Data Science",
                focusLabel: "foco",
                focusValue: "PHP, Python & AI",
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Sou estudante do 3º ano do Ensino Médio Técnico em Informática, com foco em Ciência da Computação, Ciência de Dados e Desenvolvimento de Software. Atuo no desenvolvimento de projetos práticos voltados a dados, <strong className="text-gray-100">Inteligência Artificial</strong> e aplicações web.
                </>
            ),
            description2: (
                <>
                    Atualmente, desenvolvo um projeto de rede neural <span className="text-blue-500 font-semibold">LSTM</span> para análise de criptomoedas, utilizando Python, Pandas, Flask e Streamlit. Também possuo conhecimentos sólidos em <strong className="text-gray-100">PHP</strong>, APIs e Bancos de Dados.
                </>
            ),
            description3: (
                <>
                    Tenho perfil proativo e colaborativo, buscando sempre transformar informação em soluções funcionais. Pretendo cursar Ciência da Computação e aprofundar meus conhecimentos em IA, mantendo o aprendizado contínuo através de projetos reais e estudo consistente.
                </>
            ),
            stackTitle: "Minha Stack",
            stackBackend: "Backend & IA",
            stackFrontend: "Web & Frontend",
            stackData: "Dados & Tools",
        },
        education: {
            title: "Formação",
            subtitle: "Acadêmica",
            items: [
                {
                    year: "2024 - Atualmente",
                    title: "Técnico em Informática",
                    institution: "ETEC - Escola Técnica Estadual",
                    description: "Ensino Médio integrado ao Técnico. Foco em desenvolvimento de software, lógica de programação, banco de dados e aplicações web."
                },
                {
                    year: "Futuro",
                    title: "Ciência da Computação",
                    institution: "Universidade",
                    description: "Objetivo acadêmico para especialização em Inteligência Artificial, Ciência de Dados e algoritmos complexos."
                }
            ]
        },
        projects: {
            title: "Meus",
            subtitle: "Projetos",
            description:
                "Soluções reais desenvolvidas com foco em arquitetura, performance e experiência do usuário.",
            items: [
                {
                    title: "Crypto Trend Analysis (LSTM)",
                    description:
                        "Projeto de rede neural MCP LSTM para análise de tendências de moedas digitais. Considera preços históricos, notícias e fatores de mercado. Desenvolvido com Python, Pandas e Flask.",
                    tags: ["Python", "Machine Learning", "LSTM", "Flask", "Pandas"],
                    image: "/projects/crypto-lstm.png",
                    github: "https://github.com/luisvfernando7-a11y",
                    demo: "#",
                },
            ],
        },
        footer: {
            title: "Vamos",
            subtitle: "conversar?",
            text: "Estou disponível para novas oportunidades. Se busca um desenvolvedor que une a solidez do Java com a modernidade do React, me mande um oi.",
            copy: "Desenvolvido com Next.js 15 & Tailwind CSS.",
        },
    },
    en: {
        header: {
            items: [
                { name: "About", href: "#sobre" },
                { name: "Education", href: "#formacao" },
                { name: "Projects", href: "#projetos" },
                { name: "Contact", href: "#contato" },
            ],
        },
        hero: {
            greeting: "Hello, I am",
            role: "Computer Technician Student focused on Computer Science and Data. Developing solutions with PHP, APIs, Python, and Artificial Intelligence.",
            btnProject: "See Projects",
            badge: "Open to collaborations",
            codeProfile: {
                roleLabel: "role",
                roleValue: "Dev & Data Science",
                focusLabel: "focus",
                focusValue: "PHP, Python & AI",
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    I am a 3rd-year High School Computer Technician student, focused on Computer Science, Data Science, and Software Development. I work on practical projects aimed at data, <strong className="text-gray-100">Artificial Intelligence</strong>, and web applications.
                </>
            ),
            description2: (
                <>
                    Currently, I am developing an <span className="text-blue-500 font-semibold">LSTM</span> neural network project for cryptocurrency analysis using Python, Pandas, Flask, and Streamlit. I also have solid knowledge in <strong className="text-gray-100">PHP</strong>, APIs, and Databases.
                </>
            ),
            description3: (
                <>
                    I have a proactive and collaborative profile, always seeking to transform information into functional solutions. I intend to study Computer Science and deepen my knowledge in AI, maintaining continuous learning through real projects and consistent study.
                </>
            ),
            stackTitle: "My Stack",
            stackBackend: "Backend & AI",
            stackFrontend: "Web & Frontend",
            stackData: "Data & Tools",
        },
        education: {
            title: "Education",
            subtitle: "Timeline",
            items: [
                {
                    year: "2024 - Present",
                    title: "Computer Technician",
                    institution: "ETEC - State Technical School",
                    description: "High School integrated with Technical Course. Focus on software development, programming logic, databases, and web applications."
                },
                {
                    year: "Future",
                    title: "Computer Science",
                    institution: "University",
                    description: "Academic goal for specialization in Artificial Intelligence, Data Science, and complex algorithms."
                }
            ]
        },
        projects: {
            title: "My",
            subtitle: "Projects",
            description:
                "Real solutions developed with a focus on architecture, performance, and user experience.",
            items: [
                {
                    title: "Crypto Trend Analysis (LSTM)",
                    description:
                        "MCP LSTM neural network project for digital currency trend analysis. Considers historical prices, news, and market factors. Developed with Python, Pandas, and Flask.",
                    tags: ["Python", "Machine Learning", "LSTM", "Flask", "Pandas"],
                    image: "/projects/crypto-lstm.png",
                    github: "https://github.com/luisvfernando7-a11y",
                    demo: "#",
                },
            ],
        },
        footer: {
            title: "Let's",
            subtitle: "talk?",
            text: "I am available for new opportunities. If you are looking for a developer who combines Java solidity with React modernity, say hello.",
            copy: "Developed with Next.js 15 & Tailwind CSS.",
        },
    },
};
