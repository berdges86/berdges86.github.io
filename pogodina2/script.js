ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.849754, 37.490429],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });

  // Функция, которая по состоянию чекбоксов в меню
  // показывает или скрывает геообъекты из выборки.
  function checkState() {
    var shownObjects,
      byColor = new ymaps.GeoQueryResult();

    // Отберем объекты по цвету. 
    if ($('#red').prop('checked')) {
      // Будем искать по двум параметрам:
      // - для точечных объектов по полю preset;
      // - для контурных объектов по цвету заливки.
      byColor = myObjects.search('options.fillColor = "#ff1000"')
        .add(myObjects.search('options.preset = "islands#redHomeCircleIcon"'));
    }
    if ($('#green').prop('checked')) {
      byColor = myObjects.search('options.fillColor = "#00ff00"')
        .add(myObjects.search('options.preset = "islands#greenHomeCircleIcon"'))
        // После того, как мы нашли все зеленые объекты, добавим к ним
        // объекты, найденные на предыдущей итерации.
        .add(byColor);
    }
    if ($('#yellow').prop('checked')) {
      byColor = myObjects.search('options.fillColor = "#ffcc00"')
        .add(myObjects.search('options.preset = "islands#yellowHomeCircleIcon"'))
        .add(byColor);
    }
    // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
    // которые совмещают нужные признаки.
    shownObjects = byColor.addToMap(myMap);
    // Объекты, которые не попали в выборку, нужно убрать с карты.
    myObjects.remove(shownObjects).removeFromMap(myMap);
  }

  $('#red').click(checkState);
  $('#green').click(checkState);
  $('#yellow').click(checkState);

  // Создадим объекты из их JSON-описания и добавим их на карту.
  window.myObjects = ymaps.geoQuery({
    type: "FeatureCollection",
    features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [55.849180, 37.491152]
        },
        options: {
          preset: 'islands#yellowHomeCircleIcon'

        },
        
        properties: {
          hintContent: 'Содержание всплывающей подсказки',
          balloonContent: 'Все плохо'
        }

      
      
    },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [55.848546, 37.493205]
        },
        options: {
          preset: 'islands#greenHomeCircleIcon'
        },
                properties: {
          hintContent: 'Содержание всплывающей подсказки',
          balloonContent: 'Все лучше'
        }
        
        
        
      },
      

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [55.849534, 37.492051],
        },
        options: {
          preset: 'islands#redHomeCircleIcon'
        },
         properties: {
          hintContent: 'Содержание всплывающей подсказки',
          balloonContent: 'Жить можно'
        }
        
        
      }
    ]
  }).addToMap(myMap);
}
