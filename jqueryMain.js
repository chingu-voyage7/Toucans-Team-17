
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


               if (fieldsMissing != "") {

                   errorMessage += "The following field(s) are missing:" + fieldsMissing;
               }

               if (isEmail($("#email").val()) == false) {

                  errorMessage += "<p>Your email address is not valid</p>";

              }

              if (errorMessage != "") {

                  $("#errorMessage").html(errorMessage);

              } else {
                  $('#myModal').modal('show')
              }

              $("#save").click(function() {
                if ($("#password").val() != "") {
                 $("#myModal").modal('hide');
                 var userName = $("#email").val();
                 $("#signUp").html("Hi, " + userName + "!");
                 $("#password").val("");
                 $("#email").val("");
                 e.preventDefault();
             }

            })

           });

        function deleteLi(Li){
            $(Li).parent().parent().remove()
        }
        function completeLi(Li){
            $(Li).parent().parent().addClass("completed")
        }
        $('#submit').click(function(event){
          // if (userName === 0) {
          // 
          // }
            $('#internalList').append($('<li class="upasana">').text($("#entryinput").val()))
            $(`<div class="todo-btns">
               <button class="complete-btn" onclick="completeLi($(this))">Complete</button>
               <button class="delete-btn" onclick="deleteLi($(this))">Delete</button>
            </div>`).appendTo(".upasana:last-child")
            $('#entryinput').val('')
        });
