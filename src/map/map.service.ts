import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class GalleryService {
  private readonly galleryPath = join(__dirname, '..', '..', 'gallery');

  getImages(): string[] {
    // Leggi i file nella cartella gallery e restituisci i nomi delle immagini
    return readdirSync(this.galleryPath).filter(
      (file) =>
        file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')
    );
  }

  getImagePath(image: string): string {
    return join(this.galleryPath, image);
  }
}
