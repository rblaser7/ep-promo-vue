<template>
  <div class="albumPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>{{name}}</h2>
        <section>
            <aside class="artwork">
                <img v-bind:src="img">
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
  name: 'Epitome',
  data () {
    return {
        img: '/static/images/epitomeOfProductivity.jpg',
        name: 'The Epitome of Productivity',
        description: 'This EP is composed of six original songs by Ryan, each showcasing a different\
                     style and highlighting a different element of the human experience.',
        trackList: [
            "Friend Zone",
            "Behind the Scenes",
            "Rewind",
            "Sweet",
            "Wrong",
            "Comin' Back to You"
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
    height: auto;
    width: 95%;
}

</style>
