$(document).ready(function(){
  function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(
    function(){
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  };
  $("#slides").slides({
   effect:'fade',play:5000,
   paginationClass:'navigation',
   generatePagination:true,
   fadeSpeed:500,
   crossfade:true
  });  
  $('.smart-plans').on('click', '.smart-plan', function(e) {//табы
    e.preventDefault();
    $('.open-smart-plan').hide();
    $(this)
      .addClass('active').removeClass('inactive').siblings().removeClass('active').addClass('inactive ')
      .closest('.tabs').find('.tabs-content').removeClass('show').eq($(this).index()).addClass('show');
  });
  
  $('.open-smart-plan').click(function(e){
    e.preventDefault();
    $('.smart-plan').addClass('inactive').removeClass('active').eq(0).addClass('active').removeClass('inactive');
    $('.tabs-content').addClass('show');
    $(this).hide();
  });

 
});
/*для слайдера*/