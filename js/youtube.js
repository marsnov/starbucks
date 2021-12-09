      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
          //<div id="player"></div>
       new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초 재상할 유튜브 영상 ID
          playerVars: {
              autoplay: true, //자동 재생 유무
              loop: true, //반복 재생 유무
              playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
        },
        events: {
          onReady: function (event) {
              event.target.mute() //음소거 : 영상이 준비가 되면 event라는 함수를 실행하는데 그 내용은 음소거 처리 하겠다는 명령
          }
            
        }
        });
      }


      const spyEls = document.querySelectorAll('section.scroll-spy');
      spyEls.forEach(function (spyEl) {
        new ScrollMagic
          .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8, //
          })
          .setClassToggle(spyEl, 'show')
          .addTo(new ScrollMagic.Controller());
      });