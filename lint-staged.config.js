module.exports = {
  '*.md': ['prettier --write', 'markdownlint', 'git add'],
  '*.json': ['prettier --write', 'git add'],
}
