import React, { useEffect } from 'react'

const MessengerChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      // FB.init({
      //   xfbml: true,
      //   version: 'v16.0'
      // });
    };
    (function (d, s, id) {
      var js,
      fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="104074335938384"
      ></div>
    </div>
  );
}

export default MessengerChat