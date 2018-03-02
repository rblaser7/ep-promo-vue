<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 export default {
     name: 'App',
     components: { AppHeader, AppFooter },
 }
</script>

<style>

html {
    margin: 0;
}

.header {
    background-color: #333333;
    margin: 0;
    padding-top: 10px;
}

body {
    text-align: center;
    font-family: 'Lato', sans-serif;
    background-color: whitesmoke;
    color: black;
    margin: 0;
}

footer {
    margin: 20px
}

h1 {
    font-family: 'Lato', sans-serif;
    color: 	whitesmoke;
    font-size: 2em;
    padding: 20px;
}

section {
    display: flex;
}

aside {
    flex: 1
}

article {
    flex: 1;
}

hr {
    background-color: black;
    height: 1px;
}

a:hover {
    color: rgb(128, 15, 18);
}

a {
    color: 	#A51216;
}

@media only screen and (max-width: 700px) {
    section, article {
        display: block
    }
}
</style>