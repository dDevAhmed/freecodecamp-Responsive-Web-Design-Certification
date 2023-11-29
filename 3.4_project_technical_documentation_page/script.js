window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});


// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function(i) {
//     // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll - 0) {
//                 $('nav li.active').removeClass('active');
//                 $('nav li').eq(i).addClass('active');
//             }
//         });

//     } else {

//         $('nav li.active').removeClass('active');
//         $('nav li:first').addClass('active');
//     }

//     }).scroll();