export function testimonialSlider() {

  const testimonials = [
    {
      name: `Sarah Jones`,
      role: `Marathon runner`,
      imgSrc: `./assets/images/customer01.jpg`,
      review: `Since using your protein powder, I've noticed a significant improvement in my muscle recovery time. I can train harder and more consistently, which is helping me reach my fitness goals faster!`
    },
    {
      name:`David Lee`,
      role: `Gymnast`,
      imgSrc: `./assets/images/customer02.jpg`,
      review: `I was struggling with fatigue during my workouts, but after trying your pre-workout drink, I have so much more energy. The taste is fantastic too!`
    },
    {
      name:`Lisa Rodriguez`,
      role: `CrossFit athlete`,
      imgSrc: `./assets/images/customer03.jpg`,
      review: `Your sports nutrition products have been a game-changer for me. The natural ingredients give me peace of mind, and the formulas are clearly effective. I feel stronger and more confident in my training.`
    },
    {
      name:`Michael Chen`,
      role: `Amateur runner`,
      imgSrc: `./assets/images/customer04.jpg`,
      review: `These new running shoes are incredible! They provide amazing support and feel so lightweight, helping me shave minutes off my personal best.`
    },
    {
      name:`Sarah Rodriguez`,
      role: `High school softball player`,
      imgSrc: `./assets/images/customer05.jpg`,
      review: `I was skeptical about trying a new baseball bat, but the one I got from your store has completely changed my game. I'm hitting with more power and confidence now.`
    },
  ]

  const sliderBody = document.querySelector('.testimonial-slider__body')

  function carousel(testimonials, sliderBody) {
  
    let currentSlide = 0;
  
    function createTestimonialCard(testimonial) {
      const template = document.querySelector('.testimonial-card-template');
      const card = template.content.cloneNode(true).querySelector('.testimonial');
  
      card.querySelector('.testimonial__img img').src = testimonial.imgSrc;
      card.querySelector('.testimonial__paragrapth_name').textContent = testimonial.name;
      card.querySelector('.testimonial__paragrapth_role').textContent = testimonial.role;
      card.querySelector('.testimonial__paragrapth_review').textContent = testimonial.review;
  
      return card;
    }
  
    function showTestimonial(index) {
      sliderBody.innerHTML = '';
      sliderBody.appendChild(createTestimonialCard(testimonials[index]));
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showTestimonial(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentSlide);
    }

    const pagination = document.querySelector('.testimonial-slider__dots')

    function updatePagination() {
      pagination.querySelectorAll('.pagination-dot').forEach(dot => {
        dot.classList.remove('pagination-dot_active');
      });
      pagination.querySelector(`[data-slide-index="${currentSlide}"]`).classList.add('pagination-dot_active');
    }

    function createPaginationDot(index) {
      const dot = document.createElement('button');
      dot.classList.add('pagination-dot');
      dot.dataset.slideIndex = index; 
      dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.slideIndex, 10);
        showTestimonial(currentSlide);
        updatePagination();
      });
  
      return dot;
    }

    testimonials.forEach((_, index) => {
      pagination.appendChild(createPaginationDot(index));
    });
  
    const nextButton = document.querySelector('.next-btn_right');
    const prevButton = document.querySelector('.next-btn_left');
  
    nextButton.addEventListener('click', () => {
      nextSlide()
      updatePagination()
    }) 

    prevButton.addEventListener('click', () => {
      prevSlide()
      updatePagination()
    });
  
    updatePagination();

    showTestimonial(currentSlide);
  }
  
  carousel(testimonials, sliderBody)

}