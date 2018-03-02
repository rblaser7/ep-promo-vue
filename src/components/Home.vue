<template>
  <div class="homePage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <section>
        <aside class="home">
            <h2>New EP Release!</h2>
            <img src="/static/images/epitomeOfProductivity.jpg">
        </aside>
        <article class="home announcements">
            <h2 class="title">{{title}}</h2>
                <h4>Be one of the first to get Ryan's new EP,<br>The Epitome of Productivity.</h4>
                <h4>Check out some of Ryan's other albums!</h4>
                <h4>Learn a little more about Ryan on the About page.</h4>
                <h4>Request a Download of one of Ryan's recent releases.</h4>
        </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: "Announcements"
    }
  }
}
</script>

<style scoped>

.home p {
    line-height: 3.5;
    display: inline-block;
    vertical-align: middle;
}

.home {
    padding: 2em;
}

.home img {
    height: auto;
    width: 90%;
    max-width: 500px;
}

h2.title {
    text-decoration: underline;
    padding-right: 1em;
}

h4 {
    padding-top: 3em;
    padding-right: 1em;
}

</style>
