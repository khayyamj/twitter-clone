$(document).ready(function() {
    // When the user clicks on the textarea, the textarea should double in size
    // and the character count and Tweet buttons should be revealed.
    var $tweetCompose = $('tweet-compose');
    $('.tweet-compose').on('click',function() {
      $(this).css({height:'5em'});
      $('#char-count').css('display','inline-block');
      $('#tweet-submit').css('display','inline-block');
      $('.button').attr('disabled','disabled');
    });

    // As the user types the character count should decrease.
    // Once it hits 10 character or less the count should turn red
    $('.tweet-compose').on('keyup', function() {
        var $tweetCharCount = 140 - $('.tweet-compose').val().length;
        $('#char-count').text($tweetCharCount);
        $tweetCharCount < 11 ? $('#char-count').css('color','red') : $('#char-count').css('color','black');

    // If the user puts in more than 140 characters, the tweet
    // button should be disabled (and re-enabled when there are <= 140 chars)

        $tweetCharCount < 0 || $tweetCharCount > 139 ? $('.button').attr('disabled','disabled') : $('.button').removeAttr('disabled');

    });

    // When user clicks "tweet" button the tweet should move to the "Tweets" column
        $('.button').on('click', function() {
          console.log("Tweet Button Clicked");


        });

});
