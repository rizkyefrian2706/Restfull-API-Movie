const router = require('express').Router()
const movie = require('../controllers/movie')

router.get('/movies', movie.index)
router.get('/movies/:id', movie.show)
router.post('/movies', movie.create)
router.patch('/movies/:id', movie.update)
router.delete('/movies/:id', movie.delete)

module.exports = router