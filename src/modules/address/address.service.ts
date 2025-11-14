import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';
import { NotFoundException } from '@nestjs/common';
import { User } from '../user/entity/user.entity';

export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(addressDto: CreateAddressDto) {
    const user = await this.userRepository.findOne({
      where: { id: addressDto.userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const address = this.addressRepository.create({
      street: addressDto.street,
      city: addressDto.city,
      state: addressDto.state,
      country: addressDto.country,
      cep: addressDto.cep,
      user,
    });

    return await this.addressRepository.save(address);
  }

  findAll() {
    return this.addressRepository.find();
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) throw new NotFoundException('Address não encontrado');

    const toSave = this.addressRepository.merge(address, updateAddressDto);

    return this.addressRepository.save(toSave);
  }

  async delete(id: number) {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) throw new NotFoundException('Address não encontrado');

    await this.addressRepository.remove(address);
  }
}
