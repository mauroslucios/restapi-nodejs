const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('admin/index')
})
router.get('/about', (req,res)=>{
    res.render('admin/about')
})
router.get('/product', (req,res)=>{
    res.render('admin/product')
})
router.get('/contact',(req,res)=>{
    res.render('admin/contact')
})

module.exports = router