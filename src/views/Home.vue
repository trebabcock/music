<template>
  <div class="flex flex-col h-screen w-screen antialiased">
    <div class="flex-grow bg-indigo-800 p-6">
      <div class="bg-indigo-800 h-full flex justify-center">
        <div class="w-96 mr-4">
          <h1 class="text-3xl text-indigo-400 font-bold text-center mb-4">
            All Tracks
          </h1>

          <Track
            v-for="track in allTracks"
            :key="track.id"
            :track="track"
          ></Track>
        </div>

        <div class="w-96 mr-4">
          <h1 class="text-3xl text-indigo-400 font-bold text-center mb-4">
            Queue
          </h1>
          <div class="w-full h-full overflow-y-scroll flex flex-col space-y-2">
            <Track
              v-for="track in queueTracks"
              :key="uuid(track)"
              :track="track"
            ></Track>
          </div>
        </div>
        <!--<div class="w-96 mr-4">
          <h1 class="text-3xl text-indigo-400 font-bold text-center mb-4">
            All Tracks
          </h1>
          <draggable
            v-model="allTracks"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
            <Track v-for="track in allTracks" :key="track.id" :title="track.title" :artist="track.artist" :album="track.album" :duration="track.duration" :cover_url="track.cover_url" ></Trakc>
          </draggable>
        </div>
        <div class="w-96 ml-4">
          <h1 class="text-3xl text-indigo-400 font-bold text-center mb-4">
            Queue
          </h1>
          <div
            class="
              p-2
              w-96
              h-14
              bg-indigo-600
              rounded-lg
              hover:bg-indigo-500
              cursor-move
              mb-2
              shadow-lg
            "
          >
            <div class="flex">
              <img
                class="rounded-lg h-10 w-10"
                src="https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png"
              />
              <div class="flex flex-grow">
                <div class="flex flex-col px-2">
                  <p class="text-sm font-bold text-indigo-200">
                    We're in This Together
                  </p>
                  <p class="text-xs text-indigo-300 font-bold">
                    Nine Inch Nails
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center items-end">
                <p class="text-sm font-bold text-indigo-300">7:16</p>
                <p class="text-xs text-indigo-300 font-bold">The Fragile</p>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <div class="h-1 bg-pink-400 shadow-lg"></div>
    <div
      class="
        bg-indigo-900
        flex flex-row
        justify-center
        items-center
        h-32
        shadow-lg
      "
    >
      <div
        class="
          w-10
          h-10
          flex
          mr-4
          justify-center
          items-center
          rounded-full
          text-center
          bg-pink-400
          hover:bg-pink-300
          cursor-pointer
          shadow-lg
        "
      >
        <font-awesome-icon
          class="m-auto antialiased text-indigo-900"
          icon="step-backward"
          size="lg"
        />
      </div>
      <div class="w-24 flex items-center justify-center">
        <font-awesome-icon
          @click="togglePause"
          v-if="paused"
          class="
            m-auto
            antialiased
            text-pink-400
            hover:text-pink-300
            cursor-pointer
            shadow-lg
          "
          icon="play-circle"
          size="4x"
        />
        <font-awesome-icon
          @click="togglePause"
          v-else
          class="
            m-auto
            antialiased
            text-pink-400
            hover:text-pink-300
            cursor-pointer
            shadow-lg
          "
          icon="pause-circle"
          size="4x"
        />
      </div>
      <div
        class="
          w-10
          h-10
          flex
          ml-4
          justify-center
          items-center
          rounded-full
          text-center
          bg-pink-400
          hover:bg-pink-300
          cursor-pointer
          shadow-lg
        "
      >
        <font-awesome-icon
          class="m-auto antialiased text-indigo-900"
          icon="step-forward"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Track from "../components/Track.vue";
export default {
  name: "Home",
  components: {
    Track,
  },
  data() {
    return {
      paused: true,
    };
  },
  methods: {
    togglePause() {
      this.paused = !this.paused;
    },
    deleteItem(index) {
      this.queueTracks.splice(index, 1);
    },
    handleClone(track) {
      // Create a fresh copy of item
      let cloneMe = JSON.parse(JSON.stringify(track));

      return cloneMe;
    },
    uuid(e) {
      if (e.uid) return e.uid;

      const key = Math.random().toString(16).slice(2);

      this.$set(e, "uid", key);

      return e.uid;
    },
  },
  computed: {
    allTracks() {
      return this.$store.getters.getTracks;
    },
    queueTracks: {
      get() {
        return this.$store.getters.getQueue;
      },
      set(value) {
        console.log("called set()");
        this.$store.commit("setQueue", value);
      },
    },
  },
};
</script>
