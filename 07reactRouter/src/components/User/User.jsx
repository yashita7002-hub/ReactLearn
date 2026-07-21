import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();//a hook used to access URL parameters in a React component.

  return (
    <div className="bg-orange-700 pt-3 text-3xl pb-3 text-white">
      User: {userid}
    </div>
  );
}