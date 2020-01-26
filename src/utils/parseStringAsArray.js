module.exports = function parseStringAsArray(arrayAsString){
    return  arrayAsString.split(',').map(serv =>serv.trim());
  
}