Template.chat.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		
		var assignment = $("#assignment").val();
		var due_date = $("#due_date").val();
		var points = $("#points").val();
		
		
		$("#assignment").val("");
		$("#due_date").val("");
		$("#points").val("");

		var profile = Meteor.user().profile;
		
		var chatline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				assignment:assignment,
				when:due_date,
				points:points
			};
			
		console.dir(chatline);
		
		ChatLines.insert(chatline);
	}
});

Template.chat.helpers({
	chatlines: function(){
		return ChatLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return ChatLines.find().count();
	}
});