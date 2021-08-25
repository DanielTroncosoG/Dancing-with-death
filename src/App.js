import React, {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import './App.css';
import "react-datepicker/dist/react-datepicker.css"

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events= [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 7, 25),
    end: new Date(2021, 7, 25)
  },
  {
    title: "Vacation",
    start: new Date(2021, 7, 26),
    end: new Date(2021, 7, 30)
  },
  {
    title: "Conference",
    start: new Date(2021, 7, 31),
    end: new Date(2021, 7, 31)   
  }
]





function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div className="input">
        <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
         />
         <DatePicker placeholderText="Start Day" style={{marginRight: "10px"}} selected={newEvent.end} 
         onChange={(start) => setNewEvent({...newEvent, start})}
          />
          <DatePicker placeholderText="End Day" selected={newEvent.end} 
         onChange={(end) => setNewEvent({...newEvent, end})}
          />
          <input type="number" placeholder="Add Hour" style={{width: "20%", marginRight: "10px"}}
          value={newEvent.start.hour} onChange={(e) => setNewEvent({...newEvent, start: e.target.value})}
         />
          <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
          
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;
