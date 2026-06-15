<script setup>
import { AUTHOR_FULL_NAME, SITE_NAME } from '../../config'
</script>

<template>
  <footer class="border-t border-zinc-200 py-8">
    <p class="text-center text-sm text-slate-400">
      &copy; 2025 {{ AUTHOR_FULL_NAME }} &middot; {{SITE_NAME}}
    </p>
  </footer>
</template>
