$(document).ready(function () {
    (function($){
        $.fn.swiftTabs = function(param){
            var option = $.extend({
                nav: '.st-navbar',
                tab: '.st-tabs',
                pages: '.st-pages',
            },param);
            var counter = 0;
            var tabSwitch = function () {  
                $(option.tab).each(function (index, element) {
                    // element == this
                    $(this).css({'border-bottom-color':'white'});
                    $(option.pages).eq(index).css({'display':'none'});
                });
                $(option.tab).eq(counter).css({'border-bottom-color':'red'});
                $(option.pages).eq(counter).css({'display':'block'});
            }
            tabSwitch();
            return this.each(function(){
                var parent = $(this).selector;
                console.log($(this));
                $(option.tab).each(function (index, element) {
                    $(this).click(function (e) { 
                        e.preventDefault();
                        counter = index;
                        tabSwitch();
                    });
                   
                });
            })
        }
    }(jQuery));
$(".st-container").swiftTabs();
})