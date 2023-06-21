import { DataSource, Repository } from 'typeorm';
import { SaranaPrasarana } from './sarana-prasarana.entity';
import { Injectable } from '@nestjs/common';
import { CreateSaranaPrasaranaDto } from '../dto/create-sarana-prasarana.dto';

@Injectable()
export class SaranaPrasaranaRepository extends Repository<SaranaPrasarana> {
  constructor(private dataSource: DataSource) {
    super(SaranaPrasarana, dataSource.createEntityManager());
  }

  async createSaranaPrasarana(
    createSaranaPrasaranaDto: CreateSaranaPrasaranaDto,
  ): Promise<SaranaPrasarana> {
    const saranaPrasarana = this.create({
      ...createSaranaPrasaranaDto,
    });

    await this.save(saranaPrasarana);

    return saranaPrasarana;
  }

  async getSaranaPrasaranas(): Promise<SaranaPrasarana[]> {
    const query = this.createQueryBuilder();

    const saranaPrasarana = query.getMany();

    return saranaPrasarana;
  }
}
