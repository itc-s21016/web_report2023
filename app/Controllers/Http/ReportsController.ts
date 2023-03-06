import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReportsController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: '届け出・証明書申請システム',
      message: ''
    }
    return ctx.view.render('reports/index', data)
  }
}
