// import { useEffect, useState } from 'react';
// import client from 'api/supabase';

// const [content, setContent] = useState([]);

// useEffect(() => {
//   getContent();
// }, []);

// async function getContent() {
//   const { data, error } = await client.from('content').select();
//   setContent(data);
// }

// <ul>
//   {content.map((content) => (
//     <li key={content.name}>{content.name} </li>
//   ))}
// </ul>;

import client from './supabase';
/**
 * @typedef {string | number | boolean | null | { [key: string]: Json | undefined } | Json[]} Json
 */

/**
 * @typedef {Object} Row
 * @property {number} id - the data expected from .select()
 * @property {string} name - the data expected from .select()
 * @property {Json | null} data - the data expected from .select()
 */

/**
 * @typedef {Object} Insert
 * @property {undefined} [id] - generated columns must not be supplied
 * @property {string} name - `not null` columns with no default must be supplied
 * @property {Json | null} [data] - nullable columns can be omitted
 */

/**
 * @typedef {Object} Update
 * @property {undefined} [id]
 * @property {string} [name] - `not null` columns are optional on .update()
 * @property {Json | null} [data]
 */

/** @type {Object<string, { Row: Row, Insert: Insert, Update: Update }>} */
const Database = {
  public: {
    Tables: {
      content: {
        Row: {
          id: 0,
          name: '',
          data: null
        },
        Insert: {
          name: ''
        },
        Update: {}
      }
    }
  }
};

const insertData = async () => {
  try {
    const { data, error } = await client
      .from('content') // 테이블 이름 지정
      .insert([
        //   { column1: 'value1', column2: 'value2' },
        //   { column1: 'value3', column2: 'value4' },
      ]);
    if (error) {
      console.error('데이터를 데이터베이스에 저장하는 데에 오류가 있습니다.', error.message);
    } else {
      console.log('데이터가 성공적으로 데이터베이스에 저장되었습니다.', data);
    }
  } catch (error) {
    console.error('데이터를 데이터베이스에 저장하는 데에 오류가 있습니다.', error.message);
  }
};

insertData();

const fetchData = async () => {
  try {
    const { data, error } = await client.from('content').select('*');

    if (error) {
      console.error('데이터를 불러오는 데에 오류가 생겼습니다.', error.message);
    } else {
      console.log('데이터를 성공적으로 불러왔습니다.', data);
    }
  } catch (error) {
    console.error('데이터를 불러오는 데에 오류가 생겼습니다.', error.message);
  }
};

fetchData();
