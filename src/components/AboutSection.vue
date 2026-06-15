<script setup>
import { AUTHOR_FIRST_NAME } from '../../config'
</script>

<template>
  <section id="about" aria-labelledby="about-heading" class="py-16">
    <h2 id="about-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Over mij
    </h2>
    <p class="mt-4 leading-relaxed text-slate-500">
      Ik ben {{ AUTHOR_FIRST_NAME }}, full-stack developer met ruim tien jaar ervaring in PHP en Laravel.
      Ik werk zelfstandig: je hebt vanaf het eerste gesprek tot de oplevering rechtstreeks
      contact met de persoon die je project bouwt — geen accountmanagers of tussenlagen.
      Dat houdt de lijnen kort, de communicatie helder en de kwaliteit hoog. Of het nu
      gaat om een nieuwe webapplicatie of het doorontwikkelen van een bestaand systeem:
      ik denk mee, bouw degelijk en lever wat is afgesproken.
    </p>
  </section>
</template>
