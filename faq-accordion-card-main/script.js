const faqItems = document.getElementsByClassName('faq-item')

for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener('click', e => {
    console.log(faqItems[i])
    e.currentTarget.children[0].children[1].classList.toggle('rotated')
    e.currentTarget.children[0].children[0].classList.toggle('bold')
    if (e.currentTarget.children[1].style.display === 'block') {
      e.currentTarget.children[1].style.display = 'none'
    } else {
      e.currentTarget.children[1].style.display = 'block'
    }
  })
}
// s
