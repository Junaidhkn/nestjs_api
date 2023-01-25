import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This is Just an Example Limit:${limit} offset:${offset} `;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This route returns single specific Item of id ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This route returns updated single specific Item of id ${id}`;
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return `This action removes item with the id of ${id}`;
  }
}
