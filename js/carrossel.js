const testimonialTextElements = document.querySelectorAll('.testimonial-text');

function showTestimonial(index) {
  testimonialTextElements.forEach((element, elementIndex) => {
    element.classList.toggle('hidden', elementIndex !== index);
  });
}

let currentTestimonial = 0; // Assuming initial testimonial is the first one (index 0)

showTestimonial(currentTestimonial); // Initial display

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', () => {
  // Calculate new index for previous testimonial, handling potential negative values
  let newIndex = (currentTestimonial - 1 + testimonialTextElements.length) % testimonialTextElements.length;
  
  // Ensure the new index is within valid range (0 to testimonialTextElements.length-1)
  newIndex = Math.max(0, newIndex); // Set minimum to 0 (first testimonial)

  currentTestimonial = newIndex;
  showTestimonial(currentTestimonial);
});

rightArrow.addEventListener('click', () => {
  // Calculate new index for next testimonial, handling potential overflow
  let newIndex = (currentTestimonial + 1) % testimonialTextElements.length;
  
  // Ensure the new index is within valid range (0 to testimonialTextElements.length-1)
  newIndex = Math.min(testimonialTextElements.length - 1, newIndex); // Set maximum to last element

  currentTestimonial = newIndex;
  showTestimonial(currentTestimonial);
});
