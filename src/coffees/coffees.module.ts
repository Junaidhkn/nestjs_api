import { Module } from '@nestjs/common';
import { CofeesService } from 'src/cofees/cofees.service';
import { CoffeesController } from './coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [CofeesService],
})
export class CoffeesModule {}
