import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MapController } from './map/map.controller';
import { HttpModule } from '@nestjs/axios';
import { GalleryService } from './map/map.service';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, MapController],
  providers: [GalleryService],
})
export class AppModule {}
