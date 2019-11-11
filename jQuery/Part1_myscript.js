$('h1').click(function(){
  $(this).text('I was changed...')
})

$('h1').on('dblclick', function(){
  $(this).toggleClass('turnRed')
})

$('li').click(function(){
  $(this).toggleClass('turnBlue')
})

$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue')
  }
})

$('input').eq(1).on('click', function(){
  $('input').fadeOut(3000)
})