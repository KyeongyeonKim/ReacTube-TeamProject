// import client from './supabase';
// import { useEffect, useState } from 'react';

// export default function Content() {
//   const [content, setContent] = useState(null);

//   useEffect(() => {
//     async function fetchContent() {
//       const { data, error } = await client.from('content').select();

//       if (error) {
//         console.error('Error fetching content:', error.message);
//       } else {
//         setContent(data);
//       }
//     }

//     fetchContent();
//   }, []);

//   return (
//     <div>
//       <h1>Notes</h1>
//       <pre>{JSON.stringify(content, null, 2)}</pre>
//     </div>
//   );
// }
