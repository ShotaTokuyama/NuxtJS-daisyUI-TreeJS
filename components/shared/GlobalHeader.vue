
import type ThemeChangeVue from '../system/ThemeChange.vue';

import type { Light } from 'three';
<script setup lang="ts">
const colorMode = useColorMode();
const themes = ["light", "dark"];
</script>
<template>
  <header class="navbar bg-base-100 justify-center mb-20">
    <div class="container">
      <h1 class="flex-1 text-3xl font-bold">
        NuxtJS daisyUI TreeJS
      </h1>
      <SystemThemeChange />
    </div>
  </header>
</template>