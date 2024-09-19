# Desenvolvendo uma arquitetura Azure
**Objetivo:** *Desenvolver um site portifólio pessoal, desenvolvendo a prática das habilidades na plataforma Azure, demonstrando conhecimentos em Cloud, infraestrutura e serviços do Azure.*

### Serviços utilizados:
- **Azure Static Web Apps:** para hospedar um site estático de portfólio.
- **Azure Storage:** para armazenar arquivos, imagens e conteúdo estático.
- **Azure App Service:** para hospedar sites dinâmicos ou aplicações web.
- **Azure Functions:** para criar funcionalidades sem servidor, como formulários de contato.

---

Com os arquivos de (`index.html`, `style.css` e `script.js`) já estruturados e ***dentro do seu repositório no GitHub***, temos as telas estáticas prontas para o portifólio. O próximo passo é hospedar isso no Azure.

### Azure Static Web Apps (para hospedar o site):

1. Acessar o Azure Portal:
   - Faça login no Azure Portal.

2. Criar um recurso do Azure Static Web Apps:
   - No painel do Azure, procure por "Aplicativos Web Estático" no campo de pesquisa.
   - Clique em "Criar aplicativo Web estático".
   - Escolha um nome para seu aplicativo.
   - Selecione a assinatura gratuita.
   - Para o Source, escolha "GitHub" (ou ignore caso esteja fazendo o deploy manualmente).
   - Siga o fluxo de autorização do GitHub.
   - Clique em Revisar + Criar.
   - Clique em Criar e aguarde a implantação.
   - Ao finalizar, clique em Ir para o recurso.
   - Ao abrir a tela do portifolio-pessoal, clique em Exibir aplicativo no navegador e está pronto!
   - **Link de acesso ao portifólio criado:** https://white-wave-0f3db201e.5.azurestaticapps.net/

![image](https://github.com/user-attachments/assets/28fff0c7-1f75-4dbe-a505-43f1924e40b1)
![image](https://github.com/user-attachments/assets/af092a3d-d81f-4f37-b2f3-afae4917559c)
![image](https://github.com/user-attachments/assets/be093bcc-41e9-472a-98b9-03ccfe0b0739)
![image](https://github.com/user-attachments/assets/66e81ba3-1bfc-4068-9a89-b695e9aba2de)
![image](https://github.com/user-attachments/assets/1ed0f077-5f2e-4504-816f-9c0bbd7ab3d6)
![image](https://github.com/user-attachments/assets/d712faa6-61d2-4a90-97f8-c565b1f79100)

# Próximos passos a serem feitos:

### Azure Storage (para armazenar arquivos e imagens estáticas):
1. Criar uma Conta de Armazenamento:
   - No Azure Portal, pesquise por Storage Accounts (ou conta de armazenamento).
   - Clique em Criar e preencha os dados, como nome e assinatura gratuita.
2. Criar um Container no Blob Storage:
   - Acesse o recurso criado e clique em Containers.
   - Crie um container público para armazenar suas imagens e arquivos estáticos.
   - Suba os arquivos e use os links gerados nas páginas do seu site (para imagens, por exemplo).

### Azure Functions (para criar um formulário de contato ou backend leve):
1. Criar uma Azure Function:
   - No Azure Portal, pesquise por Functions e clique em Criar.
   - Escolha HTTP Trigger como o tipo de função (para receber dados de um formulário de contato).
   - No código da função, adicione lógica para processar o formulário (por exemplo, enviar um e-mail ao ser submetido).
2. Configurar o Frontend:
   - No formulário de contato da página, envie os dados para a Azure Function que você acabou de configurar.

### Azure App Service (para hospedar sites dinâmicos, se necessário):
   - O Azure App Service seria usado se você quisesse adicionar lógica dinâmica no portfólio. Se o site for estático, você pode pular essa etapa, mas caso queira criar uma aplicação web (como um blog), podemos configurar.
