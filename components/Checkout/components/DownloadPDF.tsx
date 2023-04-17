import { FormField } from "@/types/type";
import { Button } from "@chakra-ui/react";
import "jspdf-autotable";
import jsPDF from "jspdf";

type Props = {};

const DownloadPDF = ({ value }: any) => {
  const generatePdf = (values:any) => {
    const doc = new jsPDF();

    // define las columnas de la tabla
    const columns = Object.keys(values);

    // convierte el objeto key:value en una matriz de valores
    const rows = Object.values(values);

    // agrega la tabla al documento pdf
    doc.autoTable({
      head: [columns],
      body: [rows],
    });

    // guarda el documento pdf
    doc.save("myDocument.pdf");
  };
  return <Button onClick={() => generatePdf(value)}>DownloadPDF</Button>;
};

export default DownloadPDF;
