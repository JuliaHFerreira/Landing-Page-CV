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

### Frase aprovada para a abertura

> Desenvolvedora de Software | ADVPL & TOTVS Protheus | Java & Spring Boot | APIs REST | SQL | IA agêntica aplicada ao desenvolvimento

Exibir a frase logo abaixo de **Júlia Helena Ferreira**. O cargo **Analista de Desenvolvimento de Software** fica na trajetória da Sportive.

O site atual é a referência visual e de navegação. A prévia anterior foi rejeitada. A página funciona como currículo navegável e mantém a sequência **Início → Sobre Mim → Jornada Profissional → Habilidades → Projetos → Formação → Contato**.

1. **Apresentação.** Preservar a saudação, o nome em degradê e a composição com foto. Usar a frase aprovada e dar acesso ao PDF por **Baixar currículo**, ao lado de **Ver projetos**. As datas de experiência ficam na trajetória.
2. **Foto e tecnologias.** Preservar o contorno orgânico animado da foto e os cartões flutuantes. Acrescentar Kotlin, Jetpack Compose e TOTVS Protheus junto a Java e Spring Boot, distribuindo os cartões para manter o rosto livre. Conferir espaço e movimento em telas pequenas.
3. **Projetos.** Apresentar o LoadFlow como primeiro cartão em **Projetos em Destaque**, com o status **Em uso na Sportive** e um texto curto sobre as funcionalidades em desenvolvimento. Os demais projetos continuam na seção.
4. **Trajetória e habilidades.** Usar uma linha do tempo com as datas confirmadas. Organizar as competências em grupos como backend, Android, ERP e integrações, dados, testes e entrega, e IA aplicada ao desenvolvimento.
5. **UX e animações.** Preservar a entrada escalonada da abertura, a flutuação dos cartões e a revelação das seções durante a rolagem. Refinar amplitude, ritmo e espaçamento para dar fluidez. Respeitar a preferência por movimento reduzido e manter o conteúdo visível ao navegar.
6. **Currículo.** Atualizar o PDF com a trajetória confirmada, a responsabilidade pela implantação de sistemas, o LoadFlow em uso, as competências, a formação e o inglês N2. Conferir a consistência com o conteúdo do site.

## Conferência antes de concluir a implementação

- Conferir desktop e larguras de até 768 px e 480 px, incluindo posição das etiquetas, leitura dos cartões e acesso ao currículo.
- Testar navegação por teclado, foco visível, links, âncoras e preferência por movimento reduzido.
- Abrir o PDF pelo site e conferir cargo, datas, formação, inglês e descrição do LoadFlow.
