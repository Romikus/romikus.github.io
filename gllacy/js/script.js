//-----------------------------------------------------
// Объявление переменных
//-----------------------------------------------------

var button = document.querySelector(".feedback");
var formModal = document.querySelector(".modal-content");
var layer = document.querySelector(".modal-overlay");
var close = formModal.querySelector(".modal-content-close");
      
var form = formModal.querySelector("form");
var userName = formModal.querySelector("#user-name");
var userEmail = formModal.querySelector("#user-email");

var storageUserName = localStorage.getItem(userName);
var storageUserEmail = localStorage.getItem(userEmail);

var userNameHelp = formModal.querySelector("label[for=user-name]");
var userEmailHelp = formModal.querySelector("label[for=user-email]");

var entryEmail = document.querySelector("#email-entry");
var entryEmailHelp = document.querySelector("label[for=email-entry]");
var entryPassword = document.querySelector("#password-entry");
var entryPasswordHelp = document.querySelector("label[for=password-entry]");

var subsEmail = document.querySelector("#subs-email");
var subsEmailHelp = document.querySelector("label[for=subs-email]");
      
      
if (button) {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    formModal.classList.add("modal-content-show");
    layer.classList.add("modal-overlay-show");
  
    if (storageUserName) {
      userName.value = storageUserName;
      if (storageUserEmail) {
        userEmail.value = storageUserEmail;
      } else {
        userEmail.focus();
      }
    } else {
      userName.focus();
    }
  });
}

if (formModal) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    formModal.classList.remove("modal-content-show");
    formModal.classList.remove("modal-content-error");
    layer.classList.remove("modal-overlay-show");
  });

  form.addEventListener("submit", function(event) {
    if (!userEmail.value) {
      event.preventDefault();
      formModal.classList.remove("modal-content-error");
      formModal.offsetWidth = formModal.offsetWidth;
      formModal.classList.add("modal-content-error");
    } else {
      localStorage.setItem("userEmail", userEmail.value);
    }
    if (userName.value) {
      localStorage.setItem("userName", userName.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (formModal.classList.remove("modal-content-show")) {
        formModal.classList.remove("modal-content-show");
      }
      if (layer.classList.remove("modal-overlay-show")) {
        layer.classList.remove("modal-overlay-show");
      }
    }
    formModal.classList.remove("modal-content-error");
  });

  userName.addEventListener("focus", function(event) {
    userNameHelp.classList.add("ladel-visibility");
    userNameHelp.classList.add("text-blue");
  });
  
  userName.addEventListener("blur", function(event) {
    if (userName.value) {
      userNameHelp.classList.remove("text-blue");
    } else {
      userNameHelp.classList.remove("ladel-visibility");
      userNameHelp.classList.remove("text-blue");
    }
  });
  
  userEmail.addEventListener("focus", function(event) {
    userEmailHelp.classList.add("ladel-visibility");
    userEmailHelp.classList.add("text-blue");
  });
  
  userEmail.addEventListener("blur", function(event) {
    if (userEmail.value) {
      userEmailHelp.classList.remove("text-blue");
    } else {
      userEmailHelp.classList.remove("ladel-visibility");
      userEmailHelp.classList.remove("text-blue");
    }
  });
}

entryEmail.addEventListener("focus", function(event) {
  entryEmailHelp.classList.add("ladel-visibility");
  entryEmailHelp.classList.add("text-blue");
});

entryEmail.addEventListener("blur", function(event) {
  if (entryEmail.value) {
    entryEmailHelp.classList.remove("text-blue");
  } else {
    entryEmailHelp.classList.remove("ladel-visibility");
    entryEmailHelp.classList.remove("text-blue");
  }
});

entryPassword.addEventListener("focus", function(event) {
  entryPasswordHelp.classList.add("ladel-visibility");
  entryPasswordHelp.classList.add("text-blue");
});

entryPassword.addEventListener("blur", function(event) {
  if (entryPassword.value) {
    entryPasswordHelp.classList.remove("text-blue");
  } else {
    entryPasswordHelp.classList.remove("ladel-visibility");
    entryPasswordHelp.classList.remove("text-blue");
  }
});

if (subsEmail) {
  subsEmail.addEventListener("focus", function(event) {
    subsEmailHelp.classList.add("ladel-visibility");
    subsEmailHelp.classList.add("text-blue");
  });
  
  subsEmail.addEventListener("blur", function(event) {
    if (subsEmail.value) {
      subsEmailHelp.classList.remove("text-blue");
    } else {
      subsEmailHelp.classList.remove("ladel-visibility");
      subsEmailHelp.classList.remove("text-blue");
    }
  });
}