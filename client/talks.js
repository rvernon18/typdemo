Template.talks.events({
	"submit #talkform": function(event){
		
		event.preventDefault();
		
		var talks = $("#talks").val();
		
		
		
		$("#talks").val("");
		//$("#talks_date").val("");
		

		var profile = Meteor.user().profile;
		
		var talkline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				talks:talks,
				when:new Date(),
				
			};
			
		console.dir(talkline);
		
		TalkLines.insert(talkline);
	}
});

Template.talks.helpers({
	talklines: function(){
		return TalkLines.find({});
	},
	numchats: function(){
		return TalkLines.find().count();
	}
});