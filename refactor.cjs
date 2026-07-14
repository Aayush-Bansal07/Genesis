const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const indexCssPath = path.join(srcDir, 'index.css');

const content = fs.readFileSync(indexCssPath, 'utf8');
const lines = content.split('\n');

const navbarStart = 26;
const aboutStart = 133;
const prizesStart = 689;
const footerStart = 1076;
const archStart = 1379;

const baseCss = lines.slice(0, navbarStart).join('\n');
const navbarCss = lines.slice(navbarStart, aboutStart).join('\n');
const aboutCss = lines.slice(aboutStart, prizesStart).join('\n');
const prizesCss = lines.slice(prizesStart, footerStart).join('\n');
const footerCss = lines.slice(footerStart, archStart).join('\n');
const archCss = lines.slice(archStart).join('\n');

fs.writeFileSync(path.join(componentsDir, 'Navbar.css'), navbarCss);
fs.writeFileSync(path.join(componentsDir, 'AboutSection.css'), aboutCss);
fs.writeFileSync(path.join(componentsDir, 'PrizesSection.css'), prizesCss);
fs.writeFileSync(path.join(componentsDir, 'Footer.css'), footerCss);
fs.writeFileSync(path.join(componentsDir, 'ArchitectsSection.css'), archCss);
fs.writeFileSync(indexCssPath, baseCss);

const addImport = (componentName) => {
  const filePath = path.join(componentsDir, `${componentName}.tsx`);
  if (fs.existsSync(filePath)) {
    let tsx = fs.readFileSync(filePath, 'utf8');
    if (!tsx.includes(`import './${componentName}.css';`)) {
      const tsxLines = tsx.split('\n');
      const lastImportIndex = tsxLines.findLastIndex(l => l.startsWith('import '));
      if (lastImportIndex !== -1) {
        tsxLines.splice(lastImportIndex + 1, 0, `import './${componentName}.css';`);
      } else {
        tsxLines.unshift(`import './${componentName}.css';`);
      }
      fs.writeFileSync(filePath, tsxLines.join('\n'));
    }
  }
}

addImport('Navbar');
addImport('AboutSection');
addImport('PrizesSection');
addImport('Footer');
addImport('ArchitectsSection');

console.log('Refactoring complete.');
