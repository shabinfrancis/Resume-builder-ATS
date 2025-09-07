import React from 'react'

const downloadText = (filename, text) => {
    const blob = new Blob([text], { type: 'text/plain' })
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
};

const downloadPDF = async (filename, htmlElement) => {

    const { jsPDF } = await import('jspdf');
    const html2canvas = (await (import('html2canvas'))).default;

    const canvas = await html2canvas(htmlElement);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
}

const ExportButtons = ({ plainText, htmlRef }) => {

    return (
        <div className='flex gap-4 my-4'>
            <button
                style={{ color: '#374151' }} // bg-gray-700
                className='text-white px-4 py-2 rounded'
                onClick={() => downloadText('resume.txt', plainText)}>
                Export as TXT
            </button>
            <button
                style={{ color: '#1d4ed8' }} // bg-blue-700
                className='text-white px-4 py-2 rounded'
                onClick={() => downloadPDF('resume.pdf', htmlRef.current)}>
                Export as PDF
            </button>
        </div>
    )
}

export default ExportButtons