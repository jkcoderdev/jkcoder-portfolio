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
    tech: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
    screenshot: libraryManagerScreenshot,
    repo: 'https://github.com/jkcoderdev/library-manager',
    url: 'https://library-manager.jkcoder.eu'
  },
  {
    id: 'portfolio-v2',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: jkcoderPortfolioV2Screenshot,
    repo: 'https://github.com/jkcoderdev/jkcoder-portfolio-v2',
    url: 'https://portfolio-v2.jkcoder.eu'
  },
  {
    id: 'grid-runner',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio', 'Canvas API', 'PHP'],
    screenshot: gridRunnerScreenshot,
    repo: 'https://github.com/jkcoderdev/grid-runner',
    url: 'https://grid-runner.jkcoder.eu'
  },
  {
    id: 'porttolio-v1',
    name: 'My Old Portfolio V1',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    screenshot: jkcoderPortfolioV1Screenshot,
    repo: 'https://github.com/jkcoderdev/jkcoder-portfolio-v1',
    url: 'https://portfolio-v1.jkcoder.eu'
  },
  {
    id: 'canvas-game-classic',
    tech: ['JavaScript', 'Canvas API'],
    screenshot: canvasGameClassicScreenshot,
    repo: 'https://github.com/jkcoderdev/canvas-game-classic',
    url: 'https://canvas-game-classic.jkcoder.eu'
  },
  {
    id: 'music-visualizer',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio'],
    screenshot: musicVisualizerScreenshot,
    repo: 'https://github.com/jkcoderdev/music-visualizer',
    url: 'https://music-visualizer.jkcoder.eu'
  },
  {
    id: 'fancy-login-page',
    tech: ['HTML', 'CSS', 'JavaScript'],
    screenshot: fancyLoginPageScreenshot,
    repo: 'https://github.com/jkcoderdev/fancy-login-page',
    url: 'https://fancy-login-page.jkcoder.eu'
  },
];

export default projects;