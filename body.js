const tongue = document.querySelector('.tongue');
const head = document.querySelector('head');
if (tongue.classList.contains('red') && head.classList.contains('green')) {
  head.parentNode.removeChild(head);
}
