// branch.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './model/branch.model';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch)
    private branchModel: typeof Branch,
  ) {}

  async findAll(): Promise<Branch[]> {
    return this.branchModel.findAll();
  }

  async findOne(id: number): Promise<Branch> {
    const branch = await this.branchModel.findByPk(id);
    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }
    return branch;
  }

  async create(createBranchDto: CreateBranchDto): Promise<Branch> {
    return this.branchModel.create(createBranchDto);
  }

  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOne(id);
    return branch.update(updateBranchDto);
  }

  async remove(id: number): Promise<void> {
    const branch = await this.findOne(id);
    await branch.destroy();
  }
}
