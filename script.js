$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );


  var x = 0;
$(document).ready(function(){
  $(window).resize(function(){
    $("span").text(x += 1);
  });
});

$( ":input" ).select(function() {
    $( "div" ).text( "Something was selected" ).show().fadeOut( 1000 );
  });

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );