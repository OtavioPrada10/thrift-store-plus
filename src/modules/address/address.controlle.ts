import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto, UpdateAddressDto } from './dto/address.dto';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  @Post()
  create(@Body() addressDto: CreateAddressDto) {
    return this.addressService.create(addressDto)
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.addressService.delete(id)
  }
}
