<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">Vue Expression</h1>
    <hr />
    
    <h3>One way data binding</h3>
    <p>check <code>src/components/Expression</code></p>
    <!-- using vue expression -->
    <p>message :<code> {{message}} </code></p>
    <p>You can concate too :<code> {{message+' '+newMessage}} </code></p>
    <p>You can proccess it inside the expression :<code> {{message.split('').reverse().join('')}} </code></p>
    <img :src="loadImage" v-bind:alt="text" /> <br> 
    <a :href='imagelink' target="_blank">click me to move to other tab</a> 
    <!-- HAHAH AGAGAL CUY IMAGE NYA. caranya gimana ya -->
    <br>
    <br>
    <br>
    <h3>Two way data binding</h3>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'halo',
      newMessage: 'halo bandung',
      image : "../static/vue-logo.png",
      text : 'logo vue',
      imagelink: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
    }
  },
  computed: {
    loadImage() {
      return "../static/vue-logo.png"
    }
  }
}
</script>