'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Ready to Roll");
		//$('.jumbotron p').addClass("active");
		$('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(myClickFunction);
}

function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();

	// in the event handler, $(this) refers to
	// the object that triggered the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0) {
		containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.toggle("fast");
	}
}

function myClickFunction(e) {
	// get Title from Form Field
	var formValueProjectNumber = $(".form-control").val();
	console.log("Form Value Title = " + formValueProjectNumber);

	// get Width from Form Field
	var formValueWidth = $("#width").val();
	console.log("Form Value Width = " + formValueWidth);

	// get discription from From Field
	var formValueDescription = $("#description").val();
	console.log("Form Value Description = " + formValueDescription);

	// Manipulation begins here
	// change width of selected div
	$(formValueProjectNumber).width(formValueWidth);

	// change project description
	$(formValueProjectNumber + " .project-description").text(formValueDescription);
	console.log(formValueProjectNumber + " .project-description");
	var mainStr = $(formValueProjectNumber + " .project-description").text();
	console.log("inner text = " + mainStr);
}