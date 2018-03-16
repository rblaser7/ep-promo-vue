<template>
  <div class="aboutPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>About the Artist</h2>
        <section class="about">
            <aside>
                <p>
                    Ryan Blaser is an up-and-coming artist from Phoenix, AZ. He was formerly
                    a member of the band BDBO, but has since gone solo, looking to shift his 
                    style. Since then, he has produced three albums, including his newest EP 
                    <router-link to="/music/epitome">The Epitome of Productivity</router-link>. 
                    Ryan is a prolific songwriter, an inspired audio engineer, and an accomplished 
                    musician. The tracks for each of the instruments and vocals recorded were done 
                    by Ryan himself. Check out some of his music in the <router-link to="/music">Music section</router-link>!
                </p>
            </aside>
            <article class="home">
                <img src="/static/images/artist.jpg">
            </article>
        </section>
    </div>
</template>

<script>
export default {
  name: 'About',
  created: function() {
      this.$store.dispatch('setActiveTab', 'about');
  },
  data () {
    return {
        
    }
  },
}
</script>

<style scoped>

.aboutPage {
    padding-top: 1em;
}

.about p {
    text-align: justify;
    line-height: 2.5;
    margin: 20px;
    padding-left: 3em;
}

.about img {
    height: auto;
    width: 90%;
    min-width: 400px;
    padding: 20px;
}

@media only screen and (max-width: 700px) {
    section {
        display: flex;
        flex-direction: column;
    }
    article {
        order: 1;
    }

    aside {
        order: 2;
    }
    .about p {
        text-align: justify;
        line-height: 2.5;
        margin: 20px;
        padding: 0;
    }
}

</style>
