# Guia de trabalho com BMAD

Este projeto parte de uma landing page existente. Os documentos em `docs/` registram a implementação atual e servem de entrada para planejar mudanças. O catálogo da instalação fica em `_bmad/_config/bmad-help.csv`.

## Configuração local

| Caminho | Papel |
| --- | --- |
| `.agents/skills/` | Skills disponíveis no Codex |
| `_bmad/config.toml` | Configuração gerada pelo instalador |
| `_bmad/config.user.toml` | Preferências locais, incluindo idioma de comunicação em português |
| `docs/` | Conhecimento do projeto, definido por `modules.bmm.project_knowledge` |
| `_bmad-output/planning-artifacts/` | Artefatos locais de planejamento |
| `_bmad-output/implementation-artifacts/` | Artefatos locais de implementação |

O [.gitignore](../.gitignore) ignora as skills, a configuração local e as saídas do BMAD. Em outro checkout, a execução das skills depende de uma instalação local. A documentação em `docs/` acompanha o código. Quando `uv` estiver disponível, confira os caminhos efetivos na raiz com `uv run _bmad/scripts/resolve_config.py --project-root .`.

## Escolher a skill

| Situação | Skill e exemplo |
| --- | --- |
| Entender a etapa atual | `$bmad-help Onde começo para adicionar um projeto ao portfólio?` |
| Definir navegação, interação ou visual | `$bmad-agent-ux-designer` para conversar com Sally. Use `$bmad-ux` [CU] para planejar a mudança a partir de [DESIGN.md](DESIGN.md) e [EXPERIENCE.md](EXPERIENCE.md). |
| Avaliar uma decisão técnica | `$bmad-agent-architect` para conversar com Winston. Use `$bmad-architecture` [CA] para registrar decisões que afetam várias partes do site. |
| Detalhar uma mudança com critérios de aceite | `$bmad-spec` [SPC] para consolidar o escopo a partir do pedido e das referências em `docs/`. |
| Entregar uma mudança definida | `$bmad-build` [BD] com o escopo e os critérios de aceite. |
| Construir ou analisar uma skill de agente | `$bmad-agent-builder` [BA/AA]. Informe o resultado esperado ou o caminho da skill existente. Exemplo de uso futuro: um agente para orientar atualizações do portfólio. |

Abra uma conversa nova para cada etapa que gerar um artefato próprio e indique os arquivos de entrada. Correções editoriais pequenas podem ir direto aos arquivos do site. Para mudanças amplas, use os critérios de aceite da especificação para decidir se vale desdobrar o trabalho em épicos e histórias.

## Validar uma mudança

- Confira os trechos alterados na largura de desktop e nas faixas de até 768 px e 480 px.
- Exercite os fluxos afetados de menu, âncoras, modais, links externos e currículo. Veja a [referência de experiência](EXPERIENCE.md).
- Atualize os documentos em `docs/` quando a entrega mudar as decisões registradas.
- Crie um commit local com os arquivos da tarefa e uma descrição Conventional Commits em português, conforme [AGENTS.md](../AGENTS.md).
