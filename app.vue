<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{ max: '5' }"/>
  </NuxtLayout>
</template>


<script setup>
const route = useRoute()

useHead({
  titleTemplate: (title) => `${title} - SiteName`,
  title: () => route.meta.title,
  meta: [
    { name: 'description', content: route.meta.description },
    { name: 'theme-color', content: import.meta.client ? (() => useColorMode().value != 'dark' ? '#fff' : '#3f3f46') : '' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-zinc-900 min-h-dvh transition-colors'
  },
  link: [
    //{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' }
  ]
})
</script>