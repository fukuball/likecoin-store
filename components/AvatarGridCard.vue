<template>
  <div class="avatar-grid-card">
    <div>

      <img :src="avatar" />
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>

    </div>
  </div>
</template>


<script>
export default {
  name: 'avatar-grid-card',
  props: {
    avatar: String,
    title: String,
    subtitle: String,
  },
};
</script>


<style lang="scss" scoped>
@import "~assets/index";

.avatar-grid-card {
  width: 100%;
  height: 100%;
  margin: auto;

  > div {
    width: inherit;
    height: inherit;
    padding: 18px 8px 32px;

    background-color: white;

    border-radius: 6px;

    > * {
      display: block;
    }

    img {
      width: 112px;
      height: 112px;
      margin: auto;

      border-radius: 50%;
      background-color: #EEE;

      & + * {
        margin-top: 16px;
      }
    }

    h1 {
      line-height: 1.35;
      font-size: 20px;
      font-weight: 600;
    }

    h2 {
      color: #737373;
      line-height: 1.375;
      font-size: 16px;
      font-weight: 300;
    }

    h1,
    h2 {
      text-align: center;
    }
  }
}
</style>
