# Plano de atualização do portfólio e currículo

Estado em 24/11/2026 · Em planejamento

## O que já está no repositório

- O commit `2e26cb1` atualizou a foto de perfil e o `.gitignore`.
- O commit `be0685b` adicionou o README e as referências de [design](DESIGN.md), [experiência](EXPERIENCE.md), [arquitetura](architecture.md) e [fluxo de trabalho](guia-de-trabalho.md).
- Na versão local conferida, a página ainda exibe a trajetória anterior, duas etiquetas flutuantes ao lado da foto e o link para o PDF existente. O LoadFlow ainda não consta na página.

## Conteúdo confirmado

### Trajetória na Sportive

| Cargo | Período |
| --- | --- |
| Analista de Desenvolvimento de Software | Out/2026 – atual |
| Desenvolvedora ADVPL / Assistente de TI III | Fev/2026 – set/2026 |
| Desenvolvedora ADVPL / Assistente de TI II | Mar/2025 – fev/2026 |
| Auxiliar de E-commerce I, II e III | Jan/2023 – fev/2025 |

Agrupar esses cargos sob a Sportive, com o mais recente primeiro. Na descrição da empresa, incluir a responsabilidade pela implantação de sistemas e inovação sem atribuí-la a um cargo específico.

> Na Sportive, conduzi com autonomia o setor de implantação de sistemas e inovação. Atuei na implantação e sustentação de sistemas corporativos, no desenvolvimento de soluções internas e na resolução de problemas junto às áreas de negócio.

Formação em Análise e Desenvolvimento de Sistemas pela UniCesumar, concluída em dezembro de 2025. Inglês básico (N2).

### LoadFlow · WMS Android para a expedição

> Desenvolvi para a Sportive um WMS Android em uso na operação de expedição. Em celulares e coletores de dados, a equipe consulta estoque por pedido, endereço, caixa ou palete e registra movimentações com leitura de códigos de barras. O aplicativo se integra ao TOTVS Protheus via APIs REST.

- **Em desenvolvimento:** fusão e divisão de paletes e saída simplificada.
- **Tecnologias para o cartão:** Kotlin, Android, Jetpack Compose, Material 3, APIs REST e TOTVS Protheus. A descrição expandida pode incluir OkHttp, Moshi, MVVM e Ports & Adapters.
- **Evolução:** consultar a documentação do LoadFlow para detalhar o roadmap. A versão web é um projeto separado.
- **Projetos complementares propostos:** ms-study, com microsserviços Java e Spring Boot, e Raw Material, com gestão de estoque e manufatura usando Spring Boot e Oracle.

## Direção proposta para o site

1. **Apresentação.** Mostrar o cargo atual, um resumo curto e links diretos para o LoadFlow e o currículo. As datas de experiência ficam na trajetória. O topo fica sem contador ou frase sobre tempo de empresa e de atuação técnica.
2. **Foto e tecnologias.** Exibir Java, Kotlin, Spring Boot, Android, Jetpack Compose, ADVPL, TOTVS Protheus, APIs REST e SQL em etiquetas fixas. No desktop, elas ficam junto à foto. No celular, passam para baixo dela.
3. **Projetos.** Colocar o LoadFlow em destaque logo após a apresentação, com o status **Em uso na Sportive** e um texto curto sobre as funcionalidades em desenvolvimento.
4. **Trajetória e habilidades.** Usar uma linha do tempo com as datas confirmadas. Organizar as competências em grupos como backend, Android, ERP e integrações, dados, testes e entrega, e IA aplicada ao desenvolvimento.
5. **UX e animações.** Encurtar o topo, melhorar contraste e hierarquia e trocar o movimento contínuo por transições curtas. Respeitar a preferência por movimento reduzido e manter o conteúdo visível ao navegar.
6. **Currículo.** Atualizar o PDF com a trajetória confirmada, a responsabilidade pela implantação de sistemas, o LoadFlow em uso, as competências, a formação e o inglês N2. Conferir a consistência com o conteúdo do site.

## Conferência antes de concluir a implementação

- Conferir desktop e larguras de até 768 px e 480 px, incluindo posição das etiquetas, leitura dos cartões e acesso ao currículo.
- Testar navegação por teclado, foco visível, links, âncoras e preferência por movimento reduzido.
- Abrir o PDF pelo site e conferir cargo, datas, formação, inglês e descrição do LoadFlow.
