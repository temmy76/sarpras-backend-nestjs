import { IsEnum } from 'class-validator';
import { InspeksiStatus } from '../inspeksi-status.enum';

export class UpdateInspeksiDto {
  @IsEnum(InspeksiStatus)
  status: InspeksiStatus;
}
