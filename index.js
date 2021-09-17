import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js'

dotenv.config()

const app = new express()
app.use(router)

app.set('PORT', process.env.PORT || 3000)

app.listen(app.get('PORT'), () => {
	console.log(`Server listening at port ${app.get('PORT')}`)
})

