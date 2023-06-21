import { DataSource, Repository } from 'typeorm';
import { Pemeliharaan } from './pemeliharaan.entity';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreatePemeliharaanDto } from '../dto/create-pemeliharaan.dto';

@Injectable()
export class PemeliharaanRepository extends Repository<Pemeliharaan> {
  private logger = new Logger('PemeliharaanRepository');
  constructor(private dataSource: DataSource) {
    super(Pemeliharaan, dataSource.createEntityManager());
  }

  async getPemeliharaans(): Promise<Pemeliharaan[]> {
    const query = this.createQueryBuilder();

    try {
      const pemeliharaans = query.getMany();
      return pemeliharaans;
    } catch (error) {
      this.logger.error('Failed to get Pemeliharaan', error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createPemeliharaan(
    createPemeliharaanDto: CreatePemeliharaanDto,
  ): Promise<Pemeliharaan> {
    const pemeliharaan = this.create({
      ...createPemeliharaanDto,
    });

    await this.save(pemeliharaan);

    return pemeliharaan;
  }
}
