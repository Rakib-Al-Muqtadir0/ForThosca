//for first carousel
$(document).ready(function () {
    // Initialize Owl Carousel
    $(".carousel-1").owlCarousel({
        dots: true,
        loop: true, // Infinite loop
        margin: 10, // Margin between items
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 4000, // Autoplay interval in milliseconds
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1 // Number of items to display on small screens
            },
            768: {
                items: 1 // Number of items to display on medium screens
            },
            1024: {
                items: 1 // Number of items to display on large screens
            }
        }
    });
});

//first big caroudel slider ends

$(document).ready(function () {
    // Initialize Owl Carousel
    $(".carousel-2").owlCarousel({
        dots: false,
        nav: true,
        navText: ["<div class='custom-owl-prev'><i class='fa-solid fa-arrow-left' style='color: #24334c;'></i></div>",
            "<div class='custom-owl-next'><i class='fa-solid fa-arrow-right' style='color: #000000;'></i></div>"],
        autoWidth: false,
        loop: false, // Infinite loop
        margin: 15, // Margin between items
        autoplay: false, // Autoplay the carousel
        autoplayTimeout: 4000, // Autoplay interval in milliseconds
        
        responsive: {
            0: {
                items: 2, // Number of items to display on small screens
            },

            820: {
                items: 3,// Number of items to display on medium screens
            },
            1024: {
                items: 4 // Number of items to display on large screens
            }
        }
    });
});

//for mix product
$(document).ready(function () {


    // Hide all image sections initially
    $('.image-section').hide();


    // Set the default selected option
    $('#imageSelector').val('section1');
    // Show the default image section
    $('#section1').show();



    // Listen for changes in the select element
    $('#imageSelector').on('change', function () {
        // Get the selected option value
        var selectedSection = $(this).val();

        // Hide all image sections
        $('.image-section').hide();

        // Show the selected image section
        $('#' + selectedSection).show();
    });
});

    $(document).ready(function() {
        // Function to update font size of selected option
        function updateSelectedOptionFontSize() {
            var selectedOption = $('#imageSelector option:selected');
            selectedOption.css('font-size', '20px'); // Adjust the desired font size
        }

        // Initially set the font size for the selected option
        updateSelectedOptionFontSize('font-size', '10px');

    // Listen for changes in the select element
        $('#imageSelector').on('change', function() {
        // Reset font size for all options
            $('#imageSelector option').css('font-size', '');

    // Update font size for the selected option
    updateSelectedOptionFontSize();
        });
    });

