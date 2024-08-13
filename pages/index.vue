<template>
  <div>
    <BaseCard>
      <div class="p-4">
        <BaseBigText>Large text -></BaseBigText>
        <BaseMediumText>Medium text -></BaseMediumText>
        <BaseNormalText>Base text -></BaseNormalText>
      </div>
    </BaseCard>
    <BaseCard>
      <div class="p-4">
        <BaseBigText>{{ $t('index.welcome') }} -><-</BaseBigText>
        <!-- Store Example -->
        <BaseNormalText>{{ $t('index.current_num') + numStore.num }}</BaseNormalText>
        <button @click="updateNumber">Num++</button>
      </div>
    </BaseCard>
    <BaseCard>
      <div class="p-4">
        <BaseBigText>{{ $t('index.locales') }}</BaseBigText>
        <button @click="setLocale('en')" class="block">English</button>
        <button @click="setLocale('uk')" class="block">Українська</button>
        <button @click="setLocale('ja')" class="block">日本語</button>
      </div>
    </BaseCard>
  </div>
</template>


<script setup>
const { setLocale } = useI18n()

definePageMeta({
  title: 'Index Page'
})

const numStore = useNumStore();

const updateNumber = () => {
  numStore.updNum(numStore.num+1);
};
</script>