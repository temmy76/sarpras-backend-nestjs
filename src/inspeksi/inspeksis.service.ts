import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InspeksisRepository } from './inspeksis.repository';
import { Inspeksi } from './inspeksi.entity';
import { CreateInspeksiDto } from './dto/create-inspeksi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateInspeksiDto } from './dto/update-inspeksi.dto';

@Injectable()
export class InspeksisService {
  private logger = new Logger('InspeksisService');
  constructor(
    @InjectRepository(InspeksisRepository)
    private inspeksisRepository: InspeksisRepository,
  ) {}

  getInspeksis(): Promise<Inspeksi[]> {
    return this.inspeksisRepository.getInspeksis();
  }

  async getInspeksiById(id: string): Promise<Inspeksi> {
    const found = await this.inspeksisRepository.findOne({ where: { id } });

    if (!found) {
      this.logger.error(`Failed to get inspeksi with ID ${id}`);
      throw new NotFoundException(`Inspeksi with ID ${id} not found!`);
    }

    return found;
  }

  createInspeksi(createInspeksiDto: CreateInspeksiDto): Promise<Inspeksi> {
    return this.inspeksisRepository.createInspeksi(createInspeksiDto);
  }

  async updateInspeksi(
    id: string,
    updateInspeksiDto: UpdateInspeksiDto,
  ): Promise<Inspeksi> {
    const inspeksi = await this.getInspeksiById(id);

    inspeksi.status = updateInspeksiDto.status;
    await this.inspeksisRepository.save(inspeksi);

    return inspeksi;
  }

  async deleteInspeksi(id: string): Promise<void> {
    const result = await this.inspeksisRepository.delete({ id });

    if (result.affected) {
      throw new NotFoundException(`Inspeksi with ID ${id} not found!`);
    }
  }
}
