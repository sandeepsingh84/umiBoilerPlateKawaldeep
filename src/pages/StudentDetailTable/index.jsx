import { Table } from 'antd';
const StudentDetailTable = () => {
  const columns = [
    {
      title: 'Reg No.',
      dataIndex: 'Registeration',
      key: 'Registeration',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },

    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      align: 'center',
    },
    {
      title: 'Contact No.',
      dataIndex: 'Contact',
      key: 'Contact',
      align: 'center',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      align: 'center',
    },
  ];
  const rowDataSource = [
    {
      Registeration: '111001',
      name: 'kawaldeep',
      Address: 'Amritsar',
      Contact: '987654321',
      Email: 'kk.kaur@gmail.com',
    },
    {
      Registeration: '111002',
      name: 'Komalpreet',
      Address: 'Jalandhar',
      Contact: '9812345678',
      Email: 'komal.kaur@gmail.com',
    },
    {
      Registeration: '111003',
      name: 'Amandeep',
      Address: 'Amritsar',
      Contact: '9874543321',
      Email: 'Amandeep.kaur@gmail.com',
    },
    {
      Registeration: '111004',
      name: 'nirmaljit',
      Address: 'chandigarh',
      Contact: '987000321',
      Email: 'nirmaljit.kaur@gmail.com',
    },
    {
      Registeration: '111005',
      name: 'Raman',
      Address: 'Amritsar',
      Contact: '987654021',
      Email: 'Raman.kaur@gmail.com',
    },
  ];

  return (
    <div>
      <Table dataSource={rowDataSource} columns={columns} />
    </div>
  );
};
export default StudentDetailTable;
