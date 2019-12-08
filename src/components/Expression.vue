<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">Vue Expression</h1>
    <hr />
    <!-- <h3>One way data binding</h3> -->
    <p>check <code>src/components/Expression</code></p>
    <!-- using vue expression -->
    <p>message :<code> {{message}} </code></p>
    <p>You can concate too :<code> {{message+' '+newMessage}} </code></p>
    <p>You can proccess it inside the expression :<code> {{message.split('').reverse().join('')}} </code></p>
    <!-- later use this contoh again buat simulasi computed property -->
    
    <!-- <h3>Two way data binding</h3> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'this is from anywhere else',
      newMessage: 'and we join it this way'

    }
  }
}
</script>