const container = document.querySelector('.carousel-container');
            const prevBtn = document.querySelector('.carousel-prev');
            const nextBtn = document.querySelector('.carousel-next');
            let currentIndex = 0;

            nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % 2;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
            });

            prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + 2) % 2;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
            });