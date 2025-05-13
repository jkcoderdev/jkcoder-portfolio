<script setup>
import GithubIcon from '@/icons/github.svg';
import CodePenIcon from '@/icons/codepen.svg';
import AtIcon from '@/icons/at.svg';

import EmailMaterialIcon from '@material-design-icons/svg/round/alternate_email.svg';
</script>

<template>
  <section class="start-section">
    <h1>Jan Kozaruk</h1>
    <h2>Full-Stack Developer</h2>

    <div class="socials">
        <GithubIcon class="icon" />
        <CodePenIcon class="icon" />
        <AtIcon class="icon" />
    </div>
  </section>

  <div class="divider"></div>

  <section class="skills-section">
    <h1>Skills & Expertise</h1>
    
    <div class="skills-container">
      <div class="skill-category">
        <h2>Languages</h2>
        <div class="skill-tags">
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS/SCSS</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">PHP</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Dart</span>
        </div>
      </div>

      <div class="skill-category">
        <h2>Frameworks</h2>
        <div class="skill-tags">
          <span class="skill-tag">Laravel</span>
          <span class="skill-tag">Vue</span>
          <span class="skill-tag">Flutter</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h2>Tools</h2>
        <div class="skill-tags">
          <span class="skill-tag">Git</span>
          <span class="skill-tag">VSCode</span>
          <span class="skill-tag">XAMPP</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">WSL</span>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="projects-section">
    <h1>Projects</h1>

    <div class="projects">
        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/jkcoder-portfolio-v2.png" alt="My Old Portfolio V2" />
            </div>
            <div class="content">
                <h2>My Old Portfolio V2</h2>
                <p>My second portfolio.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
            </div>
        </div>

        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/grid-runner.png" alt="Grid Runner Project" />
            </div>
            <div class="content">
                <h2>Grid Runner</h2>
                <p>A complete remake of "Canvas Game Classic" with improved visuals and mechanics.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
                <div class="tech-block">PHP</div>
            </div>
        </div>
        
        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/jkcoder-portfolio-v1.png" alt="My Old Portfolio V1" />
            </div>
            <div class="content">
                <h2>My Old Portfolio V1</h2>
                <p>My first portfolio.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
            </div>
        </div>
        
        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/canvas-game-classic.png" alt="Canvas Game Classic" />
            </div>
            <div class="content">
                <h2>Canvas Game Classic</h2>
                <p>A simple "snake" inspired game where you eat food and get faster.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
            </div>
        </div>
        
        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/music-visualizer.png" alt="Music Visualizer" />
            </div>
            <div class="content">
                <h2>Music Visualizer</h2>
                <p>Working music player with visual effects in background.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
            </div>
        </div>
        
        <div class="project-card">
            <div class="thumbnail">
                <img src="@/assets/fancy-login-page.png" alt="Fancy Login Page" />
            </div>
            <div class="content">
                <h2>Fancy Login Page</h2>
                <p>Login page design with animated background.</p>
                <div class="tech-block">HTML</div>
                <div class="tech-block">CSS</div>
                <div class="tech-block">JavaScript</div>
            </div>
        </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="contact-section">
    <h1>Contact me</h1>

    <div class="item">
        <div class="icon-box">
            <EmailMaterialIcon class="icon" />
        </div>

        <a href="mailto:kontakt@jkcoder.eu">kontakt@jkcoder.eu</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.divider {
    margin: 0 auto;
    width: 240px;
    height: 1px;
    background-color: $color-border;
}

.start-section {
    text-align: center;
    padding: 2rem 0;

    h1 {
        font-size: 4rem;
        font-weight: 900;
        letter-spacing: 1px;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: $color-primary-light;
    }

    .socials {
        margin: 0 auto;
        width: fit-content;
        display: flex;
        gap: 1rem;

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            color: $color-muted;
            fill: currentColor;
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &:hover {
                color: $color-text;
            }
        }
    }
}

.skills-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 2rem;
    }

    .skills-container {
        margin: 0 auto;
        max-width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .skill-category {
        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: $color-primary-light;
            margin-bottom: 0.75rem;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
        }

        .skill-tag {
            padding: 0 0.75rem;

            font-size: 0.95rem;
            line-height: 1.75rem;

            background-color: rgba($color-card, 0.75);
            color: rgba($color-text, 0.75);

            border-radius: 0.75rem;
            border: 1px solid $color-border;

            transition: all 0.3s ease;

            &:hover {
                color: $color-primary-light;
                border: 1px solid $color-primary-dark;
            }
        }
    }
}

.projects-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 2rem;
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .project-card {
        min-height: 180px;

        display: flex;

        background-color: $color-card;

        border-radius: 1rem;
        border: 1px solid $color-border;
        
        overflow: hidden;

        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            background-color: $color-card-hover;
            border-color: $color-primary;

            .thumbnail img {
                transform: scale(1.05);
            }
        }

        .thumbnail {
            width: 280px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
        }

        .content {
            flex: 1;
            padding: 1.5rem;
            text-align: left;

            h2 {
                font-size: 1.5rem;
                font-weight: 700;
                color: $color-primary-light;
                margin-bottom: 1rem;
            }

            p {
                margin-bottom: 1rem;
                line-height: 1.5;
                color: $color-text;
            }

            .tech-block {
                padding: 0.25rem 0.5rem;
                display: inline-block;
                font-style: normal;
                font-size: 0.9rem;
                background-color: rgba($color-primary, 0.1);
                color: $color-muted;
                border-radius: 0.25rem;

                &:not(:last-of-type) {
                    margin-right: 0.5rem;
                }
            }
        }
    }
}

.contact-section {
    padding: 2rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
    }

    .item {
        margin: 0 auto;
        width: 240px;
        max-width: 100%;

        display: flex;
        align-items: center;
        
        background-color: $color-card;

        border-radius: 1rem;
        border: 1px solid $color-border;

        .icon-box {
            padding: 0.5rem;
            border-right: 1px solid $color-border;

            .icon {
                width: 1.5rem;
                height: 1.5rem;

                display: block;

                color: $color-primary-light;
                fill: currentColor;
            }
        }

        a {
            margin: 0 1rem;
            padding: 0.5rem 0;

            text-decoration: none;
            color: $color-text;
            
            transition: 0.2s ease-in-out;

            &:hover {
                color: $color-primary-light;
            }
        }
    }
}
</style>