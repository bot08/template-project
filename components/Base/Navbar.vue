<template>
  <div class="fixed inset-x-0 z-40 shadow bg-white dark:bg-zinc-700 text-black-700 dark:text-white transition-colors">
    <div class="px-6 md:px-8 mx-auto max-w-screen-2xl h-16">
      <div class="flex justify-between items-center h-full">
        <!-- Left part -->
        <div class="flex items-center space-x-4">
          <!-- Logo + sitename -->
          <img class="h-8 w-8" src="/favicon.ico" alt="logo"/>
          <BaseMediumText>{{ $t('base.sitename') }}</BaseMediumText>
          <!-- Links -->
          <div>
            
          </div>
        </div>
        <!-- Right part -->
        <div class="flex items-center space-x-4">
          <!-- Theme -->
          <Transition appear enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-75">
            <BaseVisualFeedback v-if="hydrated && $colorMode.preference" class="w-8 h-8 flex items-center">
              <button @click="changeTheme()">
                <ComputerDesktopIcon v-if="$colorMode.preference === 'system'" class="h-6 w-6"/>
                <SunIcon v-if="$colorMode.preference === 'light'" class="h-6 w-6"/>
                <MoonIcon v-if="$colorMode.preference === 'dark'" class="h-6 w-6"/>
              </button>
            </BaseVisualFeedback>
          </Transition>
          <!-- md+ text -->
          <div class="hidden md:block">
            MD+ text
          </div>
          <!-- Mobile menu btn -->
          <button class="block md:hidden">
            <BaseVisualFeedback>
              <Bars4Icon class="h-8 w-8"/>
            </BaseVisualFeedback>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Bars4Icon, ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

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