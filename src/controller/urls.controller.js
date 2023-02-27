import express from "express";
import urlsModel from "../model/urls.js";
import dotenv from "dotenv";
import shortid from "shortid";

dotenv.config()

const urlAPI = process.env.API_URL;

export default class urlsController {
     static shorten = (req,res) =>{

        const { originUrl } = req.body

        const url = urlsModel.findOne({ originURL })

        if(url){
            res.json(url)
        }

        const hash = shortid.generate();
        const shortURL = `${urlAPI}/${hash}`

        const newUrl = urlsModel.create({ hash, shortURL, originURL })

        res.json(newUrl)
    }

    static redirect = (req, res) =>{

        const { hash } = req.params
        const url = urlsModel.findOne({ hash })

        if(url){
            res.redirect(url.originURL)
        }

        res.status(400).json({error: 'URL not found'})
    }
}


