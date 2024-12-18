

  import React, { useState } from 'react';
  import { AiOutlineUpload } from 'react-icons/ai';
  import './UploadDocument.css';

  const UploadDocument = () => {
    const [files, setFiles] = useState({
      declaration: null,
      invoice: null,
      packingList: null,
      awsBOL: null,
      countryOfOrigin: null,
      deliveryOrder: null,
      others: null,
    });

    const [uploadedFilesStatus, setUploadedFilesStatus] = useState({
      declaration: false,
      invoice: false,
      packingList: false,
      awsBOL: false,
      countryOfOrigin: false,
      deliveryOrder: false,
      others: false,
    });

    const handleFileChange = (e, type) => {
      const selectedFile = e.target.files[0];

      setFiles({
        ...files,
        [type]: selectedFile,
      });

      // Mark this file type as uploaded
      setUploadedFilesStatus(prevState => ({
        ...prevState,
        [type]: true,
      }));
    };

    // Function to handle the file upload
    const handleUpload = () => {
      console.log("Uploaded Files:");
      
      // Log only the files that have been uploaded
      for (const [type, file] of Object.entries(files)) {
        if (file) {
          console.log(`${type.charAt(0).toUpperCase() + type.slice(1)}:`, file.name);
        }
      }
    };

    return (
      <div className="upload-document-container">
        <h3 className='upload-h3'>Upload Document</h3>
        
        {/* Static input box for declaration number */}
        <div className="declaration-number-container">
          <p className="declaration-number">
            Declaration Number: 
          </p>

          <input 
            type="text" 
            value={1234} 
            readOnly 
            className="declaration-number-input"
          />
          {/* Keep the → arrow icon, but no action will happen when clicked */}
          <span className="arrow-icon">→</span>
        </div>

        <div className="document-type-container">
          <h4>Document Type</h4>
          {/* Keeping the checkbox-section inside document-type-container */}
          <div className="checkbox-section">
            <table className="checkbox-table">
              <tbody>
                {['declaration', 'invoice', 'packingList', 'AWS/BOL', 'countryOfOrigin', 'deliveryOrder', 'others'].map((docType) => (
                  <tr className="checkbox-item" key={docType}>
                    <td className="checkbox-label">
                      <label>
                        <input 
                          type="checkbox" 
                          disabled={uploadedFilesStatus[docType]} 
                        />
                        {docType.charAt(0).toUpperCase() + docType.slice(1).replace(/([A-Z])/g, ' $1')}
                      </label>
                    </td>
                    <td className="file-upload">
                      <label htmlFor={`${docType}-file`}>
                        <AiOutlineUpload size={20} />
                      </label>
                      <input
                        type="file"
                        id={`${docType}-file`}
                        onChange={(e) => handleFileChange(e, docType)}
                        disabled={uploadedFilesStatus[docType]} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="upload-btn-container">
          <button onClick={handleUpload} className="upload-button">
            Upload
          </button>
        </div>
      </div>
    );
  };

  export default UploadDocument;