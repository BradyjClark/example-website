const h1 = document.querySelector('h1')
h1.textContent = "Brady's Awesome Webpage!"

const copyright = document.querySelector('footer p')
copyright.textContent = "BLA"

const link = document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration = "underline"

const contractLink = document.querySelector('#contact')
contractLink.style.fontWeight = "bold"
contractLink.style.border = "2px #ff0000 ridge"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display = 'none')