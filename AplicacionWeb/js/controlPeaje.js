export class Peaje {
  constructor() {
    this.reset();
  }

  reset() {
    this.vehiculos = {
      auto: 0,
      bus: 0,
      camion: 0,
    };
    this.total = 0;
  }

  registrar(tipo) {
    const tarifas = {
      auto: 5000,
      bus: 10000,
      camion: 15000,
    };

    this.vehiculos[tipo]++;
    this.total += tarifas[tipo];
  }

  getContadores() {
    return { ...this.vehiculos };
  }

  getTotal() {
    return this.total;
  }
}