<template>
  <div>
    <h1 class="mb-5" style="font-weight: lighter; color: #47b784;">Conditional Rendering</h1>
    <hr />

    <div class="lead text-muted">
      Check the
      <code>src/components/ConditionalRendering.vue</code> file
    </div>

    <div class="my-5">
      <button @click="clickHandler" class="btn btn-outline-success">Click me</button>
      <br>
      <p v-show="show">You know what? I'm using <code>v-show</code></p>
    </div>

    <div class="my-5">
      <p>
        You typed : 
        <code>{{newMessage}}</code>
      </p>
      <p v-if="newMessage.length <= 0">Type something...</p>
      <p v-else-if="newMessage.length < 10">Try type longer</p>
      <p v-else-if="newMessage.length >= 10 && newMessage.length < 20"> Well, it's long enough</p>

      <p v-else>Wow wow.. hey dude you need to stop. Its already too long</p>
      <input
        type="text"
        v-on:input="changeText"
        class="form-control"
        placeholder="This input will listen anything you typed"
      />
      <br>
      
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Method",

  data() {
    return {
      newMessage: "",
      show: false,
      text: ""
    };
  },

  methods: {
    clickHandler() {
      this.show = !this.show
    },

    pressEnter() {
      this.logs.unshift(
        new Date().toISOString().slice(11, 19) + " - Enter key has been pressed"
      );
    },

    pressSpace() {
      this.logs.unshift(
        new Date().toISOString().slice(11, 19) + " - Space key has been pressed"
      );
    }, 
    changeText(event) {
      this.newMessage = event.target.value
    }
  }
};
</script>
