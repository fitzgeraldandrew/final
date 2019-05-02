// Adds prompts and toggles off everything not selected. If I click Spring, then Summer and Fall will be deleted. 
$(function(){
  $('#console-box').append('Please select a Season/Decade/Year...'); 
  $('li').click(function(){
   $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
    // Reading the text from the yearsthousands box thats selected and will do the same for the remaining boxes. 
  $('.action').click(function(){
    var yearThousand = parseInt($(".year-thousands-box").filter(".selected").text());
    var yearOne = parseInt($(".year-ones-box").filter(".selected").text());
    var year = yearThousand + yearOne;
// Adds what is selected and gives output
    $('#console-box').append('<br> View classes for ' + $(".season-box")
    .filter(".selected").text());
    $('#console-box').append(' ' + year);
  });
    
  
});