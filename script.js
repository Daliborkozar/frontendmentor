const price = document.querySelector('.price')
const views = document.querySelector('.views')
const slider = document.querySelector('.slider')
const yearBilling = document.querySelector('#toggle');

slider.addEventListener('input', handler)
yearBilling.addEventListener('change', setPrice)


function setPrice() {
    price.innerHTML =
      slider.value == 0 
      ? `<span>Free</span>`
      : `<span>$${yearBilling.checked ? (slider.value * 0.75).toFixed(2)
            : Number(slider.value).toFixed(2)
        }</span> / month`;
          
    views.textContent = 
        slider.value == 0 
        ? `1k PAGEVIEWS` : `${slider.value * 5}K PAGEVIEWS`;
  };

  handler()

  function handler() {
    setPrice()
    
    let thumbPosition = Math.trunc((slider.value * 100) / 75);
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}%, hsl(224, 65%, 95%) ${thumbPosition}%)`
  }
  