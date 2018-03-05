const buttons = $('.tab-container .buttons button'); // finds all buttons
buttons.click(function(event) { // assigns click event handler to buttons
    const clickedIdx = buttons.index(event.target); // detects index of clicked button
    $('.tab-container .tabs div').removeClass('active').eq(clickedIdx).addClass('active'); // finds all tabs, removes class 'active' on all tabs, but add class 'active' to tab with clickedIdx
    buttons.removeClass('active').eq(clickedIdx).addClass('active'); // does same as previous line but for buttons
});

