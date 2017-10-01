const SIZE_CAP = 10 * 1024 * 1024;
$('.upload-btn').on('click', function (){
    //Trigger File Input on Button Click
    $('#upload-input').click();
    
    //Reset Progress Bar on each click
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});

$('#upload-input').on('change', function(){
  var files = $(this).get(0).files;
  
  if (files.length) {
    //File has been uploaded
    $('.file-msg').html(files.item(0).name);
    
    //Check File Size    
    if (files.item(0).size > SIZE_CAP) {
        alert('File size too large. Must be smaller than 10mb.');
        return false;
        }
  }
});