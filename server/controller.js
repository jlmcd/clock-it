module.exports = {
    getPunches: (req, res) => {
        const db = req.app.get('db')
        db.get_punches()
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    deletePunch: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_punch({ id })
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    newPunch: (req, res) => {
        const db = req.app.get('db')
        db.new_punch(req.body)
            .then(response => {
                res.sendStatus(200)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    getPunch: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.get_punch({id})
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    updatePunch: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.update_punch({...req.body, id})
            .then(response => {
                res.sendStatus(200)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    }
}