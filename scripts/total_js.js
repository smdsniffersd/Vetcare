



/* dropdownMenu */
            document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const dropdownMenu = document.getElementById('dropdownMenu');
            
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation(); // Предотвращаем всплытие события
                dropdownMenu.classList.toggle('show');
                menuToggle.style.display = 'none';
            });
            
            // Закрываем меню при клике вне его области
            document.addEventListener('click', function() {
                dropdownMenu.classList.remove('show');
                menuToggle.style.display = 'block';
            });
            
            // Предотвращаем закрытие меню при клике внутри него
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });


/* progress-wrap */
document.addEventListener('DOMContentLoaded', () => {
    const progressWrap = document.querySelector('.progress-wrap');
    const progressPath = document.querySelector('.progress-circle path');
    const pathLength = progressPath.getTotalLength();
    
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollPercent = scrollY / (docHeight - windowHeight);
        const offset = pathLength - (scrollPercent * pathLength);
        
        progressPath.style.strokeDashoffset = offset;
        
        if (scrollY > 100) {
            progressWrap.classList.add('active-progress');
        } else {
            progressWrap.classList.remove('active-progress');
        }
    });
    
    progressWrap.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


/* carousel */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (container && prevBtn && nextBtn) { // Проверка на существование элементов
        let currentIndex = 0;

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % 4;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + 4) % 4;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    } else {
        console.error('Элементы карусели не найдены!');
    }
});

/* Chat */
    document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const chatBody = document.getElementById('chat-body');

  // Открыть/закрыть чат
  chatButton.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
  });

  closeChat.addEventListener('click', function() {
    chatWindow.style.display = 'none';
  });

  // Отправка сообщения
  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = message;
      chatBody.appendChild(userMessage);
      userInput.value = '';

      // Прокрутка вниз
      chatBody.scrollTop = chatBody.scrollHeight;

      // Имитация ответа оператора (можно заменить на реальный API)
      setTimeout(() => {
        const operatorMessage = document.createElement('div');
        operatorMessage.className = 'message operator';
        operatorMessage.textContent = 'Thanks for the message! We will respond to you as soon as possible.';
        chatBody.appendChild(operatorMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  }

  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const loginOverlay = document.getElementById('loginOverlay');
    const loginForm = document.querySelector('#loginOverlay form'); // выбираем форму внутри overlay
    
    loginBtn.addEventListener('click', function() {
        loginOverlay.style.display = 'flex';
        console.log('11');
    });
    
    cancelBtn.addEventListener('click', function() {
        loginOverlay.style.display = 'none';
    });
    
    // Закрытие при клике вне окна
    loginOverlay.addEventListener('click', function(e) {
        if (e.target === loginOverlay) {
            loginOverlay.style.display = 'none';
        }
    });
    
    // Обработчик отправки формы
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // отменяем стандартную отправку формы
    
        window.location.href = "user_account.html";

    });
});