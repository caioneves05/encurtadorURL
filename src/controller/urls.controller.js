import urls from "../model/urls.js";
import dotenv from "dotenv";
import { nanoid } from "nanoid"

dotenv.config()

const urlAPI = process.env.API_URL;

export default class urlsController {

     async listURLSByName(req,res){
        const nomeUrl = req.params.id

        const query =  await urls.find({originURL : {$regex: nomeUrl, $options: 'i'}}).select({'_id': 0, '__v': 0, 'hash': 0})

        res.json(query)
    }

    async listarURLS(req,res){
        const result = await urls.find().select({'_id': 0, '__v': 0})
        res.json(result)
    }

    async shorten(req,res) {

        const { originURL } = req.body

        const url = await urls.findOne({ originURL })

        if(url){
            res.json(url)
        }

        const hash = nanoid(7)
        const shortURL = `${urlAPI}/${hash}`
                        //Passando os dados para o banco de dados.
        const newUrl =  await urls.create({ hash, shortURL, originURL })

        res.json(newUrl)
    }

    async redirect(req, res) {

        const { hash } = req.params
        const url = await urls.findOne({ hash })

        if(url){
            res.redirect(url.originURL)
        }
        else{
        res.status(400).json({error: 'URL not found'})
        }
    }

}


