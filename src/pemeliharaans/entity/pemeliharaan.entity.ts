import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { PemeliharaanPrioritas } from './pemeliharaan-priority.enum';

export class Pemeliharaan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  surat_id: string;

  @Column()
  tanggal: Date;

  @Column()
  vendor: string;

  @Column()
  penanganan: string;

  @Column()
  tanggal_selesai: Date;

  @Column()
  biaya: number;

  @Column()
  bukti: string;

  @Column()
  prioritas: PemeliharaanPrioritas;

  @Column()
  catatan: string;
}
