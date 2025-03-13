// Image imports
import project1 from "./img/farm-webpage.png";
import project2 from "./img/desktop-design.jpg";
import project3 from "./img/backroads-app.png";
import project4 from "./img/guess-the-word.png";
import project5 from "./img/unplugged-responsive-site.png";
import project6 from "./img/sticky-notes-app.png";
import project7 from "./img/rogue-pickings.png";

export const projects = [
    {
        id: 1,
        href: "https://www.twohandsfarmmaine.com/",
        image: project1,
        title: "Two Hands Farm",
        info: "A simple, responsive website created with the client's CMS, allowing easy updates to the store or content.",
        skills: "Customized CSS/HTML",
        tools: "Squarspace",
    },
    {
        id: 2,
        href: "https://vanesa5.github.io/news-webpage/",
        image: project2,
        title: "News Homepage",
        info: "The webpage is a news homepage designed to display various news articles and categories in a clean, responsive layout. It aims to provide easy access to the latest news and popular topics.",
        skills: "HTML, CSS, JavaScript, Git",
        tools: "Responsive Design, GitHub",
    },
    {
        id: 3,
        href: "https://backroads-app-vgp.netlify.app/",
        image: project3,
        title: "Backroads App ",
        info: "The Backroads App webpage features a clean, modern layout with a hero section, a navigation bar, and a grid-based tour showcase. It is visually appealing, easy to navigate, and optimized for a seamless user experience across devices. ",
        skills: "React.js, HTML, CSS, JavaScript, Git ",
        tools: " VSCode, GitHub, Netlify ",
    },
    {
        id: 4,
        href: "https://vanesa5.github.io/guess-the-word/",
        image: project4,
        title: "Guess the Word Game",
        info: "Players guess the word by entering one letter at a time. If the player guesses all the letters correctly before they use up their allotted guesses, they win!",
        skills: "Manipulate the DOM, JavaScript, Git",
        tools: "GitHub",
    },
    {
        id: 5,
        href: "https://vanesa5.github.io/206-unplugged",
        image: project5,
        title: "Unplugged",
        info: "A 3-page responsive website from a design comp that adapts to mobile, tablet, and desktop screens.",
        skills: "CSS3, Flexbox, HTML5, Media Queries, Responsive Typography",
        tools: "GitHub, Photoshop",
    },
    {
        id: 6,
        href: "https://78cd1o.csb.app/",
        image: project6,
        title: "Sticky Note App",
        info: "Create an interactive app that will let users create “sticky notes” on their computer to keep track of to-do items.",
        skills: "React, ES6, JSX, Managing data flow, Manipulate the DOM, Componets",
        tools: "CodeSandbox",
    },
    {
        id: 7,
        href: "https://vanesa5.github.io/rogue_pickings/",
        image: project7,
        title: "Responsive Rogue Pickings",
        info: "A simple informative home page transformed from static to responsive, making it look great on any device size.",
        skills: "CSS3, Flexbox, HTML5, Media Queries, Responsive Typography",
        tools: "GitHub",
    },
];

export const tools = [
    { id: 1, icon: "fa-brands fa-chrome", info: "Chrome DevTools", text: " " },
    {
        id: 2,
        icon: "fa-brands fa-square-github",
        info: "GitHub Pages",
        text: " ",
    },
    { id: 3, icon: "photoshop", info: "Photoshop", text: "Ps" },
    { id: 4, icon: "fa-brands fa-npm", info: "npm", text: " " },
    { id: 5, icon: "fa-brands fa-squarespace", info: "Squarespace", text: " " },
    { id: 6, icon: "fa-brands fa-wix", info: "Wix", text: " " },
    { id: 7, icon: "photoshop", info: "VSCode", text: "VSCode" },
    {
        id: 8,
        icon: "fa-brands fa-wordpress-simple",
        info: "WordPress",
        text: " ",
    },
];

// Skills
export const skills = [
    { id: 1, icon: "fa-brands fa-github ", info: "GitHub", text: " " },
    { id: 2, icon: "fa-brands fa-js", info: "Vanilla JavaScript", text: " " },
    { id: 3, icon: "fa-brands fa-css3", info: "CSS3", text: " " },
    { id: 4, icon: "fa-brands fa-html5", info: "HTML5", text: " " },
    {
        id: 5,
        icon: "fa-solid fa-terminal",
        info: "Git",
        text: " ",
    },
    { id: 6, icon: "fa-brands fa-react", info: "React", text: " " },
    { id: 7, icon: "jsx", info: "JavaScript XML", text: "JSX" },
    {
        id: 8,
        icon: "fa-solid fa-mobile-screen-button",
        info: "Media Queries",
        text: " ",
    },
    {
        id: 9,
        icon: "fa-sharp fa-solid fa-code-branch",
        info: "Version Control ",
        text: " ",
    },
    { id: 10, icon: "fa-solid fa-table-cells", info: "Flexbox", text: " " },
    { id: 11, icon: "fa-regular fa-window-maximize", info: "API's", text: " " },
    { id: 12, icon: "fa-regular fa-file", info: "ES6", text: " " },
    {
        id: 13,
        icon: "fa-solid fa-sitemap",
        info: "Managing Data Flow",
        text: " ",
    },
    {
        id: 14,
        icon: "fa-regular fa-folder-open",
        info: "FTP + Web Hosting",
        text: " ",
    },
    { id: 15, icon: " ", info: " ", text: " " },
    { id: 16, icon: " ", info: " ", text: " " },
    { id: 17, icon: " ", info: " ", text: " " },
];

// Social Links
export const socialLinks = [
    { id: 1, href: " https://github.com/vanesa5", icon: "fa-brands fa-github" },
    { id: 2, href: "https://twitter.com/vanes__a", icon: "fab fa-twitter" },
    {
        id: 3,
        href: "https://www.linkedin.com/in/vanesa-garcia-63baa3234/",
        icon: "fa-brands fa-linkedin-in",
    },
];

// Page Links
export const pageLinks = [
    { id: 1, href: "#projects", text: "Projects", class: " " },
    { id: 2, href: "#skills", text: "Skills", class: " " },
    { id: 3, href: "#about", text: "About", class: " " },
    { id: 4, href: "#contact-info", text: "Contact Me", class: "contact-link" },
];
