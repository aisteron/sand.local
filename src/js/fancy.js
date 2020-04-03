// инициализация галереи fancybox на странице услуг
document.addEventListener("DOMContentLoaded", function(event) {
	
	if(document.querySelector('.service-items.fancy')){

		setTimeout(()=>{
			loadFancy()	
		}, 1000)
		
	}

})


 function loadFancy() {

 	let stack = [
			'/vendor/jquery.min.js',
			'/vendor/jquery.fancybox.min.js',
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
			let stylesheet = loadCSS( "/vendor/jquery.fancybox.min.css" );
			onloadCSS( stylesheet, function() {
				console.log( "fancybox styles loaded" );
			});
		}

		


	}	


 }