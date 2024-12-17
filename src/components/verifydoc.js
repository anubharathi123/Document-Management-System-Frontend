import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles for the date picker
import "./profile.css";

const App = () => {
  const [documents] = useState([
    {
      declarationNumber: "1234567890123",
      updatedDate: "2024-12-15",
      documentType: "Invoice",
      actions: "",
      downloadUrl: "/downloads/sample1.pdf",
    },
    {
      declarationNumber: "9876543210123",
      updatedDate: "2024-12-10",
      documentType: "Declaration",
      actions: "",
      downloadUrl: "/downloads/sample2.docx",
    },
    {
      declarationNumber: "1112233445566",
      updatedDate: "2024-12-08",
      documentType: "Packing List",
      actions: "",
      downloadUrl: "/downloads/sample3.xlsx",
    },
  ]);

  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const [filterDocType, setFilterDocType] = useState("All");
  const [filterDate, setFilterDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isDocTypeDropdownOpen, setIsDocTypeDropdownOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [declarationInput, setDeclarationInput] = useState("");

  // Toggle calendar visibility
  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);

  // Toggle document type dropdown visibility
  const toggleDocTypeDropdown = () => setIsDocTypeDropdownOpen(!isDocTypeDropdownOpen);

  // Handle checkbox selection
  const handleCheckboxChange = (index) => {
    const updatedSelectedRows = [...selectedRows];
    if (updatedSelectedRows.includes(index)) {
      updatedSelectedRows.splice(updatedSelectedRows.indexOf(index), 1);
    } else {
      updatedSelectedRows.push(index);
    }
    setSelectedRows(updatedSelectedRows);
  };

  // Handle Approve/Reject actions
  const handleAction = (actionType) => {
    const updatedDocuments = [...filteredDocuments];
    selectedRows.forEach((index) => {
      updatedDocuments[index].actions = actionType;
    });
    setFilteredDocuments(updatedDocuments);
    setSelectedRows([]); // Clear selected rows
  };

  // Search based on Declaration Number
  const handleSearch = () => {
    if (declarationInput.length !== 13) {
      alert("Declaration number must be exactly 13 digits.");
      return;
    }

    const matchedDocument = documents.filter(
      (doc) => doc.declarationNumber === declarationInput
    );

    if (matchedDocument.length > 0) {
      setFilteredDocuments(matchedDocument);
    } else {
      alert("No document found with the entered declaration number.");
      setFilteredDocuments([]);
    }
  };

  // Handle download functionality
  const handleDownload = (url, declarationNumber) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `Document_${declarationNumber}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter documents based on type and date
  const applyFilters = () => {
    let filtered = [...documents];

    if (filterDocType !== "All") {
      filtered = filtered.filter((doc) => doc.documentType === filterDocType);
    }

    if (filterDate) {
      const formattedDate = filterDate.toISOString().split("T")[0];
      filtered = filtered.filter((doc) => doc.updatedDate === formattedDate);
    }

    setFilteredDocuments(filtered);
  };

  return (
    <div className="verify-container">
      <h2>Verify Document</h2>

      {/* Declaration Number Search */}
      <div className="declaration-number">
        <label className="declaration_no">
          <b>Declaration Number: </b>
        </label>
        <input
          id="declarationNumber"
          type="text"
          value={declarationInput}
          onChange={(e) => setDeclarationInput(e.target.value)}
          placeholder="Enter 13-digit Declaration Number"
        />
        <button type="button" className="searchbtn" onClick={handleSearch}>
          ➜
        </button>
        <button
          className="approvebtn1"
          onClick={() => handleAction("Approved")}
          style={{ marginRight: "10px" }}
        >
          Approve
        </button>
        <button className="rejectbtn1" onClick={() => handleAction("Rejected")}>
          Reject
        </button>
      </div>

      {/* Document Table */}
      <div className="form-section">
        <table className="document-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>
                Updated Date
                <button className="calendarbtn" onClick={toggleCalendar}>
                  📅
                </button>
                {isCalendarOpen && (
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    <DatePicker
                      selected={filterDate}
                      onChange={(date) => {
                        setFilterDate(date);
                        setIsCalendarOpen(false);
                        applyFilters();
                      }}
                      inline
                    />
                  </div>
                )}
              </th>
              <th>
                Document Type
                <button
                  className="show-doc-type-btn"
                  onClick={toggleDocTypeDropdown}
                >
                  ▼
                </button>
                {isDocTypeDropdownOpen && (
                  <div className="dropdown-list">
                    <ul className="doc-list">
                      <li className="allbtn" onClick={() => { setFilterDocType("All"); applyFilters(); }}>All</li>
                      <li className="declaration" onClick={() => { setFilterDocType("Declaration"); applyFilters(); }}>
                        Declaration
                      </li>
                      <li className="invoice" onClick={() => { setFilterDocType("Invoice"); applyFilters(); }}>
                        Invoice
                      </li>
                      <li className="packing-list" onClick={() => { setFilterDocType("Packing List"); applyFilters(); }}>
                        Packing List
                      </li>
                    </ul>
                  </div>
                )}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc, index) => (
              <tr key={index}>
                <td>
                  {doc.declarationNumber}{" "}
                  <button
                    className="download-btn"
                    onClick={() =>
                      handleDownload(doc.downloadUrl, doc.declarationNumber)
                    }
                    title="Download Document"
                  >
                    ↓
                  </button>
                </td>
                <td>{doc.updatedDate}</td>
                <td>{doc.documentType}</td>
                <td>
                  {!doc.actions ? (
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  ) : (
                    <span
                      style={{
                        fontWeight: "bold",
                        color: doc.actions === "Approved" ? "green" : "red",
                      }}
                    >
                      {doc.actions}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
