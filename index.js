
//   document.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll(".stats__number");
//     counters.forEach(counter => {
//       const target = +counter.getAttribute("data-target");
//       let count = 0;
//       const update = () => {
//         const increment = target / 100; // speed
//         if (count < target) {
//           count += increment;
//           counter.textContent = Math.floor(count) + (target === 142 ? '+' : '%');
//           requestAnimationFrame(update);
//         } else {
//           counter.textContent = target + (target === 142 ? '+' : '%');
//         }
//       };
//       update();
//     });
//   });


  
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats__number");
  let hasRun = false; // prevent re-triggering

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const step = target / 100; // speed factor
      const update = () => {
        if (count < target) {
          count += step;
          // add + or % depending on the target
          counter.textContent = Math.floor(count) + (target === 142 ? '+' : '%');
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + (target === 142 ? '+' : '%');
        }
      };
      update();
    });
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        runCounters();
        obs.disconnect(); 
      }
    });
  }, { threshold: 0.5 }); 

  observer.observe(document.querySelector(".stats"));
});



// FAQ Accordion Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
          // Close all other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current item
          item.classList.toggle('active');
        });
      });
    });