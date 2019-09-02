  var myMap = document.getElementById("map");
  myMap && ymaps.ready(function() {
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: ['zoomControl']
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "ул. Большая Конюшенная, 19/8",
        balloonContent: "Cat Energy"
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [124, 106],
        iconImageOffset: [-40, -140]
      }),
      myMap.geoObjects.add(myPlacemark)
  });
