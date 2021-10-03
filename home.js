$(document).ready(function()
{
    $('.list').click(function(){
        const value =$(this).attr('data-filter');
        if(value == 'all'){
            $('.brandi').show('500');
        }
        else{
            $('.brandi').not('.'+value).hide('500');
            $('.brandi').filter('.'+value).show('500');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
});