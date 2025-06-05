document.addEventListener('DOMContentLoaded', function() {
  const mainImageContainer = document.querySelector('.main-image'); // Получаем контейнер с фоном
  const mainImgTextBlock = document.getElementById('main-img'); // Текстовый блок внутри
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Получаем текущий фон контейнера
      const computedStyle = window.getComputedStyle(mainImageContainer);
      const currentBg = computedStyle.backgroundImage;
      
      // Извлекаем URL из значения фона
      const currentBgUrl = currentBg.startsWith('url') 
        ? currentBg.replace(/^url\(["']?|["']?\)$/g, '') 
        : null;

      // Устанавливаем изображение миниатюры как новый фон
      mainImageContainer.style.backgroundImage = `url(${this.src})`;
      this.src = currentBgUrl;

      
      // Обмен alt (если нужно)
      const tempAlt = mainImgTextBlock.alt;
      mainImgTextBlock.alt = this.alt;
      this.alt = tempAlt;
    });
  });
});