<script setup lang="ts">
import en from 'element-plus/dist/locale/en.mjs';
import ja from 'element-plus/dist/locale/ja.mjs';
import vi from 'element-plus/dist/locale/vi.mjs';

import { ELanguageCode } from './models/enums/shared.enum';

const { currentLanguage } = useLanguage();

const locale = computed(() => {
  switch (currentLanguage.value) {
    case ELanguageCode.English:
      return en;

    case ELanguageCode.Japanese:
      return ja;

    case ELanguageCode.Vietnamese:
      return vi;
  }
});
</script>

<template>
  <ElConfigProvider :locale="locale">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>
