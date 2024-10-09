
// Función para convertir un archivo en base64
const convertFileToBase64 = async (buffer) => {
  return buffer.toString('base64');
};

const API = async (json) => {
  try {
   

    return json ;
  } catch (error) {
    console.error("Error al procesar el archivo ZIP:", error);
    throw new Error("Error al procesar el archivo ZIP");
  }
};

const APIS = async (request) => {
  const json = request;
  try {
    const extraZipsReturnData = await extraZip(json);
    return extraZipsReturnData;
  } catch (error) {
    console.error("Error al extraer archivos ZIP:", error);
    throw new Error("Error al extraer archivos ZIP");
  }
};

export default extraZips;
