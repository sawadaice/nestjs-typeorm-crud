import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.cityRepository.create(createCityDto);
    return this.cityRepository.save(city);
  }

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOne(id: number): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City | null> {
    await this.cityRepository.update(id, updateCityDto);
    return this.cityRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}
