// app/assets/javascripts/collections/todos.js

var app = app || {};

app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.LocalStorage('todos-backbone'),
  url: '/todos'
});
