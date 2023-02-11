import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCoffeeDto } from '../coffees/dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from '../coffees/dto/update-coffee.dto/update-coffee.dto';
@Injectable()
export class CofeesService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.coffee.findMany();
  }

  findOne(id: string) {
    const coffee = this.prismaService.coffee.findUnique({ where: { id } });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    return this.prismaService.coffee.create({ data: createCoffeeDto });
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.prismaService.coffee.findUnique({
      where: { id },
    });
    if (existingCoffee) {
      // Update the existing Entity
      return this.prismaService.coffee.update({
        where: { id },
        data: updateCoffeeDto,
      });
      // return 'Update Logic runs';
    }
    return 'coffee with this id is not found';
  }

  remove(id: string) {
    return this.prismaService.coffee.delete({ where: { id } });
  }
}
