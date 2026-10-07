function paginateResult(Model){
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)


        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < await Model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        // results.posts = await Model.find().limit(limit).skip(startIndex).exec()

        results.limit = limit
        results.startIndex = startIndex
        res.paginateResult = results

        next()
    }
}

module.exports = paginateResult