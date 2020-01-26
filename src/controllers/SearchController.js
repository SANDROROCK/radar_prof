
const ProfController = require('./ProfController');
const Profissionais = require('../models/profissional');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports ={

    async index(req,res){

        console.log(req.query);

        const {latitude,longitude,servicos}= req.query
        
        const serv = parseStringAsArray(servicos);

        const profs = await  Profissionais.find({
            servicos:{
                $in:serv,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance:10000,
                },
            },
        });


        return res.json({profs})
    }

}