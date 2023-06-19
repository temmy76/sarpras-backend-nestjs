import { DataSource, Repository } from 'typeorm';
import { Inspeksi } from './inspeksi.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInspeksiDto } from './dto/create-inspeksi.dto';
import { InspeksiStatus } from './inspeksi-status.enum';

@Injectable()
export class InspeksisRepository extends Repository<Inspeksi> {
  constructor(private dataSource: DataSource) {
    super(Inspeksi, dataSource.createEntityManager());
  }

  async getInspeksis(): Promise<Inspeksi[]> {
    const query = this.createQueryBuilder();

    try {
      const inspeksi = await query.getMany();
      return inspeksi;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createInspeksi(
    createInspeksiDto: CreateInspeksiDto,
  ): Promise<Inspeksi> {
    const { surat_id, tanggal, detail } = createInspeksiDto;

    const inspeksi = this.create({
      surat_id,
      tanggal,
      detail,
      status: InspeksiStatus.BELUM_TERVERIFIKASI,
    });

    await this.save(inspeksi);
    return inspeksi;
  }
}
