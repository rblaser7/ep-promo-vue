<template>
  <div class="music">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>Music</h2>
        <div class="grid">
            <router-link to="/music/epitome">
                <img v-bind:src="epitome.img" height="300em" width="300em"/>
                <p>{{epitome.name}}</p>
            </router-link>
            <router-link to="/music/mistletoe">
                <img v-bind:src="mistletoe.img" height="300em" width="300em"/>
                <p>{{mistletoe.name}}</p>
            </router-link>
            <router-link to="/music/instrument">
                <img v-bind:src="instrument.img" height="300em" width="300em"/>
                <p>{{instrument.name}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Music',
  data () {
    return {
      epitome: {
          img: '/static/images/epitomeOfProductivity.jpg',
          name: 'The Epitome of Productivity'
      },
      instrument: {
          img: '/static/images/anInstrumentInThyHands.jpg',
          name: 'An Instrument in Thy Hands'
      },
      mistletoe: {
          img: '/static/images/underTheMistletoe.png',
          name: 'Under the Mistletoe'          
      }
    }
  }
}
</script>

<style scoped>

.album {
    text-align: left;
    padding: 20px;    
}

.albumPage {
    padding-top: 1em;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px
}

.music {
    padding-top: 1em;
}

.artwork {
    padding: 2em;
}

@media only screen and (max-width: 800px) {
    .grid {
        display: block;
    }
}

</style>
