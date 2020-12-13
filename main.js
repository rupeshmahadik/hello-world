const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
const login_form = document.getElementById('login_form')
const login_popup = document.getElementById('login_popup')
const login_close = document.getElementById('login_close')
const signup_form = document.getElementById('signup_form')
const signup_popup = document.getElementById('signup_popup')
const signup_close = document.getElementById('signup_close')

btn.addEventListener('click',()=>{
	nav.classList.toggle('active')
	btn.classList.toggle('active')
})


login_form.addEventListener('click', ()=>{
	login_popup.classList.toggle('active')
	login_form.classList.toggle('active')
})

login_close.addEventListener('click',()=>{
	login_popup.classList.toggle('active')
})

signup_form.addEventListener('click', ()=>{
	signup_popup.classList.toggle('active')
	signup_form.classList.toggle('active')
})  

signup_close.addEventListener('click',()=>{
	signup_popup.classList.toggle('active')
}) 