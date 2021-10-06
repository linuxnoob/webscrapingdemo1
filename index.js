const PORT = 8383
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()

const url = 'https://www.tokopedia.com/p/handphone-tablet/handphone'
axios(url)
.then(response =>{ 
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.css-bk6tzz e1nlzfl3', html).each(function(){
        const title = $(this).find('a').attr('href')
        
        articles.push({
            title
        })
    })
    console.log(articles)

}).catch(console.error())

app.listen(PORT,() => console.log(`server running on PORT ${PORT}`) )

