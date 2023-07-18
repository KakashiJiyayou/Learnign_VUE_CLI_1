<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p @click="toggleOverlay">x</p>
        <textarea v-model="newNote" />
        <button @click="addNote">Add Note</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="toggleOverlay">+</button>
      </header>
      <div class="cards-container">
        <div
          v-for="(note, i) in notes"
          :key="i"
          class="card"
          :style="{ backgroundColor: note.color }"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["showModal", "toggleOverlay"],

  data() {
    return {
      newNote: ref(""),
      notes: [],
    };
  },

  methods: {
    getRandomColor() {
      const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
      return color;
    },

    addNote() {
      this.notes.push({
        id: Math.floor(Math.random() * 100000),
        text: this.newNote,
        color: this.getRandomColor(),
        date: new Date(),
      });
      this.toggleOverlay();
      this.newNote = "";
    },
  },
};
</script>
