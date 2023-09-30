import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products= [
    {type :'Women',
      title: 'skirt',
    body: 'post 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'} ,
    { type :'men',title : 't-shirt',
    body: 'post 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'} ,
    { type :'men',title : 'tousers',
    body: 'post 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'} ,
    {type :'women',title : 'bag',
    body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'} ,
    {type :'men',title : 'sunglasess',
      body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'
    },
    { type :'children',title : 'shoes',
      body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'
    },
   { type :'children',title : 'watch',
      body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'
    },
    {type :'children',title : 'bag',
    body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'} ,
    {type :'men',title : 'sunglasess',
      body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'
    },
    { type :'women',title : 'shoes',
      body: 'post 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illo!'
    },
  ]
}
