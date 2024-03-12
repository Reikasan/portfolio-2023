import BarImage from '../assets/images/bar-screenshot.png';
import PortfolioImage from '../assets/images/portfolio-screenshot.png';
import BookAppImage from '../assets/images/book-app-screenshot.png';
import GameImage from '../assets/images/game-screenshot.png';
import CVImage from '../assets/images/cv-screenshot.png';

const baseURL = process.env.PUBLIC_URL;

export const projectsData = [
    {
        imageSrc: BookAppImage,
        title: 'Book Log App',
        description: 'This app is created for personal use. Users can save book information, along with memos, by utilizing the Google Books API.',
        technologies: ['Laravel', 'MySQL', 'Sass', 'Google Books API'],
        site: '',
        github: 'https://github.com/Reikasan/laravel-book-app'
    },
    {
        imageSrc: GameImage,
        title: 'TicTacToe Game',
        description: 'Enjoy my first game creation: Tic Tac Toe! Play solo or challenge a friend for some classic fun.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        site: 'https://reikasan.github.io/tictactoe/',
        github: 'https://github.com/Reikasan/tictactoe'
    },
    {
        imageSrc: CVImage,
        title: 'CV Template',
        description: 'My CV created by own template. This print-ready CV template, enabled to dynamically change powered by JavaScript.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        site: 'https://reikasan.github.io/cv/',
        github: 'https://github.com/Reikasan/cv'
    },
    {
        imageSrc: PortfolioImage,
        title: 'Portfolio Website',
        description: 'This Website built with React.',
        technologies: ['React', 'Material UI', 'TypeScript', 'Sass'],
        site: `${baseURL}#heroSection`,
        github: 'https://github.com/Reikasan/portfolio-2023'
    },
    {
        imageSrc: BarImage,
        title: 'Webflow Site',
        description: 'This is a sample project built with Webflow. This project solely using Webflow functions, but, of course, I can also create more complex websites with custom CSS and JavaScript.',
        technologies: ['Webflow'],
        site: 'https://sample-bar-site.webflow.io/',
        github: ''
    },
];