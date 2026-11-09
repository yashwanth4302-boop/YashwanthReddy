
// comment-form.js - show thank you message then hide after 3s
document.addEventListener('DOMContentLoaded', function(){
  var sendBtn = document.getElementById('commentSend');
  var thanks = document.getElementById('commentThanks');
  var nameInput = document.getElementById('commentName');
  var msgInput = document.getElementById('commentMessage');
  if(!sendBtn) return;
  sendBtn.addEventListener('click', function(e){
    e.preventDefault();
    // simple validation: message not empty
    if (msgInput && msgInput.value.trim().length === 0) {
      msgInput.focus();
      msgInput.style.boxShadow = '0 8px 20px rgba(255,0,0,0.12)';
      setTimeout(function(){ msgInput.style.boxShadow = ''; }, 900);
      return;
    }
    if (thanks) {
      thanks.style.display = 'inline-block';
      setTimeout(function(){ thanks.style.opacity = 1; }, 10);
      // hide after 3 seconds
      setTimeout(function(){
        thanks.style.opacity = 0;
        setTimeout(function(){ thanks.style.display = 'none'; }, 350);
      }, 3000);
      // clear inputs
      if(nameInput) nameInput.value='';
      if(msgInput) msgInput.value='';
    }
  });
});
