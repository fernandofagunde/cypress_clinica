export function getDataHojeBR(dias = 0) {
  const data = new Date();
  data.setDate(data.getDate() + dias);

  return data.toLocaleDateString("pt-BR");
}
