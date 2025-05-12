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
    
    <div class="skills-grid">
      <div class="category">
          <h2>Languages</h2>
          <p>HTML, CSS/SCSS, JavaScript, PHP, Python, Dart</p>
      </div>

      <div class="category">
          <h2>Frameworks</h2>
          <p>Laravel, Vue, Flutter</p>
      </div>
      
      <div class="category">
          <h2>Tools</h2>
          <p>Git, VSCode, XAMPP, Node.js, WSL</p>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="projects-section">
    <h1>Projects</h1>

    <div class="projects">
        <div class="project-card">
            <h2>Grid Runner</h2>
            <p>A complete remake of "Canvas Game Classic" with improved visuals and mechanics.</p>
            <em>HTML, CSS, JavaScript, PHP</em>
        </div>
        
        <div class="project-card">
            <h2>My Old Portfolio</h2>
            <p>Just a portfolio like this one.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div class="project-card">
            <h2>Canvas Game Classic</h2>
            <p>A simple "snake" inspired game where you eat food and get faster.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div class="project-card">
            <h2>Music Visualizer</h2>
            <p>Working music player with visual effects in background.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div class="project-card">
            <h2>Fancy Login Page</h2>
            <p>Login page design with animated background.</p>
            <em>HTML, CSS, JavaScript</em>
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

    .skills-grid {
        display: grid;
        gap: 1.5rem;
        max-width: 100%;
        margin: 0 auto;
        
        @media (min-width: 640px) {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }

    .category {
        padding: 1.5rem;
        border-radius: 1rem;
        background-color: $color-card;
        border: 1px solid $color-border;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            background-color: $color-card-hover;
            border-color: $color-primary;
        }

        h2 {
            font-size: 1.25rem;
            font-weight: 600;
            color: $color-primary-light;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: $color-text;
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
        display: grid;
        gap: 1.5rem;
        
        @media (min-width: 640px) {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    .project-card {
        padding: 2rem;
        border-radius: 1rem;
        background-color: $color-card;
        border: 1px solid $color-border;
        transition: all 0.3s ease;
        text-align: left;

        &:hover {
            transform: translateY(-2px);
            background-color: $color-card-hover;
            border-color: $color-primary;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: $color-primary-light;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 1rem;
            line-height: 1.6;
            color: $color-text;
        }

        em {
            display: inline-block;
            color: $color-muted;
            font-style: normal;
            font-size: 0.9rem;
            padding: 0.25rem 0.5rem;
            background-color: rgba($color-primary, 0.1);
            border-radius: 0.5rem;
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
        border-radius: 1rem;
        background-color: $color-card;
        border: 1px solid $color-border;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            border-color: $color-primary;
            background-color: $color-card-hover;
        }

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
