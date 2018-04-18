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
        <div class="reviews">
            <h3>Reviews</h3>
            <div class="review-input" v-if="loggedIn">
                <textarea v-model="reviewText" placeholder="Review The Epitome of Productivity here!"></textarea>
                <button v-on:click="addReview()">Add Review</button>
            </div>
            <div v-else>
                <p>Log in to write a review!</p>
            </div>
            <ul>
                <li :key="i" v-for="(review, i) in reviews" class="review" :class="{ border: i != 0 }">
                    <button v-if="review.name === user.name" v-on:click="deleteReview(review)">X</button>
                    <p class="text" v-if="editable(review)" contenteditable="true" @input="editReview($event, review)">{{review.review}}</p>
                    <p class="text" v-else>{{review.review}}</p>
                    <p class="reviewer">~ {{review.name}} ~</p><p class="date">{{new Date(review.created).getMonth() + 1}}/{{new Date(review.created).getDate()}}/{{new Date(review.created).getFullYear()}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Epitome',
  data () {
    return {
        img: '/static/images/epitomeOfProductivity.jpg',
        name: 'The Epitome of Productivity',
        description: 'This EP is composed of six original songs by Ryan, ranging from the driving Friend Zone to' +
        ' the more emotional Wrong. Each song showcases a different style and represents a different experience for' +
        ' the listener.',
        trackList: [
            "Friend Zone",
            "Behind the Scenes",
            "Rewind",
            "Sweet",
            "Wrong",
            "Comin' Back to You"
        ],
        reviewText: ''
    }
  },
  computed: {
      reviews: function() {
          return this.$store.getters.epitomeReviews;
      },
      loggedIn: function() {
          return this.$store.getters.loggedIn;
      },
      user: function() {
          return this.$store.getters.user;
      }
  },
  created: function() {
      this.getReviews();
      this.$store.dispatch('setActiveTab', 'music');
  },
  methods: {
      getReviews: function() {
        this.$store.dispatch('getReviews', 'epitome');
      },
      addReview: function() {
        let id = this.user[id];
        let text = this.reviewText;
        this.reviewText = '';
        this.$store.dispatch('addReview',{
            id: id,
            text: text,
            album: 'epitome'         
        });
     },
     editReview: function(event, review) {
        this.$store.dispatch('updateReview',{
            id: review.id,
            text: event.target.innerText,
            album: 'epitome'
        });
     },
     deleteReview: function(review) {
        this.$store.dispatch('deleteReview',{
            id: review.id,
            album: 'epitome'
        });
     },
      editable: function(review) {
        return this.loggedIn && this.user.name === review.name;
      }
  },
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

.review-input {
    text-align: center
}

.review-input input {
    width: 65%;
    height: 1em;
    padding: 5px;
    margin-top: 1em;
}

.review-input textarea {
    width: 65%;
    height: 10em;
    padding: 5px;
    margin-top: 2em;
}

.review-input button {
    width: 36%;
    height: auto;
    padding: 5px;
    margin: auto;
    margin-top: 2em;
}

ul {
    list-style-type: none;
}

.review {
    text-align: center;
    padding: 2em;
}

.border {
    border-top: 1px dotted black;
}

.review:hover button {
    display: inline
}

.review .text {
    font-size: 20px;
    text-align: center;
    padding: 5px;
}

[contenteditable]:hover {
    color: darkslategray;
}

.review .reviewer {
    text-align: center;
    font-style: italic;
}
.review .date {
    text-align: right;
    font-size: 11px;
    font-style: italic;
    float: right;
}

.review button {
    display: none;
    float: right;
}
</style>
