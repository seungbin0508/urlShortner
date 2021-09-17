import { Router } from 'express'

const router = new Router()

router.route('/shortener').post().get()
router.route('/shortener/:shortId').get().patch().delete()
router.route('/:shortId').get()

export default router