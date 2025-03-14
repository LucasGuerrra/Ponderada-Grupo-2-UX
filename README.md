# README - Justificativa das Visualizações de Dados

## Objetivo do Projeto
Este projeto tem como objetivo otimizar a alocação de gasistas para atender demandas distribuídas na rede de distribuição da Comgás. Para isso, buscamos responder três questões principais:
1. Como distribuir os profissionais na região?
2. Quantos profissionais devem ser deslocados para cada ponto de demanda?
3. Qual profissional deve ser alocado para cada demanda?

## Dados Analisados
Os dados utilizados incluem:
- **Gasistas**: localização geográfica.
- **Demandas**: localização geográfica, tempo restante para atendimento e gravidade.

## Visualizações e Justificativa
Para compreender melhor os dados e facilitar a tomada de decisão, são propostas três visualizações:

### 1. Mapa de Demandas por Clusters
- **Localização**: [`Ideia_Mapa_Demandas`](./Ideia_Mapa_Demandas/)
- **Descrição**: Esta visualização apresenta a região de atuação da empresa com as demandas agrupadas em clusters, utilizando cores distintas para representar cada cluster.
- **Justificativa**: Auxilia na compreensão de como as demandas estão organizadas e agrupadas, facilitando a definição de estratégias de alocação.

### 2. Mapa de Profissionais
- **Localização**: [`Ideia_Mpara_Ruas`](./Ideia_Mapa_Ruas/)
- **Descrição**: Um mapa que exibe as ruas da região e o posicionamento dos profissionais.
- **Justificativa**: Esta visualização é essencial para a interface web da solução, pois permite visualizar onde estão os profissionais e como eles devem se locomover para atender às demandas de forma eficiente.

### 3. Grafo Bipartido Profissional-Demanda
- **Localização**: [`Ideia_Validacao_Atribuicao`](./Ideia_Validacao_Atribuicao/)
- **Descrição**: Representa a relação entre os profissionais e as demandas que lhes foram atribuídas.
- **Justificativa**: Este grafo permite entender como foi realizado o pareamento entre profissionais e demandas, fornecendo transparência e explicabilidade ao processo de alocação.

## Importância das Visualizações
Cada visualização cumpre um papel fundamental na compreensão e execução da solução:
- **Mapa de Demandas**: Enfoca a organização e distribuição das demandas, auxiliando na identificação de pontos que exigem maior atenção e contribuindo para que o sistema determine quantos profissionais devem ser enviados para cada região.
- **Mapa de Profissionais**: Representa a tela que os gasistas terão acesso, de modo a auxiliar no deslocamento e logística.
- **Grafo Bipartido**: Explica como as decisões de alocação foram tomadas, auxiliando na explicabilidade do algoritmo.

Enquanto a primeira e terceira visualização são mais voltadas ao funcionamento interno da aplicação, a segunda é focado para a usabilidade e tomada de decisão por parte dos usuários finais.

## Ferramentas Utilizadas
As visualizações foram construídas utilizando **D3.js**, proporcionando interatividade e flexibilidade na representação dos dados.

