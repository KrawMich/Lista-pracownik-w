import './App.css'
import { Table } from './components/Tabel'
import { Employee } from './models/Employee';

function App() {
  const mockData: Employee[] = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      salary: 5000,
      status: 'na urlopie',
      phonenumber: 465465456
    },
    {
      id: '2',
      firstname: 'Mike',
      lastname: 'Former',
      salary: 6000,
      status: 'na urlopie',
      phonenumber: 78978987897
    },
    {
      id: '3',
      firstname: 'Tom',
      lastname: 'Zlom',
      salary: 15000,
      status: 'na urlopie',
      phonenumber: 4654687
    },
    {
      id: '4',
      firstname: 'Mhn',
      lastname: 'Kooe',
      salary: 15000,
      status: 'na urlopie',
      phonenumber: 468888886
    }
  ]


  return (
    <>
      <main className='container'>
        <h1 className='pt-4 pb-4'>Employees</h1>

        <Table data={mockData}></Table>
      </main>    
    </>

  )
}

export default App
