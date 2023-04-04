import axios from 'axios';
import fs from 'fs';
import React, { useState } from 'react'

const App = () => {

  const [link, setLink] = useState('https://www.youtube.com/watch?v=1Q8fG0TtVAY');
  // const [video, setVideo] = useState<File | null>(null);

  const downloadVideo = async () => {
    try {
      const resp = await axios.post('http://localhost:3001/video', {
        url:link,
      });
      
      const buffer = Buffer.from(resp.data);
      fs.writeFileSync('video.mp4', buffer);

      // const blob = new Blob([resp.data], { type: 'video/mp4' });
      // const file = new File([blob], 'video.mp4', { type: 'video/mp4' });
      // const url = URL.createObjectURL(file);
      // let a = document.createElement('a');
      // a.href = url;
      // a.download = 'video.mp4';
      // document.body.appendChild(a);
      // a.click();
      // a.remove();



    } catch (error) {
      
    }
  }
  
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
        padding: '1rem',
        gap: '1rem',
        color: 'white',
        flexDirection: 'column',
      }}
    >
      <h1 className="">Youtube video downloader</h1>
      <input className='form-control w-25' type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      <iframe
        width="560"
        height="315"
        src='https://www.youtube.com/embed/1Q8fG0TtVAY'
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <button 
        className='btn btn-danger'
        onClick={downloadVideo}
      >
        Download
      </button>
      

    </div>
  )
}

export default App