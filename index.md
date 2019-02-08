<html>
  
  <head>
    {% if site.google_verify %}
      <meta name="google-site-verification" content="{{ site.google_verify }}">
    {% endif %}
    
    <title> comp3121 </title>
    <script type="text/javascript">
      var queryString = window.location.search.slice(1);
      // if query string exists
      if (queryString) {
        qString = queryString.split('q=')[1].split('&')[0];
        alert(qString);
      }
    </script>
  </head>
  
  <body>
    <a href="goal.html"> goal </a>
    <p> TBD </p>
  </body>

</html>
