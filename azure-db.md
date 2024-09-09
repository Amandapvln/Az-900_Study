# Desafio - Configurando uma instância de banco de dados

**Pré requisito:** Estar autenticado no Microsoft Azure.

## Passo 1: Acessar o Portal do Azure
- Acesse o portal do Azure com sua conta.
- No menu de navegação à esquerda, clique em "Criar um recurso".
  
![image](https://github.com/user-attachments/assets/3438e6c5-051a-4834-811a-54703b6703d4)

## Passo 2: Criar um Banco de Dados SQL
- Na barra de pesquisa, digite "SQL Database" e selecione "SQL Database".
- Clique em "Criar" para iniciar a configuração.
  
![image](https://github.com/user-attachments/assets/1aca7a57-7469-46b6-afad-1c444afbbbfc)

## Passo 3: Configurar o Servidor e o Banco de Dados
- Assinatura: Selecione a assinatura do Azure (se tiver mais de uma).
- Grupo de recursos: Escolha um grupo existente ou crie um novo.
- Nome do Banco de Dados: Insira o nome desejado para o banco de dados.
- Servidor:
- Clique em "Criar novo" para configurar um novo servidor SQL.

![image](https://github.com/user-attachments/assets/7e4ac85a-5b8b-484e-836a-1af22bd44029)

- Defina um nome para o servidor, escolha uma região, e defina o login e senha de administrador (no caso, digite seu email cadastrado no Azure).

![image](https://github.com/user-attachments/assets/031dbab9-bbd8-41ff-be5b-14b61e995a27)
![image](https://github.com/user-attachments/assets/2c96ed99-d001-42ba-96f9-d59396478b38)

- Após preencher, clique em OK.

- Camada de Preço: Escolha uma camada de desempenho. Se for um ambiente de teste, a opção Basic ou DTU pode ser mais econômica.

![image](https://github.com/user-attachments/assets/2b7a3c11-2586-4cc6-a9c6-2e9502fb22e1)

## Passo 4: Configurações de Rede e Backup
- Opções de rede: Defina se o banco de dados será acessível via IP público ou somente por recursos internos da Azure.
- Redundância geográfica: Escolha a opção de redundância que preferir para garantir a recuperação de desastres.

![image](https://github.com/user-attachments/assets/d62e6d77-ca95-49aa-b9e7-239d2877e967)

## Passo 5: Finalizar a Criação
- Clique em Revisar e criar.
- Após a validação dos parâmetros, clique em Criar.
- O Azure começará a provisionar o banco de dados. Esse processo pode levar alguns minutos.

![image](https://github.com/user-attachments/assets/16aff289-5ad5-473b-88cf-a15e605734ce)
![image](https://github.com/user-attachments/assets/a2100058-d516-493b-9a18-4134b8058cbe)


## Passo 6: Conectar-se ao Banco de Dados
Após a criação:
- Vá para Recursos e clique no banco de dados criado.
- Na seção Configurações, clique em Strings de Conexão para obter as informações de conexão para seu aplicativo.
  
![image](https://github.com/user-attachments/assets/5e26ecfd-be19-4baf-9428-71a87cbc1646)
