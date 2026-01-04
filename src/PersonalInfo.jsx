import { useState } from "react";

function PersonalInfo({ data, setData }) {


   return (
         <div>
      <input
        type="text"
        placeholder="First name"
        value={data.firstName}
        onChange={(e) =>
          setData({ ...data, firstName: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Last name"
        value={data.lastName}
        onChange={(e) =>
          setData({ ...data, lastName: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
    </div>
  );

}

export default PersonalInfo;