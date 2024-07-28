import './App.css'
import { Table } from './components/Tabel'

export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: string;
}

function App() {
  const mockData: Employee[] = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      salary: 5000,
      status: 'na urlopie'
    },
    {
      id: '2',
      firstname: 'Mike',
      lastname: 'Former',
      salary: 6000,
      status: 'na urlopie'
    },
    {
      id: '3',
      firstname: 'Tom',
      lastname: 'Zlom',
      salary: 15000,
      status: 'na urlopie'
    },
    {
      id: '4',
      firstname: 'Mhn',
      lastname: 'Kooe',
      salary: 15000,
      status: 'na urlopie'
    }
  ]


  return (
    <>
      <h1>Employees</h1>

      <Table data={mockData}></Table>    
    </>

  )
}

export default App
