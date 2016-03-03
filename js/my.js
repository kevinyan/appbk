$(function() {

    // pc 横向导航
    $('.nav li').hover(
        function() {
            $(this).addClass("open");
        },
        function() {
            $(this).removeClass("open");
        });


    //PC 纵向导航
    $('.nav-list li').click(
        function() {
            $(this).toggleClass('open')
        }
    );


    //H5 导航伸缩

    $('.mobile-nav-left').on('click', function() {
        $('body').addClass('with-panel-left-reveal');
        $('.panel-reveal').addClass('active').show();
    })

    $('#app').on('click', function() {
        $('body').removeClass('with-panel-left-reveal');
        $('.panel-reveal').removeClass('active').hide();
    })

    //H5搜索

    $('.mobile-nav-search').on('click', function() {
        $(".mobile-nav-search-form").addClass('active')
    })

    $('.mobile-nav-search-form .btn').on('click', function() {
        $(".mobile-nav-search-form").removeClass('active')
    })
})
