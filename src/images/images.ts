import { Component } from '@angular/core';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-images',
  imports: [NgOptimizedImage],
  templateUrl: './images.html',
  styleUrl: './images.css',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://placeholdit.com/${config.width}x${config.width}/dddddd/999999?text=NgOptIm&font_size=30`;
      },
    },
  ],
})
export class Images {}
