<template>
  <div class="fixed-footer">
    <tool-bars/>
    <div class="container">
      <div class="landing">
        <site-header/>
      </div>
      <nuxt/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import ToolBars from '~/components/toolbars/ToolBars';
import MyFooter from '~/components/footer/Footer';
import SiteHeader from '~/components/header/Header';

export default {
  components: {
    ToolBars,
    MyFooter,
    SiteHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/index";
@import "../assets/default";

</style>
