<script>
  let readMore = false;
  let expanded = true;
</script>

{#if expanded}
  <div
    class="flex flex-col items-stretch relative lg:sticky lg:top-6 mb-6"
    hidden={!expanded}
  >
    <div class="flex justify-between pb-6">
      <h2 class="uppercase">Liam Esparraguera</h2>
      <button
        on:click={() => {
          expanded = !expanded;
        }}
        class="hover:text-neutral-300 lg:hidden">[close info]</button
      >
    </div>
    <div class="pb-6">
      <hr class="h-px bg-black border-0 mb-6" />
      <p class="uppercase">Information</p>
      <p class="">
        Liam Esparraguera is an engineer, technologist, and sometimes-musician
        passionate about building interfaces for human expression. Right now, he
        is helping build Warp, a modern terminal. He studied Computer Science
        and Music at Princeton University. Previously, he worked at MongoDB and
        as a founding engineer at a healthtech startup.
        {#if !readMore}
          <button
            on:click={() => (readMore = true)}
            class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
            >Read more...</button
          >
        {/if}
        {#if readMore}
          <button
            on:click={() => (readMore = false)}
            class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
            >Read less.</button
          >
        {/if}
      </p>
      {#if readMore}
        <p class="indent-8">
          Some of his interests are, in no particular order: creative coding,
          interaction techniques, music theory, typography, audio processing,
          media theory & software studies, computer graphics, generative
          composition, interface design, jazz improvisation, local-first
          software, and running for a brief but nontrivial amount of time.
        </p>
      {/if}
    </div>
    <div class="pb-6">
      <hr class="h-px bg-black border-0 mb-6" />
      <div class="flex w-full">
        <p class="pr-16 uppercase">Nodes</p>
        <nav>
          <p>
            <span class="pr-4">&#8594</span><a
              href="https://github.com/lfesp"
              target="_blank"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Github</a
            >
          </p>
          <p>
            <span class="pr-4">&#8594</span><a
              href="https://www.linkedin.com/in/liamesparraguera"
              target="_blank"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Linkedin</a
            >
          </p>
          <p>
            <span class="pr-4">&#8594</span><a
              href="https://x.com/liamesp"
              target="_blank"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Twitter</a
            >
          </p>
          <p>
            <span class="pr-4">&#8594</span><a
              href="https://www.are.na/liam-esparraguera-gf3u5kw5g7k/"
              target="_blank"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Are.na</a
            >
          </p>
          <p>
            <span class="pr-4">&#8594</span><a
              href="https://spinitron.com/WPRB/dj/167483/Liam"
              target="_blank"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Spinitron</a
            >
          </p>
        </nav>
      </div>
    </div>
    <hr class="h-px bg-black border-0 lg:hidden" />
  </div>
{:else}
  <div class="flex justify-between mb-2">
    <h2>LIAM ESPARRAGUERA</h2>
    <button
      on:click={() => {
        expanded = !expanded;
      }}
      class=" hover:text-neutral-300 hover:decoration-current"
      >[view info]</button
    >
  </div>
{/if}
