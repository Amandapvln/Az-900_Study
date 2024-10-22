# Ferramentas de Implantação na Azure
A Azure oferece várias ferramentas e serviços para facilitar a implantação de aplicativos e infraestrutura, o que permite que o time gerenciem e automatizem o ciclo de vida da aplicação. Essas ferramentas cobrem diferentes cenários, como o provisionamento de infraestrutura, gerenciamento de pipelines de CI/CD e automação de tarefas em ambientes de produção.

## 1. Azure DevOps *(esse eu tive experiência no meu primeiro estágio!)*
O Azure DevOps é uma plataforma completa para o gerenciamento do ciclo de vida de software, fornecendo ferramentas para integração contínua (CI) e entrega contínua (CD), além de gerenciamento de código-fonte e colaboração entre equipes.

### Principais Recursos:
- Pipelines do Azure: Oferece pipelines de CI/CD para a automação da construção, teste e implantação de código em diferentes ambientes (desenvolvimento, teste e produção).
- Suporte para GitHub, GitLab, Bitbucket, e repositórios Azure.
- Permite integração com várias tecnologias, como contêineres, máquinas virtuais, funções, Kubernetes e muito mais.
- Repositórios do Azure: Armazena o código-fonte e permite a colaboração com controle de versão Git.
- Boards do Azure: Gerenciamento de trabalho com Kanban, SCRUM e outras metodologias ágeis.
- Test Plans e Artifacts: Gerenciamento de testes e armazenamento de pacotes dependentes para projetos.
    - Cenários de Uso:
        - Automatizar a criação, testes e a entrega de aplicações para ambientes de desenvolvimento e produção.
        - Gerenciar código-fonte em repositórios Git e controlar a colaboração entre desenvolvedores.

## 2. GitHub Actions for Azure
O GitHub Actions é a plataforma de CI/CD integrada ao GitHub. Ela permite automatizar fluxos de trabalho, incluindo a construção, teste e implantação de aplicativos diretamente a partir de repositórios GitHub.

Funcionalidades:
- Workflows customizados: Definir pipelines com YAML que especificam ações de CI/CD.
- Integração nativa com Azure: Existem várias ações prontas para implantar recursos e aplicações no Azure, incluindo suporte para Azure Kubernetes Service (AKS), Azure Functions, Azure App Service e mais.
- Suporte a múltiplas linguagens: Ações para implantar aplicações em Node.js, Python, .NET, Java, entre outras.
    - Cenários de Uso:
        - CI/CD automatizado para projetos hospedados no GitHub, com integração facilitada para implantar diretamente no Azure.

## 3. Azure Resource Manager (ARM) Templates
Os Modelos ARM permitem definir a infraestrutura e os recursos da Azure em código (Infrastructure as Code – IaC). Eles usam a linguagem JSON para descrever recursos como VMs, redes, bancos de dados e mais.

### Principais Características:
- Provisionamento Descritivo: Define a infraestrutura necessária como código. Quando implantado, o modelo cria, configura e provisiona os recursos automaticamente.
- Idempotência: Ao implantar um modelo ARM, a Azure só faz mudanças nos recursos que foram alterados, garantindo consistência.
- Modularidade e Reutilização: Modelos ARM podem ser divididos em partes menores, facilitando a reutilização de componentes.
    - Cenários de Uso:
        - Provisionamento e automação da infraestrutura de produção, como criação de VMs, redes, armazenamento e bancos de dados.
        - Padronização e repetibilidade na criação de ambientes.

## 4. Terraform
O Terraform é uma ferramenta popular de Infrastructure as Code (IaC) de código aberto, que também pode ser usada para gerenciar recursos na Azure. Diferente dos modelos ARM, o Terraform é multi-cloud, permitindo gerenciar infraestruturas em outros provedores além da Azure.

