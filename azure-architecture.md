

#Passo 1: Criar um Armazenamento Blob para Hospedar o Front-end
- No portal do Azure, vá em Armazenamento > Contas de Armazenamento.
- Crie uma nova conta de armazenamento.
- No armazenamento, crie um contêiner público para armazenar arquivos estáticos.
- Faça upload do seu site estático (HTML, CSS, JavaScript) no contêiner.
- Habilite a publicação de páginas estáticas.
![image](https://github.com/user-attachments/assets/9b298236-fa54-4891-9051-1ad4804c7a33)
![image](https://github.com/user-attachments/assets/bdad6f7b-9a7e-48ae-9021-add468cce1cc)
![image](https://github.com/user-attachments/assets/35dd28d8-5e91-47ad-8505-f18453582026)
![image](https://github.com/user-attachments/assets/66bfc419-1bb3-487f-a044-2e11f25abb96)
![image](https://github.com/user-attachments/assets/e79e1f07-f03b-4695-8cd2-3c0db41c4fe6)

#Passo 2: Criar uma API Serverless com Azure Functions
- No portal do Azure, procure por Funções do Azure.
- Crie uma nova Função do Azure usando o plano de consumo gratuito.
- Escolha um template (ex: HTTP trigger) para configurar sua API.
- Escreva a lógica da API (por exemplo, retornando dados JSON).
- Implante a função e teste o endpoint gerado.

#Passo 3: Criar um Banco de Dados SQL no Azure
- No portal, vá em Bancos de Dados SQL > Criar Banco de Dados.
- Escolha um nome para seu banco e um servidor SQL gratuito.
- Configure o banco com os parâmetros básicos (para ficar dentro do plano gratuito).
- Conecte a API criada na Azure Function ao banco de dados SQL, usando uma string de conexão.

#Passo 4: Automatizar o Deploy com Azure DevOps
- Use o Azure DevOps para criar pipelines de CI/CD.
- Crie um repositório Git no Azure Repos ou GitHub.
- No Azure DevOps, configure um pipeline para automaticamente fazer o deploy do seu código nas Azure Functions e do front-end no Blob Storage.

#Componentes da Arquitetura
- Armazenamento Blob: Hospeda arquivos estáticos.
- Azure Functions: Executa a lógica da API de maneira escalável e sem servidores.
- Banco de Dados SQL: Armazena dados de maneira relacional.
- Azure DevOps: Gerencia o ciclo de vida da aplicação com pipelines de CI/CD.

#4. Monitoramento e Escalabilidade
Use o Azure Monitor (disponível gratuitamente) para monitorar a saúde dos serviços.
Application Insights pode ser integrado nas Azure Functions para rastrear o desempenho da API.
