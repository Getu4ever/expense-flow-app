import React, { useState } from "react";
import { format } from "date-fns";
import Summary from "./components/Summary";
import ExpenseBreakdown from "./components/ExpenseBreakdown";

const initialExpenses = [
  { id: 1, amount: 45.67, description: "Lunch at downtown bistro", category: "food_dining", date: "2024-12-15", payment: "credit_card", recurring: false },
  { id: 2, amount: 120, description: "Monthly gym membership", category: "fitness", date: "2024-12-01", payment: "bank_transfer", recurring: true },
  { id: 3, amount: 89.99, description: "Weekly grocery shopping", category: "groceries", date: "2024-12-14", payment: "debit_card", recurring: false },
  { id: 4, amount: 15.99, description: "Netflix subscription", category: "subscriptions", date: "2024-12-10", payment: "credit_card", recurring: true },
  { id: 5, amount: 250, description: "Electricity bill", category: "bills_utilities", date: "2024-12-05", payment: "bank_transfer", recurring: true },
  { id: 6, amount: 32.5, description: "Uber ride to airport", category: "transportation", date: "2024-12-12", payment: "digital_wallet", recurring: false },
  { id: 7, amount: 75, description: "Concert tickets", category: "entertainment", date: "2024-12-08", payment: "credit_card", recurring: false },
  { id: 8, amount: 200, description: "New winter jacket", category: "shopping", date: "2024-12-03", payment: "credit_card", recurring: false }
];

const initialIncome = [
  { id: 1, amount: 5000, source: "salary", description: "December Salary", date: "2024-12-01" },
  { id: 2, amount: 750, source: "freelance", description: "Web design project for Client A", date: "2024-12-10" },
  { id: 3, amount: 120, source: "investment", description: "Stock dividends", date: "2024-12-15" }
];

const categories = {
  food_dining: "#F87171",
  fitness: "#34D399",
  groceries: "#60A5FA",
  subscriptions: "#A78BFA",
  bills_utilities: "#FBBF24",
  transportation: "#F472B6",
  entertainment: "#38BDF8",
  shopping: "#C084FC"
};

export default function ExpenseFlowApp() {
  const [expenses] = useState(initialExpenses);
  const [income] = useState(initialIncome);

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = income.reduce((sum, i) => sum + i.amount, 0);
  const balance = totalIncome - totalExpense;

  const dataForPie = Object.keys(categories).map(cat => {
    const value = expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0);
    return { name: cat, value };
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Expense Flow</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Summary
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
        />

        <ExpenseBreakdown
          data={dataForPie}
          categories={categories}
        />

        <div className="p-4 bg-white rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
          <ul className="text-sm max-h-64 overflow-y-auto">
            {expenses.slice(-5).reverse().map(exp => (
              <li key={exp.id} className="border-b py-1">
                <span className="font-medium">{exp.description}</span> - ${exp.amount.toFixed(2)}<br />
                <span className="text-gray-500">{format(new Date(exp.date), 'MMM dd')} • {exp.category}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
