export class Negociacao {

    constructor(
        private _data: Date, 
        private quantidade: number, 
        private valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }
    get data(): Date {
        return this._data;
    }
}