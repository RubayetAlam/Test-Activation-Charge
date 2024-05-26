document.addEventListener('DOMContentLoaded', (event) => {
    const cat1Radios = document.querySelectorAll('input[name="rate-cat1"]');
    const otherCategories = ['rate-cat2', 'rate-cat3'];
  
    cat1Radios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          copyToOtherCategories(radio.value);
        }
      });
    });
  
    function copyToOtherCategories(selectedValue) {
      otherCategories.forEach(category => {
        const radios = document.querySelectorAll(`input[name="${category}"]`);
        radios.forEach(radio => {
          if (radio.value === selectedValue) {
            radio.checked = true;
          }
        });
      });
    }
  });
  