import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Package } from './model/package.model';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class PackageService {
  constructor(
    @InjectModel(Package)
    private packageModel: typeof Package,
  ) {}

  async findAll(): Promise<Package[]> {
    return this.packageModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Package> {
    const packageEntity = await this.packageModel.findByPk(id, { include: { all: true } });
    if (!packageEntity) {
      throw new NotFoundException(`Package with ID ${id} not found`);
    }
    return packageEntity;
  }

  async create(createPackageDto: CreatePackageDto): Promise<Package> {
    return this.packageModel.create(createPackageDto);
  }

  async update(id: number, updatePackageDto: UpdatePackageDto): Promise<Package> {
    const packageEntity = await this.findOne(id);
    return packageEntity.update(updatePackageDto);
  }

  async remove(id: number): Promise<void> {
    const packageEntity = await this.findOne(id);
    await packageEntity.destroy();
  }
}
