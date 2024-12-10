$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        var formData = $(this).serialize(); // Serialize form data

        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function (response) {
                $('#output').html(response); // Display response
            }
        });
    });
});
