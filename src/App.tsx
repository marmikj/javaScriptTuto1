
import './App.css';
import { useGetEmployeeQuery } from './Services/EmployeeApi';

function App() {
  const { data,error,isLoading,isFetching,isSuccess } = useGetEmployeeQuery()
 return (
    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Somthing is wrong</h2>}
      {isSuccess && (
      <table border={1}>
        <thead>
          <tr>
          <th>First Name</th>
          <th>Email</th>
          <th>contact Number</th>
          </tr>
        </thead>
        <tbody className='data'>
          {
            data?.map((Employee, index) => (
              <tr key={index}>
                <td>{Employee.firstName}</td>
                <td>{Employee.email}</td>
                <td>{Employee.contactNumber}</td>
              </tr>
               ))
            }
        </tbody>
      </table>
      )}
    </div>
      
  );
}

export default App;
