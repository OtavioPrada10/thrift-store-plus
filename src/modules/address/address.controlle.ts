import { Controller, Get, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/address.dto';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  @Post()
  create(@Body() addressDto: CreateAddressDto) {
    return this.addressService.create()
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
