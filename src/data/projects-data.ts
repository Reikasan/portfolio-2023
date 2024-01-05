import BarImage from '../assets/images/bar-screenshot.png';
import PortfolioImage from '../assets/images/portfolio-screenshot.png';
import BookAppImage from '../assets/images/book-app-screenshot.png';

const baseURL = process.env.PUBLIC_URL;

export const projectsData = [
    {
        imageSrc: BookAppImage,
        title: 'Book Log App',
        description: 'This app is created for personal use. Users can save book information, along with memos, by utilizing the Google Books API.',
        technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Sass', 'Google Books API', 'Docker'],
        site: '',
        github: 'https://github.com/Reikasan/Book-app'
    },
    {
        imageSrc: BarImage,
        title: 'Webflow Site',
        description: 'This is a sample project built with Webflow. This project solely using Webflow functions, but, of course, I can also create more complex websites with custom CSS and JavaScript.',
        technologies: ['Webflow'],
        site: 'https://sample-bar-site.webflow.io/',
        github: ''
    },
    {
        imageSrc: PortfolioImage,
        title: 'Portfolio Website',
        description: 'This Website built with React.',
        technologies: ['React', 'Material UI', 'TypeScript', 'Sass'],
        site: `${baseURL}#heroSection`,
        github: 'https://github.com/Reikasan/portfolio-2023'
    }
];