// import React, { useState } from 'react';
// import { invoke } from '@tauri-apps/api/tauri';

// const MessageForm: React.FC = () => {
//   const [roomId, setRoomId] = useState('');
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const result = await invoke<string>('send_message', { roomId, message });
//       setResponse(result);
//     } catch (error) {
//       console.error('Failed to send message:', error);
//       setResponse('Failed to send message');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="roomId">Room ID:</label>
//           <input
//             id="roomId"
//             type="text"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <input
//             id="message"
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//       {response && <p>{response}</p>}
//     </div>
//   );
// };

// export default MessageForm;