<template>
    <div class="register">
        <h2>Stay up to date with Ryan's latest releases!</h2>
        <form v-on:submit.prevent="register">
            <p>Create an account.</p>
            <input v-model="name" placeholder="First and Last Name"><br/>
            <input v-model="email" placeholder="Email Address"><br/>
            <input type="password" v-model="password" placeholder="Password"><br/>
            <button type="submit">Register</button>
        </form>
        <p class="error">{{registerError}}</p>
    </div>
</template>

<script>
 export default {
   name: 'Register',
   data () {
     return {
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
    created: function() {
        this.$store.dispatch('setActiveTab', 'register');
    },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
            email: this.email,
            password: this.password,
            name: this.name,
       });
     }
   }
 }
</script>

<style scoped>

form input {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #333333;
    margin: 5px;
    padding: 5px;
    /* margin-right: 5em; */
}

form [type="submit"] {
    margin-top: 1em;
    border: none;
    color: white;
    padding: 10px 10px;
    text-decoration: none;
    cursor: pointer;
    background-color:  	#A51216;
    width: 150px;
}

</style>