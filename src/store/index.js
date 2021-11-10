import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tracks: [],
    queue: [],
  },
  getters: {
    getTracks: (state) => state.tracks,
    getQueue: (state) => state.queue,
  },
  mutations: {
    setTracks(state, tracks) {
      state.tracks = tracks;
    },
    setQueue(state, tracks) {
      state.queue = tracks;
    },
    addTrack(state, track) {
      state.tracks.push(track);
    },
    addQueue(state, track) {
      state.queue.push(track);
    },
    deleteTrack(state, id) {
      state.tracks = state.tracks.filter((track) => track.id != id);
    },
    deleteTrackFromQueue(state, id) {
      state.queue = state.queue.filter((track) => track.id != id);
    },
  },
  actions: {
    populateTracks({ commit }) {
      let song1 = {
        title: "We're in This together",
        artist: "Nine Inch Nails",
        album: "The Fragile",
        duration: "7:16",
        cover_url:
          "https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png",
        file_name: "one.mp3",
        id: 0,
      };
      commit("addTrack", song1);
      let song2 = {
        title: "Round Here",
        artist: "Couting Crows",
        album: "August and Everything After",
        duration: "5:32",
        cover_url:
          "https://upload.wikimedia.org/wikipedia/en/9/95/CountingCrowsAugustandEverythingAfter.jpg",
        file_name: "two.mp3",
        id: 1,
      };
      commit("addTrack", song2);
      let song3 = {
        title: "All Eyes On Me",
        artist: "Bo Burnham",
        album: "Inside (The Songs)",
        duration: "5:02",
        cover_url:
          "https://m.media-amazon.com/images/I/61BT8gBPPSS._SS500_.jpg",
        file_name: "three.mp3",
        id: 3,
      };
      commit("addTrack", song3);
      //commit("addQueue", song1);
    },
  },
  modules: {},
});
