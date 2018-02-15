'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	//$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get('http://localhost:3000/project/:id', addProject);

	console.log("User clicked on project " + idNumber);
}
/*
$("#testjs").click(function(e)) {
	$.get("/project/random", addProject);
}
*/
function addProject(result){
	console.log(result);

	var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 

	$("#project-container").html(projectHTML);
	$("#project-description").html(result['summary']);
} 
/*
$.post("/user/sendMessage",
{
	"email1": "do_not_reply@precisionconference.com",
	"email2": "msb@cs.stanford.edu",
	"email-content": "She could have died hereafter; 
	There would have been a time for such a 
	word. Tomorrow, and tomorrow, and
	tomorrow, Creeps in this petty pace from 
	day to day, To the last syllable of 
		..."
},
callbackFunction);
*/