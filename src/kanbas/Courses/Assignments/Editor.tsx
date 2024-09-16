export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <br/><br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea cols={40} rows={10} id="wd-description" value="The assignment is available online Submit a link to the landing page of your web application running on netlify. The landing page should include the following: your full name and section links to each of the lab assignments Link to kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page." />
        <br />
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" value={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="Assignments">Assignments</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="Online">Online</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
  
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <label>Online Entry Options</label><br />
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
  
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <label htmlFor="wd-assign-to">Assign to</label><br />
          <input id="wd-assign-to" value="Everyone" />
        </div>
  
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <label htmlFor="wd-due-date">Due</label><br />
          <input id="wd-due-date" value="2024-05-13" type="date" />
        </div>
  
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <label htmlFor="wd-available-from">Available from</label>    <label htmlFor="wd-available-until">Until</label><br />
        </div>
  
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input id="wd-available-from" type="date" value="2024-05-06" />
        <input id="wd-available-until" type="date" value="2024-05-20" />
        </div>
  
        <hr />
        
        <div style={{ textAlign: 'right' }}>
          <button>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;<button>Save</button>
        </div>
      </div>
    );
  }