import { Component, OnInit, Input, OnChanges } from '@angular/core';
declare var ymaps:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() marks: any;

  public map :any;
  public myPlacemark :any;
  constructor() {
    
  }

  ngOnChanges() {
    let marks = JSON.parse(this.marks);
    ymaps.ready().then(() => {
      this.map.geoObjects.removeAll();
      marks.forEach((elem: any) => {
        console.log(elem.position);
        let myPlacemark = new ymaps.Placemark(elem.position, {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '../../assets/map-point.png',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });

          this.map.geoObjects.add(myPlacemark);
      });
    });
  }

  ngOnInit(): void {
    const mapContainer = document.createElement("div");
    mapContainer.style.height = "512px";
    mapContainer.style.width = "512px";
    document.getElementById('app')?.appendChild(mapContainer);
    ymaps.ready().then(() => {
      this.map = new ymaps.Map(mapContainer, {
        center: [55.751574, 37.573856],
        zoom: 5
      });
        
      this.myPlacemark = new ymaps.Placemark([50.661574, 30.573856], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../../assets/map-point.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        this.map.geoObjects.add(this.myPlacemark);
      });

    

      
      
  }

}
