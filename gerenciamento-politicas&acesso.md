# Gerenciando Politicas em Acessos Azure
Gerenciar políticas de acesso no Azure é fundamental para garantir a segurança e conformidade dos recursos, especialmente em ambientes em que diferentes equipes acessam a infraestrutura.

## 1. Azure Role-Based Access Control (RBAC)
O Controle de Acesso Baseado em Funções (RBAC) é uma das principais formas de gerenciar permissões de acesso no Azure. Ele permite que você atribua permissões específicas a usuários, grupos ou identidades de serviço (aplicações), controlando quem pode acessar quais recursos e quais ações eles podem realizar.

### Elementos do RBAC:
- Principais de Segurança: Quem está recebendo as permissões (usuário, grupo, identidade de serviço).
- Funções: Um conjunto de permissões que define o que o principal de segurança pode fazer com os recursos. Funções comuns incluem:
- Leitor: Acesso somente leitura a todos os recursos.
- Colaborador: Acesso total para gerenciar recursos, exceto atribuições de função.
- Proprietário: Permissões completas, incluindo gerenciar atribuições de função.
- Âmbito (Scope): O nível em que a função é aplicada, podendo ser:
- Grupo de Recursos: Função aplicada a todos os recursos dentro do grupo.
- Assinatura: Função aplicada em toda a assinatura do Azure.
- Recurso: Função aplicada a um recurso específico, como uma VM ou Banco de Dados.
- Melhores Práticas com RBAC:
   - Princípio do Menor Privilégio: Conceda apenas as permissões mínimas necessárias para que um usuário ou aplicação execute suas tarefas.
   - Funções Customizadas: Caso as funções integradas do Azure não atendam às suas necessidades, crie funções personalizadas com permissões específicas.

## 2. Azure Active Directory (Azure AD)
O Azure Active Directory é o serviço de gerenciamento de identidade e acesso do Azure. Ele é usado para autenticar usuários e gerenciar seus direitos de acesso a aplicativos e recursos.

### Principais Recursos do Azure AD:
- Grupos de Segurança: Agrupamento de usuários para simplificar o gerenciamento de permissões. Atribua permissões a grupos em vez de a usuários individuais, o que facilita a administração em grande escala.
- Identidades Gerenciadas: O Azure oferece identidades gerenciadas para que aplicações possam acessar outros recursos do Azure de forma segura sem a necessidade de armazenar credenciais explicitamente.
- Autenticação Multifator (MFA): Adiciona uma camada extra de segurança, exigindo mais de um fator de autenticação (como senha e código enviado por SMS) para acessar o Azure.
- Gerenciamento de Acesso no Azure AD:
   - Atribuições de Funções no Azure AD: Além do RBAC, o Azure AD possui suas próprias funções administrativas, como Administrador Global, Administrador de Usuário, Administrador de Aplicativos, entre outros.
   - Identity Protection: Monitora atividades anômalas de acesso e autenticação, como tentativas de login suspeitas e usuários de alto risco.

## 3. Azure Policy
O Azure Policy permite a criação de regras e padrões que forçam a conformidade e boas práticas na gestão de recursos. As políticas garantem que os recursos criados ou atualizados sigam as diretrizes da organização, incluindo as regras de acesso.

### Funcionalidades do Azure Policy:
- Definições de Política: As políticas são expressões que forçam a conformidade com determinadas configurações de segurança ou governança. Exemplo: "Só permitir a criação de VMs em regiões específicas".
- Atribuições de Política: Atribuir uma política a um escopo (assinatura, grupo de recursos, ou recurso).
- Políticas Integradas: O Azure já possui políticas predefinidas, como exigir criptografia de dados em repouso ou impedir a criação de recursos fora das regiões autorizadas.
- Iniciativas: Conjunto de políticas agrupadas para facilitar a aplicação de várias regras simultaneamente.
- Melhores Práticas com Azure Policy:
   - Auditoria e Conformidade: Use políticas para auditar recursos existentes e garantir que estejam em conformidade com as práticas recomendadas, como o uso de grupos de segurança para controle de acesso.
   - Correção Automática: Algumas políticas podem corrigir configurações que estejam em desacordo com as diretrizes, como habilitar logs de diagnóstico ou aplicar tags de custos automaticamente.

## 4. Privileged Identity Management (PIM)
O Privileged Identity Management (PIM) é um serviço que ajuda a gerenciar, controlar e monitorar o acesso aos recursos críticos do Azure, como o acesso privilegiado a funções administrativas.

### Funcionalidades do PIM:
- Acesso Just-In-Time: Concede acesso privilegiado apenas quando necessário e por um período de tempo limitado, reduzindo a exposição a ataques.
- Revisão de Acessos: Periodicamente, os acessos podem ser revisados para garantir que apenas as pessoas necessárias mantenham suas permissões.
- Notificações e Auditoria: Monitora e registra o uso de funções privilegiadas, notificando sobre atividades suspeitas ou anômalas.

## 5. Azure Blueprints
O Azure Blueprints é uma ferramenta que facilita a implementação de governança e conformidade em larga escala. Ele permite que você defina um conjunto de artefatos (como políticas, modelos ARM e RBAC) que podem ser implantados juntos para garantir a consistência nas implantações de novos ambientes.

### Funcionalidades do Blueprints:
- Modelos Consistentes: Crie "blueprints" que definem como novos ambientes ou grupos de recursos devem ser configurados, incluindo quem terá acesso e quais políticas serão aplicadas.
- Implantações Repetíveis: Permite que as configurações e políticas sejam facilmente replicadas em diferentes assinaturas ou grupos de recursos.

## 6. Monitoramento e Auditoria de Acesso
- Azure Monitor: Use para monitorar o uso de recursos e acessos. Logs de atividades, diagnósticos e alertas ajudam a identificar acessos não autorizados ou alterações indevidas.
- Azure Security Center: Monitora continuamente o ambiente e fornece recomendações sobre como melhorar a segurança dos acessos e a conformidade com as políticas.
- Log Analytics: Recolhe e analisa logs de atividades e diagnósticos de todos os recursos do Azure, permitindo identificar problemas de acesso e conformidade.

## Resumo das Melhores Práticas:
- Aplique o princípio de menor privilégio: Dê aos usuários apenas as permissões necessárias para realizar suas tarefas.
- Automatize com Azure Policy: Use políticas para garantir a conformidade automática com os padrões de segurança e governança.
- Use o RBAC de forma granular: Atribua funções no nível de recurso adequado, evitando permissões excessivas.
- Implemente PIM: Gerencie acessos privilegiados de forma temporária e controlada.
- Monitore e audite acessos regularmente: Utilize o Azure Monitor e o Security Center para revisar atividades e evitar vulnerabilidades.
