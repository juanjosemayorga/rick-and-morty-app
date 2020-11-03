import React, { useState } from 'react'

import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {
  Container,
  Anchor,
  Hr
} from './styles.js'

export const Status = ({ statusChosen, setCurrentPage }) => {

  const menu = (
  <Menu>
    <Menu.Item onClick={() => handleGenderSelected('Status')}>
      Without Filter
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Alive')}>
      Alive
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Dead')}>
      Dead
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Unknown')}>
      Unknown
    </Menu.Item>
  </Menu>
  );

  const handleGenderSelected = value => {
    setStatus(value)
    if (value === 'Status') {
      statusChosen('')
      setCurrentPage(1)
    } else {
      statusChosen(value)
      setCurrentPage(1)
    }
  }

  const [status, setStatus] = useState('Status')

  return (
    <Container>
      <Hr />
        <Dropdown overlay={menu}>
          <Anchor className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {status} <DownOutlined />
          </Anchor>
        </Dropdown>
      <Hr />
    </Container>
  )
}
