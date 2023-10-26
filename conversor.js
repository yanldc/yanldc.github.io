function ConverterMoeda() {
  var valorElemento = document.getElementById("valorMoeda");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico / 5.25;
  var valorEmEuroNumerico = (valorEmReal / 5.25) * 5.19;
  var valorEmBtc = valorEmReal / 5.25 / 97689;
  //console.log(valorEmEuroNumerico);

  var elementoValorMoedaConvertido = document.getElementById(
    "valorMoedaConvertido"
  );
  var valorMoedaConvertido =
    "O resultado em Dolares é $ " +
    valorEmReal +
    ", em Euros é de € " +
    valorEmEuroNumerico +
    " e em Bitcoin é de " +
    valorEmBtc;
  elementoValorMoedaConvertido.innerHTML = valorMoedaConvertido;
}

function ConverterDistancia() {
  var valorElemento = document.getElementById("valorDistancia");
  var valor = valorElemento.value;
  var valorDistancia = parseFloat(valor);

  var valorEmLuz = valorDistancia / 9460536068;
  const valorEmLuzFinal = valorEmLuz.toFixed(2);
  //console.log(valorEmLuzFinal);
  // console.log(valorEmLuz);

  var elementoValorDistanciaConvertido = document.getElementById(
    "valorDistanciaConvertido"
  );
  var valorDistanciaConvertido =
    "O tempo sera de aproximadamente " +
    valorEmLuz +
    " anos luz, para chegar ao destino";
  elementoValorDistanciaConvertido.innerHTML = valorDistanciaConvertido;
}

function ConverterTemperatura() {
  var valorElemento = document.getElementById("valorTemperatura");
  var valor = valorElemento.value;
  var valorEmCelcius = parseFloat(valor);
  var valorEmKelvin = parseFloat(valor);
  var valorEmFahrenheit = parseFloat(valor);

  var valorEmKelvim = valorEmCelcius + 273.15;
  var valorEmFahrenheit = ((valorEmKelvim - 273.15) * 9) / 5 + 32;

  var elementoValorTemperaturaConvertido = document.getElementById(
    "valorTemperaturaConvertido"
  );
  var valorTemperaturaConvertido =
    "O resultado em Kelvim é " +
    valorEmKelvim +
    "K, e em Fahrenheit é de " +
    valorEmFahrenheit +
    "ºF";
  elementoValorTemperaturaConvertido.innerHTML = valorTemperaturaConvertido;
}
