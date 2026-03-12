# SSNI - Sistema de Inscrições INSS

## Tarefas Concluídas

- [x] Verificar cidades de prova do concurso INSS
- [x] Atualizar página `/inicio/local-prova/` com as 27 capitais brasileiras
- [x] Organizar cidades por ESTADO (ordem alfabética por UF) ao invés de região
- [x] Atualizar arquivo JS `cidades-prova-cpu-pe.js` para manter consistência

## Alterações Realizadas

### Cidades de Prova - Concurso INSS 2026
As provas do INSS são aplicadas em **todas as 27 capitais brasileiras** (26 capitais estaduais + Distrito Federal):

| UF | Capital |
|----|---------|
| AC | Rio Branco |
| AL | Maceió |
| AP | Macapá |
| AM | Manaus |
| BA | Salvador |
| CE | Fortaleza |
| DF | Brasília |
| ES | Vitória |
| GO | Goiânia |
| MA | São Luís |
| MT | Cuiabá |
| MS | Campo Grande |
| MG | Belo Horizonte |
| PA | Belém |
| PB | João Pessoa |
| PR | Curitiba |
| PE | Recife |
| PI | Teresina |
| RJ | Rio de Janeiro |
| RN | Natal |
| RS | Porto Alegre |
| RO | Porto Velho |
| RR | Boa Vista |
| SC | Florianópolis |
| SP | São Paulo |
| SE | Aracaju |
| TO | Palmas |

## Arquivos Modificados
- `ssni/inicio/local-prova/index.html` - Lista de cidades organizada por estado
- `ssni/inicio/js/cidades-prova-cpu-pe.js` - Array de cidades atualizado