Características:
- Provisionamento declarativo: Assim como o ARM, você define a infraestrutura em arquivos de configuração (em HCL) e o Terraform aplica as mudanças necessárias.
- Estado de Infraestrutura: O Terraform mantém um arquivo de estado que reflete a infraestrutura atual, permitindo saber o que precisa ser alterado ou criado em uma nova execução.
- Reutilização de Módulos: Permite o uso de módulos pré-construídos para simplificar a criação e gerenciamento de ambientes.
    - Cenários de Uso:
        - Gerenciamento de ambientes complexos em multi-cloud, automatizando o provisionamento da infraestrutura em Azure, AWS, Google Cloud, etc.
        - Gerenciamento de grandes ambientes de produção com versões de configuração de infraestrutura.

## 5. Azure Kubernetes Service (AKS)
O Azure Kubernetes Service (AKS) facilita a criação, configuração e gerenciamento de clusters Kubernetes gerenciados na Azure. Ele permite implantar e gerenciar contêineres em escala.

Funcionalidades:
- Automação de cluster: O Azure gerencia a parte operacional do Kubernetes (nó mestre), enquanto você gerencia os nós de trabalho.
- CI/CD: Integrado a ferramentas como Azure DevOps e GitHub Actions para automação de pipelines de CI/CD.
- Escalabilidade Automática: Suporte para escalabilidade automática de nós e pods conforme a demanda de carga de trabalho aumenta ou diminui.
    - Cenários de Uso:
        - Implantação e orquestração de aplicativos baseados em contêineres com Kubernetes.
        - Automação de fluxos de trabalho com microserviços usando contêineres.

## 6. Azure Functions
O Azure Functions é uma plataforma serverless que permite a execução de funções em resposta a eventos, sem a necessidade de gerenciar a infraestrutura subjacente.

Características:
- Modelo de Preço Pay-As-You-Go: Você paga apenas pelo tempo de execução das funções.
- Eventos Integrados: Suporte a diversos gatilhos (triggers), como timers, eventos de armazenamento, filas e HTTP, o que facilita a integração com outros serviços da Azure.
- CI/CD: Suporte para automação de pipelines de CI/CD para a implantação de funções com Azure DevOps ou GitHub Actions.
    - Cenários de Uso:
        - Executar tarefas de automação como resposta a eventos, como processar uploads de arquivos ou manipular mensagens de uma fila.
        - Executar funções computacionais sem a necessidade de gerenciar servidores.

## 7. Azure App Service
O Azure App Service é uma plataforma de PaaS para hospedar aplicativos Web, APIs RESTful e aplicativos móveis.

Funcionalidades:
- Suporte a Várias Linguagens: Suporte para Node.js, Python, Java, .NET, PHP e Ruby, entre outras.
- Ambientes de Produção e Desenvolvimento: Facilita a configuração de ambientes de desenvolvimento, teste e produção para um mesmo aplicativo.
- CI/CD: Integrado ao Azure DevOps e GitHub Actions para automação da implantação de aplicativos.
    - Cenários de Uso:
        - Hospedagem de sites e APIs de forma escalável com balanceamento de carga e alta disponibilidade.
        - Implementação de microsserviços em aplicativos distribuídos.

## 8. Azure Container Instances (ACI)
O Azure Container Instances (ACI) permite a execução de contêineres diretamente na Azure sem a necessidade de gerenciar clusters de máquinas virtuais ou orquestração complexa.

Funcionalidades:
- Execução rápida de contêineres: Ideal para cargas de trabalho de curta duração, como processamento em lote ou jobs eventuais.
- Fácil integração: Integrado ao Azure Kubernetes Service (AKS) para escalonamento automático baseado em contêineres.
   - Cenários de Uso:
        - Executar contêineres que não necessitam de um ambiente de orquestração completo.
        - Teste de contêineres antes de mover para um ambiente mais complexo como AKS.

## 9. Bicep
O Bicep é uma linguagem declarativa de IaC específica da Azure, desenvolvida para simplificar a criação de templates complexos do Azure Resource Manager (ARM).

Características:
- Sintaxe simplificada: Oferece uma alternativa mais concisa e legível em comparação ao JSON utilizado nos modelos ARM.
- Compatibilidade total com ARM: O Bicep se converte em ARM templates na fase de compilação, mantendo todas as capacidades do ARM.
   - Cenários de Uso:
       - Criação e gerenciamento de recursos Azure em projetos que exigem simplicidade na definição da infraestrutura.
