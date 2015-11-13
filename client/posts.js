Template.posts.events({
	"submit #postform": function(event){
		
		event.preventDefault();
		
		var assignment = $("#type").val();
		var due_date = $("#due_date").val();
		var points = $("#points").val();
		
		
		$("#type").val("");
		$("#due_date").val("");
		$("#points").val("");

		var profile = Meteor.user().profile;
		
		var postline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				assignment:assignment,
				when:due_date,
				points:points
			};
			
		console.dir(postline);
		
		PostLines.insert(postline);
	}
});

Template.posts.helpers({
	postlines: function(){
		return PostLines.find({},{limit:10, sort:{when:-1}});
	},
	numposts: function(){
		return PostLines.find().count();
	}
});