//define a classe e indica a export
export class Bolinha{
    constructor(cor, x, y, raio){
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.raio = raio;
    }
    //metodos de acesso
    //leitura
    get bcor(){
        return this.cor;
    }
    set bcor(valor){
        this.cor = valor;
    }
}