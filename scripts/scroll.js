// This is not used yet. To-Do, remove inline scripts and add content security policy.

function loadPage() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 900, 'swing', function () {
            window.location.hash = target - 100;
        });
    });
}