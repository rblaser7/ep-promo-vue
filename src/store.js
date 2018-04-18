import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const getAuthHeader = () => {
    return { headers: { 'Authorization': localStorage.getItem('token') } };
}

export default new Vuex.Store({
    state: {
        user: {},
        loggedIn: false,
        token: '',
        loginError: '',
        registerError: '',
        reviews: {
            epitome: [],
            instrument: [],
            mistletoe: []
        },
        activeTab: ''
    },
    getters: {
        user: state => state.user,
        loggedIn: state => state.loggedIn,
        getToken: state => state.token,
        loginError: state => state.loginError,
        registerError: state => state.registerError,
        epitomeReviews: state => state.reviews.epitome,
        instrumentReviews: state => state.reviews.instrument,
        mistletoeReviews: state => state.reviews.mistletoe,
        activeTab: state => state.activeTab,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setLoggedIn(state, status) {
            state.loggedIn = status;
        },
        setToken(state, token) {
            state.token = token;
            if (token === '')
                localStorage.removeItem('token');
            else
                localStorage.setItem('token', token)
        },
        setLoginError(state, message) {
            console.log(message);
            state.loginError = message;
        },
        setRegisterError(state, message) {
            state.registerError = message;
        },
        setReviews(state, reviews) {
            let album;
            if (typeof (reviews) === 'string') {
                album = reviews;
            } else {
                album = reviews[0].album;
            }
            state.reviews[album] = reviews;
        },
        setActiveTab(state, tab) {
            state.activeTab = tab;
        }
    },
    actions: {
        // Registration, Login //
        register(context, user) {
            axios.post("/api/users", user).then(response => {
                context.commit('setUser', response.data.user);
                context.commit('setLoggedIn', true);
                context.commit('setToken', response.data.token);
                context.commit('setRegisterError', "");
                context.commit('setLoginError', "");
            }).catch(error => {
                context.commit('setLoginError', "");
                context.commit('setLoggedIn', false);
                context.commit('setUser', {});
                context.commit('setToken', '');
                if (error.response) {
                    if (error.response.status === 403)
                        context.commit('setRegisterError', "That email address already has an account.");
                    else if (error.response.status === 409)
                        context.commit('setRegisterError', "That user name is already taken.");
                    return;
                }
                context.commit('setRegisterError', "Sorry, your request failed. We will look into it.");
            });
        },
        login(context, user) {
            axios.post("/api/login", user).then(response => {
                context.commit('setUser', response.data.user);
                context.commit('setLoggedIn', true);
                context.commit('setToken', response.data.token);
                context.commit('setRegisterError', "");
                context.commit('setLoginError', "");
            }).catch(error => {
                context.commit('setLoggedIn', false);
                context.commit('setRegisterError', "");
                context.commit('setUser', {});
                context.commit('setToken', '');
                if (error.response) {
                    if (error.response.status === 403 || error.response.status === 400)
                        context.commit('setLoginError', "Invalid login.");
                    context.commit('setRegisterError', "");
                    return;
                }
                context.commit('setLoginError', "Sorry, your request failed. We will look into it.");
            });
        },
        logout(context, user) {
            context.commit('setUser', {});
            context.commit('setLoggedIn', false);
            context.commit('setToken', '');
        },
        getReviews(context, album) {
            axios.get("/api/" + album + "/reviews").then(response => {
                console.log(response.data.reviews);
                context.commit('setReviews', response.data.reviews);
            }).catch(err => {
            });
        },
        setActiveTab(context, tab) {
            context.commit('setActiveTab', tab);
        },
        addReview(context, review) {
            review.id = context.state.user.id;
            console.log(review);
            axios.post("/api/" + review.album + "/reviews", review, getAuthHeader()).then(response => {
                console.log("Getting " + review.album + " reviews.");
                return context.dispatch('getReviews', review.album);
            }).catch(err => {
            });
        },
        updateReview(context, review) {
            axios.put("/api/" + review.album + "/reviews/" + review.id, review, getAuthHeader()).then(response => {
                return true;
            }).catch(err => {
            });
        },
        deleteReview(context, review) {
            axios.delete("/api/" + review.album + "/reviews/" + review.id, getAuthHeader()).then(response => {
                return context.dispatch('getReviews', review.album);
            }).catch(err => {
            });
        },
        // Initialize //
        initialize(context) {
            let token = localStorage.getItem('token');
            if (token) {
                // see if we can use the token to get my user account
                axios.get("/api/me", getAuthHeader()).then(response => {
                    context.commit('setToken', token);
                    context.commit('setLoggedIn', true);
                    context.commit('setUser', response.data.user);
                }).catch(err => {
                    // remove token and user from state
                    localStorage.removeItem('token');
                    context.commit('setUser', {});
                    context.commit('setLoggedIn', false);
                    context.commit('setToken', '');
                });
            }
        },
    }
});