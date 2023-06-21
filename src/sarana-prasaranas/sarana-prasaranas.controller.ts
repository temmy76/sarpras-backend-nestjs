import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SaranaPrasaranasService } from './sarana-prasaranas.service';
import { CreateSaranaPrasaranaDto } from './dto/create-sarana-prasarana.dto';
import { UpdateKategoriSaranaPrasaranaDto } from './dto/update-kategori-sarana-prasarana.dto';
import { UpdateStatusSaranaPrasaranaDto } from './dto/update-status-sarana-prasarana.dto';

@Controller('sarana-prasaranas')
export class SaranaPrasaranasController {
  constructor(
    private readonly saranaPrasaranasService: SaranaPrasaranasService,
  ) {}

  @Post()
  createSaranaPrasarana(
    @Body() createSaranaPrasaranaDto: CreateSaranaPrasaranaDto,
  ) {
    return this.saranaPrasaranasService.createSaranaPrasarana(
      createSaranaPrasaranaDto,
    );
  }

  @Get()
  getSaranaPrasaranas() {
    return this.saranaPrasaranasService.getSaranaPrasaranas();
  }

  @Get(':id')
  getSaranaPrasaranaById(@Param('id') id: string) {
    return this.saranaPrasaranasService.getSaranaPrasaranaById(id);
  }

  @Put('/kategori/:id')
  updateKategoriSaranaPrasarana(
    @Param('id') id: string,
    @Body() updateKategoriSaranaPrasaranaDto: UpdateKategoriSaranaPrasaranaDto,
  ) {
    return this.saranaPrasaranasService.updateKategoriSaranaPrasarana(
      id,
      updateKategoriSaranaPrasaranaDto,
    );
  }

  @Put('/status/:id')
  updateStatusSaranaPrasarana(
    @Param('id') id: string,
    @Body() updateStatusSaranaPrasaranaDto: UpdateStatusSaranaPrasaranaDto,
  ) {
    return this.saranaPrasaranasService.updateStatusSaranaPrasarana(
      id,
      updateStatusSaranaPrasaranaDto,
    );
  }

  @Delete(':id')
  deleteSaranaPrasarana(@Param('id') id: string) {
    return this.saranaPrasaranasService.deleteSaranaPrasarana(id);
  }
}
