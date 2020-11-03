import React, { useState } from 'react'

import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {
  Container,
  Anchor,
  Hr
} from './styles.js'

export const Gender = () => {

  const menu = (
  <Menu>
    <Menu.Item onClick={() => handleGenderSelected('Male')}>
      Male
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Female')}>
      Female
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Genderless')}>
      Genderless
    </Menu.Item>
    <Menu.Item onClick={() => handleGenderSelected('Unknown')}>
      Unknown
    </Menu.Item>
  </Menu>
  );

  const handleGenderSelected = value => {
    setGender(value)
  }

  const [gender, setGender] = useState('Gender')

  return (
    <Container>
      <Hr />
        <Dropdown overlay={menu}>
          <Anchor className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {gender} <DownOutlined />
          </Anchor>
        </Dropdown>
      <Hr />
    </Container>
  )
}
