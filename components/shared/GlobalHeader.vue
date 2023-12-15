
import type ThemeChangeVue from '../system/ThemeChange.vue';

import type { Light } from 'three';
<script setup lang="ts">
const colorMode = useColorMode();
const themes = ["light", "dark"];
</script>
<template>
  <div class="navbar bg-base-100">
    <h1 class="flex-1 text-3xl font-bold">
      NuxtJS daisyUI TreeJS
    </h1>
    <SystemThemeChange />
  </div>
</template>