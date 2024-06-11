function gerarAnotacao() {
  // Obter os valores dos campos do formulário
  const dateAndTime = document.getElementById('date-and-time').value;
  const bloodPressure = document.getElementById('blood-pressure').value;
  const respiratoryRate = document.getElementById('respiratory-rate').value;
  const oxygenSaturation = document.getElementById('oxygen-saturation').value;
  const bodyTemperature = document.getElementById('body-temperature').value;
  const heartRate = document.getElementById('heart-rate').value;
  const bloodGlucose = document.getElementById('blood-glucose').value;
  const vitalSigns = document.getElementById('vital-signs').value;

  // Criar a anotação
  const anotacao = `
      Data e hora da anotação: ${dateAndTime}
      Pressão arterial: ${bloodPressure}
      Taxa respiratória: ${respiratoryRate}
      Saturação de oxigênio: ${oxygenSaturation}
      Temperatura corporal: ${bodyTemperature}
      Frequência cardíaca: ${heartRate}
      Glicemia: ${bloodGlucose}
      Sinais vitais:
      ${vitalSigns}
  `;

  // Criar um arquivo
  const file = new File([anotacao], 'anotacao.txt', 'text/plain');

  // Baixar o arquivo
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = 'anotacao.txt';
  link.click();

  // Remover o arquivo
  URL.revokeObjectURL(link.href);
}
