<template>
  <div class="requestPage">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <h2>Request a Download</h2>
        <div class="requestForm">
            <form>
                <label for="name">Name:</label>
                <input id="name" name="name" type="text">
                <br>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text">
                <br>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <br>
                <br>
                <input id="epitome" name="epitome" type="checkbox">
                <label for="epitome" class="epitome">Epitome of Productivity</label>
                <br>
                <input id="mistletoe" name="mistletoe" type="checkbox">
                <label for="mistletoe" class="mistletoe">Under the Mistletoe</label>
                <br>
                <input id="instrument" name="instrument" type="checkbox">
                <label for="instrument" class="instrument">An Instrument in Thy Hands</label>
                <br>
                <br>
                <input type="submit" id="submit" name="submit" v-on:submit.prevent>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Downloads',
  data () {
    return {
      
    }
  },
  methods: {
      submitHandler: ($event) => {
          $event.preventDefault();
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
    width: 90px;
    text-align: right;
}

.epitome, .mistletoe, .instrument {
    width: 250px;
    text-align: left;
}

[type="checkbox"] {
    margin: 10px;
    margin-right: 25px;
}

form input[type="text"], form textarea {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #333333;
    margin: 5px;
    padding: 5px;
    margin-right: 5em;
}

form input:focus, form textarea:focus {
    border-color: #000;
}

form textarea {
    vertical-align: top;
    height: 5em;
}

form label[for="message"] {
    padding-top: 5px
}

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
