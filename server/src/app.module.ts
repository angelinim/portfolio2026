import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { API_PREFIX } from './app.setup';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    ProjectsModule,
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          rootPath: config.get('CLIENT_DIST_PATH') || join(__dirname, '..', '..', 'client', 'dist'),
          exclude: [`/${API_PREFIX}/{*path}`],
        }
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
