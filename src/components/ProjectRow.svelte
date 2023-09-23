<script>
  export let title;
  export let description;
  export let date;
  export let image;
  export let slug;
  export let tags;
  export let onClickTag;
  export let terms;
</script>

<hr class="h-px bg-black border-0" />
<article
  class="w-full py-6 overflow-hidden group flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4"
>
  {#if image}
    <img
      src={image}
      alt=""
      class="w-full sm:w-2/5 object-cover filter grayscale group-hover:grayscale-0 duration-75"
    />
  {/if}
  <div class="flex-1">
    <div class="pb-6 flex space-x-6 justify-between sm:justify-start">
      <p class="w-1/2 uppercase">
        <a
          href={`/projects/${slug}/`}
          class="underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
          >{title}</a
        >
      </p>
      <p>
        <time datetime={date.toISOString()}>
          {date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
          })}
        </time>
      </p>
    </div>
    <div
      class="flex flex-wrap space-x-0 sm:space-x-6 justify-between sm:justify-start"
    >
      <p class="w-full sm:w-1/2 pb-6 sm:pb-0">{description}</p>
      <div class="flex-1">
        <ul class="flex justify-start flex-wrap">
          {#if tags}
            {#each tags as tag, idx}
              <li>
                <button
                  on:click={() => onClickTag(tag)}
                  class="text-neutral-300 hover:text-neutral-900 active:text-neutral-200 font-mono mr-1 cursor-pointer"
                  class:text-black={terms.includes(tag)}
                >
                  {`#${tag.toLowerCase()}${idx === tags.length - 1 ? "" : ","}`}
                </button>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
  </div>
</article>
