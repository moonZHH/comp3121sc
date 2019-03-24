FB.api(
    "/564897400669317/feed",
    function (response) {
      if (response && !response.error) {
        alert(response);
      }
    }
);
