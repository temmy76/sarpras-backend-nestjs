import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SaranaPrasaranaKategori } from './sarana-prasarana-kategori.enum';
import { SaranaPrasaranaStatus } from './sarana-prasarana-status.enum';

@Entity()
export class SaranaPrasarana {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  kategori: SaranaPrasaranaKategori;

  @Column()
  status: SaranaPrasaranaStatus;

  @Column({ nullable: true })
  jumlah: number;

  @Column({ nullable: true })
  panjang: number;

  @Column({ nullable: true })
  lebar: number;
}
