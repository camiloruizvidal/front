import { IPageResponse, IContent } from './../../interface/index';
import dataFake from './dataFake.json'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NewsController {
  public async index({ request, response }: HttpContextContract) {

    const page:number = Number(request.input('pages'));
    let data: IContent[] = dataFake;

    const value: IPageResponse<IContent> = {
      data: data,
      currentPage: page,
      totalPages: 100,
      rowsPerPage: 10,
      totalRows: 1000
    }

    response.json(value);
  }

  public async create({ response }: HttpContextContract) {
    response.json({ save: true, id: '-1' })
  }

  public async store({ }: HttpContextContract) { }

  public async show({params, response}: HttpContextContract) {
    const value: IContent = dataFake.find((data:IContent) => data._id == params.id)
    response.json( value )
  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
