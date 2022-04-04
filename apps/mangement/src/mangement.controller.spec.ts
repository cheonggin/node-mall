import { Test, TestingModule } from '@nestjs/testing'
import { MangementController } from './mangement.controller'
import { MangementService } from './mangement.service'

describe('MangementController', () => {
  let mangementController: MangementController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MangementController],
      providers: [MangementService]
    }).compile()

    mangementController = app.get<MangementController>(MangementController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mangementController.getHello()).toBe('Hello World!')
    })
  })
})
