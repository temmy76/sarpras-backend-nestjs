import { Module } from '@nestjs/common';
import { SaranaPrasaranasService } from './sarana-prasaranas.service';
import { SaranaPrasaranasController } from './sarana-prasaranas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaranaPrasarana } from './entities/sarana-prasarana.entity';
import { SaranaPrasaranaRepository } from './entities/sarana-prasarana.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SaranaPrasarana])],
  controllers: [SaranaPrasaranasController],
  providers: [SaranaPrasaranasService, SaranaPrasaranaRepository],
})
export class SaranaPrasaranasModule {}
