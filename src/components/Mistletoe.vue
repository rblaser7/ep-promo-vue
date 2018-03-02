<template>
  <div class="albumPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>Under the Mistletoe</h2>
        <section>
            <aside class="artwork">
                <img v-bind:src="img" height="500px" width="500px">
            </aside>
            <article class="album">
                <h3>Description</h3>
                <p>{{description}}</p>
                <h3>Track List</h3>
                <ol>
                    <li v-bind:key="track" v-for="track in trackList">{{track}}</li>                    
                </ol>
            </article>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Instrument',
  data () {
    return {
        img: '/static/images/underTheMistletoe.png',
        name: 'An Instrument in Thy Hands',
        description: 'Teaming up with his freshman roommate under the alias Stripling Voices,\
                        Ryan delivers an instant classic with some familiar holiday tunes.',
        trackList: [
            "Angels We Have Heard on High",
            "It Came Upon a Midnight Clear",
            "I'll Be Home For Christmas/White Christmas",
            "Oh Come, All Ye Faithful",
            "Silent Night",
            "Santa Baby",
            "Mistletoe",
        ]
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

.artwork img {
    width: 95%;
    height: auto;
}

</style>
