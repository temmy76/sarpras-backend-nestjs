import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaranaPrasaranaDto } from './dto/create-sarana-prasarana.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SaranaPrasaranaRepository } from './entities/sarana-prasarana.repository';
import { SaranaPrasarana } from './entities/sarana-prasarana.entity';
import { UpdateKategoriSaranaPrasaranaDto as UpdateStatusSaranaPrasarana } from './dto/update-kategori-sarana-prasarana.dto';
import { SaranaPrasaranaKategori } from './entities/sarana-prasarana-kategori.enum';
import { UpdateStatusSaranaPrasaranaDto } from './dto/update-status-sarana-prasarana.dto';

@Injectable()
export class SaranaPrasaranasService {
  constructor(
    @InjectRepository(SaranaPrasaranaRepository)
    private saranaPrasaranaRepository: SaranaPrasaranaRepository,
  ) {}

  createSaranaPrasarana(
    createSaranaPrasaranaDto: CreateSaranaPrasaranaDto,
  ): Promise<SaranaPrasarana> {
    return this.saranaPrasaranaRepository.createSaranaPrasarana(
      createSaranaPrasaranaDto,
    );
  }

  getSaranaPrasaranas(): Promise<SaranaPrasarana[]> {
    return this.saranaPrasaranaRepository.getSaranaPrasaranas();
  }

  async getSaranaPrasaranaById(id: string): Promise<SaranaPrasarana> {
    const found = await this.saranaPrasaranaRepository.findOne({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException(`Sarana Prasarana with ID ${id} not found!`);
    }

    return found;
  }

  async updateKategoriSaranaPrasarana(
    id: string,
    updateKategoriSaranaPrasaranaDto: UpdateStatusSaranaPrasarana,
  ): Promise<SaranaPrasarana> {
    const { kategori, jumlah, panjang, lebar } =
      updateKategoriSaranaPrasaranaDto;
    const saranaPrasarana = await this.getSaranaPrasaranaById(id);

    if (kategori === SaranaPrasaranaKategori.PERALATAN) {
      saranaPrasarana.jumlah = jumlah;
      saranaPrasarana.panjang = null;
      saranaPrasarana.lebar = null;
    } else {
      saranaPrasarana.jumlah = null;
      saranaPrasarana.panjang = panjang;
      saranaPrasarana.lebar = lebar;
    }

    await this.saranaPrasaranaRepository.save(saranaPrasarana);

    return saranaPrasarana;
  }

  async updateStatusSaranaPrasarana(
    id: string,
    updateStatusSaranaPrasaranaDto: UpdateStatusSaranaPrasaranaDto,
  ): Promise<SaranaPrasarana> {
    const { status } = updateStatusSaranaPrasaranaDto;
    const saranaPrasarana = await this.getSaranaPrasaranaById(id);

    saranaPrasarana.status = status;

    await this.saranaPrasaranaRepository.save(saranaPrasarana);

    return saranaPrasarana;
  }

  async deleteSaranaPrasarana(id: string): Promise<void> {
    const result = await this.saranaPrasaranaRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Sarana Prasarana with ID ${id} not found!`);
    }
  }
}
