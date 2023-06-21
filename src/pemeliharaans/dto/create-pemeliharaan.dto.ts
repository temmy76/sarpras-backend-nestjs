import { IsDate, IsEnum, IsNotEmpty } from 'class-validator';
import { PemeliharaanPrioritas } from '../entity/pemeliharaan-priority.enum';

export class CreatePemeliharaanDto {
  @IsNotEmpty()
  surat_id: string;

  @IsNotEmpty()
  @IsDate()
  tanggal: Date;

  @IsNotEmpty()
  vendor: string;

  @IsNotEmpty()
  penanganan: string;

  @IsNotEmpty()
  @IsEnum(PemeliharaanPrioritas)
  prioritas: PemeliharaanPrioritas;
}
