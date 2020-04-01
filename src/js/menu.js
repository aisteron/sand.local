window.onload = () => {
	
	let menu = document.querySelector('.undermenu');
	let open = false;
	
	menu.querySelector('img').addEventListener('click', (e) => {

		if(!open) {
			menu.querySelector('.inner').style.display = 'block'
			e.target.setAttribute('src', '/assets/img/menu-close.svg')
			open = true
		} else{
			menu.querySelector('.inner').style.display = 'none'
			e.target.setAttribute('src', '/assets/img/menu-open.svg')
			open = false
	}
	})
}