import { Input, Form, Button, Table, Tag } from 'antd';
import { useState } from 'react';
const TablePractice = () => {
  const [form] = Form.useForm();
  const [finalResult, setFinalResult] = useState([]);
  const addNumbers = ({ result }) => {
    let tableArray = [];
    for (let i = 1; i <= 10; i++) {
      tableArray.push({ count: i, multiple: result, rowResult: result * i });
    }
    setFinalResult([...tableArray]);
  };
  const columns = [
    {
      title: '',
      dataIndex: 'count',
      key: 'count',
      align: 'center',
      render: (text, record) => (
        <button
          onClick={() => {
            console.log('text', text);
            console.log('record', record);
          }}
        >
          {text}
        </button>
      ),
    },
    {
      title: '',
      // dataIndex: 'count',
      align: 'center',
      key: 'sign',
      render: () => (
        <Tag color="magenta" style={{ fontSize: '22px' }}>
          x
        </Tag>
      ),
    },
    {
      title: '',
      dataIndex: 'multiple',
      align: 'center',
      key: 'multiple',
      render: (text) => (
        <Tag color="blue" style={{ fontSize: '22px' }}>
          {text}
        </Tag>
      ),
    },
    {
      title: '',
      // dataIndex: 'count',
      key: 'sign2',
      align: 'center',
      render: () => (
        <Tag color="magenta" style={{ fontSize: '22px' }}>
          =
        </Tag>
      ),
    },
    {
      title: '',
      align: 'center',
      dataIndex: 'rowResult',
      key: 'rowResult',
    },
  ];
  return (
    <div>
      <p>Enter the number</p>
      <Form form={form} onFinish={(values) => addNumbers({ result: values?.count })}>
        <Form.Item
          name="count"
          rules={[{ required: true, message: 'Please input your number!' }, { whitespace: true }]}
        >
          <Input placeholder="enter number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => form.submit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* {finalResult?.map((item) => (
        <p key={item.count}>{`${item?.count} * ${item?.multiple} = ${item?.rowResult}`}</p>
      ))} */}
      <Table columns={columns} dataSource={finalResult} bordered />
    </div>
  );
};

export default TablePractice;
