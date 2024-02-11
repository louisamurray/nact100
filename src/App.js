import React, { useState, useEffect } from 'react';
import natPlans from './plans/natPlans';
import { actPlans } from './plans/actPlans';
import './App.css';

const lastUpdated = '2024-02-12';


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
      checked: item.checkedDate !== null,
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
      if (date.getDay() === 6 || date.getDay() === 0) continue;
      const formattedDate = date.toISOString().split('T')[0];
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

  const getLetterGrade = (score) => {
      if (score < 50) {
        return 'Not Achieved: The government has not demonstrated sufficient effectiveness or impact to meet the standard.';
      }
      if (score >= 50 && score < 70) {
        return 'Achieved: The government has shown enough effectiveness or impact to meet the basic requirements of the standard.';
      }
      if (score >= 70 && score < 85) {
        return 'Merit: The government has demonstrated a higher level of effectiveness or impact, surpassing the basic requirements.';
      }
      if (score >= 85) {
        return 'Excellence: The government has shown a high level of effectiveness or impact, significantly exceeding the standard\'s requirements.';
      }
    };
    

  const toggleCheck = (id) => {
    const itemToToggle = items.find(item => item.id === id);
    if (itemToToggle.checked) {
      return;
    }
    setItems(items.map(item => item.id === id ? { ...item, checked: true } : item));
  };

  const resetApp = () => {
    setCurrentList('natPlans');
    const resetItems = lists['natPlans'].map(item => ({
      ...item,
      checked: item.checkedDate !== null,
    }));
    setItems(resetItems);
  };

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

  return (
    <div className="App">
      <h1>Pre-Election 100 Plans Checklist</h1>
      <p>Welcome to our dedicated tracker for the "First 100 Days Plans" of the National Party and the ACT Party of New Zealand. Following the 2023 election campaign, both parties outlined ambitious agendas for their initial months in office. This page serves as a transparent, real-time progress report on these promises.</p>
      <p>Day 1 of our countdown begins on 23 November 2023. In our tracking, we consider only working days, excluding nationwide public holidays to give a true reflection of the parties' efforts to fulfil their pledges. Tasks are checked off as achieved only when they meet specific criteria—passing bills in Parliament, enforcing bans, signing Memorandums of Understanding (MoUs), or other relevant actions.</p>
      <p>Scores are based on the number of items checked off the list. No weighting has been applied.</p>
      <p>Our aim is to provide a clear, accountable record of political promises versus actions. <br></br>Stay informed on how each party is progressing with their commitments to the people of New Zealand.</p>
      <div>
  {!isPastDeadline ? (
    <h2>
      Working Days Left Until Deadline: {calculateWorkingDaysLeft(new Date(), endDate)}
      <br />
      Current Score: {calculateScore()}% ({getLetterGrade(parseFloat(calculateScore()))})
      <br />
      Last Updated: {lastUpdated}
    </h2>
  ) : (
    <h2>
      Deadline has passed. Final Score: {calculateScore()}% ({getLetterGrade(parseFloat(calculateScore()))})
      <br />
      Last Updated: {lastUpdated}
    </h2>
  )}
</div>

      {Object.keys(lists).map((listName) => (
        <button key={listName} onClick={() => setCurrentList(listName)}>{listName}</button>
      ))}
      <button onClick={resetApp}>Reset</button>
      {items.map((item) => (
        <div key={item.id} className="list-item">
          <input type="checkbox" id={item.id} checked={item.checked} onChange={() => toggleCheck(item.id)} disabled={isPastDeadline || item.checked} />
          <label htmlFor={item.id}><span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>{item.checkedDate && (<strong> - <span style={{ textDecoration: 'none' }}>{item.checkedDate}</span></strong>)}</label>
        </div>
      ))}
    </div>
  );
}

const lists = { natPlans, actPlans };

export default App;
