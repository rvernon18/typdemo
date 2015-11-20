var classes = [
{
		name:"Quantitative Reasoning 1",
		class_location:"Goldsmith 317", 
		class_hours:"M/W/Th 10:00 - 10:50",
		instructor:"Joseph Martin",
	},

	{
		name:"Quantitative Reasoning 2",
		class_location:"Farber 101",
		class_hours:"M/W/Th 12:00 - 12:50",
		instructor:"Sarah Lupis",
	},

	{
		name:"Writing 1",
		class_location:"Shiffman 201", 
		class_hours:"Tu/Th 3:30 - 4:50",
		instructor:"Sarah Sutton",
	},

	{
		name:"Writing 2",
		class_location:"Brown Social Science Center 322a", 
		class_hours:"Tu/Th 6:30 - 7:50",
		instructor:"Doug Bafford",
	},

	{
		name:"Social Science",
		class_location:"Shiffman 201", 
		class_hours:"Tu/Th 2:00 - 3:20",
		instructor:"Craig Smith",
	},
	
	{
		name:"Computer Science",
		class_location:"Farber 101", 
		class_hours:"Tu/F 12:30 - 1:50",
		instructor:"Tim Hickey",
	},

	

];
Template.classes.helpers({
	classes: function(){
		return classes;
	},
	numclasses: function(){
		return classes.length;
	}
});