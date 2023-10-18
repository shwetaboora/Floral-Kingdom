import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Flower } from '../types/Flower';


@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  isDisabled = false;
  isShowing: boolean = true;

  handleClick() {
    alert("flowers");
  }
  myName: string = '';
  toggleFlowers() {
    this.isShowing = !this.isShowing;
  }
  imgCollection: Array<object> = [
    {
      image: 'assets/bachelors.jpg',
      thumbImage: 'assets/bachelors.jpg',
      alt: 'Bachelors ',
      title: 'Bachelors '
    }, {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Camellia-960x534.jpg',
      thumbImage: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Camellia-960x534.jpg',
      title: 'Camellia',
      alt: 'Camellia'
    }, {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Cape-Leadwort-960x534.jpg',
      thumbImage: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Cape-Leadwort-960x534.jpg',
      title: 'Cape Leadwort',
      alt: 'Cape Leadwort'
    }, {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Chrysanthemum-960x534.jpg',
      thumbImage: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Chrysanthemum-960x534.jpg',
      title: 'Chrysanthemum ',
      alt: 'Chrysanthemum'
    }, {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/Egyptian-Blue-Water-Lily-960x534.jpg',
      thumbImage: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/Egyptian-Blue-Water-Lily-960x534.jpg',
      title: 'Blue Water Lily',
      alt: 'Blue Water Lily'
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/English-Rose-960x534.jpg',
      thumbImage: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/English-Rose-960x534.jpg',
      title: 'English Rose ',
      alt: 'English Rose '
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Dahlia_x_hybrida.jpg",
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Dahlia_x_hybrida.jpg',
      title: 'Dahlia ',
      alt: 'Dahlia '
    },
    {
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRlzUbk-IVcCnLDHwgetsoSG21I4VHHhLREmZub060FXNyLQc4rJkMXU_-cs9brY74Q",
      thumbImage: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRlzUbk-IVcCnLDHwgetsoSG21I4VHHhLREmZub060FXNyLQc4rJkMXU_-cs9brY74Q',
      title: 'Tulip',
      alt: 'Tulip '
    },
    {
      image: "/assets/orchids.jpg",
      thumbImage: '/assets/orchids.jpg',
      title: 'Orchid ',
      alt: 'Orchid '
    },
    {

      image: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/steady-as-she-goes-gardenia-gardenia-jasminoides-proven-winners_16970.jpg",
      thumbImage: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/steady-as-she-goes-gardenia-gardenia-jasminoides-proven-winners_16970.jpg',
      title: 'Gardenia',
      alt: 'Gardenia '
    },
    {
      name: 'Rose',
      image: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRoZC_JQAsW5rB_YteF6L0u0o94iMUKzkHxa8ibXSoB79pY8mNVv5BnbKehy7mZTEBS&psig=AOvVaw2JPZZ6eso0lxL0x4nIfIf9&ust=1686637701408000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPC7vqONvf8CFQAAAAAdAAAAABAE",
      thumbImage: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRoZC_JQAsW5rB_YteF6L0u0o94iMUKzkHxa8ibXSoB79pY8mNVv5BnbKehy7mZTEBS&psig=AOvVaw2JPZZ6eso0lxL0x4nIfIf9&ust=1686637701408000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPC7vqONvf8CFQAAAAAdAAAAABAE',
      title: 'Rose ',
      alt: 'Rose '
    },
  ];
}
