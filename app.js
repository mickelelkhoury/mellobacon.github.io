let header = document.querySelector('.navbar');
let myname = document.querySelector('.myname');
window.addEventListener('scroll', function () {
	header.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', function () {
	myname.classList.toggle('pad', window.scrollY > 0);
});
