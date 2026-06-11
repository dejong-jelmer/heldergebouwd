<template>
  <section id="contact" aria-labelledby="contact-heading" class="py-16">
    <h2 id="contact-heading" class="text-2xl font-semibold tracking-tight text-slate-800">
      Contact
    </h2>
    <p class="mt-4 text-slate-500">
      Interesse? Stuur een mail of neem contact op via GitHub.
    </p>

    <div class="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <!-- TODO: email invullen -->
      <span class="font-semibold text-slate-800">hallo@heldergebouwd.nl</span>
      <a
        href="https://github.com/dejong-jelmer"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors duration-150 ease-in-out hover:border-sky-600 hover:text-sky-600"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
            1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
            1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0
            3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01
            8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
          />
        </svg>
        GitHub
      </a>
    </div>

    <aside
      aria-label="Reizen per trein"
      class="mt-10 rounded-r-lg border-l-4 border-sky-400 bg-sky-50 p-5"
    >
      <h3 class="font-semibold text-slate-800">Reizen per trein?</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-500">
        Naast development organiseer ik duurzame treinreizen door Europa via Omdat We Reizen.
      </p>
      <a
        href="https://omdatwereizen.nl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors duration-150 ease-in-out hover:text-sky-700"
      >
        omdatwereizen.nl
        <span aria-hidden="true">&rarr;</span>
      </a>
    </aside>
  </section>
</template>
