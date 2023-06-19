import { IsNotEmpty } from 'class-validator';
import { InspeksiDetail } from '../inspeksi-detail.enum';

export class CreateInspeksiDto {
  @IsNotEmpty()
  surat_id: string;

  @IsNotEmpty()
  tanggal: Date;

  @IsNotEmpty()
  detail: InspeksiDetail;
}
