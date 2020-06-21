function fancyDate(this: Date) {
  return `${this.getDate()} /${this.getMonth()} /${this.getFullYear()}`;
}

fancyDate();
fancyDate.apply(new Date());
fancyDate.call(new Date());

fancyDate(new Date());
