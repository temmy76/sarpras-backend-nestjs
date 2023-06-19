import { Module } from '@nestjs/common';
import { InspeksiController } from './inspeksis.controller';
import { InspeksisService } from './inspeksis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inspeksi } from './inspeksi.entity';
import { InspeksisRepository } from './inspeksis.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Inspeksi])],
  controllers: [InspeksiController],
  providers: [InspeksisService, InspeksisRepository],
})
export class InspeksisModule {}
