# Otimizando Custos no Azure
A otimização de custos no Azure é essencial para garantir que você esteja utilizando os recursos de nuvem de forma eficiente e econômica.

## 1. Escolha das Instâncias de Máquina Virtual (VM)
- Tamanhos adequados: Escolha o tipo e o tamanho da VM de acordo com a carga de trabalho. VMs menores ou otimizadas para cargas específicas podem ser mais eficientes em termos de custo.
- Instâncias Reservadas: Em vez de pagar sob demanda (pay-as-you-go), considere instâncias reservadas. Você pode economizar até 72% ao se comprometer com um período de 1 ou 3 anos.
- Spot VMs: São VMs que oferecem descontos significativos (até 90%) em troca de serem interrompidas caso o Azure precise recuperar a capacidade. Elas são ideais para cargas de trabalho tolerantes à interrupção.

## 2. Automatize a Redução e Aumento de Escala
- Escalabilidade automática (Auto-scaling): Configure VMs e outros recursos para escalarem automaticamente de acordo com a demanda. Quando a carga de trabalho diminui, os recursos são reduzidos, economizando custos.
- Desligamento de VMs fora de horas de trabalho: Automatize o desligamento de VMs durante períodos de inatividade, como à noite ou fins de semana, para evitar custos quando elas não estão sendo usadas.

## 3. Utilize o Azure Cost Management + Billing
- Monitoramento de custos: Utilize a ferramenta Azure Cost Management + Billing para rastrear e monitorar seus gastos em tempo real. Ela permite criar alertas de orçamento para que você saiba quando está perto de atingir os limites.
- Análise de custo: A ferramenta também fornece insights sobre onde os maiores custos estão ocorrendo e oferece recomendações para otimizar o consumo de recursos.

## 4. Uso de Containers e Serverless Computing
- Containers (Azure Kubernetes Service - AKS): Containers permitem que você use apenas os recursos necessários para suas aplicações, sem sobrecarga de VMs inteiras.
- Azure Functions (Serverless): Em vez de rodar uma VM continuamente, você pode executar funções serverless que cobram apenas pelo tempo de execução e pelo número de execuções, sendo extremamente eficiente para cenários de execução esporádica.

## 5. Gerenciamento de Armazenamento
- Níveis de armazenamento: Azure oferece diferentes camadas de armazenamento (hot, cool, archive), onde o hot storage é mais caro para acesso frequente, e o cool e archive são ideais para dados acessados raramente, mas com custo de armazenamento mais baixo.
- Blob Storage Lifecycle Policies: Automatize a movimentação de dados entre níveis de armazenamento conforme as políticas de ciclo de vida (por exemplo, mova dados de hot para archive após 30 dias sem acesso).
- Redução de redundância: Avalie a necessidade de redundância de dados. O armazenamento com redundância local (LRS) é mais barato do que com redundância geográfica (GRS).

## 6. Optimização de Banco de Dados
- Azure SQL Database e Banco de Dados Gerenciado: Utilize opções de banco de dados gerenciado com dimensionamento automático para pagar apenas pelos recursos que você realmente consome.
- Modos de cobrança: Avalie o uso de provisioned compute versus serverless compute no Azure SQL Database, dependendo do comportamento da sua aplicação.

## 7. Utilize Zonas de Disponibilidade e Regiões mais Econômicas
- Regiões mais baratas: Certas regiões do Azure têm preços diferentes. Dependendo do local do seu cliente ou da natureza da aplicação, considere implantar recursos em regiões com custo mais baixo.
- Zonas de disponibilidade: Implantar aplicativos em diferentes zonas de disponibilidade pode aumentar a resiliência sem exigir infraestrutura extra, evitando o custo de manter várias réplicas em diferentes regiões.

## 8. Aplicação de Políticas de Economia
- Azure Policy: Utilize políticas para aplicar limites e restrições no uso de recursos. Por exemplo, você pode impedir a criação de VMs de alta performance, que são mais caras, para usuários que não precisam delas.
- Tags de custo: Classifique seus recursos com tags para associar diferentes partes da organização a custos específicos, facilitando o rastreamento e a otimização.

## 9. Revise os Níveis de Serviço (SLAs)
Para algumas aplicações, pode não ser necessário contratar serviços com SLA altos (disponibilidade garantida), que são mais caros. Ajuste os requisitos de SLA de acordo com a criticidade da aplicação.

## 10. Licenciamento e Benefícios de Software
- Azure Hybrid Benefit: Se você tem licenças do Windows Server ou SQL Server on-premises com o Software Assurance, pode utilizar essas licenças no Azure, o que reduz custos com licenciamento.
- Bring Your Own License (BYOL): Para softwares e aplicações que permitem isso, traga suas próprias licenças em vez de pagar por elas no Azure.

## *Resumindo, as melhores práticas pra evitar custos exorbitantes são:*
- Dimensionamento correto de recursos: Evitar superprovisionamento, usando instâncias e serviços adequados à carga de trabalho.
- Aproveitar as ferramentas de monitoramento: Utilizar o Azure Cost Management e alertas para entender os custos e agir rapidamente.
- Automatizar tarefas de escalabilidade e shutdown: Reduzir custos ao ajustar os recursos automaticamente de acordo com a demanda e desligar VMs fora de uso.
- Adoção de soluções de pagamento sob demanda: Usar serverless e containers para cargas que precisam ser escaladas ou são intermitentes.
