<script lang="ts">
  import ProjectRow from "./ProjectRow.svelte";

  export let posts: any[] = [];

  let terms: string[] = [];
  let filteredPosts: any[] = [];

  $: filteredPosts = posts.filter(post => {
    const tagsText = post.tags ? post.tags.join() : "";
    const searchText = post.description.concat(tagsText);
    return terms.map(term => searchText.includes(term)).every(Boolean);
  });

  function toggleTag(tag: string) {
    if (!terms.includes(tag)) {
      terms.push(tag);
    } else {
      terms.splice(terms.indexOf(tag), 1);
    }
    terms = terms;
  }

  function removeTag(tag: string) {
    if (terms.includes(tag)) {
      terms.splice(terms.indexOf(tag), 1);
    }
    terms = terms;
  }
</script>

<div class="flex pb-6 items-center">
  <p class="mr-4">INDEX</p>
  {#each terms as term}
    <button
      class="px-1 border border-neutral-300 hover:bg-neutral-100 active:bg-neutral-200 mr-2 font-mono text-sm"
      on:click={() => removeTag(term)}
    >
      {term}<span class="pl-2 font-sans text-xs">&#10007</span>
    </button>
  {/each}
</div>

<ul class="w-full">
  {#each filteredPosts as post}
    <ProjectRow
      title={post.title}
      date={post.date}
      description={post.description}
      tags={post.tags}
      image={post.thumbnail.src}
      slug={post.slug}
      onClickTag={toggleTag}
      {terms}
    />
  {/each}
</ul>
