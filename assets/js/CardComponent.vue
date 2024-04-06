<template>
  <div class="card" @click="$emit('zoomIn', post)">
    <div v-if="post">
      <div v-if="post.img">
        <img :src="post.img" alt="Card image" />
      </div>
      <div v-else>No image available</div>
    </div>
    <div v-else>No post available</div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>