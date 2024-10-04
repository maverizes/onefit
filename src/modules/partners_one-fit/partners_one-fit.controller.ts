import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PartnersService } from './partners_one-fit.service';
import { CreatePartnerDto, UpdatePartnerDto } from './dto';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post("/add")
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.partnersService.findOne(id);
  }

  @Put('/update/:id')
  update(@Param('id') id: number, @Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnersService.update(id, updatePartnerDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.partnersService.remove(id);
  }
}
