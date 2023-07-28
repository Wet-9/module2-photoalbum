  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Get all nav links
  var navLinks = document.getElementsByClassName('nav-link-item');

  // Loop through the nav links and check if the href matches the current URL
  for (var i = 0; i < navLinks.length; i++) {
      var linkUrl = navLinks[i].getAttribute('href');
      if (currentPageUrl.includes(linkUrl)) {
          navLinks[i].classList.add('active'); // Add "active" class to the matched link
      }
  }

  $(document).ready(function() {
    // Add border to images and style titles
    $(".grid-img").css("border", "2px solid black");
    $("h3").css({"font-family": "Arial, sans-serif","color": "white"
    });
    $(".col-md-4").css({"border": "2px solid white", "box-sizing": "border-box"});
    $(".content").css("margin-top", "10px")
  });

// Hide error initially
$(document).ready(function() {
    $(".error").hide(); // Hide the error messages initially
    $(".btn").hide();

    $("#username").focusout(function() {
        validateusername();
        checkFormValidity();
    });

    $("#title").focusout(function() {
        validatetitle();
        checkFormValidity();
    });

    $("#comment").focusout(function() {
        validatecomment();
        checkFormValidity();
    });
});

function validateusername() {
    var username = $("#username").val();
    if (username.length < 6 || username.trim() === "") {
        $("#usernameError").text("Username has to be at least 6 characters long.");
        $(".error").show();
    } else {
        $("#usernameError").hide();
    }
}

function validatetitle() {
    var imagetitle = $("#title").val();
    if (imagetitle.trim() === "") {
        $("#titleError").text("Image title cannot be empty");
        $(".error").show();
    } else {
        $("#titleError").hide();
    }
}

function validatecomment() {
    var usercomment = $("#comment").val();
    if (usercomment.trim() === "") {
        $("#commentError").text("Comment cannot be empty.");
        $(".error").show();
    } else {
        $("#commentError").hide();
    }
}

$("btn").hide();

function checkFormValidity() {
    if ($("#username").val().length >= 6 &&
        $("#username").val().trim() !== "" &&
        $("#title").val().trim() !== "" &&
        $("#comment").val().trim() !== "") {
        $(".btn").show();
    } else {
        $(".btn").hide();
    }
}