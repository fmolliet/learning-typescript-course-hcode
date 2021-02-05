interface IProduct{
    nome: string,
    valor: number
}

class Produto {
    
    nome : string;
    valor : number;
    
    constructor ({ nome , valor} : IProduct ){
        this.nome  = nome;
        this.valor = valor;
    }
}

const ps5 = new Produto({nome: 'PS5', valor: 4000})

const element = document.querySelector('div');