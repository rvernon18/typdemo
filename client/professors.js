var professors = [
	{
		name:"Sarah Lupis",
		office_location:"Brown Rabb 117",
		office_hours:"Fri 12:00-2:00 and by appointment",
		typ_course:"Quantitative Reasonings",
		course_url:"https://moodle2.brandeis.edu/syllabus/default/153TYP-2A-1_1440522485.pdf",
		email:"slupis@brandeis.edu"
	},
	{
		name:"Craig Smith",
		office_location:"Rabb 323",
		office_hours:"M/W 3-4",
		typ_course:"Social Science",
		course_url: "https://moodle2.brandeis.edu/syllabus/default/153TYP-5A-1_1444410588.pdf",
		email:"cbsmith@brandeis.edu"
	},
	{
		name:"Timothy Hickey",
		office_location:"Rabb 323",
		office_hours:"By appointment",
		typ_course:"Computer Science",
		course_url: "https://sites.google.com/a/brandeis.edu/typ-cs-aut15/home",
		email:"tjhickey@brandeis.edu"
	},
	{
		name:"Sarah Sutton ",
		office_location:"",
		office_hours:"By appointment",
		typ_course:"Writing 1",
		course_url: "",
		email:"ssutton@brandeis.edu"
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