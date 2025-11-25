import './style.css'

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Add click handlers for CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! This feature will be available soon.')
  })
})

// Add hover effect for practice cards
document.querySelectorAll('.practice-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)'
  })
})