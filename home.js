$(document).ready(function()
{
    $('.list').click(function(){
        const value =$(this).attr('data-filter');
        if(value == 'all'){
            $('.brandi').show('1000');
        }
        else{
            $('.brandi').not('.'+value).hide('1000');
            $('.brandi').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
});