// Some general UI pack related JS

$(function () {
    // Custom selects
    $("select").dropkick();
});

$(document).ready(function() {
    // Todo list
    $(".todo .todo-content").click(function() {

        var $this = $(this);

        $('.todo-done').removeClass('read');


        $this.parent('li').toggleClass("todo-done");

        if ($this.next('.tooltip').length && $(this).parent('li').hasClass('todo-done')) {
            $(this).parent('li').addClass('read');
            $this.next('.tooltip').addClass('bounceInDown').css('display','block');

        var modal = $('<div/>', {
            class: 'modal-bg',
            click: function() {
                $(this).fadeOut(500, function(){$(this).remove();});
                $('.tooltip:visible').css('display', 'none');

                
            }
            }).appendTo('body');

        }   

    });

    // Init tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Init tags input
    $("#tagsinput").tagsInput();

    // Init jQuery UI slider
    $("#slider").slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min",
    });

    // JS input/textarea placeholder
    $("input, textarea").placeholder();

    // Make pagination demo work
    $(".pagination a").click(function() {
        if (!$(this).parent().hasClass("previous") && !$(this).parent().hasClass("next")) {
            $(this).parent().siblings("li").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

    $(".btn-group a").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    // Disable link click not scroll top
    $("a[href='#']").click(function() {
        return false
    });

    $('.close-btn').on('click',function() {
        $('.modal-bg').trigger('click');
    });

});

