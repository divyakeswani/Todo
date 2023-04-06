#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers
#= require_tree ./collections


window.Blog =
  console.log('1')
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}
  init: ->
    alert 'Hello!'
    new Blog.Routers.PostsRouter()
    Backbone.history.start()

$(document).ready ->
  Blog.init()
  console.log('1')


$(function() {
  console.log('hii')
  // Blog is the app name
  window.router = new Blog.Routers.PostsRouter({posts: <%= @posts.to_json.html_safe -%>});
  Backbone.history.start();
});