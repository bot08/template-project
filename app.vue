<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{ max: '5' }"/>
  </NuxtLayout>
</template>


<script setup>
const route = useRoute()
const { t, locale } = useI18n()

useHead({
  titleTemplate: (title) => `${title} - ${t('base.sitename')}`,
  title: () => route.meta.title,
  meta: [
    { name: 'description', content: route.meta.description },
    { name: 'theme-color', content: import.meta.client ? (() => useColorMode().value != 'dark' ? '#fff' : '#3f3f46') : '' }
  ],
  htmlAttrs: {
    lang: locale.value
  },
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-zinc-900 min-h-dvh transition-colors'
  },
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>