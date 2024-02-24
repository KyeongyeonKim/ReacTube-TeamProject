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
