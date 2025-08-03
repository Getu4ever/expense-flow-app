import React from "react";

export default function Summary({ totalIncome, totalExpense, balance }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Summary</h2>
      <p>Total Income: <span className="text-green-600">${totalIncome.toFixed(2)}</span></p>
      <p>Total Expense: <span className="text-red-500">${totalExpense.toFixed(2)}</span></p>
      <p>
        Balance:{" "}
        <span
          className={`font-semibold ${
            balance >= 0 ? "text-green-700" : "text-red-700"
          }`}
        >
          ${balance.toFixed(2)}
        </span>
      </p>
    </div>
  );
}
