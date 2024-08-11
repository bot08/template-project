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
        <BaseBigText>Also test card -><-</BaseBigText>
        <!-- Store Example -->
        <BaseNormalText>Current Number: {{ numStore.num }}</BaseNormalText>
        <button @click="updateNumber" class="active:scale-90 transition-transform">Num++</button>
      </div>
    </BaseCard>
  </div>
</template>


<script setup>
definePageMeta({
  title: 'Index Page'
})

const numStore = useNumStore();

const updateNumber = () => {
  numStore.updNum(numStore.num+1);
};
</script>