# Sistema de Pesagem e Balanço Rodoviário - BalanSis

Bem-vindo ao **BalanSis**, um sistema de pesagem e balanço rodoviário desenvolvido para gerenciar e controlar a pesagem de veículos em rodovias. Este sistema permite o registro de informações sobre o motorista, o caminhão, e a carga, além de calcular o peso líquido do veículo.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O BalanSis é um sistema web que permite o registro de informações de pesagem e balanço rodoviário através de um formulário interativo. O formulário coleta dados do motorista, veículo e carga, e fornece cálculos de peso líquido para assegurar conformidade com as regulamentações.

## Funcionalidades

- **Registro de Informações**: Coleta dados do motorista, placa do caminhão, tipo de carga e fornecedor.
- **Cálculo de Peso Líquido**: Calcula o peso líquido com base no peso de entrada e saída.
- **Impressão do Formulário**: Permite a impressão do formulário para registro físico.
- **Envio de Dados**: Envia os dados do formulário para um endpoint externo (SheetMonkey) para processamento.

## Tecnologias

- **HTML/CSS**: Estrutura e estilo da página web.
- **JavaScript**: Manipulação e cálculo dos dados no lado do cliente.
- **SheetMonkey**: Serviço externo para armazenamento dos dados do formulário.

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu_usuario/balansis.git
   cd balansis
