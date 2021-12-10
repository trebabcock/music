<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div class="relative inline-flex align-middle w-full">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            h-10
            w-6
            ml-2
            mr-2
            rounded
            cursor-pointer
            hover:bg-purple-400
          "
          v-on:click="toggleDropdown()"
          ref="btnDropdownRef"
        >
          <font-awesome-icon
            class="m-auto antialiased text-purple-300"
            icon="ellipsis-v"
            size="lg"
          />
        </div>
      </div>
      <div
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
        class="
          bg-purple-800
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          px-2
          min-w-24
          flex flex-col
          space-y-2
        "
        ref="popoverDropdownRef"
      >
        <div
          class="
            text-indigo-50 text-sm
            py-2
            px-4
            font-normal
            rounded-lg
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-blueGray-700
            cursor-pointer
            bg-purple-900
            hover:bg-purple-700
            shadow-lg
          "
          @click="addToQueue"
        >
          Add to Queue
        </div>
        <div
          class="
            text-indigo-50 text-sm
            py-2
            px-4
            font-normal
            rounded-lg
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-blueGray-700
            cursor-pointer
            bg-purple-900
            hover:bg-purple-700
            shadow-lg
          "
        >
          Play Next
        </div>
        <div
          class="
            text-indigo-50 text-sm
            py-2
            px-4
            font-normal
            rounded-lg
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-blueGray-700
            cursor-pointer
            bg-purple-900
            hover:bg-purple-700
            shadow-lg
          "
        >
          Play Now
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
  name: "dropdown",
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  props: {
    track: {},
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom",
        });
      }
    },
    logout: function () {
      this.$store.dispatch("logout");
    },
    toAdmin: function () {
      this.$router.push("/admin");
    },
    addToQueue() {
      this.toggleDropdown();
      this.$store.commit("addQueue", this.track);
    },
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
    isAdmin: function () {
      return this.$store.getters.getUserRole === "admin";
    },
  },
};
</script>
