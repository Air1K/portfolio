import React from 'react';
import { Document, Page } from 'react-pdf';
const pdf_file = require('./file/web.pdf')
const Pdf = () => {
   const files = './files/web.pdf'

   return (
      <div>
         <embed src={pdf_file} style={{width: "100%", height: '100vh'}}/>
      </div>
   );
};

export default Pdf;