import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PackageService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) { }

  @Get()
  findAll() {
    return this.packageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageService.findOne(+id);
  }

  @Post("/add")
  create(@Body() createPackageDto: CreatePackageDto) {
    return this.packageService.create(createPackageDto);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
    return this.packageService.update(+id, updatePackageDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.packageService.remove(+id);
  }
}
