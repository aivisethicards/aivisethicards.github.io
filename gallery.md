---
layout: page
title: Cards
---

{% raw %}

<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search cards by keywords"/>
    <label>Search title:</label>
  </div>
  <div class="card-wrapper">
    <div class="card" v-for="post in filteredList" @click="zoomIn(post)">
      <img v-if="post.img" :src="post.img" alt="Card image">
      <div v-else>No image available</div>
    </div>
  </div>
  <div class="overlay" v-if="zoomedPost" @click.self="zoomOut()">
    <div class="zoomedCard">
      <img v-if="zoomedPost.img" :src="zoomedPost.img"/>
      <div v-else>No image available</div>
      <button class="closeButton" @click="zoomOut()">Close</button>
    </div>
  </div>
</div>

{% endraw %}
