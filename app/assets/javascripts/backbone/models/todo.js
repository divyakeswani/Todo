// app/assets/javascripts/models/todo.js

var app = app || {};

app.Todo = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    title: '',
    completed: false
  },
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
