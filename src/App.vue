<script setup lang="ts">
    import {
        GIconArrowUp,
        GIconCall,
        GIconCamera,
        GIconFilter,
        GIconPegadaianCircle,
        GIconProfile,
        GIconShareFacebook
    } from './assets/IconsSource';
    import 
        GIcon
  from './components/GIcon';
</script>

<template>

    <GIcon :icon="GIconCall" size="sm"  weight="fill" />
    <GIcon :icon="GIconCall" size="lg" color="text-primary" weight="outline" />
    <GIcon :icon="GIconCamera" width="48" height="48" color="text-secondary" weight="outline" />
    <GIcon :icon="GIconCamera" width="48" height="48" color="text-secondary" weight="fill" />
    <GIcon :icon="GIconProfile" width="48" height="48" color="text-secondary" weight="outline" />
    <GIcon :icon="GIconProfile" width="48" height="48" color="text-secondary" weight="outline" />
    <GIcon :icon="GIconArrowUp" width="48" height="48" color="text-secondary" weight="outline" />
    <GIcon :icon="GIconPegadaianCircle" width="48" height="48" color="text-primary" weight="fill" />
    <GIcon :icon="GIconShareFacebook" width="48" height="48" color="text-primary" weight="outline" />



</template>

<style scoped>

.g-icon{
  color: green;
}

.g-icon-lg{
  width:64px;
  height:64px;
}

.g-icon-sm{
  width:20px;
  height:20px;
}

.g-icon-md{
  width:24px;
  height:24px;
}

.text-primary{
  color: limegreen;
}

.text-secondary{
  color: yellow;
}

</style>