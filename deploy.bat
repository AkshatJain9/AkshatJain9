call npm run build
git add dist -f
git commit -m "Temp deploy"
git subtree split --prefix dist -b gh-pages-temp
git push origin gh-pages-temp:gh-pages --force
git branch -D gh-pages-temp
git rm -r --cached dist
git commit -m "Remove dist from main branch"
