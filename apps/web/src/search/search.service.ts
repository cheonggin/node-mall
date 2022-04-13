import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Search } from './entities/search.entity'

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search) private readonly searchModel: typeof Search
  ) {}

  async getKeywords() {
    return await this.searchModel.findAll()
  }
}
