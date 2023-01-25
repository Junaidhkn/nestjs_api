import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This is Just an Example';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This route returns single specific Item of id ${id}`;
  }
}
