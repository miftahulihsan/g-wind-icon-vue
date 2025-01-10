<script setup lang="ts">
import { iconCall, iconCamera } from './assets/IconsSource';
import { GIcon } from './components/GIcon';


</script>

<template>

  <GIcon :icon="iconCall" size="sm"  color="text-primary"  weight="fill"/>
  <GIcon :icon="iconCall" size="lg"  color="text-primary" weight="outline"/>
  <GIcon :icon="iconCamera" width="48" height="48"  color="text-secondary" weight="outline"/>
  <GIcon :icon="iconCamera" width="48" height="48"  color="text-secondary" weight="fill"/>
  
</template>

<style scoped>

</style>
