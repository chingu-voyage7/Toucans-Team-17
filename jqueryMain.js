function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#getStarted").click(function() {
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
  } else {
    var userName = $("#email").val();
    $("#login").html("Hi, " + userName + "!");
    $("#password").val("");
    $("#email").val("");
    $("#errorMessage").hide();
    alert("Congratulations, you did it!");
  }
});

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
      $('<li class="upasana">').text($("#entryinput").val())
    );
    $(`<div class="todo-btns">
               <button class="delete-btn" onclick="deleteLi($(this))">Delete</button>
            </div>`).appendTo(".upasana:last-child");
    $("#entryinput").val("");
  }
});

$("#add").click(function() {
  $("#largeModal").modal("show");
});

$("#submit").click(function() {
  if ($("#internalList").has(".upasana").length === 0) {
    alert("Please enter your resolutions!");
  } else {
    $("#largeModal").modal("hide");
    $("#myModal").modal("show");
  }
});

$("#myModal a").click(function() {
  $("#myModal").modal("hide");
});

// $("#myModal").modal('hide');
