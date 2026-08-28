# jorgepinto.pt, versão 2

Versão multipágina estática, pronta para GitHub Pages.

## Estrutura

/
index.html
sobre/index.html
projetos/index.html
laboratorio/index.html
publicacoes/index.html
contacto/index.html
assets/css/styles.css
assets/js/script.js

## Publicação

1. Faça backup do conteúdo atual do repositório.
2. Copie todo o conteúdo deste pacote para a raiz de `jomypinto.github.io`.
3. Faça commit para a branch `main`.
4. Aguarde o GitHub Pages atualizar `https://jorgepinto.pt`.

## Alterações principais

A homepage passa a funcionar como resumo.
Projetos, Laboratório, Publicações, Sobre e Contacto passam a páginas próprias.
CSS e JavaScript foram movidos para `/assets`.
A navegação usa URLs limpas e funciona em desktop e mobile.
Os artigos continuam marcados como "Em preparação" ou "Planeado".

## V3, páginas individuais de projeto

/projetos/automated-malware-defense/
/projetos/empresa-escola-ciberseguranca/
/projetos/sigop/

A listagem de projetos e a homepage já apontam para estas páginas.


## V4, evidência técnica e diagramas

As três páginas individuais de projeto passam a incluir diagramas SVG, exemplos técnicos, estados, fluxos e áreas reservadas para screenshots reais.

Não foram fabricadas capturas de ecrã. Os exemplos de logs e JSON estão explicitamente identificados como demonstrativos.


## V5, páginas individuais de laboratório

/laboratorio/wazuh-siem/
/laboratorio/identity-lab/
/laboratorio/kubernetes/
/laboratorio/microsoft-security/
/laboratorio/endpoint-security/
/laboratorio/automation-lab/

Cada laboratório inclui objetivo, fluxo, método, evidências esperadas e espaços para screenshots reais.


## V6, páginas individuais de publicações

/publicacoes/wazuh-virustotal/
/publicacoes/keycloak-active-directory/
/publicacoes/empresa-escola-ciberseguranca/
/publicacoes/hardening-intune-defender/

As páginas incluem problema, arquitetura, implementação, validação, exemplo técnico e ligação ao projeto ou laboratório relacionado.


## V7, SEO e acabamento técnico

Incluído:
* metadados SEO por página
* canonical URLs
* Open Graph
* Twitter Cards
* favicon SVG
* social preview SVG
* sitemap.xml
* robots.txt
* 404.html
* dados estruturados Schema.org na homepage

Nota: para compatibilidade máxima nas partilhas sociais, o social-preview.svg deverá futuramente ser exportado também para PNG 1200x630 e o og:image atualizado para esse PNG.


## V8, visual profissional e preparação de produção

Alterações:
* removido do footer o bloco "JP. / Jorge Pinto"
* novo sistema visual, mais sóbrio e profissional
* cartões com melhor hierarquia e profundidade
* navegação mais refinada
* hero e páginas internas com maior contraste e legibilidade
* melhor comportamento mobile
* JavaScript carregado com `defer`

### Cloudflare, recomendações de produção

1. SSL/TLS: Full (strict), quando aplicável ao origin.
2. Always Use HTTPS: ativo.
3. Automatic HTTPS Rewrites: ativo.
4. Brotli: ativo.
5. HTTP/3: ativo.
6. Early Hints: ativo.
7. Browser Cache TTL: manter Auto inicialmente.
8. Criar Redirect Rule permanente de `www.jorgepinto.pt/*` para `https://jorgepinto.pt/$1`.
9. Não aplicar Cache Everything a HTML nesta fase.
10. Depois da publicação, validar PageSpeed, sitemap.xml, robots.txt e 404.html.

Nota: GitHub Pages não permite definir headers HTTP personalizados no repositório. CSP, HSTS e outros headers devem ser tratados na Cloudflare.


## V10, visual executivo

