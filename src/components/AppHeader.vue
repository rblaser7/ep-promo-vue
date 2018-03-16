<template>
<div class="header">
    <h1>Ryan Blaser Music</h1>
    <nav>
        <ul>
            <li v-bind:class="{active: isActive('home')}"><router-link to="/">Home</router-link></li>
            <li v-bind:class="{active: isActive('about')}"><router-link to="/about">About</router-link></li>
            <li v-bind:class="{active: isActive('music')}" class="dropdown">
                <router-link class="dropbtn" to="/music">Music</router-link>
                <div class="dropdown-content">
                    <router-link to="/music/epitome">The Epitome of Productivity</router-link>
                    <router-link to="/music/mistletoe">Under the Mistletoe</router-link>
                    <router-link to="/music/instrument">An Instrument in Thy Hands</router-link>
                </div>
            </li>
            <li v-bind:class="{active: isActive('downloads')}"><router-link to="/downloads">Downloads</router-link></li>
        </ul>
    </nav>
  </div>  
</template>

<script>
 export default {
     name: 'AppHeader',
     computed: {
        
     },
     methods: {
        isActive: function (item) {
            return this.$store.getters.activeTab === item;
        }
    },

     data () {
         return {
             activeItem : 'home'
         }
    }
     
 }
</script>

<style scoped>

nav {
    background-color: #A51216;
    text-align: center;
    width: 100%;
}

nav ul {
    list-style-type: none;
    overflow: hidden;
    text-align: center;
    padding-right: 3em;
}

nav li {
    display: inline-block;
    text-align: center;
    padding: 12px 5px;
    color: whitesmoke;
    background-color:	#A51216
}

nav li a {
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    color: white;
    padding: 30px;
}

nav li a:hover {
    color: whitesmoke
}

nav li.active {
    background-color: rgb(131, 14, 18);
    /* background-color: #333333; */
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-bottom: 0;
}

.dropdown-content a {
    color: #333333;
    padding: 12px 15px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color:  rgb(226, 225, 225);
    color: #333333
}

.dropdown:hover .dropdown-content {
    display: block;
    margin-top: 12px;
}

@media only screen and (max-width: 600px) {
    nav li {
        display: inline-block;
        padding: 8px 4px;
    }

    h1 {
        font-size: 20px
    }
}

</style>

