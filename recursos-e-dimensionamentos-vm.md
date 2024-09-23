# Desafio: Configurando Recursos e Dimensionamentos em Máquinas Virtuais na Azure
**Vamos aproveitar a máquina virtual que criamos no primeiro desaafio.**

![image](https://github.com/user-attachments/assets/8ee061a6-21b2-4295-9dc5-128294159ddc)

## Escolhendo o Tamanho da Máquina Virtual
O dimensionamento da VM define o número de vCPUs, quantidade de memória RAM e outras características da máquina. Os tamanhos variam de acordo com o tipo de carga de trabalho:
- A série (Entry level): Para cargas básicas e ambientes de teste.
- D série (General purpose): Para servidores web, bancos de dados e serviços de médio porte.
- E série (Memory optimized): Ideal para bancos de dados ou aplicações que exigem muita memória.
- F série (Compute optimized): Adequada para cargas com muita CPU, como simulações e cálculos.

Como estamos utilizando funcionalidades que se enquadram no plano gratuito, não vamos aumentar o dimensionamento e o tamanho dela.

![image](https://github.com/user-attachments/assets/472ddbfd-fc64-4d6a-821d-a9614288bd0f)

## Após configurar sua máquina virtual e dimensionamento automático, use ferramentas de monitoramento como Azure Monitor para observar o desempenho:
Defina alertas para uso de CPU, memória, disco e tráfego.
Analise as métricas para ajustar os recursos de forma eficiente.

![image](https://github.com/user-attachments/assets/aced9e13-9ba9-4f6d-81af-f534292a1135)
