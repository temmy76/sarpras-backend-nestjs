import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PemeliharaansService } from './pemeliharaans.service';
import { CreatePemeliharaanDto } from './dto/create-pemeliharaan.dto';
import { UpdatePemeliharaanDto } from './dto/update-pemeliharaan.dto';
import { Pemeliharaan } from './entity/pemeliharaan.entity';

@Controller('pemeliharaans')
export class PemeliharaansController {
  private logger = new Logger('PemeliharaansController');
  constructor(private pemeliharaanService: PemeliharaansService) {}

  @Get()
  getPemeliharaans(): Promise<Pemeliharaan[]> {
    return this.pemeliharaanService.getPemeliharaans();
  }

  @Get(':id')
  getPemeliharaansById(@Param('id') id: string): Promise<Pemeliharaan> {
    return this.pemeliharaanService.getPemeliharaansById(id);
  }

  @Post()
  createPemeliharaan(
    @Body() createPemeliharaanDto: CreatePemeliharaanDto,
  ): Promise<Pemeliharaan> {
    return this.pemeliharaanService.createPemeliharaan(createPemeliharaanDto);
  }

  @Put(':id')
  updatePemeliharaan(
    @Param('id') id: string,
    @Body() updatePemeliharaanDto: UpdatePemeliharaanDto,
  ): Promise<Pemeliharaan> {
    return this.pemeliharaanService.updatePemeliharaan(
      id,
      updatePemeliharaanDto,
    );
  }

  @Delete(':id')
  deletePemeliharaan(@Param('id') id: string): Promise<void> {
    return this.pemeliharaanService.deletePemeliharaan(id);
  }
}
