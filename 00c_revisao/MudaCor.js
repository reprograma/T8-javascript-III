class MudaCor {
  constructor() {
    this.r = this.geraInteiro(255);
    this.g = this.geraInteiro(255);
    this.b = this.geraInteiro(255);
  }
  geraInteiro(num) {
    return parseInt(Math.random() * num)
  };
  geraRGB() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
};