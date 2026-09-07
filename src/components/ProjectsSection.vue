<script setup>
import { AUTHOR_FIRST_NAME } from '../../config'

const projects = [
  {
    title: 'Omdat We Reizen',
    description:
      'Duurzame treinreizen door Europa. Sinds 2025 mijn eigen reisorganisatie, met een boekingsplatform dat ik zelf bouw en onderhoud: van databaseontwerp en boekingsflow tot design en CI/CD. Gebouwd met Laravel, Inertia.js en Vue.js.',
    tags: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS'],
    link: 'https://omdatwereizen.nl',
    linkLabel: 'Duurzame treinreizen op omdatwereizen.nl',
  },
  {
    title: `Jelmer — Fotografie`,
    description:
      'Eigen fotografieportfolio: een Instagram-achtige grid met PhotoSwipe-lightbox en foto-series. Statisch gebouwd met Astro, geen CMS of backend, content beheren is simpelweg een bestand toevoegen en pushen.',
    tags: ['Astro', 'Tailwind CSS', 'PhotoSwipe', 'Cloudflare'],
    link: 'https://jelmerfoto.nl',
    linkLabel: 'Bekijk de fotografie op jelmerfoto.nl',
  },
]

// Work done in employment. The code is not public, so these are descriptive cases without a link.
const cases = [
  {
    title: 'Verkeerstelematica',
    role: 'Backend developer, 2019 tot 2024',
    description:
      'Een platform dat telematicadata uit uiteenlopende bronnen binnenhaalt en ontsluit via een REST API. Elke nieuwe koppeling kwam met een eigen protocol: soms Redis, soms RabbitMQ, soms gewoon HTTP. De verleiding was om per integratie iets te bouwen dat snel werkte. Ik koos ervoor de telematicamodule op te zetten rond één interface met verwisselbare transportlagen, zodat een nieuwe bron geen nieuwe code in de kern betekende. Dat kostte in het begin meer tijd, maar elke volgende integratie was daarna vooral een adapter en configuratie, geen verbouwing. Dezelfde lijn trok ik door in een meertalig contentplatform met een eigen service layer, en in een Livewire-ticketsysteem voor het supportteam. We werkten in een team van developers, UI/UX en marketing, in tweewekelijkse sprints met feature branches, PR-reviews en automatische linting. Code die door een review moet, schrijf je anders dan code die alleen jij ziet.',
    tags: ['Laravel', 'REST API', 'SOLID', 'Redis', 'RabbitMQ', 'Livewire'],
  },
  {
    title: 'Telecom- en callcentersoftware',
    role: 'Developer, 2017 tot 2019',
    description:
      'Mijn eerste developerbaan, direct na het onderwijs. Callcenters draaiden hun campagnes op belscripts: teksten met een keuzeflow erin, die het telefoongesprek stuurde en de antwoorden opsloeg. Die bouwde ik in HTML, PHP en JavaScript, en ik maakte er integraties bij die tijdens het gesprek live data ophaalden. Denk aan energieprijzen, op basis van het adres dat net was ingevuld. Daarnaast loste ik issues op in de bestaande Java-applicatie die lokaal bij klanten draaide, via SSH op de server of door de pc van de klant over te nemen. En ik werkte aan de opvolger daarvan, een webversie in Laravel en Vue, een traject dat nog liep toen ik vertrok. Ik kwam uit het onderwijs en moest me redden in code van een ander. Dat is precies waar ik het meeste heb geleerd.',
    tags: ['Laravel', 'Vue', 'MySQL', "API's"],
  },
]
</script>

<template>
  <section id="projects" aria-labelledby="projects-heading" class="py-16">
    <h2 id="projects-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Projecten
    </h2>

    <h3 class="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
      Eigen werk
    </h3>
    <div class="mt-2 grid gap-4 sm:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col rounded-xl border border-zinc-200 bg-zinc-100 p-5 transition-shadow duration-150 ease-in-out hover:shadow-md"
      >
        <h4 class="font-semibold text-slate-800">{{ project.title }}</h4>
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
          rel="noopener"
          class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors duration-150 ease-in-out hover:text-sky-700"
        >
          {{ project.linkLabel }}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </article>
    </div>

    <h3 class="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500">
      In loondienst
    </h3>
    <div class="mt-2 space-y-4">
      <article
        v-for="item in cases"
        :key="item.title"
        class="rounded-xl border border-zinc-200 bg-zinc-100 p-5"
      >
        <h4 class="font-semibold text-slate-800">{{ item.title }}</h4>
        <p class="mt-1 text-xs text-slate-500">{{ item.role }}</p>
        <p class="mt-3 text-sm leading-relaxed text-slate-500">
          {{ item.description }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="Gebruikte technologie">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs text-sky-700"
          >
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
