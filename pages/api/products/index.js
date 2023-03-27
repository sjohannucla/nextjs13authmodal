import nc from 'next-connect'
import dbConnect from './../../../config/dbConnect'
import {   getProducts,
    newProduct, } from '../../../controllers/productControllers'

const handler = nc()
dbConnect()
handler.get(getProducts)
handler.post(newProduct)

export default handler;
