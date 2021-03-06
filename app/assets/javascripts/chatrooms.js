$(document).on("turbolinks:load", function() {
  $("#new_message").on("keypress", function(e) {
    if (e && (e.keyCode === 13)) {
      e.preventDefault();
      $(this).submit();
    }
  });
  $("#new_message").on("submit", function(e) {
    var body, chatroom_id;
    e.preventDefault();
    chatroom_id = $("[data-behavior='messages'").data("chatroom-id");
    body = $("#message_body");
    App.chatrooms.send_message(chatroom_id, body.val());
    body.val("");
  });
});