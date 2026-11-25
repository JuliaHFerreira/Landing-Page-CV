# Experiência de uso

## Fundamentos

Portfólio público em uma página web em português do Brasil. A pessoa visitante pode avaliar a trajetória de Júlia, consultar projetos e acessar um canal de contato ou o currículo. [DESIGN.md](DESIGN.md) registra a identidade visual.

## Arquitetura da informação

| Âncora | O que a pessoa encontra |
| --- | --- |
| `#home` | Apresentação, foto e atalhos para projetos e contato |
| `#sobre` | Resumo da trajetória e da atuação técnica |
| `#experiencia` | Linha do tempo profissional e detalhes de experiências selecionadas |
| `#habilidades` | Competências agrupadas por categoria |
| `#projetos` | Projetos em destaque com tecnologias e links para repositórios |
| `#formacao` | Formação acadêmica, cursos e idiomas |
| `#contato` | E-mail, GitHub, LinkedIn, telefone, currículo e localização |

## Voz e tom

A apresentação usa primeira pessoa. As ações usam rótulos diretos, como “Ver Projetos”, “Ver detalhes” e “Entre em Contato”.

## Componentes e estados

| Componente | Comportamento atual |
| --- | --- |
| Menu lateral | Inicia recolhido. O botão Menu alterna o painel e bloqueia a rolagem enquanto aberto. O botão × ou a seleção de uma seção fecha o menu. A seção ativa acompanha a rolagem. |
| Modal de experiência | “Ver detalhes” abre o modal associado e bloqueia a rolagem da página. ×, Escape e clique no fundo fecham o modal. O conteúdo interno pode rolar. |
| Cards de projeto | “Ver projeto” abre o repositório em outra aba. |
| Contato | E-mail e telefone usam os manipuladores do dispositivo. Perfis e currículo abrem em outra aba. A localização é informativa. |

## Interações

As âncoras acionam rolagem suave com compensação de 70 px pelo cabeçalho. Elementos de experiência, projetos, formação e habilidades entram com transição de opacidade e deslocamento quando aparecem na área visível.

## Acessibilidade

O HTML declara `pt-BR`, usa elementos semânticos e dá nomes acessíveis ao botão Menu e aos links sociais do painel. A versão atual responde a Escape nos modais. Em mudanças nessas interações, verifique a ordem de Tab e a visibilidade do foco. O código atual carece de estado expandido para o menu, semântica de diálogo, gerenciamento de foco no modal e adaptação explícita à preferência por movimento reduzido.

## Responsividade

Até 768 px, a abertura e as grades passam a uma coluna, a foto aparece antes do texto e as duas ações iniciais ficam empilhadas. O espaçamento de seção passa a `{spacing.section-mobile}`. Até 480 px, os títulos diminuem e o menu lateral tem 280 px.

## Jornadas

1. **Marina, recrutadora.** Lê a apresentação, abre “Projetos” e consulta um repositório. Volta à página, abre “Contato” e encontra o currículo em PDF.
2. **Rafael, líder técnico.** Usa o menu para ir a “Experiência”, abre os detalhes de Assistente de TI II e consulta as atividades do cargo. Fecha o modal e continua para “Habilidades”.
