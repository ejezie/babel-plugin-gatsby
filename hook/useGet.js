import axios from "axios";
import React, { useState, useEffect } from "react";

const useGet = (func, array) => {
  return { data: func, loading:false };
};

export default useGet;