import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Partner } from './models/partners_one-fit.model';
import { CreatePartnerDto, UpdatePartnerDto } from './dto';

@Injectable()
export class PartnersService {
  constructor(@InjectModel(Partner) private partnerModel: typeof Partner) { }

  async create(createPartnerDto: CreatePartnerDto): Promise<Partner> {
    return this.partnerModel.create({ ...createPartnerDto });
  }

  async findAll(): Promise<Partner[]> {
    return this.partnerModel.findAll();
  }

  async findOne(id: number): Promise<Partner> {
    const partner = await this.partnerModel.findByPk(id);
    if (!partner) throw new NotFoundException('Partner not found');
    return partner;
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<Partner> {
    const partner = await this.findOne(id);
    return partner.update(updatePartnerDto);
  }

  async remove(id: number): Promise<void> {
    const partner = await this.findOne(id);
    await partner.destroy();
  }
}
