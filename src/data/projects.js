import libraryManagerScreenshot from '@/assets/projects/library-manager.png';
import jkcoderPortfolioV2Screenshot from '@/assets/projects/jkcoder-portfolio-v2.png';
import gridRunnerScreenshot from '@/assets/projects/grid-runner.png';
import jkcoderPortfolioV1Screenshot from '@/assets/projects/jkcoder-portfolio-v1.png';
import canvasGameClassicScreenshot from '@/assets/projects/canvas-game-classic.png';
import musicVisualizerScreenshot from '@/assets/projects/music-visualizer.png';
import fancyLoginPageScreenshot from '@/assets/projects/fancy-login-page.png';

const projects = [
  {
    id: 'library-manager',
    name: 'Library Manager',
    shortDescription: 'A simple app for managing books in the library.',
    description: 'Library Manager is a simple app for managing books in the library. It allows for adding, editing and removing books. This is a school project made in collaboration with <a href="https://ra2nek.pl/" target="_blank">ra2nek</a>.',
    tech: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
    screenshot: libraryManagerScreenshot,
    repo: 'https://github.com/jkcoderdev/library-manager',
    url: 'https://library-manager.jkcoder.eu'
  },
  {
    id: 'portfolio-v2',
    name: 'My Old Portfolio V2',
    shortDescription: 'My second portfolio.',
    description: 'A personal portolio of mine, inspired by the Discord profile.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: jkcoderPortfolioV2Screenshot,
    repo: 'https://github.com/jkcoderdev/jkcoder-portfolio-v2',
    url: 'https://portfolio-v2.jkcoder.eu'
  },
  {
    id: 'grid-runner',
    name: 'Grid Runner',
    shortDescription: 'A complete remake of "Canvas Game Classic" with improved visuals and mechanics.',
    description: 'A complete remake of "Canvas Game Classic" with improved visuals and mechanics. This is my school project.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio', 'Canvas API', 'PHP'],
    screenshot: gridRunnerScreenshot,
    repo: 'https://github.com/jkcoderdev/grid-runner',
    url: 'https://grid-runner.jkcoder.eu'
  },
  {
    id: 'porttolio-v1',
    name: 'My Old Portfolio V1',
    shortDescription: 'My first portfolio.',
    description: 'My first actual portfolio, I made.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    screenshot: jkcoderPortfolioV1Screenshot,
    repo: 'https://github.com/jkcoderdev/jkcoder-portfolio-v1',
    url: 'https://portfolio-v1.jkcoder.eu'
  },
  {
    id: 'canvas-game-classic',
    name: 'Canvas Game Classic',
    shortDescription: 'A simple "snake" inspired game where you eat food and get faster.',
    description: 'A simple "snake" inspired game where you eat food and get faster.',
    tech: ['JavaScript', 'Canvas API'],
    screenshot: canvasGameClassicScreenshot,
    repo: 'https://github.com/jkcoderdev/canvas-game-classic',
    url: 'https://canvas-game-classic.jkcoder.eu'
  },
  {
    id: 'music-visualizer',
    name: 'Music Visualizer',
    shortDescription: 'Working music player with visual effects in background.',
    description: 'Working music player with visual effects in background. It\'s my experimental project, that introduced me to Web Audio API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio'],
    screenshot: musicVisualizerScreenshot,
    repo: 'https://github.com/jkcoderdev/music-visualizer',
    url: 'https://music-visualizer.jkcoder.eu'
  },
  {
    id: 'fancy-login-page',
    name: 'Fancy Login Page',
    shortDescription: 'Login page design with animated background.',
    description: 'Login page design with animated background.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: fancyLoginPageScreenshot,
    repo: 'https://github.com/jkcoderdev/fancy-login-page',
    url: 'https://fancy-login-page.jkcoder.eu'
  },
];

export default projects;