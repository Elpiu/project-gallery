// src/map/map.controller.ts
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { existsSync, createReadStream } from 'fs';
import { GalleryService } from './map.service';

@Controller('tiles')
export class MapController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('/:z/:x/:y')
  async getTile(
    @Param('z') z: number,
    @Param('x') x: number,
    @Param('y') y: number,
    @Res() res: Response
  ) {
    const images = this.galleryService.getImages();
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = this.galleryService.getImagePath(randomImage);

    // Verifica se l'immagine esiste
    if (existsSync(imagePath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      createReadStream(imagePath).pipe(res);
    } else {
      res.status(404).send('Image not found');
    }
  }
}
