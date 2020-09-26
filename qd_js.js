$(document).ready(function() {

	
		// when move mode
		$(".listMode").click(function(){
			$(".listMode").toggleClass("active")
			$("body").toggleClass("dark")
		});

		//  ##################################################################



		// when click displays passed or failed or total
		$(".blue").click(function(){
			$("div.testCase.passed").removeClass("nonactive")
			$("div.testCase.failed").removeClass("nonactive")

			$("div.testCase.passed").removeClass("active")
			$("div.testCase.failed").removeClass("active")
			scrollToListOfScenarios()

		});

		$(".green").click(function(){
			$("div.testCase.passed").removeClass("nonactive")
			$("div.testCase.failed").removeClass("nonactive")

			$("div.testCase.passed").toggleClass("active")
			$("div.testCase.failed").toggleClass("nonactive")
			scrollToListOfScenarios()
		});

		$(".red").click(function(){
			$("div.testCase.passed").removeClass("nonactive")
			$("div.testCase.failed").removeClass("nonactive")

			$("div.testCase.passed").toggleClass("nonactive")
			$("div.testCase.failed").toggleClass("active")
			scrollToListOfScenarios()
		});

		function scrollToListOfScenarios() {
			window.scrollTo(0,document.querySelector(".listOfScenarios").scrollHeight);
		}

		// ##################################################################
		// when click displays info services

		$(".buttonInfoServices").click(function(){
			$(".infoTestCase").toggleClass("active")
		});

});

