<script setup>
const skillGroups = [
  {
    label: 'Backend',
    skills: ['PHP', 'Laravel', 'MySQL', 'Redis', "REST API's"],
  },
  {
    label: 'Frontend',
    skills: ['Vue 3', 'Inertia.js', 'Tailwind CSS', 'Livewire', 'Alpine.js'],
  },
  {
    label: 'Tooling',
    skills: ['Docker', 'Git'],
  },
]
</script>

<template>
  <section id="skills" aria-labelledby="skills-heading" class="py-16">
    <h2 id="skills-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Skills
    </h2>
    <div class="mt-6 space-y-6">
      <div v-for="group in skillGroups" :key="group.label">
        <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {{ group.label }}
        </h3>
        <ul class="mt-2 flex flex-wrap gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
