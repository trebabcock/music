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
      <img class="rounded-lg h-10 w-10" :src="cover_url" />
      <div class="flex flex-grow">
        <div class="flex flex-col px-2">
          <p class="text-sm font-bold text-purple-200">
            {{ title }}
          </p>
          <p class="text-xs text-purple-300 font-bold">{{ artist }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-end">
        <p class="text-sm font-bold text-purple-300">{{ duration }}</p>
        <p class="text-xs text-purple-300 font-bold">{{ album }}</p>
      </div>
      <div
        @click.prevent.stop="handleClick($event, id)"
        class="
          flex flex-col
          items-center
          justify-center
          h-10
          w-6
          ml-2
          rounded
          cursor-pointer
          hover:bg-purple-400
        "
      >
        <font-awesome-icon
          class="m-auto antialiased text-purple-300"
          icon="ellipsis-v"
          size="lg"
        />
      </div>
    </div>
    <vue-simple-context-menu
      :elementId="'myUniqueId'"
      :options="options"
      :ref="'vueSimpleContextMenu'"
      @option-clicked="optionClicked"
    />
  </div>
</template>

<script>
import VueSimpleContextMenu from "vue-simple-context-menu";
export default {
  name: "Track",
  props: {
    title: String,
    artist: String,
    album: String,
    duration: String,
    cover_url: String,
    file_name: String,
    id: Number,
  },
  components: {
    VueSimpleContextMenu,
  },
  methods: {
    handleClick(event, item) {
      this.$refs.vueSimpleContextMenu.showMenu(event, item);
    },
    optionClicked(event) {
      window.alert(JSON.stringify(event));
    },
  },
};
</script>
