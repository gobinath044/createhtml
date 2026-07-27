import React from "react";

function Gridtable() {

  // Grid data
  const data = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "David", department: "HR" },
    { id: 3, name: "Smith", department: "Finance" },
    { id:4,name:"gobi",department : "Information"}
  ];

  // Export function
  const exportTable = () => {

    // Show all records in console
    console.log("Grid Records:");
    console.log(data);

    // CSV Header
    let csv =
      "ID,Name,Department\n";

    // Loop records
    data.forEach((row) => {

      csv +=
        `${row.id},${row.name},${row.department}\n`;

    });

    console.log("CSV Data:");


    /*let csvd = "Grid Panel";
    console.log(csvd);*/


    console.log(csv);

    // Create CSV file
    const blob = new Blob(
      [csv],
      {type: "text/csv" }
    );

    // Create download link
    const link =
      document.createElement("a");

    // File name
    link.download = "grid-data.csv";

    // File URL
    link.href =
      window.URL.createObjectURL(blob);

    // Auto download
    link.click();
  };

  return (

    <div style={{ padding: "20px" }}>

      {/* Right Side Export Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px"
        }}
      >
        <button onClick={exportTable}>
          Export
        </button>
      </div>

      {/* Grid/Table */}
      <table
        border="1"
        cellPadding="10"
        width="100%"
      >

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>

        {/* <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.department}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
           { data.map((row) => (

            <tr key={row.id}>
                <td>{row.id}</td>    
                <td>{row.name}</td>  
                <td>{row.department}</td>

            </tr>
         ))}
              
        </tbody>

        <tbody>
           {data.map((row) => (

          <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.department}</td>
          </tr>
          ))}
        </tbody>


       



      </table>

    </div>

  );
}

export default Gridtable;