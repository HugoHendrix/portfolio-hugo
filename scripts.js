



$(document).ready(function() {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var mobileMenu = $('.mobile-menu');
    var fechaMenu = $('.mobile-menu-close');

    mobileMenuToggle.click(function() {
        var isMenuOpen = mobileMenu.css('right') === '0px';
        mobileMenu.css('right', isMenuOpen ? '-300px' : '0');
    });

    function fechamenu() {
        mobileMenu.css('right', '-300px');
    }

    $(document).on('click', function(event) {
        var target = $(event.target);

        // Fecha o menu se o clique não estiver dentro do menu ou do botão de alternância
        if (!target.closest('.mobile-menu, .mobile-menu-toggle').length) {
            fechamenu();
        }
    });

    fechaMenu.click(fechamenu);

    mobileMenu.click(function(event) {
        event.stopPropagation();
    });
});
