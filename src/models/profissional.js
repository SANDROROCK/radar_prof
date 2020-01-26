const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema');


const ProfissionalSchema = new mongoose.Schema({
    name:String,
    username:String,
    bio:String,
    telefone:String,
    avatar_url:String,
    servicos:[String],
    location:{
        type: PointSchema,
        index:"2dsphere"
    }
    },{
        toJSON:{
            virtuals:true
        },
    });


ProfissionalSchema.virtual('ava_url').get(function(){
    return `http://192.168.0.107:3333/files/${this.avatar_url}`
})

module.exports = mongoose.model('Profissional',ProfissionalSchema);