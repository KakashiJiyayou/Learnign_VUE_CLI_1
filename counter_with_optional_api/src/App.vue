<template>
  <main>
    <div class= "container">
      <h4> Counter </h4>
      <h1> {{ counter }} </h1>
      <button @click= "substraction" >-</button>
      <button @click= "increament">+</button>
    </div >
  </main>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increament () {
      this.counter = 1 + this.counter
    },

    substraction () {
      this.counter = this.counter - 1
    }
  }
}
</script>
