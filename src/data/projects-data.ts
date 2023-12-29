import BarImage from '../assets/images/bar-screenshot.png';
import PortfolioImage from '../assets/images/portfolio-screenshot.png';
import BookAppImage from '../assets/images/book-app-screenshot.png';

export const projectsData = [
    {
        imageSrc: BookAppImage,
        title: 'Book Log App',
        description: 'This app is created for personal use. User can save book information by using Google Books API with memo.',
        technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Sass', 'Google Books API', 'Docker'],
        site: '',
        github: 'https://github.com/Reikasan/Book-app'
    },
    {
        imageSrc: BarImage,
        title: 'Webflow Sample Project',
        description: 'This is a sample project built with Webflow.',
        technologies: ['Webflow'],
        site: 'https://sample-bar-site.webflow.io/',
        github: ''
    },
    {
        imageSrc: PortfolioImage,
        title: 'Portfolio Website',
        description: 'This Website built with React.',
        technologies: ['React', 'Material UI', 'TypeScript', 'Sass'],
        site: 'localhost:3000',
        github: 'https://github.com/Reikasan/portfolio-2023'
    }
];

export const codePenData = [
    {
        title: 'Running Button Effect',
        html: `<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="mdXoYER" data-user="reikasan" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                <span>See the Pen <a href="https://codepen.io/reikasan/pen/mdXoYER">
                Running button effect</a> by Reika Akuzawa (<a href="https://codepen.io/reikasan">@reikasan</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`,
        technologies: ['HTML', 'CSS'],
    },
    {
        title: 'GSAP: Change Font opacity on Scroll',
        html: `<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="ZEqgema" data-user="reikasan" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/reikasan/pen/ZEqgema">
                    Change font opacity while scrolling with gsap</a> by Reika Akuzawa (<a href="https://codepen.io/reikasan">@reikasan</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`,
        technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    },
    {
        title: 'Typewriter Animation',
        html: `<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="PoVpyJd" data-user="reikasan" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                    <span>See the Pen <a href="https://codepen.io/reikasan/pen/PoVpyJd">
                    Typewriter Animation</a> by Reika Akuzawa (<a href="https://codepen.io/reikasan">@reikasan</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`,
        technologies: ['HTML', 'CSS', 'JavaScript'],
    }
];