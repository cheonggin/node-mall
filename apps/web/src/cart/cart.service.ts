import { Goods } from '@libs/database/models/goods.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'
import { Cart } from './entities/cart.entity'

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private readonly cartModel: typeof Cart,
    @InjectModel(Goods) private readonly goodsModel: typeof Goods
  ) {}

  async create(createCartDto: CreateCartDto, user_id: number) {
    return await this.cartModel.create({ ...createCartDto, user_id })
  }

  async findAll(user_id: number) {
    return await this.cartModel.findAll({
      where: { user_id },
      include: [
        {
          model: this.goodsModel,
          attributes: { exclude: ['create_at', 'update_at'] }
        }
      ],
      attributes: { exclude: ['create_at', 'update_at', 'user_id'] }
    })
  }

  async findOneByProductId(product_id: number, user_id) {
    return await this.cartModel.findOne({ where: { user_id, product_id } })
  }

  async update(
    updateCartDto: UpdateCartDto,
    product_id: number,
    user_id: number
  ) {
    return await this.cartModel.update(updateCartDto, {
      where: { user_id, product_id }
    })
  }

  async remove(product_id: number, user_id: number) {
    return await this.cartModel.destroy({ where: { user_id, product_id } })
  }
}
