<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ url('css/bootstrap.min.css') }}">

    <title>ORI HUT</title>
  </head>
  <body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#"><h1>PKLMovies</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
    </header>

    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center">Search Movies</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Movie title.." id="movie-search">
                    <div class="input-group-append">
                        <button class="btn btn-dark" type="button" id="search-button">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="row mt-3" id="movie-list">

        </div>
    </div>


  <!-- Modal -->
  

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="{{ url('js/jquery-3.6.0.js') }}"></script>
    <script src="{{ url('js/popper.min.js') }}"></script>
    <script src="{{ url('js/bootstrap.min.js') }}"></script>
    <script src="{{ url('js/script.js') }}"></script>
  </body>
</html>