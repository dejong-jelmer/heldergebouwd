<script setup>
import profileUrl from '../assets/me.webp'
import { AUTHOR_FULL_NAME } from '../../config'
</script>

<template>
  <section id="hero" aria-label="Introductie" class="flex flex-col items-center py-20 text-center sm:py-28">
    <img
      :src="profileUrl"
      :alt="`Portretfoto van ${AUTHOR_FULL_NAME}`"
      width="120"
      height="120"
      class="h-[120px] w-[120px] rounded-full border border-zinc-200 object-cover shadow-sm"
    />
    <h1 class="mt-6 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
      {{ AUTHOR_FULL_NAME }}
    </h1>
    <p class="mt-3 max-w-md text-lg text-slate-500">
      Freelance Laravel &amp; Vue developer — direct contact, geen overhead
    </p>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contact"
        class="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-sky-700"
      >
        Neem contact op
      </a>
      <a
        href="#projects"
        class="rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors duration-150 ease-in-out hover:border-sky-600 hover:text-sky-600"
      >
        Bekijk mijn werk
      </a>
    </div>
  </section>
</template>
