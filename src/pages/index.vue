<script setup lang="ts">
import { ERole } from '@/models/enums/auth.enum';

definePageMeta({
  layout: 'default',
  middleware: 'auth-middleware',
  requiresAuth: false,
  roles: [ERole.Admin, ERole.Moderator, ERole.SuperAdmin, ERole.User],
  title: 'Home',
});
</script>

<template>
  <div>Codebase Nuxt 3</div>
</template>
