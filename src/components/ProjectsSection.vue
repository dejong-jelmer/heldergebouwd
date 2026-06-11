<script setup>
// TODO: vervang door echte projecten
const projects = [
  {
    title: 'Omdat We Reizen',
    description:
      'Eigen project: duurzame treinreizen door Europa — gebouwd met Laravel, Inertia.js en Vue 3. Van boekingsflow tot reisinhoud volledig zelf ontwikkeld.',
    tags: ['Laravel', 'Inertia.js', 'Vue 3', 'Tailwind CSS'],
    link: 'https://omdatwereizen.nl',
    linkLabel: 'Bekijk omdatwereizen.nl',
  },
  {
    // TODO: vervang door echte projecten
    title: 'Voorbeeldproject — webapplicatie',
    description:
      'Maatwerk webapplicatie voor een mkb-klant, van eerste schets tot productie. Inclusief beheeromgeving, API-koppelingen en geautomatiseerde tests.',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    link: null,
    linkLabel: null,
  },
  {
    // TODO: vervang door echte projecten
    title: 'Voorbeeldproject — API & integraties',
    description:
      'REST API met koppelingen naar externe systemen en een dashboard voor realtime inzicht. Gebouwd met oog voor performance en onderhoudbaarheid.',
    tags: ['PHP', "REST API's", 'Redis', 'Docker'],
    link: null,
    linkLabel: null,
  },
]
</script>

<template>
  <section id="projects" aria-labelledby="projects-heading" class="py-16">
    <h2 id="projects-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Projecten
    </h2>
    <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col rounded-xl border border-zinc-200 bg-zinc-100 p-5 transition-shadow duration-150 ease-in-out hover:shadow-md"
      >
        <h3 class="font-semibold text-slate-800">{{ project.title }}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {{ project.description }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="Gebruikte technologie">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs text-sky-700"
          >
            {{ tag }}
          </li>
        </ul>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors duration-150 ease-in-out hover:text-sky-700"
        >
          {{ project.linkLabel }}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </article>
    </div>
  </section>
</template>
