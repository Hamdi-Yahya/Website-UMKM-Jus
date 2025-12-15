$(document).ready(function () {

    $('.btn-detail').on('click', function () {
        const targetModal = $(this).data('modal');
        const modalElement = $('#' + targetModal);

        const modal = new bootstrap.Modal(modalElement[0]);
        modal.show();
    });

    $('.card').hover(
        function () {
            $(this).addClass('shadow-lg').css('transform', 'scale(1.05)');
        },
        function () {
            $(this).removeClass('shadow-lg').css('transform', 'scale(1)');
        }
    );

    $('.card-img-top').on('click', function () {
        $(this).closest('.card').find('.btn-detail').click();
    });

});
