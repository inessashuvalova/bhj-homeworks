'use strict';

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side');

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
})

const msg = document.querySelector('.chat-widget__messages');
const widgetInput = document.querySelector('.chat-widget__input');
widgetInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13 & widgetInput.value !== "") {
        console.log(widgetInput.value);
        msg.innerHTML += `
      <div class="message message_client">
    <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
    <div class="message__text">${widgetInput.value}</div>
</div>`;
        msg.innerHTML += `
<div class="message">
  <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
  <div class="message__text">
    Добрый день, мы ещё не проснулись. Позвоните через 10 лет
  </div>
</div>`;

    }
})
