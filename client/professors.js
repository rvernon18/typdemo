var professors = [
	{
		name:"",
		office_location:"",
		office_hours:"Wed 10:00-14:00, Fri 12:00-15:00",
		typ_courses:"",
		website_url:"",
	},
	{},
	{}
];
Template.professors.helpers({
	professors: function(){
		return professors;
	},
	numprofessors: function(){
		return professors.length;
	}
});