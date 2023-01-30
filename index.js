var isPopUpOpen = false;
popupToggler = function (popupName) {
    var popup = document.getElementsByClassName(popupName);
    var content = document.getElementsByClassName("content");
    if (!isPopUpOpen) {
        popup[0].style.display = "block";
        content[0].style.display = "none"
        isPopUpOpen = true;
    }
    else {
        popup[0].style.display = "none";
        content[0].style.display = "block"
        isPopUpOpen = false;
    }
}

contentToggleHandler = function (content) {
    hideAllContent();
    showSingleContent(content);
}

hideAllContent = function () {
    var contentDivs = document.getElementsByClassName('content-div');
    for (let i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = 'none'
    }
}

showSingleContent = function (id) {
    var contentDiv = document.getElementById(id);
    $("#" + id).fadeIn("slow");
}


var i = 0;
var txt = 'Satya Prakash Nandy';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("myName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();