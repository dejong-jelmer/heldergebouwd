<script setup>
import { AUTHOR_FIRST_NAME } from '../../config'
</script>

<template>
  <section id="about" aria-labelledby="about-heading" class="py-16">
    <h2 id="about-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Over mij
    </h2>
    <div class="mt-4 space-y-4 leading-relaxed text-slate-500">
      <p>
        Ik ben {{ AUTHOR_FIRST_NAME }}, full-stack developer met negen jaar ervaring in PHP en
        Laravel. Ik vraag me bij bestaande code eerst af waarom iets is zoals het is, voordat
        ik het aanpas. Die gewoonte komt niet uit development. Voordat ik in 2017 developer
        werd, was ik tien jaar docent geschiedenis. Ik leerde anderen bronnen te wantrouwen,
        context te zoeken en een verhaal helder uit te leggen. In een codebase die al jaren
        meegaat, is dat de helft van het werk.
      </p>
      <p>
        De andere helft is verantwoordelijkheid nemen voor wat je bouwt. Sinds 2025 run ik
        een eigen reisorganisatie en heb ik het volledige boekingsplatform daarvoor gebouwd,
        van databaseontwerp tot CI/CD. Ik onderhoud het zelf, dus elke slordige keuze van
        toen kost mij nu tijd. Dat leert snel. Code die je over een jaar nog begrijpt, is
        uiteindelijk sneller dan code die vandaag af is.
      </p>
      <p>
        Werk je met mij, dan werk je rechtstreeks met de developer. Korte lijnen, geen
        tussenlagen.
      </p>
    </div>
  </section>
</template>
