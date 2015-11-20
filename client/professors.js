var professors = [
{
		name:"Joseph Martin",
		office_location:"Goldsmith 317",
		office_hours:"Wed 11:00-12:30 and by appointment",
		typ_course:"Quantitative Reasoning 1",
		course_url:"",
		email:"j0sephmartin@brandeis.edu"
	},

	{
		name:"Sarah Lupis",
		office_location:"Brown Rabb 117",
		office_hours:"Fri 12:00-2:00 and by appointment",
		typ_course:"Quantitative Reasoning 2",
		course_url:"https://moodle2.brandeis.edu/syllabus/default/153TYP-2A-1_1440522485.pdf",
		email:"slupis@brandeis.edu"
	},

	{
		name:"Sarah Sutton ",
		office_location:"",
		office_hours:"By appointment",
		typ_course:"Writing 1",
		course_url: "",
		email:"ssutton@brandeis.edu"
    },

    {
		name:"Doug Bafford",
		office_location:"Brown Social Science Center, Room 218",
		office_hours:":Mon 4:30-5:30,Fri 10:00-11:00, and by appointment",
		typ_course:"Writing 2",
		course_url: "",
		email:"bafford@brandeis.edu"
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
	
    
];
Template.professors.helpers({
	professors: function(){
		return professors;
	},
	numprofessors: function(){
		return professors.length;
	}
});