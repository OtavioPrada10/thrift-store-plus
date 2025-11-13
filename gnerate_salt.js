const bcrypt = require('bcrypt');
const saltRounds = 10; // Fator de custo (pode ser ajustado)

async function generateSalt() {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
  } catch (error) {
    console.error("Erro ao gerar salt:", error);
  }
}

generateSalt();