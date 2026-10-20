<template>
  <div class="site">
    <SiteHeader />
    <main class="site-main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import { useLocaleStore } from './stores/locale';
import { useThemeStore } from './stores/theme';
import { loadAdSense } from './utils/adsense';

const localeStore = useLocaleStore();
const themeStore = useThemeStore();
onMounted(() => {
  document.documentElement.lang = localeStore.locale;
  themeStore.setTheme(themeStore.theme);
  loadAdSense();
});
</script>