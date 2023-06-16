$('#form-show').hide()

function generateMovieHTML(movie) {
    return `
        <div id="movie-${movie.id}"  class="carousel__card">
          <h3>${movie.title}</h3>
          <p>Rating: ${movie.rating}</p>
          <button id="btnE-${movie.id}" class="edit-movie" data-id="${movie.id}" onclick="movEdt(this.id)">Edit</button>
          <button id="btnD-${movie.id}" class="delete-movie" data-id="${movie.id}" onclick="movDel(this.id)">Delete</button>
        </div>
      `;
}

const moviesURL = 'https://excessive-sulfuric-narwhal.glitch.me/movies';

function loadMovies() {
    $.ajax({
        url: moviesURL,
        type: 'GET',
        success: function(response) {
            var moviesHTML = '';

            response.forEach(function(movie) {
                moviesHTML += generateMovieHTML(movie);
            });
            setTimeout(() => {
                $('#loading').remove();
            }, "2000");
            setTimeout(() => {
                $('.carousel__track').html(moviesHTML);
            }, "2000");

            const track = document.querySelector('.carousel__track');
            const slides = Array.from(track.children);
            const slideWidth = slides[0].getBoundingClientRect().width;

            // Arrange slides next to each other
            slides.forEach((slide, index) => {
                slide.style.left = slideWidth * index + 'px';
            });

            // Move the carousel track to center the current slide
            const moveToSlide = (track, currentSlide, targetSlide) => {
                const trackBounds = track.getBoundingClientRect();
                const targetBounds = targetSlide.getBoundingClientRect();
                const moveToCenter = trackBounds.left + trackBounds.width / 2 - targetBounds.left - targetBounds.width / 2;
                track.style.transform = `translateX(${moveToCenter}px)`;
                currentSlide.classList.remove('current-slide');
                targetSlide.classList.add('current-slide');
            };
            moveToSlide(track, slides[0], slides[3]);
        }
    });
}

$('#add-movie-form').submit(function(event) {
    event.preventDefault();

    var title = $('#title').val();
    var rating = parseInt($('#rating').val());

    $.ajax({
        url: moviesURL,
        type: 'POST',
        data: { title: title, rating: rating },
        success: function(response) {
            var movieHTML = generateMovieHTML(response);
            $('.carousel__track').append(movieHTML);
            $('#add-movie-form')[0].reset();
            loadMovies();
        }
    });
});

function movEdt(id){
    var movieId = id.replace('btnE-', '');
    $.ajax({
        url: `${moviesURL}/${movieId}`,
        type: 'GET',
        success: function(response) {
            var movie = response;

            $('#edit-movie-form input[name="title"]').val(movie.title);
            $('#edit-movie-form input[name="rating"]').val(movie.rating);
            $('#edit-movie-form input[name="movieId"]').val(movie.id);

            $('#form-show').show();
        }
    });
}

$('#edit-movie-form').submit(function(event) {
    event.preventDefault();

    var movieId = $('#edit-movie-form input[name="movieId"]').val();
    var title = $('#edit-movie-form input[name="title"]').val();
    var rating = parseInt($('#edit-movie-form input[name="rating"]').val());

    $.ajax({
        url: `${moviesURL}/${movieId}`,
        type: 'PUT',
        data: { title: title, rating: rating },
        success: function(response) {
            var updatedMovieHTML = generateMovieHTML(response);
            $('.carousel__card[data-id="' + movieId + '"]').replaceWith(updatedMovieHTML);

            $('#form-show').hide();
            loadMovies()
        }
    });
});

function movDel(id) {
    var movieId = id.replace('btnD-', '');
    $.ajax({
        url: `${moviesURL}/${movieId}`,
        type: 'DELETE',
        success: function() {
            $('.carousel__card[data-id="' + movieId + '"]').remove();
            loadMovies()
        }
    });
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

loadMovies();
