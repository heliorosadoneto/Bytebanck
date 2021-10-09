
export class Conta{
    constructor(saldoInicial,cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instancia um objeto do tipo conta diretamente pois essa é um classe abstrata."); // adicionar um erro e parar a execuçao
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
// metodo abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    trasferir(valor, conta){
        const novoValor = this.sacar(valor);
        conta.depositar(novoValor);
    }


}   