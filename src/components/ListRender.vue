<template>
  <div>
    <h1 class="mb-5" style="font-weight: lighter; color: #47b784;">List Rendering</h1>
    <hr />

    <div class="lead text-muted">
      Check the
      <code>src/components/ListRendering.vue</code> file
    </div>

    <div class="my-5">
      <input
        type="text"
        v-on:keyup.enter="pushToItems"
        class="form-control"
        placeholder="This input will listen anything you typed"
      />
      <br />
      <p>Below are the items in items array:</p>
      <ul v-for="item in items" :key="item">
        <li>{{item}}</li>
      </ul>
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
      text: "",
      items: []
    };
  },

  methods: {
    clickHandler() {
      this.show = !this.show;
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
      this.newMessage = event.target.value;
    },
    pushToItems(event) {
      if (event.target.value) {
        this.items.push(event.target.value);
        event.target.value = ''
      }
    }
  }
};
</script>
