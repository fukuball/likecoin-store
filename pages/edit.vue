<template>
  <like-register-form :isEdit="isEdit"/>
</template>

<script>
import * as types from '@/store/mutation-types';
import LikeRegisterForm from '~/components/LikeRegisterForm';
import { mapGetters } from 'vuex';

export default {
  name: 'Edit',
  components: {
    LikeRegisterForm,
  },
  fetch({ store, redirect }) {
    if (!store.getters.getUserIsRegistered) {
      redirect('/register');
      return;
    }
    const title = 'Edit your LikeCoin store page';
    const subtitle = 'Edit your information';
    store.commit(types.UI_HEADER_UPDATE, {
      title,
      subtitle,
      icon: '',
    });
  },
  computed: {
    ...mapGetters({
      isEdit: 'getUserIsRegistered',
    }),
  },
};
</script>