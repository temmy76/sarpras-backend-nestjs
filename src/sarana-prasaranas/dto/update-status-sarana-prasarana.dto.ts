import { IsEnum, IsNotEmpty } from 'class-validator';
import { SaranaPrasaranaStatus } from '../entities/sarana-prasarana-status.enum';

export class UpdateStatusSaranaPrasaranaDto {
  @IsNotEmpty()
  @IsEnum(SaranaPrasaranaStatus)
  status: SaranaPrasaranaStatus;
}
