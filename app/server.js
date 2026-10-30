import express from 'express'
import os, { version } from 'os'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

// Verifica se a API está funcionando
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'online'
    })
})

// Informações da aplicação
app.get('/api/info', (req, res) => {
    res.status(200).json({
        name: 'API-Node',
        version: '1.0.0',
        hostname: os.hostname()
    })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})