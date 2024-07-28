import { useState } from 'react';
import { Employee } from '../models/Employee';

export interface TableProps {
    data: Employee[];
}

export function Table ({data} : TableProps) {
    const [displayData, setDisplayData] = useState<Employee[]>(data)

    const handleSearchType = (event: React.KeyboardEvent) => {
        const input = event.target as HTMLInputElement;
        const phrase = input.value.toLowerCase();

        const d = data.filter(item => {
            return item.firstname.toLowerCase().includes(phrase) || 
            item.lastname.toLowerCase().includes(phrase) || 
            item.phonenumber.toString().includes(phrase);
        });

        setDisplayData(d)
    }

    return (
    <>
        <div className='mb-3'>
            <input onKeyUp={handleSearchType} placeholder='Wyszukiwana fraza...' type='search'  className='form-control'/>
        </div>
        <table className='table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Salary</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {displayData.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.salary}</td>
                <td>{item.status}</td>
            </tr>)}
            </tbody>
      </table>
      </>)
}