Vue.component("task", {
  template: "<li><slot></slot></li>",
});

Vue.component("task-list", {
  template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>
  `,
  data() {
    return {
      tasks: [
        { task: "Go to the store", complete: true },
        { task: "Go to the email", complete: false },
        { task: "Go to the face", complete: true },
        { task: "Go to the work", complete: false },
      ],
    };
  },
});

new Vue({
    el: "#root",
});

