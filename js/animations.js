$(document).ready(function() {
    // When the user clicks on the textarea, the textarea should double in size
    // and the character count and Tweet buttons should be revealed.
    $('.tweet-compose').on('click',function() {
      $(this).css({height:'5em'});
      $('#char-count').css('display','inline-block');
      $('#tweet-submit').css('display','inline-block');
    });


});
