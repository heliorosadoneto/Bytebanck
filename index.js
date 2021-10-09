import { Cliente } from "./Cliente.js";
//import { ContaCorrente } from "./ContaBanco/ContaCorrente.js";
//import { ContaPoupanca } from "./ContaBanco/ContaPoupanca.js";
//import { ContaSalario } from "./ContaBanco/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


// Conta 1
//const ClienteHelio = new Cliente("Hélio", 99922288873, "4444");
//const estalogado = SistemaAutenticacao.login(ClienteHelio,"4445");


//const ContaCorrenteHelio = new ContaCorrente(0, ClienteHelio, 1001);

//const ContaPoupancaHelio = new ContaPoupanca(0, ClienteHelio, 1001);

//const ContaSalarioHelio = new ContaSalario(ClienteHelio);




//Funcionarios

const diretor = new Diretor ("Rodriogo", 10000, 10029937727);

diretor.cadastrarSenha("1234");

const diretorlogado = SistemaAutenticacao.login(diretor,"1234");

console.log(diretorlogado);




const gerente = new Gerente ("Franciana", 5000, 18288827100);
