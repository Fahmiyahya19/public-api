function searchMovie(){
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        data: {
            "apikey" : "6c237d11",
            "s"      : $('#movie-search').val()
        },
        dataType: "json",
        success: function (hasil) {
            if (hasil.Response == "True"){
                let movies = hasil.Search;
                // clear search sebelumnya
                $('#movie-list').html(``)
                //
                $.each(movies, function (key, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3 mr-3">
                            <img class="card-img-top" src="`+ data.Poster +`" height="528px" >
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
            }
            else{
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">`+ hasil.Error +`</h1>
                    </div>
                `)
            };
        }
    });
}


$('#search-button').on('click', function(){
    searchMovie();
});

$('#movie-search').on('keyup', function (e){
    if(e.which === 13){
        searchMovie();
    }
});

$('#movie-list').on('click','.detail', function(){
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        data: {
            "apikey" : "6c237d11",
            "i"      : $(this).data('id')
        },
        dataType: "json",
        success: function (movie) {
            if (movie.Response === "True"){
                $('#modal-body').html(`
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="'+ data.Poster +'" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <ul class="list-group">
                                                <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                                <li class="list-group-item"><p>`+ movie.Plot +`</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            }
        }
    });
});