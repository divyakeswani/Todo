// app/assets/javascripts/views/todo.js

var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#item-template').html()),
  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close',
    'click .destroy': 'clear'
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('completed', this.model.get('completed'));
    this.input = this.$('.edit');
    return this;
  },
  toggleCompleted: function() {
    this.model.toggle();
  },
  edit: function() {
    this.$el.addClass('editing');
    this.input.focus();
  },
  close: function() {
    var value = this.input.val().trim();
    if (value) {
      this.model.save({ title: value });
    }
    this.$el.removeClass('editing');
  },
  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.close();
    }
  },
  clear: function() {
    this.model.destroy();
  }
});
