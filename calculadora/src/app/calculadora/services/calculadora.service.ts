/**
 * Serviço responsável por executar as operações da calculadora.
 * @autor Rafael Baena Neto<rafael.rbnet@gmail.com>
 * @since 1.0.0
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Define as constantes utilizadas para identificar as operações de cálculo
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois números.
   * Suporta as operações sima, subtração, divisão, e multiplicação
   * 
   * @param num1 number
   * @param num2 number
   * @param operação string Operação a ser executada
   */
  calcular(num1:number, num2: number, operacao: string): number{
    let resutado: number; // armazena oresultado da operação

    switch(operacao) {
      case CalculadoraService.SOMA:
        resutado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resutado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resutado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resutado = num1 / num2;
      break;
      default:
        resutado = 0;
    }

    return resutado;
  }

}
