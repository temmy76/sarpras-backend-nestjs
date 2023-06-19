import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspeksisModule } from './inspeksi/inspeksis.module';

@Module({
  imports: [
    InspeksisModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'voltmon',
      password: 'voltmon',
      database: 'sarpras-backend',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
