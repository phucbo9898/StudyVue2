Vue.component("message", {
  props: ["title", "body"],

  data() {
    return {
      invisible: true,
    };
  },
  template: `
    <article class="message is-dark" v-show="invisible">
      <div class="message-header">
        {{ title }}

        <button type="button" @click="invisible = false">x</button>
      </div>
      <div class="message-body">
        {{ body}}
      </div>
    </article>
    `,
});
new Vue({
  el: "#root",
});
