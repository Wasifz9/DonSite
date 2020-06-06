
function handlerIn(e) {
    var target = $(e.target);
    target.parent().parent().css('border-bottom', '1px solid #1ad1cb');
}

function handlerOut(e) {
    var target = $(e.target);
    var targetContainer = target.parent().parent();

    if (!targetContainer.hasClass('active-page')) {
        targetContainer.css('border-bottom', '0');
    }
}

$('.link-tag').hover(handlerIn, handlerOut)
  