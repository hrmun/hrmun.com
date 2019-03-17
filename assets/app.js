---
---

{% include_relative _js/jquery.js %}
{% include_relative _js/bootstrap.min.js %}

$(function() {

  $('a[href=#top]').hide();

  $('a[href=#section]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
  
  $('a[href=#top]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  $(window).scroll(function(e){
    if ($(this).scrollTop() > $(this).height()) {
      $('a[href=#top]').show();
    } else {
      $('a[href=#top]').hide();
    }
  });
});