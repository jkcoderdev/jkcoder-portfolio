<template>
    <section class="about-section">
        <h1>About me</h1>
        <p>
            I'm a programmer who enjoys building things from the ground up. Mostly, I make websites, but I also have some experience with C++ and Python. I like working on both front-end and back-end code, and I often create my own tools and systems instead of relying on big frameworks. However, I also use Laravel with Vue for more complex web apps. I have the most experience with JavaScript.
        </p>
        <p>
            I enjoy experimenting with mathematical functions, fractals, audio, signal processing, and other interesting problems. I'm also interested in graphics programming, so I sometimes play around with WebGL. At one point, I even started coding a Minecraft clone in vanilla JavaScript. I began the project quite some time ago and learned a lot from it. It's a big project, and even though I'm not working on it right now, I plan to return to it someday.
        </p>
        <p>
            Music is another interest of mine. I play instruments such as piano and electric guitar, and I practice almost every day. I like experimenting with different effects for the electric guitar and discovering new tones. Recently, I started learning how to create my own music using audio software.
        </p>
        <p>
            Besides programming and music, I'm also into electronics. I like building circuits and learning how different electronic components work. Sometimes, I also use premade circuits, such as audio amplifiers. In the future, I might start working with microcontrollers as well. One of my goals is to build my own guitar effect pedals.
        </p>
    </section>
</template>

<style lang="scss" scoped>
.about-section {
    margin-top: $container-padding + $header-height;
    padding: 2rem 1rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 0.75rem;
    }

    p {
        line-height: 1.5;
        letter-spacing: 0.5px;

        &:not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
}
</style>
