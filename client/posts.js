Template.posts.events({
	"submit #postform": function(event){
		
		event.preventDefault();
		
		var posts = $("#posts").val();
		
		
		
		$("#posts").val("");
		//$("#posts_date").val("");
		

		var profile = Meteor.user().profile;
		
		var postline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				posts:posts,
				when:new Date(),
				
			};
			
		console.dir(postline);
		
		PostLines.insert(postline);
	}
});

Template.posts.helpers({
	postlines: function(){
		return PostLines.find({});
	},
	numchats: function(){
		return PostLines.find().count();
	}
});