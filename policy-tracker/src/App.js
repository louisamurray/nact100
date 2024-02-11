import React, { useState, useEffect } from 'react';
import natPlans from './plans/natPlans';
import actPlans from './plans/actPlans';

const publicHolidays = [
  '2023-12-25', // Christmas Day
  '2023-12-26', // Boxing Day
  '2024-01-01', // New Year's Day
  '2024-01-02', // Day after New Year's Day
  '2024-02-06', // Waitangi Day
  '2024-04-05', // Good Friday
  '2024-04-08', // Easter Monday
  '2024-04-25', // ANZAC Day
  '2024-06-03', // King's Birthday
  '2024-10-28', // Labour Day
];

function App() {
  const [currentList, setCurrentList] = useState('natPlans');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const updatedItems = lists[currentList].map(item => ({
      ...item,
      checked: item.checkedDate !== null, // Set checked to true if checkedDate is not null
    }));
    setItems(updatedItems);
  }, [currentList]);

  const startDate = new Date('2023-11-27');
  const endDate = calculateEndDate(startDate, 100);

  const isPastDeadline = new Date() > endDate;

  function calculateEndDate(start, workingDaysToAdd) {
    let daysAdded = 0;
    const date = new Date(start);
    
    while (daysAdded < workingDaysToAdd) {
      date.setDate(date.getDate() + 1);
      // Check if the day is a weekend
      if (date.getDay() === 6 || date.getDay() === 0) continue;
      // Format date to YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
      // Check if the day is a public holiday
      if (publicHolidays.includes(formattedDate)) continue;
      
      daysAdded++;
    }
    
    return date;
  }

  const calculateScore = () => {
    const checkedItems = items.filter(item => item.checked).length;
    const totalItems = items.length;
    return ((checkedItems / totalItems) * 100).toFixed(2);
  };

  const toggleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="App">
      <h1>Plans Checklist</h1>
      <div>
        {!isPastDeadline ? (
          <p>
            Working Days Left Until Deadline: {calculateWorkingDaysLeft(new Date(), endDate)}
            <br />
            Current Score: {calculateScore()}%
          </p>
        ) : (
          <p>Deadline has passed. Final Score: {calculateScore()}%</p>
        )}
      </div>
      {/* Render buttons to switch between plan lists */}
      {Object.keys(lists).map((listName) => (
        <button key={listName} onClick={() => setCurrentList(listName)}>
          {listName}
        </button>
      ))}
      {/* Render items for the selected plan list */}
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={item.checked}
            onChange={() => toggleCheck(item.id)}
            disabled={isPastDeadline}
          />
          <label htmlFor={item.id}>
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            {item.checkedDate && (
              <strong> - <span style={{ textDecoration: 'none' }}>{item.checkedDate}</span></strong>
            )}
          </label>
        </div>
      ))}
    </div>
  );
}

// Additional function to calculate working days left until the deadline
function calculateWorkingDaysLeft(start, end) {
  let daysLeft = 0;
  const currentDate = new Date(start);

  while (currentDate < end) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      if (!publicHolidays.includes(formattedDate)) {
        daysLeft++;
      }
    }
  }

  return daysLeft;
}

const lists = {
  natPlans,
  actPlans,
};

export default App;
