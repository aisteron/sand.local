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

        let form = document.querySelector('form.content');

    	submitModal(form)

    }
 	


  });


 function submitModal(form) {

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
        //.then(response => response.text())
        //.then(text => console.log(text))
        .then(response => response.text())
        .then(text => {
            drawResult(form, text)
        })

        
 		
 	})
 }


 function drawResult(el, text) {
    
    let string = ``;
    let hasClose = true;

    if(!el.querySelector('span.close')) {
        hasClose = false
    }

    if(text == 'success') {
           string = `
            <span class="close">×</span>
            <img src="/assets/img/success.svg"/>
            <p><b>Успешно отправлено!</b></p>
            <p>Ожидайте звонка менеджера</p>
           `
        
    } else {
        string = `
            <span class="close">×</span>
            <img src="/assets/img/warning.svg"/>
            <p><b>Ошибка отправки!</b></p>
            <p>Пожалуйста, сообщите нам об этом <br><a href="tel:+375333922900">+375 33 392 29 00</p>
           `
    }


    el.style.textAlign = 'center'    
    el.innerHTML = string

    if(hasClose) {
        el.querySelector('span.close').addEventListener('click', () => {
            el.parentNode.parentNode.style.display = "none"
        })
    } else {
        el.querySelector('span.close').remove()
    }
    
 }


/* header form submit*/

 if(document.querySelector('.slider form.right'))
 {
    let form = document.querySelector('.slider form.right');
    submitModal(form)

 }

 /*master lead form*/
 if(document.querySelector('.lead form.right')) {
    let form = document.querySelector('.lead form.right');
    submitModal(form)
 }