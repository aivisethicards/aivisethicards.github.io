// cards-vue-app.js
Vue.component('CardComponent', {
  template: `
    <div class="card" @click="$emit('zoomIn', post)">
      <img v-if="post && post.img" :src="post.img" alt="Card image" />
      <div v-else>No image available</div>
    </div>
  `,
  props: {
    post: {
      type: Object,
      required: true
    },
  },
});

console.log('CardComponent registered successfully');

class Post {
  constructor(name, img = '') {
    this.name = name;
    this.img = img;
  }
}

const app = new Vue({
  el: '#app',
  data: {
    search: '',
    zoomedPost: null,
    postList: [
      new Post(
        'Technology',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech.png'
      ),
       new Post(
        'Technology mobile and web applications',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(1).png'
      ),
      new Post(
        'Technology social networds forums',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(2).png'
      ),
      new Post(
        'Technology public installations displays',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(3).png'
      ),
     new Post(
        'Technology internet of things iot',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(4).png'
      ),
      new Post(
        'Technology game',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(6).png'
      ),
      new Post(
        'Technology broadcast media',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(7).png'
      ),
      new Post(
        'Technology data repository',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(8).png'
      ),
      new Post(
        'Technology ar vr',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(9).png'
      ),
      new Post(
        'Technology others',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/tech%20(10).png'
      ),
      new Post(
        'task',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task.png'
      ),
      new Post(
        'task transformation',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(1).png'
      ),
      new Post(
        'task assessment',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(2).png'
      ),
      new Post(
        'task comparison',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(3).png'
      ),
      new Post(
        'task querying',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(4).png'
      ),
      new Post(
        'task reasoning',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(5).png'
      ),
      new Post(
        'task recommendation',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(6).png'
      ),
      new Post(
        'task mining',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/task%20(7).png'
      ),
      new Post(
        'principle',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle.png'
      ),
      new Post(
        'principle transparency',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(1).png'
      ),
      new Post(
        'principle transparency justice and fairness',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(2).png'
      ),
      new Post(
        'principle non-maleficence',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(3).png'
      ),
      new Post(
        'principle responsibility',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(4).png'
      ),
      new Post(
        'principle privacy',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(5).png'
      ),
      new Post(
        'principle beneficence',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(6).png'
      ),
      new Post(
        'principle freedom autonomy',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(7).png'
      ),
      new Post(
        'principle trust',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(8).png'
      ),
      new Post(
        'principle sustainabiliyty',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(9).png'
      ),
      new Post(
        'principle dignity',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(10).png'
      ),
      new Post(
        'principle solodarity',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/principle%20(11).png'
      ),
      new Post(
        'people',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people.png'
      ),
      new Post(
        'people age variations',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(1).png'
      ),
      new Post(
        'people workers with different needs',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(2).png'
      ),
      new Post(
        'people health conditions',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(3).png'
      ),
      new Post(
        'people marginalized',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(4).png'
      ),
      new Post(
        'people situational variations',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(5).png'
      ),
      new Post(
        'non human',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/people%20(6).png'
      ),
      new Post(
        'goal',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/goal.png'
      ),
      new Post(
        'goal visualization generation',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/goal%20(1).png'
      ),
      new Post(
        'goal visualization enhancement',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/goal%20(2).png'
      ),
      new Post(
        'goal analysis',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/goal%20(3).png'
      ),
      new Post(
        'challenge',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/challenge.png'
      ),
      new Post(
        'challenge input guidance',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(1).png'
      ),
            new Post(
        'challenge input prescriptive statistically spurious conclusions',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(2).png'
      ),
            new Post(
        'challenge input abstraction approximation ML models',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(3).png'
      ),
            new Post(
        'challenge input visualize algorithmic descision making',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(4).png'
      ),
            new Post(
        'challenge input alternate design analytical descision',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(5).png'
      ),
            new Post(
        'challenge input audit structure provenance irregularities',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(6).png'
      ),
            new Post(
        'challenge input hidden uncertainty',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(7).png'
      ),
            new Post(
        'challenge input visualize hidden impacts',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(8).png'
      ),
            new Post(
        'challenge input visualize hidden labor',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(9).png'
      ),
            new Post(
        'challenge input how much data enough',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(10).png'
      ),
            new Post(
        'challenge input anthropomorphize',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(11).png'
      ),
            new Post(
        'challenge input obfuscate protect privacy',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(12).png'
      ),
            new Post(
        'challenge input due process',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(13).png'
      ),
            new Post(
        'challenge input binaries',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(14).png'
      ),
            new Post(
        'challenge input diversity process',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(15).png'
      ),
            new Post(
        'challenge input examine power and empower',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(16).png'
      ),
            new Post(
        'challenge input consider context',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(17).png'
      ),
            new Post(
        'challenge input legitimize',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(18).png'
      ),
            new Post(
        'challenge input pressure slow unethical analytical behavior',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-input%20(19).png'
      ),
            new Post(
        'challenge output rethink binaries',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(1).png'
      ),
            new Post(
        'challenge output pluralism',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(2).png'
      ),
            new Post(
        'challenge output examine power empowerment',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(3).png'
      ),
            new Post(
        'challenge output context',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(4).png'
      ),
            new Post(
        'challenge output embodiment affect',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(5).png'
      ),
            new Post(
        'challenge output labor visible',  'https://raw.githubusercontent.com/aivisethicards/aivisethicards.github.io/main/assets/img/cards/ch-output%20(6).png'
      )

]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    handleEscape(e) {
      if (e.key === 'Escape' && this.zoomedPost) {
        this.zoomOut();
      }
    },
    zoomIn(post) {
      console.log('zoomIn called with post:', post);
      this.zoomedPost = post;
    },
    zoomOut() {
      this.zoomedPost = null;
    }
  },
  mounted() {
    // Log the postList to the console
    console.log(this.postList);
    document.addEventListener('keydown', this.handleEscape);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscape);
  }
});
