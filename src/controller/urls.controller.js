import urls from "../model/urls.js";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config()

const urlAPI = process.env.API_URL;

export default class urlsController {

    async listarNomeUrls(req,res){
        const nomeUrl = req.params

        urls.find({$rege})
    }

     async listarURLS(req,res){
        const result = await urls.find().select({'_id': 0, '__v': 0})
        res.json(result)
    }

     async  shorten(req,res) {

        const { originURL } = req.body

        const url = await urls.findOne({ originURL })

        if(url){
            res.json(url)
        }

        const hash = nanoid(7)
        const shortURL = `${urlAPI}/${hash}`

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


