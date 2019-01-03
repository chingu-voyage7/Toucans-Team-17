
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
              }

           });

           function deleteLi(Li){
            $(Li).parent().parent().remove()
        }
        function completeLi(Li){
            $(Li).parent().parent().addClass("completed")
        }
        $('#entryinput').keydown(function(e){
            if (e.which === 13) {
            e.preventDefault();
            $('#internalList').append($('<li class="upasana">').text($("#entryinput").val()))
            $(`<div class="todo-btns">
               <button class="complete-btn" onclick="completeLi($(this))">Complete</button>
               <button class="delete-btn" onclick="deleteLi($(this))">Delete</button>
            </div>`).appendTo(".upasana:last-child")
            $('#entryinput').val('')
          }
        });

        $("#submit").click(function(){
          $("#myModal").modal('show');
        });

        $("#add").click(function() {
          $("#largeModal").modal('show');
        });


// $("#myModal").modal('hide');
