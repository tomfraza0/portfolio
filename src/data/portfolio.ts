export type Language = 'pt' | 'en';

export const profile = {
    name: 'Tomás Frazão',
    email: 'tomas.santos.frazao@gmail.com',
    location: 'Leiria, Portugal',
    photo: '/personal.jpeg',
    links: {
        github: 'https://github.com/tomfraza0',
        linkedin: 'https://www.linkedin.com/in/tomfraza0/',
        instagram: 'https://www.instagram.com/tomfraza0',
        treeMaker: 'https://treemaker.tomasfrazao.pt',
    },
    socialHandles: { github: '@tomfraza0', linkedin: '@tomfraza0', instagram: '@tomfraza0', discord: '@otomg' },
};

export const content = {
    pt: {
        navigation: { about: 'Sobre', projects: 'Projetos', contact: 'Contacto', cta: 'Contactar' },
        hero: { eyebrow: 'Estudante de Engenharia Informática · Leiria', title: 'Ideias com', titleAccent: 'forma digital.', intro: 'Sou o Tomás, estudante do 1.º ano da Licenciatura em Engenharia Informática e de Computadores no Instituto Superior Técnico.', button: 'Ver projetos', scroll: 'desliza para descobrir' },
        about: { label: 'Sobre mim', title: 'Interessado em', titleAccent: 'solucionar o futuro.', paragraphs: ['Sou natural de Leiria e estou atualmente a estudar no Instituto Superior Técnico. Escolhi Engenharia Informática e de Computadores porque quero compreender a tecnologia e usá-la para resolver problemas.', 'O meu objetivo é aprender o máximo possível para me tornar um bom profissional. Gosto de experimentar, construir projetos e aprender com cada desafio.'], action: 'Ver GitHub' },
        projects: { label: 'Projeto em destaque', title: 'O que estou', titleAccent: 'a construir.', status: 'Em construção', projectType: 'Projeto pessoal', name: 'Tree Maker', description: 'Um projeto pessoal publicado, desenvolvido para explorar ideias, aprender na prática e evoluir através do código.', stack: 'React · TypeScript · Vite', githubAction: 'Mais projetos no GitHub' },
        skills: { label: 'Tecnologias', title: 'Aprender.', titleAccent: 'Experimentar.', titleEnd: 'Repetir.' },
        contact: { label: 'Contacto', title: 'Vamos manter', titleAccent: 'o contacto?', subtitle: 'Estou focado em aprender e aberto a conhecer pessoas e projetos interessantes.' },
        footer: { phrase: 'Feito em Leiria, com curiosidade.', back: 'Voltar ao topo' },
    },
    en: {
        navigation: { about: 'About', projects: 'Projects', contact: 'Contact', cta: 'Get in touch' },
        hero: { eyebrow: 'Computer Engineering student · Leiria', title: 'Ideas with', titleAccent: 'digital form.', intro: "I'm Tomás, a first-year Computer Science and Engineering student at Instituto Superior Técnico.", button: 'View projects', scroll: 'scroll to explore' },
        about: { label: 'About me', title: 'Interested in', titleAccent: 'solving the future.', paragraphs: ["I'm from Leiria and currently study at Instituto Superior Técnico. I chose Computer Science and Engineering because I want to understand technology and use it to solve problems.", 'My goal is to learn as much as possible to become a good professional. I enjoy experimenting, building projects and learning from every challenge.'], action: 'View GitHub' },
        projects: { label: 'Featured project', title: "What I'm", titleAccent: 'building.', status: 'In progress', projectType: 'Personal project', name: 'Tree Maker', description: 'A published personal project built to explore ideas, learn by doing and keep improving through code.', stack: 'React · TypeScript · Vite', githubAction: 'More projects on GitHub' },
        skills: { label: 'Technologies', title: 'Learn.', titleAccent: 'Experiment.', titleEnd: 'Repeat.' },
        contact: { label: 'Contact', title: 'Let’s keep', titleAccent: 'in touch?', subtitle: "I'm focused on learning and open to meeting interesting people and projects." },
        footer: { phrase: 'Made in Leiria, with curiosity.', back: 'Back to top' },
    },
};

export const skills = ['React', 'TypeScript', 'JavaScript', 'Python'];