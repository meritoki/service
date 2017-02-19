$(document).ready(function() {
  $("message-form").submit(function(e){
    var form = $(this);
    $.ajax({
         url   : form.attr('action'),
         type  : form.attr('method'),
         data  : form.serialize(), // data to be submitted
         success: function(response){
            alert(response); // do what you like with the response
         }
    });
    return false;
 });
  $("input[type='button'].button#send").click(function(event) {
    var u = $("input[name='url']").val();
    var idUser = $("input[name='iduser']").val();
    var idInstruction = $(this).attr("name");
    var idProcedure = $("input[name='idprocedure']").val();
    var comment = $("textarea[name='" + idInstruction + "-textarea']").val();
    if (typeof(idUser) === 'undefined') {
      if (typeof(idInstruction) !== undefined && typeof(idProcedure) !== undefined) {
        var path = "/procedure/" + idProcedure + "/instruction/" + idInstruction + "/comment";
        $.ajax({
          type: 'POST',
          url: u + path,
          dataType: "json",
          data: {
            comment: comment
          },
          xhrFields: {
            withCredentials: true
          },
          success: function(data) {
            if (data.success) {
              alert("Comment Saved", "comment-alert");
            } else {
              alert("Comment Save Failure", "comment-alert");
            }
          }
        });
      }
    } else {
      alert("Comment Saved", "comment-alert");
    }
  });

  $("input[type='button'].button#test").click(function(event) {
    var u = $("input[name='url']").val();
    var idUser = $("input[name='iduser']").val();
    var idInstruction = $(this).attr("name");
    var idProcedure = $("input[name='idprocedure']").val();
    var comment = $("textarea[name='" + idInstruction + "-textarea']").val();
    if (typeof(idUser) === 'undefined') {
      if (typeof(idInstruction) !== undefined && typeof(idProcedure) !== undefined) {
        var path = "/procedure/" + idProcedure;
        $.ajax({
          type: 'POST',
          url: u + path,
          dataType: "json",
          data: {
            comment: comment
          },
          xhrFields: {
            withCredentials: true
          },
          success: function(data) {
            if (data.success) {
              alert("Comment Saved", "comment-alert");
            } else {
              alert("Comment Save Failure", "comment-alert");
            }
          }
        });
      }
    } else {
      alert("Comment Saved", "comment-alert");
    }
  });
});
