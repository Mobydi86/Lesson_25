$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });

  // слайдер в секции Завершенные проекты
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
      
  next.css("left", prev.width() + bullets.width() + 40)
  bullets.css("left", prev.width() + 20)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
      messages: {
        userName: { 
          required: "Имя обязательно",
          minlength: "Слишком короткое имя",
          maxlength: "Имя не должно превышать 15 символов"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате name@domain.com"
        }
      }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userQuestion: {
        required: true,
        minlength: 2
      }
    }, // сообщения
      messages: {
        userName: { 
          required: "Имя обязательно",
          minlength: "Слишком короткое имя",
          maxlength: "Имя не должно превышать 15 символов"
        },
        userPhone: "Телефон обязателен",
        userQuestion: {
          required: "Укажите свой вопрос",
          minlength: "Что вы хотите узнать"
        }
      }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
      // правило-объект (блок)
    }, // сообщения
      messages: {
        userName: { 
          required: "Имя обязательно",
          minlength: "Слишком короткое имя",
          maxlength: "Имя не должно превышать 15 символов"
        },
        userPhone: "Телефон обязателен",
      }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});