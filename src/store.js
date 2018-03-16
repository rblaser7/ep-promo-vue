import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        epitome: {
            reviews: []
        },
        instrument: {
            reviews: []
        },
        mistletoe: {
            reviews: []
        },
        activeTab: ''
    },
    getters: {
        epitomeReviews: state => state.epitome.reviews,
        instrumentReviews: state => state.instrument.reviews,
        mistletoeReviews: state => state.mistletoe.reviews,
        activeTab: state => state.activeTab,
    },
    mutations: {
        setReviews(state, reviews) {
            if (typeof(reviews) === 'string') {
                let album = reviews;
                if (album.localeCompare('epitome') === 0)
                    state.epitome.reviews = [];
                else if (album.localeCompare('instrument') === 0)
                    state.instrument.reviews = [];
                else if (album.localeCompare('mistletoe') === 0)
                    state.mistletoe.reviews = [];
            } else {
                let album = reviews[0].album;
                if (album.localeCompare('epitome') === 0)
                state.epitome.reviews = reviews;
                else if (album.localeCompare('instrument') === 0)
                state.instrument.reviews = reviews;
                else if (album.localeCompare('mistletoe') === 0)
                state.mistletoe.reviews = reviews;
            }
        },
        setActiveTab(state, tab) {
            state.activeTab = tab;
        }
    },
    actions: {
        getReviews(context, album) {
            axios.get("/api/"+ album +"/reviews").then(response => {
                if (response.data.length > 0) {
                    context.commit('setReviews', response.data);
                } else {
                    context.commit('setReviews', album);
                }
                return true;
            }).catch(err => {
            });
        },
        setActiveTab(context, tab) {
            context.commit('setActiveTab', tab);
        },
        addReview(context, review) {
            axios.post("/api/"+review.album+"/reviews", review).then(response => {
                return context.dispatch('getReviews', review.album);
            }).catch(err => {
            });
        },
        updateReview(context, review) {
            axios.put("/api/"+review.album+"/reviews/" + review.id, review).then(response => {
                return true;
            }).catch(err => {
            });
        },
        deleteReview(context, review) {
            axios.delete("/api/"+review.album+"/reviews/" + review.id).then(response => {
                return context.dispatch('getReviews', review.album);
            }).catch(err => {
            });
        }
    }
});