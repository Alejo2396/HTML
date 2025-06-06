export class Alcancia {
  constructor() {
    this.moneda200 = 0;
    this.moneda500 = 0;
    this.moneda1000 = 0;
  }

  agregarMoneda(valor) {
    if (valor === 200) this.moneda200++;
    else if (valor === 500) this.moneda500++;
    else if (valor === 1000) this.moneda1000++;
  }

  contarMonedas() {
    return {
      "200": this.moneda200,
      "500": this.moneda500,
      "1000": this.moneda1000
    };
  }

  calcularTotal() {
    return (this.moneda200 * 200) + (this.moneda500 * 500) + (this.moneda1000 * 1000);
  }

  romperAlcancia() {
    this.moneda200 = 0;
    this.moneda500 = 0;
    this.moneda1000 = 0;
  }
}