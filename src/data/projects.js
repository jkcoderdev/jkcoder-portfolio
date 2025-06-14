import libraryManagerScreenshot from '@/assets/library-manager.png';
import jkcoderPortfolioV2Screenshot from '@/assets/jkcoder-portfolio-v2.png';
import gridRunnerScreenshot from '@/assets/grid-runner.png';
import jkcoderPortfolioV1Screenshot from '@/assets/jkcoder-portfolio-v1.png';
import canvasGameClassicScreenshot from '@/assets/canvas-game-classic.png';
import musicVisualizerScreenshot from '@/assets/music-visualizer.png';
import fancyLoginPageScreenshot from '@/assets/fancy-login-page.png';

const projects = [
  {
    name: 'Library Manager',
    shortDescription: 'A simple app for managing books in the library.',
    tech: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
    screenshot: libraryManagerScreenshot
  },
  {
    name: 'My Old Portfolio V2',
    shortDescription: 'My second portfolio.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: jkcoderPortfolioV2Screenshot
  },
  {
    name: 'Grid Runner',
    shortDescription: 'A complete remake of "Canvas Game Classic" with improved visuals and mechanics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    screenshot: gridRunnerScreenshot
  },
  {
    name: 'My Old Portfolio V1',
    shortDescription: 'My first portfolio.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: jkcoderPortfolioV1Screenshot
  },
  {
    name: 'Canvas Game Classic',
    shortDescription: 'A simple "snake" inspired game where you eat food and get faster.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: canvasGameClassicScreenshot
  },
  {
    name: 'Music Visualizer',
    shortDescription: 'Working music player with visual effects in background.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: musicVisualizerScreenshot
  },
  {
    name: 'Fancy Login Page',
    shortDescription: 'Login page design with animated background.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: fancyLoginPageScreenshot
  },
];

export default projects;