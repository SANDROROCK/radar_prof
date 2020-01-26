const Profissional= require('../models/profissional');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports ={

    async update(req,res){

        const { name,username,bio,servicos,latitude,longitude}= req.body;
        const { filename } = req.file;

        const profs = await Profissional.findByIdAndUpdate({
            
        })
    },

    async index(req,res){
           const profs = await Profissional.find();
           return res.json(profs);
    },



    async store (req,res){
        
        const {name,username,bio,telefone,servicos,latitude,longitude} = req.body;
        const { filename } = req.file;
        

        //let Prof = await Profissional.findOne(username);
            const serv = parseStringAsArray(servicos);   
            const location = {
                type:"Point",
                coordinates:[longitude,latitude],
            }
        
        
            var Profi = await Profissional.create({
                name,
                avatar_url:filename,
                bio:bio,
                telefone,
                servicos:serv,
                username,
                location
            })
            return res.json(Profi);
       
    
    }
};