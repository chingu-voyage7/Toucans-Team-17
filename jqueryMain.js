// Email validation method
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// SignUp/Login
$("#submit").click(function() {
  var errorMessage = "";
  var fieldsMissing = "";

  if ($("#email").val() == "") {
    fieldsMissing += "<br>Email";
  }

  if ($("#password").val() == "") {
    fieldsMissing += "<br>Password";
  }

  if (fieldsMissing != "") {
    errorMessage += "The following field(s) are missing:" + fieldsMissing;
  }

  if (isEmail($("#email").val()) == false) {
    errorMessage += "<p>Your email address is not valid</p>";
  }

  if (errorMessage != "") {
    $("#errorMessage").html(errorMessage);
  } else if ($("#entryinput").val() != "" || $("#internalList").has(".listItem").length !== 0) {
    alert("Success! Your list is saved.");
    var email = $("#email").val();
    var userName   = email.substring(0, email.lastIndexOf("@"));
    $("#login").html("Hi, " + userName + "!");
    $("#password").val("");
    $("#email").val("");
  } else {
    var email = $("#email").val();
    var userName   = email.substring(0, email.lastIndexOf("@"));
    $("#login").html("Hi, " + userName + "!");
    $("#password").val("");
    $("#email").val("");
    $("#errorMessage").hide();
    alert("Success!");
  }
});

// Todo-list
function deleteLi(Li) {
  $(Li)
    .parent()
    .parent()
    .remove();
}

$("#entryinput").keydown(function(e) {
  if (e.which === 13) {
    e.preventDefault();
    $("#internalList").append(
      $('<li class="listItem">').text($("#entryinput").val())
    );
    $(`<div class="todo-btns">
               <button class="delete-btn" onclick="deleteLi($(this))">Delete</button>
            </div>`).appendTo(".listItem:last-child");
    $("#entryinput").val("");
  }
});

// Get Started Button
$("#getStarted").click(function() {
  $("#largeModal").modal("show");
});

$("#add").click(function() {
  if ($("#entryinput").val() == "" && $("#internalList").has(".listItem").length === 0) {
     alert("Please enter your resolutions!");
  } else if ($("#login").html() != "Sign Up") {
    alert("Your list is saved!");
    $("#largeModal").modal("hide");
  } else {
    $("#largeModal").modal("hide");
    $("#myModal").modal("show");
  }
});

// My modal
$("#myModal a").click(function() {
  $("#myModal").modal("hide");
});

/* To change navbar color on scroll:
$(document).ready(function(){
     $(window).scroll(function() { // check if scroll event happened
       if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
         $(".fixed-top").css("background-color", "#343A40"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
       } else {
         $(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
       }
     });
   });
*/
