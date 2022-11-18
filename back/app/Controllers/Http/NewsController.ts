import { IPageResponse, IContent } from './../../interface/index';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NewsController {
  public async index({ request }: HttpContextContract) {

    const page = request.input('page2');
    let data: IContent[] = [];

    for (let i = 0; i < 10; i++) {

      data.push({
        title: 'title' + (i + 1),
        content: 'content' + (i + 1) + 'of page ' + page,
        type: 'type' + (i + 1),
        tags: ['tags1', 'tags2', 'tags3', 'tags4', 'tags5', 'tags6'],
      });

    }

    const response: IPageResponse<IContent> = {
      data: data,
      currentPage: 2,
      totalPages: 100,
      rowsPerPage: 10,
      totalRows: 1000
    }

    return response;
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
