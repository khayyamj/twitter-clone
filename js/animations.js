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
          var $tweetText = $('.tweet-compose').val();
          console.log($tweetText);
          $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg"/><strong class="fullname">My BFF</strong><span class="username">@mybff</span><p class="newTweet-text">Today is an amazing day.</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets">  <p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p>  </div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div>');
          $('.newTweet-text').text($tweetText).removeClass('newTweet-text').addClass('Tweet-text');
          $('.tweet-compose').css({height:'2.5em'}).val('').attr('placeholder','Compose new Tweet...');
          $('#char-count').text('140');
        });

    // Reveal Reply, Retweet, Favorite & More on Hover only
        $('.icon').css('display','none');
        $('div .content').mouseenter(function() {
          console.log(this);
            $('.icon').css('display','inline-block');

        })
        .mouseleave(function() {
          console.log(this);
            $('.icon').css('display','none');
        });


});
