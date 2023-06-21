import { IsEnum, IsNotEmpty } from 'class-validator';
import { SaranaPrasaranaKategori } from '../entities/sarana-prasarana-kategori.enum';

export class UpdateKategoriSaranaPrasaranaDto {
  @IsNotEmpty()
  @IsEnum(SaranaPrasaranaKategori)
  kategori: SaranaPrasaranaKategori;

  jumlah: number;

  panjang: number;

  lebar: number;
}
