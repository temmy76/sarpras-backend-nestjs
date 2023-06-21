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
import { InspeksisService } from './inspeksis.service';
import { Inspeksi } from './inspeksi.entity';
import { CreateInspeksiDto } from './dto/create-inspeksi.dto';
import { UpdateInspeksiDto } from './dto/update-inspeksi.dto';

@Controller('inspeksis')
export class InspeksisController {
  logger = new Logger('InspeksiController');
  constructor(private inspeksisService: InspeksisService) {}

  @Get()
  getInspeksis(): Promise<Inspeksi[]> {
    this.logger.verbose('Retrieveing all inspeksis');

    return this.inspeksisService.getInspeksis();
  }

  @Get(':id')
  getInspeksiById(@Param('id') id: string): Promise<Inspeksi> {
    this.logger.verbose(`Retrieveing inspeksi with ID ${id}`);
    return this.inspeksisService.getInspeksiById(id);
  }

  @Post()
  createInspeksi(
    @Body() createInspeksiDto: CreateInspeksiDto,
  ): Promise<Inspeksi> {
    this.logger.verbose(
      `Creating new Inspeksi. Data: ${JSON.stringify(createInspeksiDto)}`,
    );
    return this.inspeksisService.createInspeksi(createInspeksiDto);
  }

  @Put(':id')
  updateInspeksi(
    @Param('id') id: string,
    @Body() updateInspeksiDto: UpdateInspeksiDto,
  ) {
    this.logger.verbose(
      `Updating Inspeksi Status with ID ${id} with ${JSON.stringify(
        updateInspeksiDto,
      )}`,
    );
    return this.inspeksisService.updateInspeksi(id, updateInspeksiDto);
  }

  @Delete(':id')
  deleteInspeksi(@Param('id') id: string) {
    this.logger.verbose(`Deleeting Inspeksi with ID ${id}`);
    return this.inspeksisService.deleteInspeksi(id);
  }
}
