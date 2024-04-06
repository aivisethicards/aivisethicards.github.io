---
layout: page
title: Cards
---



<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search cards by keywords" />
    <label>Search title:</label>
  </div>
  <div class="card-wrapper">
    <card-component
      v-for="post in filteredList"
      :key="post.name"
      :post="post"
      @zoomIn="zoomIn"
    />
  </div>
  <div class="overlay" v-if="zoomedPost" @click.self="zoomOut()">
    <div class="zoomedCard">
      <div v-if="zoomedPost">
        <div v-if="zoomedPost.img">
          <img :src="zoomedPost.img" />
        </div>
        <div v-else>No image available</div>
      </div>
      <div v-else>No post available</div>
      <button class="closeButton" @click="zoomOut()">Close</button>
    </div>
  </div>
</div>

