FB.getLoginStatus(function(response) {
    alert(response.status)
});

/*
FB.api(
    '/me/posts',
    'GET',
    {"fields":"message,full_picture,created_time"},
    function(response) {
        alert(response);
    }
);
*/
