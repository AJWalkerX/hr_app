import React from 'react';

const personalData = [
  {
    id: 1,
    name: "Ali Yılmaz",
    email: "ali.yilmaz@example.com",
    position: "Muhasebeci",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    shifts: [
      { startDate: "2025-01-01", endDate: "2025-01-07", shift: "Sabah" },
      { startDate: "2025-01-08", endDate: "2025-01-14", shift: "Öğle" },
      { startDate: "2025-01-15", endDate: "2025-01-21", shift: "Gece" },
      { startDate: "2025-01-22", endDate: "2025-01-28", shift: "Akşam" },
      { startDate: "2025-01-29", endDate: "2025-02-04", shift: "Sabah" },
      { startDate: "2025-02-05", endDate: "2025-02-11", shift: "Öğle" },
      { startDate: "2025-02-12", endDate: "2025-02-18", shift: "Gece" },
      { startDate: "2025-02-19", endDate: "2025-02-25", shift: "Akşam" },
      { startDate: "2025-02-26", endDate: "2025-03-03", shift: "Sabah" },
      { startDate: "2025-03-04", endDate: "2025-03-10", shift: "Öğle" },
      { startDate: "2025-03-11", endDate: "2025-03-17", shift: "Gece" },
      { startDate: "2025-03-18", endDate: "2025-03-24", shift: "Akşam" },
      { startDate: "2025-03-25", endDate: "2025-03-31", shift: "Sabah" },
    ],
  },
];

function PersonalShiftList() {
  
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
          <div>
            <h2 style={{
              textAlign: 'center',
              color: '#2a3d66',
              fontWeight: 'bold',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              margin: '0',
              marginLeft: '150px',
              marginTop: '30px'
            }}>Personel Vardiya Listesi</h2>
          </div>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'nowrap', 
            gap: '10px',
            marginTop: '-50px' // Kartları yukarıya almak için margin-top değerini ekledim
          }}>
            {personalData.map(person => (
              <div key={person.id} style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                width: '700px',
                minHeight: '250px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                flexShrink: '0',
                textAlign: 'center',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={person.avatarUrl} alt={person.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '15px' }} />
                <h3 style={{ fontSize: '1.4em', color: '#333', fontWeight: 'bold' }}>{person.name}</h3>
                <p style={{ fontSize: '1.1em', color: '#777', marginBottom: '15px' }}>{person.position}</p>
                <h4 style={{ fontSize: '1.2em', color: '#2a3d66', fontWeight: 'bold' }}>Vardiyalar:</h4>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  {person.shifts.map((shift, index) => (
                    <li key={index} style={{ fontSize: '1em', color: '#555', marginBottom: '10px' }}>
                      {shift.startDate} - {shift.endDate}: <span style={{ fontWeight: 'bold' }}>{shift.shift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default PersonalShiftList;
