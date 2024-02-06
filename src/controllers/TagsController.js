const knex = require("../database/knex")

class TagsController {

    // index - GET para listar varios registros
    // show - GET para exibir um registro especifico
    // create - POST para criar um registro
    // update - PUT para atualizar um registro
    // delete - DELETE para remover um registro

    async index(request, response) {
        const user_id = request.user.id

        const tags = await knex("tags").where({ user_id })

        return response.json(tags)

    }
}

module.exports = TagsController