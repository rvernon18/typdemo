var professors = [
	{
		name:"Sarah Lupis",
		office_location:"Brown Rabb 117",
		office_hours:"Fri 12:00-2:00 and by appointment",
		typ_courses:"Quantitative Reasonings",
		website_url:"https://moodle2.brandeis.edu/syllabus/default/153TYP-2A-1_1440522485.pdf",
	},
	{
		name:"Craig Smith",
		office_location:"Rabb 323",
		office_hours:"M/W 3-4",
		typ_courses:"Social Science",
		website_url: "https://moodle2.brandeis.edu/syllabus/default/153TYP-5A-1_1444410588.pdf"
	},
	{
		name:"Tim Hickey",
		office_location:"Rabb 323",
		office_hours:"By appointment",
		typ_courses:"Computer Science",
		website_url: "https://sites.google.com/a/brandeis.edu/typ-cs-aut15/home"
	},
	{
		name:"Sarah Sutton ",
		office_location:"",
		office_hours:"By appointment",
		typ_courses:"Writing 1",
		website_url: ""
    }
];
Template.professors.helpers({
	professors: function(){
		return professors;
	},
	numprofessors: function(){
		return professors.length;
	}
});