<script lang="ts">
  export let columns = "60% 1fr";
  export let borderRadius = "8px 8px 0 0";
</script>

<section
  class="two-sided__section"
  style="border-radius: {borderRadius} ;grid-template-columns: {columns};"
>
  <slot name="left" />
  <slot name="right" />
</section>

<style>
  .two-sided__section {
    min-height: 100svh;
    overflow: hidden;
    display: grid;
    background: white;
  }
</style>