Alterações principais:
* removido o símbolo JP. do header em todas as páginas
* introduzido um wordmark discreto "Jorge Pinto"
* novo sistema visual claro, profissional e moderno
* melhor legibilidade e contraste
* cartões mais sóbrios
* navegação mais institucional
* diagramas e blocos técnicos adaptados ao novo tema
* melhor experiência mobile

A V10 muda deliberadamente de um visual escuro de laboratório técnico para uma apresentação mais profissional e transversal, mantendo os conteúdos de cibersegurança e infraestrutura.


## V11, refinamento profissional

A V11 não altera radicalmente a identidade da V10. Refina a composição e a experiência:

* melhor hierarquia na homepage
* bloco de foco profissional no hero
* faixa informativa com website, contacto, GitHub e localização
* cabeçalho com comportamento ao fazer scroll
* botão voltar ao topo
* skip link e melhorias de acessibilidade
* melhor leitura nas páginas de artigos
* tratamento mais consistente dos projetos
* contacto reorganizado
* responsividade refinada

Esta versão deve ser avaliada no site publicado antes de acrescentar novas funcionalidades.

## V12, documentação técnica reproduzível

Primeira fase concluída:
* Wazuh SIEM convertido em guia técnico
* Identity Lab convertido em guia técnico
* objetivos, arquitetura, pré requisitos, instalação, configuração, validação, laboratório, troubleshooting, segurança e checklist
* projetos relacionados passam a ligar para os guias técnicos
* exemplos públicos evitam segredos e dados internos

A próxima fase V12 deve aprofundar agentes Windows/Sysmon/VirusTotal e SSO/MFA/RBAC, antes de converter Kubernetes e Microsoft Security.

### V12.2, aprofundamento

Wazuh:
* agente Windows
* Sysmon
* regra personalizada
* FIM
* VirusTotal
* Active Response com abordagem segura

Identity:
* SSO
* MFA
* RBAC
* cliente OIDC
* eventos Keycloak
* recolha pelo Wazuh
* cenário de investigação

Próxima etapa: converter Kubernetes Lab e Microsoft Security para o mesmo formato reproduzível.


### V12.3
Kubernetes Lab e Microsoft Security convertidos para guias reproduzíveis. Próxima etapa: Endpoint Security e Automation Lab, seguida de revisão transversal dos Projetos.


### V12.4
Endpoint Security e Automation Lab convertidos para guias técnicos reproduzíveis. A fase seguinte deve rever Projetos como case studies e ligar cada decisão técnica aos laboratórios correspondentes.


## V12.5, consolidação

* `/laboratorio/automation-lab/` é o URL canónico do Automation Lab.
* `/laboratorio/automation/` permanece apenas como redirecionamento.
* links internos normalizados.
* sitemap.xml atualizado.
* canonical URLs revistos nos seis laboratórios.
* verificação global dos caminhos internos.


## V13.0, Projetos como case studies

* Automated Malware Defense reestruturado como case study.
* Empresa Escola de Cibersegurança reestruturada como case study.
* SIGOP reestruturado como case study.
* Separação explícita entre Projeto, que explica problema e decisões, e Laboratório, que explica implementação reproduzível.
* Sem métricas ou evidências inventadas.


## V13.1 — evidência técnica

A V13.1 reforça os três case studies com uma distinção explícita entre:
* conteúdo técnico documentado;
* validação efetivamente observada;
* evidência ainda por recolher;
* métricas ainda por medir.

Não são fabricadas screenshots, métricas ou resultados. O SIGOP inclui os resultados funcionais já registados como OK.


## V13.2 — foco técnico e evidência visual

* SIGOP removido do site e das futuras entregas.
* Foco nos case studies Automated Malware Defense e Empresa Escola de Cibersegurança.
* Criado um plano de evidência visual real para cada projeto.
* Não são utilizadas screenshots simuladas.
* Cada evidência inclui critérios de anonimização e objetivo técnico.
