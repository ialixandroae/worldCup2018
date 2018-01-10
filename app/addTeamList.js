define([
    "dojo/_base/declare",
    "./addRightPane"
], function(
    declare,
    addRightPane
) {
    var clazz = {
        addTeamList: function(interval, view, layer, leftPane) {
            var listOfTeams = [];
            layer.queryFeatures().then(function(results) {
                for (i = 0; i < results.features.length; i++) {
                    var team = results.features[i]["attributes"]["NAME"];
                    listOfTeams.push(team);
                };

                listOfTeams.sort();

                var teamListHtml = '<div class="wrapper">' +
                    '<span id="backArrow"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 32 32" class="svg-icon"><path d="M25 28h-5L8 16 20 4h5L13 16l12 12z"/></svg>Back</span>' +
                    '<aside class="side-nav" aria-role="complementary">' +
                    '<h2 class="side-nav-title">Teams: </h2>' +
                    '<nav role="navigation" aria-labelledby="sidenav">';


                for (i = 0; i < listOfTeams.length; i++) {
                    teamListHtml += '<a href="#" class="side-nav-link">' + listOfTeams[i] + '</a>';
                }
                teamListHtml += '</nav></aside></div>';
                leftPane.append(teamListHtml);

                $('#backArrow').on("click", function() {
                    $('.wrapper').css("-webkit-animation", "slideout-from-left2 1000ms")

                    setTimeout(() => {
                        $('.wrapper').hide();

                        $("#fadeOutLeft1").css("-webkit-animation", "");
                        $("#fadeOutLeft2").css("-webkit-animation", "");
                        $("#fadeOutLeft3").css("-webkit-animation", "");
                        $('br').show();
                        $("#fadeOutLeft1").show();
                        $("#fadeOutLeft2").show();
                        $("#fadeOutLeft3").show();

                    }, 900);
                });

                $('.drawer').on('click', () => {
                    $('.drawer').toggleClass('is-active');
                })
                $('.side-nav').hide();
                $('.side-nav-title').hide();
                $('svg').hide();
                $('#backArrow').hide();
                $('.side-nav-link').addClass('js-drawer-toggle');
                $('.side-nav-link').attr('data-drawer', 'top-nav');
                $('.side-nav-link').hide();

                addCountryInfo(results);
            });

            function addCountryInfo(data) {
                var options = {
                    speedFactor: 0.1, // animation is 10 times slower than default
                    easing: "out-quint" // easing function to slow down when reaching the target
                };

                let clickedCountry;
                $('.side-nav-link').on('click', (e) => {
                    clickedCountry = $(e.target).text();
                    addRightPane.addCountryInfo(clickedCountry);
                    for (i = 0; i < data.features.length; i++) {
                        if (clickedCountry == data.features[i]["attributes"]["NAME"]) {

                            //Stop scene animation 
                            window.clearInterval(interval);
                            //Go to the country location
                            view.goTo(data.features[i]["geometry"], options);
                        }
                    }
                });
            }
        }
    };
    return clazz;
});