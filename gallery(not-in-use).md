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
    <!-- Ensure you are using the right component name as registered in Vue -->
    <card-component
      v-for="post in filteredList"
      :key="post.name"
      :post="post"
      @zoom-in="zoomIn"
    ></card-component>
  </div>
  <div class="overlay" v-if="zoomedPost" @click.self="zoomOut()">
    <div class="zoomed-card">
      <!-- Conditional rendering based on the zoomedPost -->
      <img v-if="zoomedPost" :src="zoomedPost.img" alt="Zoomed card image"/>
      <button class="close-button" @click="zoomOut()">Close</button>
    </div>
  </div>
</div>
{% endraw %}
