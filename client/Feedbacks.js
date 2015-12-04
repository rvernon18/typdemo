Template.feedbackPage.events({
  "submit #feedbackform": function(event){
    
    event.preventDefault();
    
    var body = $("#feedback-body").val();
    
    $("#feedbak-body").val("");

    var profile = Meteor.user().profile;
    
    var feedback = {
        uid:Meteor.userId(),  
        who:profile["firstName"]+" "+profile["lastName"], 
        body:body,
        when: new Date()
      };    
    Feedbacks.insert(feedback);
  }
});

Template.feedbackPage.helpers({
  feedbacks: function(){
    return Feedbacks.find({sort:{when:-1}});
  },
  numfeedbacks: function(){
    return Feedbacks.find({}).count();
  }
});

Template.feedback.helpers({
  authorized: function(){
    return this.uid==Meteor.userId();
  }
});

Template.feedback.events({
    "click #delete": function () {
      Feedbacks.remove(this._id);
    }
});