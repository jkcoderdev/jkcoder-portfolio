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
  </section>

  <div class="divider"></div>

  <section class="projects-section">
    <h1>Projects</h1>

    <div class="projects">
        <div>
            <h2>Grid Runner</h2>
            <p>A complete remake of “Canvas Game Classic” with improved visuals and mechanics.</p>
            <em>HTML, CSS, JavaScript, PHP</em>
        </div>
        
        <div>
            <h2>My Old Portfolio</h2>
            <p>Just a portfolio like this one.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div>
            <h2>Canvas Game Classic</h2>
            <p>A simple “snake” inspired game where you eat food and get faster.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div>
            <h2>Music Visualizer</h2>
            <p>Working music player with visual effects in background.</p>
            <em>HTML, CSS, JavaScript</em>
        </div>
        
        <div>
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
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: $color-muted;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.25rem;
    }

    .category {
        margin: 0 auto;
        padding: 0.75rem 0.5rem;
        width: 480px;
        max-width: 100%;

        border-radius: 0.5rem;
        border: 1px solid $color-border;
        box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.08);
        background-color: $color-surface;
    }

    .category:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
}

.projects-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0.5rem;
    }

    em {
        color: $color-muted;
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > div {
            padding: 1rem;

            border-radius: 0.5rem;
            border: 1px solid $color-border;
            background-color: $color-surface;
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

        border-radius: 0.5rem;
        border: 1px solid $color-border;
        background-color: $color-surface;
        box-shadow: 0 0 0.25rem rgba(255, 255, 255, 0.08);

        .icon-box {
            padding: 0.25rem;

            border-right: 1px solid $color-border;

            .icon {
                width: 1.5rem;
                height: 1.5rem;

                display: block;

                color: $color-primary-dark;
                fill: currentColor;
            }
        }

        a {
            margin: 0 0.5rem;
            text-decoration: none;
            color: $color-muted;

            transition: 0.2s ease-in-out;

            &:hover {
                color: $color-text;
            }
        }
    }
}
</style>