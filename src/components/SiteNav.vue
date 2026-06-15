<script setup>
import { SITE_NAME } from '../../config'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Over mij' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projecten' },
  { id: 'contact', label: 'Contact' },
]

const activeId = ref('hero')
const isMenuOpen = ref(false)
let observer = null

function closeMenu() {
  isMenuOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

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

  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <nav
    aria-label="Hoofdnavigatie"
    class="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur"
  >
    <div class="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
      <a href="#hero" class="text-sm font-semibold text-slate-800 transition-colors duration-150 ease-in-out hover:text-sky-600">
        {{SITE_NAME}}
      </a>

      <!-- Desktop navigation -->
      <ul class="hidden items-center gap-1 sm:gap-2 md:flex">
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

      <!-- Mobile hamburger button -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors duration-150 ease-in-out hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Navigatiemenu sluiten' : 'Navigatiemenu openen'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="absolute inset-x-0 top-full border-t border-zinc-200 bg-white shadow-sm md:hidden"
      >
        <ul class="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-3">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              :aria-current="activeId === link.id ? 'true' : undefined"
              class="block rounded-md px-3 py-2 text-sm transition-colors duration-150 ease-in-out"
              :class="
                activeId === link.id
                  ? 'font-semibold text-sky-600'
                  : 'text-slate-600 hover:bg-zinc-50 hover:text-slate-800'
              "
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
