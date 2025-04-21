<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  values: {
    type: Array,
    required: true
  },
  speed: {
    type: Number,
    default: 0.5
  }
});

const container = ref(null);
const content = ref(null);

let animationFrame;
let position = 0;
let speed = props.speed; // base speed in pixels/frame
let currentSpeed = speed;
let targetSpeed = speed;
let repeatCount = 1;
let contentWidth = 0;
let gap = 0;

const repeatedValues = ref([...props.values]);

function setRepeatCount(count) {
  repeatCount = count;
  repeatedValues.value = Array(count).fill(props.values).flat();
}

const animate = () => {
  position -= currentSpeed;

  if (-position >= contentWidth + gap) {
    position += contentWidth + gap;
  }

  content.value.style.transform = `translateX(${position}px)`;

  // Smoothly adjust speed
  currentSpeed += (targetSpeed - currentSpeed) * 0.05;

  animationFrame = requestAnimationFrame(animate);
};

const pause = () => {
  targetSpeed = 0;
};

const resume = () => {
  targetSpeed = speed;
};

onMounted(() => {
  contentWidth = content.value.getBoundingClientRect().width;
  gap = parseFloat(getComputedStyle(content.value).gap.slice(0, -2));
  
  const availableWidth = container.value.getBoundingClientRect().width;
  let fullWidth = contentWidth;
  let count = 1;
  while (fullWidth < availableWidth) {
    fullWidth += gap + contentWidth;
    count++;
  }
  setRepeatCount(count + 1);

  container.value.addEventListener('mouseenter', pause);
  container.value.addEventListener('mouseleave', resume);
  animate();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  container.value.removeEventListener('mouseenter', pause);
  container.value.removeEventListener('mouseleave', resume);
});
</script>

<template>
  <div class="scrolling-container" ref="container">
    <div class="scrolling-blocks" ref="content">
      <div class="block" v-for="(value, index) in repeatedValues" :key="index">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scrolling-container {
  overflow: hidden;
  width: 100%;
}

.scrolling-blocks {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  will-change: transform;
}

.block {
  border: 1px solid $color-border;
  background-color: $color-surface;
  color: $color-muted;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.2);
    text-shadow: 0 0 1rem rgba(255, 255, 255, 0.5);
  }
}
</style>
