import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Expenses.json"

const ExpensesSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Expenses API reference"/>
  );
}

export default ExpensesSyncApi