 document.addEventListener("DOMContentLoaded", function(event) {
    
    if(window.innerWidth > 470)
    {
    	let span = document.querySelectorAll('.call span')[1];
    	let footerSpan = document.querySelectorAll('footer .phone span')[1];
    	let modal = document.querySelector('.modals');
    	let close = document.querySelector('.modals .callback span.close');

    	span.addEventListener('click', () => {
    		modal.style.display = 'block'
    	})
    	footerSpan.addEventListener('click', () => {
    		modal.style.display = 'block'
    	})

    	close.addEventListener('click', () => {
    		modal.style.display = "none"
    	})

    	window.onclick = function(event) {
    		if (event.target == modal) {
    			modal.style.display = "none";
    		}
    	}


    	submitModal()

    }
 	


  });


 function submitModal() {
    let form = document.querySelector('form.content');
 	form.addEventListener('submit', (e) => {
 		e.preventDefault()
        let data = { phone: form.querySelector('input[type="text"]').value }

        let url = "http://api.local/callback.php"    

        fetch(url, {
             method: "POST",
             mode: 'cors',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(data)   

        })
        .then(response => response.text())
        .then(text => console.log(text))

        
 		
 	})
 }