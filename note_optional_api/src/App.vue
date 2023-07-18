<template>
  <NoteOne :toggleOverlay="toggle" :showModal="showModal" />
</template>

<script>
import NoteOne from "./components/NoteOne.vue";

export default {
  components: {
    NoteOne,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    toggle() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
