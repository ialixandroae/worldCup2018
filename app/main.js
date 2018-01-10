const leftPane = $("#sidebar");
const viewTeamsBtn = $("h3");
const drawerRight =
    '<div class="drawer drawer-right js-drawer" data-drawer="top-nav" tabindex="0">' +
    '<nav class="drawer-nav" role="navigation">' +
    '</nav></div>'
$('body').append(drawerRight);


require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "app/symbols",
    "app/labels",
    "app/addLeftPane",
    "app/addTeamList",
    "app/addRightPane",
    "dojo/domReady!"
], function(Map, SceneView, FeatureLayer,
    symbols, labels, addLeftPane, addTeamList, addRightPane) {

    //Creare Left Pane
    var pane = addLeftPane;

    //Creare Team List
    var teamList = addTeamList;

    //Creare Renderer
    var renderer = symbols;
    var pointsRenderer = renderer.simbolizare();

    //Creare Labels
    var labels = labels;
    var countryLabels = labels.labelData();

    //Creare Harta
    var map = new Map({
        basemap: "dark-gray",
        ground: "world-elevation"
    });

    //Creare Scena3D
    var view = new SceneView({
        container: "sceneView",
        map: map,
        scale: 50000000,
        center: [0, 20]
    });

    //Creare obiect FeatureLayer
    var wcCountriesLayer = new FeatureLayer({
        url: "https://services6.arcgis.com/MLuUQwq7FiARivuF/ArcGIS/rest/services/WorldCup2018_Countries/FeatureServer/0",
        elevationInfo: "relative-to-ground",
        renderer: pointsRenderer,
        outFields: ["*"],
        labelingInfo: countryLabels,
        labelsVisible: true
    });

    map.layers.add(wcCountriesLayer);



    view.then(() => {
        function shiftCamera(deg) {
            var camera = view.camera.clone();
            camera.position.longitude += deg;
            return camera;

        }

        var interval = window.setInterval(function() {
            view.goTo(shiftCamera(60),
                // Animation options for a slow linear camera flight
                {
                    speedFactor: 0.05,
                    easing: "linear"
                }, 5000);
        });

        ["click", "drag", "hold"].forEach(event => {
            view.on(event, () => {
                window.clearInterval(interval);
            });
        });


        teamList.addTeamList(interval, view, wcCountriesLayer, leftPane);

        pane.addLeftPane(leftPane);
        pane.addEvent();
    });


    view.on("click", event => {
        view.hitTest(event)
            .then(function(response) {
                var options = {
                    speedFactor: 0.1, // animation is 10 times slower than default
                    easing: "out-quint" // easing function to slow down when reaching the target
                };
                view.goTo(response.results[0].graphic["geometry"], options);
                let nume = response.results[0].graphic["attributes"]["NAME"];
                addRightPane.addCountryInfo(nume);
            });
    });

});