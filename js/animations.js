$(document).ready(function() {
    // When the user clicks on the textarea, the textarea should double in size
    // and the character count and Tweet buttons should be revealed.
    var $tweetCompose = $('tweet-compose');
    $('.tweet-compose').on('click',function() {
      $(this).css({height:'5em'});
      $('#char-count').css('display','inline-block');
      $('#tweet-submit').css('display','inline-block');
    });

    // As the user types the character count should decrease.
    // Once it hits 10 character or less the count should turn red
    $('.tweet-compose').on('keyup', function() {
        var $tweetCharCount = 140 - $('.tweet-compose').val().length;
        console.log($tweetCharCount);
        $('#char-count').text($tweetCharCount);
        $tweetCharCount < 6 ? $('#char-count').css('color','red') : $('#char-count').css('color','black');


    })
});
