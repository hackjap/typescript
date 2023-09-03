<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import ListItem from "../components/ListItem.vue";
import { fetchNews, NewsItem } from "@/api";
import Vue from "vue";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async fetchNewsItem() {
      const { data } = await fetchNews();
      console.log(data);
      this.newsItems = data;
    },
  },
  created() {
    this.fetchNewsItem();
  },
});
</script>

<style></style>
