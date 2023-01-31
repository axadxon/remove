$(document).ready(function () {
    var $inp = $('.form-control')
    var $btn = $('.btn')
    var $list = $('.list-group')

    $btn.click(function () {
        var $val = $inp.val()
        $inp.val("");
        $list.append(`<li>${$val} <button class="btn-close">X</button> </li>`);
      
    })

    $list.on('click', '.btn-close', function () {
        $(this).parent().remove()
    })


});