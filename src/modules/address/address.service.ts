import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "./entity/address.entity";
import { Repository } from "typeorm";


export class AddressService {
  constructor(
  @InjectRepository(Address)
  private addressRepository: Repository<Address>
  ) {}
  findAll() {
    return this.addressRepository.find()
  }

}