import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InspeksiDetail } from './inspeksi-detail.enum';
import { InspeksiStatus } from './inspeksi-status.enum';

@Entity()
export class Inspeksi {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // assign this to the surat_id entity later
  @Column()
  surat_id: string;

  @Column()
  tanggal: Date;

  @Column()
  detail: InspeksiDetail;

  @Column()
  status: InspeksiStatus;
}
