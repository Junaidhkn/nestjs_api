import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)  // As transformOptions have been provided in ValidationPipe
  limit: number;

  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  offset: number;
}
