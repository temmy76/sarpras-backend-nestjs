import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePemeliharaanDto } from './dto/create-pemeliharaan.dto';
import { UpdatePemeliharaanDto } from './dto/update-pemeliharaan.dto';
import { PemeliharaanRepository } from './entity/pemeliharaans.repository';
import { Pemeliharaan } from './entity/pemeliharaan.entity';

@Injectable()
export class PemeliharaansService {
  constructor(
    @InjectRepository(PemeliharaanRepository)
    private pemeliharaanRepository: PemeliharaanRepository,
  ) {}

  getPemeliharaans(): Promise<Pemeliharaan[]> {
    return this.pemeliharaanRepository.getPemeliharaans();
  }

  async getPemeliharaansById(id: string): Promise<Pemeliharaan> {
    const found = await this.pemeliharaanRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Pemeliharaan with ID ${id} not found!`);
    }

    return found;
  }

  createPemeliharaan(
    createPemeliharaanDto: CreatePemeliharaanDto,
  ): Promise<Pemeliharaan> {
    return this.pemeliharaanRepository.createPemeliharaan(
      createPemeliharaanDto,
    );
  }

  async updatePemeliharaan(
    id: string,
    updatePemeliharaanDto: UpdatePemeliharaanDto,
  ): Promise<Pemeliharaan> {
    const pemeliharaan = await this.getPemeliharaansById(id);

    const { bukti, catatan, biaya } = updatePemeliharaanDto;

    pemeliharaan.bukti = bukti;
    pemeliharaan.catatan = catatan;
    pemeliharaan.biaya = biaya;

    await this.pemeliharaanRepository.save(pemeliharaan);

    return pemeliharaan;
  }

  async deletePemeliharaan(id: string): Promise<void> {
    const result = await this.pemeliharaanRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Pemeliharaan with ID ${id} not found!`);
    }
  }
}
