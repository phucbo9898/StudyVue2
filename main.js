Vue.component("task", {
  template: "<li><slot></slot></li>",
});

new Vue({
  el: "#root",
  data: {
    tasks: [
      { description: "Go to the store", completed: true },
      { description: "Finish screencast", completed: false },
      { description: "Make donation", completed: false },
      { description: "Clear inbox", completed: false },
      { description: "Make dinner", completed: false },
      { description: "Clean room", completed: true },
    ],
  },

  computed: {
    inCompletedTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
  },
});
