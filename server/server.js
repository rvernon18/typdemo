Meteor.methods({
  deletePost: function (postId) {
    PostComments.remove({pid:postId});
    Posts.remove(postId);
  }
});