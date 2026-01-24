import React from "react";

export const dictionary = {
    pt: {
        header: {
            items: [
                { name: "Sobre", href: "#sobre" },
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
        projects: {
            title: "Meus",
            subtitle: "Projetos",
            description:
                "Soluções reais desenvolvidas com foco em arquitetura, performance e experiência do usuário.",
            items: [
                {
                    title: "Projeto Exemplo 1",
                    description:
                        "Descrição do projeto. Tecnologias utilizadas e qual problema ele resolve.",
                    tags: ["JavaScript", "CSS", "HTML"],
                    image: "/projects/project-placeholder-1.png",
                    github: "https://github.com/luisvfernando7",
                    demo: "#",
                },
                {
                    title: "Projeto Exemplo 2",
                    description:
                        "Descrição do projeto. Tecnologias utilizadas e qual problema ele resolve.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "React",
                    ],
                    image: "/projects/project-placeholder-2.png",
                    github: "https://github.com/luisvfernando7",
                    demo: "#",
                },
                {
                    title: "Projeto Exemplo 3",
                    description:
                        "Descrição do projeto. Tecnologias utilizadas e qual problema ele resolve.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "React",
                    ],
                    image: "/projects/project-placeholder-3.png",
                    github: "https://github.com/luisvfernando7",
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
        projects: {
            title: "My",
            subtitle: "Projects",
            description:
                "Real solutions developed with a focus on architecture, performance, and user experience.",
            items: [
                {
                    title: "Example Project 1",
                    description:
                        "Project description. Technologies used and what problem it solves.",
                    tags: ["JavaScript", "CSS", "HTML"],
                    image: "/projects/project-placeholder-1.png",
                    github: "https://github.com/luisvfernando7",
                    demo: "#",
                },
                {
                    title: "Example Project 2",
                    description:
                        "Project description. Technologies used and what problem it solves.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "React",
                    ],
                    image: "/projects/project-placeholder-2.png",
                    github: "https://github.com/luisvfernando7",
                    demo: "#",
                },
                {
                    title: "Example Project 3",
                    description:
                        "Project description. Technologies used and what problem it solves.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "React",
                    ],
                    image: "/projects/project-placeholder-3.png",
                    github: "https://github.com/luisvfernando7",
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
