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
      <img v-bind:src="post.img"/>
    </div>
  </div>
  <div class="overlay" v-if="zoomedPost" @click.self="zoomOut()">
    <div class="zoomedCard">
      <img v-bind:src="zoomedPost.img"/>
      <button class="closeButton" @click="zoomOut()">Close</button>
    </div>
  </div>
</div>

{% endraw %}
