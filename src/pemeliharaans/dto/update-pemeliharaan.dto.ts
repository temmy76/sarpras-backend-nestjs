import { IsNotEmpty } from 'class-validator';

export class UpdatePemeliharaanDto {
  @IsNotEmpty()
  biaya: number;

  @IsNotEmpty()
  bukti: string;

  @IsNotEmpty()
  catatan: string;
}
