import { useState } from "react";

function Education( {data, setData}) {


   return (
    <div>
      <input
        type="text"
        placeholder="School"
        value={data.schoolName}
        onChange={(e) => setData({ ...data, schoolName: e.target.value })}
       />

      <input
        type="number"
        placeholder="Graduation Year"
        value={data.gradYear}
        onChange={(e) =>  setData({ ...data, gradYear: e.target.value })}

      />

      <input
        type="number"
        placeholder="Grade"
        value={data.gradGrade}
        onChange={(e) => setData({ ...data, gradGrade: e.target.value })}
      />

    </div>
  );

}

export default Education;