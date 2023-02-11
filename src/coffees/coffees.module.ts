import { Module } from '@nestjs/common';
import { CofeesService } from 'src/cofees/cofees.service';
import { PrismaService } from 'src/prisma.service';
import { CoffeesController } from './coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [PrismaService, CofeesService],
})
export class CoffeesModule {}
