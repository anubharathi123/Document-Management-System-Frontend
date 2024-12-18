
// import React, { useState } from 'react';
// import './DocumentList.css';
// import downArrow from './down-arrow.png'; // Import the down arrow image

// const DocumentList = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [isDatePickerVisible, setDatePickerVisible] = useState(false);
//   const [isDocTypeDropdownVisible, setDocTypeDropdownVisible] = useState(false);
// //   const [setSelectedDocType] = useState('declaration'); 

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const toggleDatePicker = () => {
//     setDatePickerVisible(!isDatePickerVisible);
//   };

//   const toggleDocTypeDropdown = () => {
//     setDocTypeDropdownVisible(!isDocTypeDropdownVisible);
//   };

//   const handleDocTypeChange = (docType, event) => {
//     event.preventDefault(); // Prevent the dropdown from closing or triggering any action
//     // No action is performed here, just prevent default
//   };

//   const docTypes = [
//     'Declaration',
//     'Invoice',
//     'Packing List',
//     'AWS/BOL',
//     'Country Of Origin',
//     'Delivery Order',
//     'Others'
//   ];

//   // Static data for table rows
//   const rows = [
//     { declarationNumber: '1234567890123', fileName: 'xxxxxxxx', updatedDate: '2024-12-01', docType: 'Invoice', status: 'Pending' },
//     { declarationNumber: '9876543210987', fileName: 'xxxxxxxx', updatedDate: '2024-11-20', docType: 'Packing List', status: 'Reject' },
//     { declarationNumber: '1122334455667', fileName: 'xxxxxxxx', updatedDate: '2024-10-15', docType: 'Declaration', status: 'Approve' },
//     { declarationNumber: '2233445566778', fileName: 'xxxxxxxx', updatedDate: '2024-09-10', docType: 'All', status: 'Canceled' }
//   ];

//   return (
//     <div className="document-list-container">
//       <h2 className="title">Document List</h2>

//       {/* Declaration Number Section */}
//       <div className="declaration-section">
//         <label className="declaration-label">Declaration Number:</label>
//         <input type="text" className="declaration-input" placeholder="Enter 13-digit Dec num" />
//         <span role="img" aria-label="arrow" className="arrow-icon">→</span>
//       </div>

//       {/* Table Section */}
//       <table className="document-table">
//         <thead>
//           <tr>
//             <th>Declaration Number</th>
//             <th>File Name</th>
//             <th>
//               Updated Date 
//               <span 
//                 role="img" 
//                 aria-label="calendar" 
//                 className="calendar-icon" 
//                 onClick={toggleDatePicker}
//               >
//                 📅
//               </span>
//               {isDatePickerVisible && (
//                 <input
//                   type="date"
//                   id="date-picker"
//                   className="date-input"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                 />
//               )}
//             </th>
//             <th>
//               Doc Type
//               <img 
//                 src={downArrow} 
//                 alt="Dropdown" 
//                 className="dropdown-icon" 
//                 onClick={toggleDocTypeDropdown} 
//               />
//               {isDocTypeDropdownVisible && (
//                 <div className="dropdown-list">
//                   {docTypes.map((docType) => (
//                     <div 
//                       key={docType} 
//                       className="dropdown-item" 
//                       onClick={(event) => handleDocTypeChange(docType, event)}
//                     >
//                       {docType}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Static rows with predefined document types */}
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.declarationNumber}</td>
//               <td>{row.fileName}</td>
//               <td>{row.updatedDate}</td>
//               <td>{row.docType}</td> {/* Static doc type for each row */}
//               <td>{row.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DocumentList;





import React, { useState } from 'react';
import './DocumentList.css';
import downArrow from './down-arrow.png'; // Import the down arrow image

const DocumentList = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isDocTypeDropdownVisible, setDocTypeDropdownVisible] = useState(false);
//   const [setSelectedDocType] = useState('declaration'); 

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const toggleDocTypeDropdown = () => {
    setDocTypeDropdownVisible(!isDocTypeDropdownVisible);
  };

  const handleDocTypeChange = (docType, event) => {
    event.preventDefault(); // Prevent the dropdown from closing or triggering any action
    // No action is performed here, just prevent default
  };

  const docTypes = [
    'Declaration',
    'Invoice',
    'Packing List',
    'AWS/BOL',
    'Country Of Origin',
    'Delivery Order',
    'Others'
  ];

  // Static data for table rows with file URLs
  const rows = [
    { declarationNumber: '1234567890123', fileName: 'File1.pdf', fileUrl: 'https://example.com/files/File1.pdf', updatedDate: '2024-12-01', docType: 'Invoice', status: 'Pending' },
    { declarationNumber: '9876543210987', fileName: 'File2.pdf', fileUrl: 'https://example.com/files/File2.pdf', updatedDate: '2024-11-20', docType: 'Packing List', status: 'Reject' },
    { declarationNumber: '1122334455667', fileName: 'File3.pdf', fileUrl: 'https://example.com/files/File3.pdf', updatedDate: '2024-10-15', docType: 'Declaration', status: 'Approve' },
    { declarationNumber: '2233445566778', fileName: 'File4.pdf', fileUrl: 'https://example.com/files/File4.pdf', updatedDate: '2024-09-10', docType: 'All', status: 'Canceled' }
  ];

  return (
    <div className="document-list-container">
      <h2 className="title">Document List</h2>

      {/* Declaration Number Section */}
      <div className="declaration-section">
        <label className="declaration-label">Declaration Number:</label>
        <input type="text" className="declaration-input" placeholder="Enter 13-digit Dec num" />
        <span role="img" aria-label="arrow" className="arrow-icon">→</span>
      </div>

      {/* Table Section */}
      <table className="document-table">
        <thead>
          <tr>
            <th>Declaration Number</th>
            <th>File Name</th>
            <th>
              Updated Date 
              <span 
                role="img" 
                aria-label="calendar" 
                className="calendar-icon" 
                onClick={toggleDatePicker}
              >
                📅
              </span>
              {isDatePickerVisible && (
                <input
                  type="date"
                  id="date-picker"
                  className="date-input"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </th>
            <th>
              Doc Type
              <img 
                src={downArrow} 
                alt="Dropdown" 
                className="dropdown-icon" 
                onClick={toggleDocTypeDropdown} 
              />
              {isDocTypeDropdownVisible && (
                <div className="dropdown-list">
                  {docTypes.map((docType) => (
                    <div 
                      key={docType} 
                      className="dropdown-item" 
                      onClick={(event) => handleDocTypeChange(docType, event)}
                    >
                      {docType}
                    </div>
                  ))}
                </div>
              )}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Static rows with predefined document types */}
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.declarationNumber}</td>
              <td>
                <a href={row.fileUrl} target="_blank" rel="noopener noreferrer" className="file-link">
                  {row.fileName}
                </a>
              </td>
              <td>{row.updatedDate}</td>
              <td>{row.docType}</td> {/* Static doc type for each row */}
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentList;
