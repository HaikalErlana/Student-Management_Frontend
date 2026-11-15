
import { useState, useEffect } from 'react'

function App() {
  // Data mahasiswa
  const [students] = useState([
    {
      nim: '4523210010',
      nama: 'Muhammad Haikal Erlana',
      telepon: '081234567801',
      email: 'kaleversity@mail.com',
      alamat: 'Jakarta Selatan',
      programStudi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '4523210030',
      nama: 'Trianggoro Budi',
      telepon: '081234567801',
      email: 'budiversity@mail.com',
      alamat: 'Jatinegara',
      programStudi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '4523210030',
      nama: 'Lean Ferdiansyah',
      telepon: '081234567801',
      email: 'leanversity@mail.com',
      alamat: 'Tanjung Priok',
      programStudi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '4523210040',
      nama: 'Marsya Adinata',
      telepon: '081234567801',
      email: 'aditversity@mail.com',
      alamat: 'Petojo',
      programStudi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '4523210050',
      nama: 'Rafael Leao',
      telepon: '081234567801',
      email: 'leaoversity@mail.com',
      alamat: 'Portugal',
      programStudi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    
  ])

  // State untuk jam digital
  const [currentTime, setCurrentTime] = useState(new Date())

  // Memperbarui jam setiap 1 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Student Management</h1>
        <p>Daftar Data Mahasiswa</p>
      </header>

      <section className="information">
        <div className="info-card">
          <h3>Jumlah Mahasiswa</h3>
          <p>{students.length}</p>
        </div>

        <div className="info-card">
          <h3>Jam Digital</h3>
          <p>
            {currentTime.toLocaleTimeString('id-ID', {
              hour12: false,
            })}
          </p>
        </div>
      </section>

      <section className="table-section">
        <h2>Data Mahasiswa</h2>

        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.nim}>
                <td>{student.nim}</td>
                <td>{student.nama}</td>
                <td>{student.telepon}</td>
                <td>{student.email}</td>
                <td>{student.alamat}</td>
                <td>{student.programStudi}</td>
                <td>{student.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
