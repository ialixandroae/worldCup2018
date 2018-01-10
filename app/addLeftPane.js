define([
    "dojo/_base/declare"
], function(
    declare
) {
    var clazz = {
        addLeftPane: function(pane) {
            pane.append('<h5 id="fadeOutLeft1">The 2018 FIFA World Cup will be the 21st FIFA World Cup, a quadrennial international football tournament contested by the men' +
                's national teams of the member associations of FIFA. It is scheduled to take place in Russia from 14 June to 15 July 2018, after the country was awarded the hosting rights on 2 December 2010. This will be the first World Cup held in Europe since 2006; all but one of the stadium venues are in European Russia, west of the Ural Mountains to keep travel time manageable.</h5>');
            pane.append('<br>');
            pane.append('<h5 id="fadeOutLeft2">The final tournament will involve 32 national teams, which include 31 teams determined through qualifying competitions and the automatically qualified host team. Of the 32 teams, 20 will be making back-to-back appearances following the last edition of the tournament in 2014, including defending champions Germany, while Iceland and Panama will both be making their first appearances at a FIFA World Cup. A total of 64 matches will be played in 12 venues located in 11 cities. The final will take place on 15 July in Moscow at the Luzhniki Stadium.</h5>');
            pane.append('<br>');
            pane.append('<h3 id="fadeOutLeft3">View the teams</h3>');
        },

        addEvent: function() {
            $('h3').on("click", () => {
                $("#fadeOutLeft1").css("-webkit-animation", "slideout-from-right2 1000ms")
                $("#fadeOutLeft2").css("-webkit-animation", "slideout-from-right2 1000ms")
                $("#fadeOutLeft3").css("-webkit-animation", "slideout-from-right2 1000ms")

                setTimeout(() => {
                    $('br').hide();
                    $("#fadeOutLeft1").hide();
                    $("#fadeOutLeft2").hide();
                    $("#fadeOutLeft3").hide();
                    $('#backArrow').show();
                    $('.wrapper').show();
                    $('.wrapper').css("-webkit-animation", "");
                    $('.side-nav').show();
                    $('.side-nav-title').show();
                    $('svg').show();

                    $('.side-nav-link').addClass('js-drawer-toggle');
                    $('.side-nav-link').attr('data-drawer', 'top-nav')
                    $('.side-nav-link').show();

                }, 900);
            });

        }
    }
    return clazz;
})