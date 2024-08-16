<template>
  <div class="fixed inset-x-0 z-40 shadow bg-white dark:bg-zinc-700 text-black-700 dark:text-white transition-colors">
    <div class="px-6 md:px-12 mx-auto max-w-screen-2xl h-16">
      <div class="flex justify-between items-center h-full">
        <!-- Left part -->
        <div class="flex items-center space-x-4">
          <!-- Logo + sitename -->
          <NuxtLink :to="localePath('/')">
            <BaseVisualFeedback class="flex items-center space-x-4">
            <img class="h-8 w-8" src="/favicon.ico" alt="logo"/>
            <BaseMediumText>{{ $t('base.sitename') }}</BaseMediumText>
            </BaseVisualFeedback>
          </NuxtLink>
        </div>
        <!-- Links (PC) -->
        <div class="md:flex hidden items-center space-x-4">
          <NuxtLink v-for="(item, index) in navigation" :key="index" :to="localePath(item.href)">
            <BaseVisualFeedback class="flex items-center h-12">
              <component :is="item.icon" class="w-6 h-6 mr-2"/>
              <BaseMediumText>{{ item.name }}</BaseMediumText>
            </BaseVisualFeedback>
          </NuxtLink>
        </div>
        <!-- Right part -->
        <div class="flex items-center space-x-4">
          <!-- Theme -->
          <button @click="changeTheme()" class="w-6 h-6">
            <Transition appear enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-75">
              <BaseVisualFeedback v-if="hydrated && $colorMode.preference">
                <ComputerDesktopIcon v-if="$colorMode.preference === 'system'" class="h-6 w-6"/>
                <SunIcon v-if="$colorMode.preference === 'light'" class="h-6 w-6"/>
                <MoonIcon v-if="$colorMode.preference === 'dark'" class="h-6 w-6"/>
              </BaseVisualFeedback>
            </Transition>
          </button>
          <div>
            <!-- Mobile menu btn -->
            <button class="block md:hidden">
              <BaseVisualFeedback>
                <Bars4Icon class="h-8 w-8"/>
              </BaseVisualFeedback>
            </button>
            <!-- PC lang btn -->
            <BaseNavbarLang/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Bars4Icon, ComputerDesktopIcon, SunIcon, MoonIcon, HomeIcon, HomeModernIcon } from '@heroicons/vue/24/solid'

const navigation = [
  { name: 'Index', href: '/', icon: HomeIcon },
  { name: 'page2', href: '/page2', icon: HomeModernIcon },
]

const hydrated = ref(false);

onMounted(() => {
  hydrated.value = true;
});

function changeTheme() {
  if (useColorMode().preference === 'system') {
    useColorMode().preference = 'light';
  } else if (useColorMode().preference === 'light') {
    useColorMode().preference = 'dark';
  } else if (useColorMode().preference === 'dark') {
    useColorMode().preference = 'system';
  }
}
</script>