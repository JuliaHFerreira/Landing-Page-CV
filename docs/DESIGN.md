---
name: Portfólio Júlia Helena
description: Identidade visual da landing page de currículo e portfólio.
colors:
  primary: '#7c3aed'
  primary-dark: '#6d28d9'
  accent: '#a78bfa'
  background: '#0a0a0f'
  surface: '#131318'
  card: '#1a1a24'
  text: '#ffffff'
  text-secondary: '#e5e7eb'
  text-muted: '#9ca3af'
typography:
  display:
    fontFamily: Playfair Display
  body:
    fontFamily: Poppins
    fontSize: 16px
    lineHeight: 1.6
rounded:
  lg: 12px
  xl: 15px
spacing:
  gutter: 20px
  section: 60px
  section-mobile: 50px
  container-max: 1200px
components:
  project-card:
    backgroundColor: '{colors.card}'
    rounded: '{rounded.lg}'
  modal:
    backgroundColor: '{colors.card}'
    rounded: '{rounded.xl}'
---

# Design visual

## Brand & Style

Tema escuro com acentos roxos. O início destaca o nome e a foto da Júlia, com indicadores de experiência, projetos e tecnologias e ações para projetos e contato.

## Colors

A página alterna `{colors.background}` e `{colors.surface}`. Cards e diálogos usam `{colors.card}`. Títulos usam `{colors.text}`, e descrições e metadados usam `{colors.text-secondary}` e `{colors.text-muted}`. Roxos marcam ações, destaques e gradientes.

## Typography

`{typography.display.fontFamily}` compõe os títulos do início e das seções. `{typography.body.fontFamily}` compõe os textos da interface, com base de `{typography.body.fontSize}`.

## Layout & Spacing

O contêiner de seção vai até `{spacing.container-max}`, com `{spacing.gutter}` nas laterais. O espaçamento vertical de seção cai de `{spacing.section}` para `{spacing.section-mobile}` até 768 px. As grades se reorganizam em uma coluna nessa faixa.

## Elevation & Depth

O cabeçalho fixo usa fundo translúcido e ganha sombra após 50 px de rolagem. Os cards de projeto ganham contorno roxo e sombra ao passar o ponteiro. A sobreposição escura dos modais mantém o foco visual no conteúdo central.

## Shapes

Cards de projeto e de formação usam `{rounded.lg}`. O conteúdo dos modais usa `{rounded.xl}`. Tags de tecnologia usam formato de pílula.

## Components

A ação “Ver Projetos” usa gradiente entre `{colors.primary}` e `{colors.primary-dark}`. A ação “Entre em Contato” usa contorno. A linha do tempo combina marcadores, período, empresa e ação de detalhes quando disponível. Os cards de projeto exibem título, tecnologias, descrição e link para o repositório.

Os valores refletem [assets/styles.css](../assets/styles.css). Para interações, consulte [EXPERIENCE.md](EXPERIENCE.md).
