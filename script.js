let auto = $('#auto');
let autoWidth = auto.css('width');


$('#up').on('click', ()=>{
    auto.animate({ "margin-top": "-=20px" }, "slow" );
})

$('#down').on('click', ()=>{
    auto.animate({ "margin-top": "+=20px" }, "slow" );
})

$('#left').on('click', ()=>{
    auto.animate({ "margin-left": "-=20px" }, "slow" );
})

$('#right').on('click', ()=>{
    auto.animate({ "margin-left": "+=20px" }, "slow" );
})

$('#zoomIn').on('click', ()=>{
    auto.animate({ "width": "+=20px" }, "slow" );
})

$('#zoomOut').on('click', ()=>{
    auto.animate({ "width": "-=20px" }, "slow" );
})

$('#normal').on('click', ()=>{
    auto.animate({ "width": autoWidth }, "slow" );
})

$('#invisible').on('click', ()=>{
    auto.animate({ 'opacity': "0" }, "slow" );
})

$('#visible').on('click', ()=>{
    auto.animate({ 'opacity': "1" }, "slow" );
})

