import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlowerComponent } from './flower/flower.component';
import { Demo1Component } from './demo1/demo1.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: Demo1Component },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'flower', component: FlowerComponent, data: [
      [{
        name: 'Rose',
        price: 50,
        image: "/assets/rose.jpg",

      },
      {
        name: 'Dahlia',
        price: 80,
        image: '/assets/Dahlia.jpg',

      },
      {
        name: 'Tulip',
        price: 40,
        image: '/assets/tulip.jpg',

      },
      {
        name: 'Orchid',
        price: 150,
        image: '/assets/orchid.jpg',
      },
      {
        name: 'Gardenia',
        price: 50,
        image: "assets/gardenia.jpg"

      },
      {
        name: 'Plumeria',
        price: 80,
        image: "assets/plumeria.jpg",

      },
      {
        name: 'Hyacinth',
        price: 40,
        image: "assets/hyacinth.jpg"
      },
      {
        name: 'Marigold',
        price: 150,
        image: "assets/marigold.jpg",
      },
      {
        name: 'Bachelors',
        price: 100,
        image: "assets/bachelors.jpg",
      },
      {
        image: "assets/camellia.jpg",
        name: 'Camellia',
        price: 230,
      },
      {
        image: "assets/capeleadwort.jpg",
        name: 'Cape Leadwort',
        price: 210,
      },
      {
        image: "assets/chrysanthemum.jpg",
        name: 'Chrysanthemum ',
        price: 190,
      },
      {
        image: "assets/bluewaterlily.jpg",
        name: 'Blue Water Lily',
        price: 200,
      },
      {
        image: "assets/englishrose.jpg",
        name: 'English Rose ',
        price: 250,
      },
      {
        image: "assets/africandaisy.jpg",
        name: 'African Daisy ',
        price: 210,
      }
      ]



    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
