<template>
  <div
    class="
      p-2
      w-96
      h-14
      bg-purple-600
      rounded-lg
      hover:bg-purple-500
      mb-2
      shadow-lg
    "
  >
    <div class="flex justify-center items-center">
      <img class="rounded-lg h-10 w-10" :src="track.cover_url" />
      <div class="flex flex-grow">
        <div class="flex flex-col px-2">
          <p class="text-sm font-bold text-purple-200">
            {{ track.title }}
          </p>
          <p class="text-xs text-purple-300 font-bold">{{ track.artist }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-end">
        <p class="text-sm font-bold text-purple-300">{{ track.duration }}</p>
        <p class="text-xs text-purple-300 font-bold">{{ track.album }}</p>
      </div>
      <div
        class="flex flex-col items-center justify-center h-10 w-6 ml-2 rounded"
      >
        <track-dropdown :track="track" />
      </div>
    </div>
  </div>
</template>

<script>
import TrackDropdown from "./TrackDropdown.vue";
export default {
  name: "Track",
  props: {
    track: {},
  },
  components: {
    TrackDropdown,
  },
};
</script>
