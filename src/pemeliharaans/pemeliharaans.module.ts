import { Module } from '@nestjs/common';
import { PemeliharaansController } from './pemeliharaans.controller';
import { PemeliharaansService } from './pemeliharaans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pemeliharaan } from './entity/pemeliharaan.entity';
import { PemeliharaanRepository } from './entity/pemeliharaans.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pemeliharaan])],
  controllers: [PemeliharaansController],
  providers: [PemeliharaansService, PemeliharaanRepository],
})
export class PemeliharaansModule {}
