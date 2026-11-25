# Arquitetura

O portfólio é um site estático de uma página. O navegador carrega o conteúdo do HTML, aplica o CSS e executa o JavaScript para as interações. O site funciona sem etapa de build, servidor de aplicação ou banco de dados. Java e Spring Boot aparecem como competências e tecnologias dos projetos divulgados.

| Arquivo | Responsabilidade |
| --- | --- |
| [index.html](../index.html) | Metadados, conteúdo em português, seções com âncoras, menu, links e marcação dos modais de experiência |
| [assets/styles.css](../assets/styles.css) | Variáveis visuais, componentes, estados, animações e responsividade |
| [scripts/script.js](../scripts/script.js) | Menu lateral, rolagem para âncoras, destaque da seção, modais e animações de entrada |
| [assets/img/eu.jpeg](../assets/img/eu.jpeg) | Foto do perfil no início |
| [assets/docs/Curriculo.pdf](../assets/docs/Curriculo.pdf) | Currículo acessado na seção Contato |

## Contratos entre arquivos

- Os links internos apontam para os IDs das seções. O JavaScript consulta `section[id]` e usa `.nav-link` para destacar o item do menu durante a rolagem. Ao renomear uma seção, atualize seus links internos juntos.
- O menu usa os IDs `hamburger`, `sideMenu` e `closeMenu`. As classes `.active` alternam a aparência e a posição do painel.
- Os botões de detalhes chamam `openModal` com o ID correspondente. A classe `.modal` identifica as sobreposições usadas nos fechamentos por clique no fundo e por Escape.
- `IntersectionObserver` anima elementos de experiência, projetos, formação e habilidades quando entram na área visível.

## Dependências e publicação

O HTML carrega Poppins e Playfair Display do Google Fonts e inclui alternativas genéricas no CSS. GitHub e LinkedIn são destinos externos. Os contatos por e-mail e telefone dependem dos aplicativos associados pelo visitante. Publique a página, o CSS, o JavaScript e os ativos referenciados preservando seus caminhos relativos.

Edite biografia, experiências, projetos e formação no HTML. Para atualizar o currículo, troque o PDF no caminho atual ou ajuste o link junto com o arquivo. Consulte [DESIGN.md](DESIGN.md) para decisões visuais e [EXPERIENCE.md](EXPERIENCE.md) para comportamentos.
