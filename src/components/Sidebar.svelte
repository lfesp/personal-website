<script>
  let readMore = false;
  let expanded = true;

  export let image;
</script>

{#if expanded}
  <div
    class="flex flex-col items-stretch relative lg:sticky lg:top-6 mb-6"
    hidden={!expanded}
  >
    <div class="flex justify-between pb-6">
      <h2>LIAM ESPARRAGUERA</h2>
      <button
        on:click={() => {
          expanded = !expanded;
        }}
        class="hover:text-neutral-300 lg:hidden">[close info]</button
      >
    </div>
    <div class="pb-6">
      <hr class="h-px bg-black border-0 mb-6" />
      <p>INFORMATION</p>
      <p class="indent-8">
        Liam Esparraguera is an engineer, designer, and technologist passionate
        about building interactive software that sparks joy and inspires human
        expression. He is currently studying Computer Science, Music, and HCI at
        Princeton University. Right now, he is helping build Warp, a modern
        terminal designed for teams. Previously, he has worked on engineering at
        MongoDB and served as founding engineer at a healthtech startup.
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
          Some of his interests are, in no particular order: human-computer
          interaction, music theory, typography, media theory, running,
          artificial intelligence, entrepreneurship, computer graphics,
          generative composition, interface design, jazz improvisation, computer
          music, decentralized software.
        </p>
      {/if}
    </div>
    <div class="pb-6">
      <hr class="h-px bg-black border-0 mb-6" />
      <div class="flex w-full">
        <p class="pr-16">NODES</p>
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
              >LinkedIn</a
            >
          </p>
          <p>
            <span class="pr-4">&#8594</span><a
              href="mailto:liame@princeton.edu"
              class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
              >Email</a
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
