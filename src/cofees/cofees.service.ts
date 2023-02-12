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

  async findOne(id: string) {
    const coffee = await this.prismaService.coffee.findUnique({
      where: { id },
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee = await this.prismaService.coffee.create({
      data: createCoffeeDto,
    });
    return newCoffee;
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.prismaService.coffee.findUnique({
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

  async remove(id: string) {
    await this.prismaService.coffee.delete({ where: { id } });
    return `Coffee with an ID: ${id} has been successfully deleted!`;
  }
}
