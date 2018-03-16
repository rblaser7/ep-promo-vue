<template>
  <div class="requestPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>Request a Download</h2>
        <div class="requestForm">
            <form v-on:submit.prevent="submitHandler">
                <!-- <label for="name">Name:</label> -->
                <input id="name" name="name" type="text" v-model="name" placeholder="Name">
                <br>
                <!-- <label for="email">Email:</label> -->
                <input id="email" name="email" type="text" v-model="email" placeholder="Email">
                <br>
                <!-- <label for="message">Message:</label> -->
                <textarea id="message" name="message" v-model="message" placeholder="Message"></textarea>
                <br>
                <br>
                <div class="checkbox">
                    <input id="epitome" name="epitome" type="checkbox" v-model="epOn">
                    <label for="epitome" class="epitome">Epitome of Productivity</label>
                </div>
                <br>
                <div class="checkbox">
                    <input id="mistletoe" name="mistletoe" type="checkbox" v-model="msOn">
                    <label for="mistletoe" class="mistletoe">Under the Mistletoe</label>
                </div>
                <br>
                <div class="checkbox">
                    <input id="instrument" name="instrument" type="checkbox"  v-model="ihOn">
                    <label for="instrument" class="instrument">An Instrument in Thy Hands</label>
                </div>
                <br>
                <br>
                <input type="submit" id="submit" name="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Downloads',
  created: function() {
      this.$store.dispatch('setActiveTab', 'downloads');
  },
  data () {
    return {
        name: '',
        email: '',
        message: '',
        epOn: false,
        msOn: false,
        ihOn: false
    }
  },
  methods: {
      submitHandler: function() {
        alert("Thank you for your request!");
        this.name = '';
        this.email = '';
        this.message = '';
        this.epOn = false;
        this.msOn = false;
        this.ihOn = false;
      }
  }
}
</script>

<style scoped>

.requestPage {
    padding-top: 1em;
}

.requestForm {
    display: block;
    text-align: center;
}

form {
    margin: 0 auto;
    width: 100%;
    /* display: inline-block; */
}

form label {
    display: inline-block;
}

/* .epitome, .mistletoe, .instrument {
    width: 250px;
    text-align: left;
} */
.checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
}

[type="checkbox"] {
    margin: 10px;
    /* margin-right: 25px; */
}

form input[type="text"], form textarea {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #333333;
    margin: 5px;
    padding: 5px;
    /* margin-right: 5em; */
}

form input:focus, form textarea:focus {
    border-color: #000;
}

form textarea {
    vertical-align: top;
    height: 5em;
}

/* form label[for="message"] {
     padding-top: 5px
} */

form #submit {
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
