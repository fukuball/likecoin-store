<template>
  <div>
    <section id="likecoin-amount">
      <div :class="[isOpaque ? 'text-opaque' : '', 'title']">
        {{ $t('Edit.label.likeCoinAmount') }}
      </div>
      <div :class="[isOpaque ? 'text-opaque' : '', 'value']">
        {{ value || defaultValue }}
      </div>
    </section>
    <div v-if="linkHref && linkText" class="links">
      <div class="link what">
        <a
         :href="linkHref"
         target="_blank"
         rel="noopener noreferrer"
        >
          {{ linkText }}
        </a>
      </div>
    </div>
    <div v-else-if="linkText" class="links" @click="onClick">
      <div class="link what">
        <span> {{ linkText }} </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'like-coin-amount',
  props: ['value', 'isOpaque', 'linkHref', 'linkText'],
  data() {
    return {
      defaultValue: '0.0000',
    };
  },
  methods: {
    onClick() {
      this.$emit('onTextClick');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/index";

#likecoin-amount {
  display: flex;
  align-items: center;

  padding: 24px 0;

  border-radius: 8px;
  background-image: linear-gradient(238deg, $like-light-blue, $like-gradient-1);

  > .title {
    width: 128px;
    margin: 0 48px;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 16px;
    color: $like-dark-brown-1;
  }

  > .value {
    font-size: 56px;
    font-weight: 300;
    text-align: left;
    color: $like-gray-5;
  }

  .text-opaque {
    opacity: 0.3;
  }
}
.links {
  flex: 1;
  margin-top: -24px;
  align-self: flex-end;
  width: calc(33.33% - 40px);
  margin-right: 40px;

  .link {
    flex: 1;
    display: flex;
    font-size: 24px;
    padding: 8px;

    transition: opacity .2s ease-in-out;

    &.what {
      background-image: linear-gradient(63deg, $like-gradient-2 2%, $like-gradient-3 99%);
    }

    &:hover {
      opacity: 0.8;
    }

    > a, span {
      color: $like-white;
      cursor: pointer;
      text-decoration: underline;
      margin: auto;
      line-height: 32px;
    }
  }
}

@media (max-width: 1024px) {
  .links {
    margin-top: -20px;
  }
}

@media (max-width: 500px) {
  #likecoin-amount {
    > .value {
      font-size: 28px;
    }
  }
}
</style>
