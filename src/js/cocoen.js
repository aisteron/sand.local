// plugin before / after
document.addEventListener("DOMContentLoaded", function(event) {
	if(document.querySelector('.cocoen')) loadCocoen()
})

function loadCocoen() {

	let stack = [
			'/vendor/cocoen.min.js',
			'/vendor/loadcss.js'
		]

	loadIt()	

	function loadIt() {


		if(stack.length > 0) {
			let nextLib = stack.shift();

			let scriptsArea = document.querySelector('.scripts-area');
			let scriptTag = document.createElement('script');
			scriptTag.src = nextLib
			scriptsArea.appendChild(scriptTag);

			scriptTag.onload = () => loadIt()

		} else {
			let stylesheet = loadCSS( "/vendor/cocoen.min.css" );
			onloadCSS( stylesheet, function() {
				console.log( "cocoen styles loaded" );
				new Cocoen(document.querySelector('.cocoen'));
			});
		}

		


	}	
}