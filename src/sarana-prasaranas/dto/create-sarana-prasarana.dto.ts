import { IsEnum, IsNotEmpty } from 'class-validator';
import { SaranaPrasaranaKategori } from '../entities/sarana-prasarana-kategori.enum';
import { SaranaPrasaranaStatus } from '../entities/sarana-prasarana-status.enum';

export class CreateSaranaPrasaranaDto {
  @IsNotEmpty()
  @IsEnum(SaranaPrasaranaKategori)
  kategori: SaranaPrasaranaKategori;

  @IsNotEmpty()
  @IsEnum(SaranaPrasaranaStatus)
  status: SaranaPrasaranaStatus;

  jumlah: number;

  panjang: number;

  lebar: number;
}
