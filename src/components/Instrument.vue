<template>
  <div class="albumPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>{{name}}</h2>
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
        img: '/static/images/anInstrumentInThyHands.jpg',
        name: 'An Instrument in Thy Hands',
        description: 'Prior to serving a mission for the Church of Jesus Christ of Latter-day Saints, \
                    Ryan recorded a collection of missionary favorites in preparation for his service.',
        trackList: [
            "I Hope They Call Me on a Mission",
            "I Am a Child of God",
            "Because I Have Been Given Much",
            "Brightly Beams Our Father's Mercy",
            "We'll Bring the World His Truth",
            "Teach Me to Walk in the Light/He Sent His Son",
            "We Are All Enlisted",
            "Mom's Song",
            "Dad's Song",
            "A Child's Prayer",
            "I'm Trying to Be like Jesus",
            "Lord, I Would Follow Thee",
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
