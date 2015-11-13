var classes = [
	{
		name:"Quantitative Reasoning 2",
		class_location:"Farber 101",
		class_hours:"M/W/Th 12:00 - 12:50",
		instructor:"Sarah Lupis",
		course_url:"https://moodle2.brandeis.edu/syllabus/default/153TYP-2A-1_1440522485.pdf",
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