// Script para validar links de repositórios no Projects.tsx
const fs = require('fs');
const path = require('path');
const https = require('https');

const projectsFilePath = path.join(__dirname, '../src/components/Projects.tsx');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: 'ERROR', message: e.message });
    });
  });
}

async function validateLinks() {
  try {
    const fileContent = fs.readFileSync(projectsFilePath, 'utf-8');
    
    // Regex para encontrar links do github no arquivo
    const urlRegex = /github:\s*["'](https:\/\/github\.com\/[^"']+)["']/g;
    let match;
    const urls = [];
    
    while ((match = urlRegex.exec(fileContent)) !== null) {
      urls.push(match[1]);
    }
    
    if (urls.length === 0) {
      console.log('Nenhum link encontrado no formato esperado.');
      return;
    }
    
    console.log(`Encontrados ${urls.length} links para verificar...`);
    
    for (const url of urls) {
      console.log(`Testando: ${url}`);
      const result = await checkUrl(url);
      
      if (result.status === 200) {
        console.log(`✅ OK (200): ${url}`);
      } else {
        console.log(`❌ ALERTA (Status ${result.status}): ${url}`);
      }
    }
    
  } catch (error) {
    console.error('Erro ao ler o arquivo ou processar links:', error);
  }
}

validateLinks();
