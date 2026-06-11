<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Over mij' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projecten' },
  { id: 'contact', label: 'Contact' },
]

const activeId = ref('hero')
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    // Sectie telt als actief zodra hij het middelste deel van het scherm raakt
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  )

  for (const { id } of links) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav
    aria-label="Hoofdnavigatie"
    class="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur"
  >
    <div class="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
      <a href="#hero" class="text-sm font-semibold text-slate-800 transition-colors duration-150 ease-in-out hover:text-sky-600">
        heldergebouwd.nl
      </a>
      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            :aria-current="activeId === link.id ? 'true' : undefined"
            class="rounded-md px-2 py-1 text-sm transition-colors duration-150 ease-in-out sm:px-3"
            :class="
              activeId === link.id
                ? 'font-semibold text-sky-600'
                : 'text-slate-500 hover:text-slate-800'
            "
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
