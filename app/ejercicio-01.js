// Completar la función stringToHash que tome un string
// y lo transforme a un hash numerico a traves de la suma
// del valor decimal ASCII de cada letra del string


function stringToHash(string) {
  if (typeof string !== 'string')
    return 'Error de dato'
  var sum = 0
  for (var i = 0; i < string.length; i++)
    sum += string.charCodeAt(i)
  return sum
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.stringToHash = stringToHash;
}
