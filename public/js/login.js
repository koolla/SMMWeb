$(document).ready(function($){
  $('.form-signin').submit(function(event){
    event.preventDefault();
    console.log('submit');
    console.log($(".form-signin input[type='email']").val());
    console.log($('.form-signin input:password').val());
    $.ajax({
      url: 'http://192.168.2.6:3000/test',
      type: 'GET',
      dataType : "jsonp",
      crossDomain: true,
      data: {
        email: $("input[type='email']").val(),
        password: $('.form-signin input:password').val()
      }
    }).done(function(data){
      console.log(data);
      console.log('done');
    }).fail(function(err){
      console.log(err);
      console.log('fail');
    }).always(function(){
      console.log('...');
    });
  });
});
