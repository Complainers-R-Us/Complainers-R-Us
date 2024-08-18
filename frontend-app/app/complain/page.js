"use client";

import { Box, Stack, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function ComplainPage() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsLoading(true);
      setMessages([...messages, { role: 'user', content: message }]);
      setMessage('');
      
      // Simulate a response from the chatbot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: "I'm a chatbot. How can I assist you further?" }
        ]);
        setIsLoading(false);
      }, 1000); // Simulate network delay
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url("/workspaces/Complainers-R-Us/frontend-app/app/Background.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        width="90%"
        maxWidth="400px"
        bgcolor="white"
        borderRadius="16px"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        p={2}
        position="relative"
      >
        <Typography variant="h6" sx={{ color: '#2196f3', mb: 2 }}>
          TravelPal
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          height="300px"
          overflow="auto"
          sx={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: '#ccc',
              borderRadius: '10px',
            },
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}
            >
              <Box
                sx={{
                  bgcolor: msg.role === 'assistant' ? '#f0f0f0' : '#2196f3',
                  color: msg.role === 'assistant' ? 'black' : 'white',
                  borderRadius: '12px',
                  p: 2,
                  maxWidth: '75%',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="body2">{msg.content}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack direction="row" mt={2} alignItems="center">
          <TextField
            fullWidth
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={isLoading}
            sx={{
              ml: 1,
              minWidth: '48px',
              minHeight: '48px',
              borderRadius: '50%',
              backgroundColor: '#2196f3',
            }}
          >
            {isLoading ? <HourglassEmptyIcon /> : <SendIcon />}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}


// "use client"

// import { Box, Card, Container, Stack, Typography, TextField, Button, IconButton } from "@mui/material";
// import * as React from 'react';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';



// export default function ComplainPage() {
// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }
//     return (
//         <Box
//             width="100vw"
//             height="100vh"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             >
//                  <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link underline="hover" color="inherit" href="/">
//           Home
//         </Link>
//         <Link
//           underline="hover"
//           color="text.primary"
//           href="/complain"
//           aria-current="page"
//         >
//           Talk to Us
//         </Link>
//       </Breadcrumbs>
//     </div>
//                 <Stack 
//                 direction={'column'}
//                 width="700px"
//                 height="700px"
//                 p={2}
//                 spacing={3}>
//                     <Stack 
//                     direction={'column'} 
//                     spacing={2}
//                     flexGrow={1}
//                     overflow={'auto'}
//                     maxHeight="100%">
//                         <Box
//                             display={'flex'}>
//                                 <Box
//                                 bgcolor={'#f3e6cc'}
//                                 borderRadius={16}
//                                 p={3}> I am a chatbot. How can I help you today?
//                                 </Box>
//                             </Box>

//                     </Stack>
//                     <Box display="flex" justifyContent="center" my={2}>
//         <Button
//           variant="contained"
//           sx={{
//             width: '60px',
//             height: '60px',
//             borderRadius: '50%',
//             minWidth: '40px', // Ensures the button remains circular
//           }}
//         >
//           <KeyboardVoiceIcon />
//         </Button>
//       </Box>
//                     <Stack direction={'row'} border={"solid 1px #060f12"} borderRadius={2}>
//                         <TextField
//                         label="Type your message here"
//                         fullWidth
//                         onChange={(e) => console.log(e.target.value)}
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                               '& fieldset': {
//                                 border: 'none',
//                               },
//                             },
//                           }}
//                         />
//                         <Button variant="contained" color="primary">Send</Button>
//                 </Stack>
//             </Stack>

//         </Box>
//     )};