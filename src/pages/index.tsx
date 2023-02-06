import React, { useState } from 'react';
// import Image from 'next/image'; // need to configure next.config.js
import Content from '../components/Content';

export default function Home() {
  const imageURL = 'https://via.placeholder.com/100x100';

  const [selectedTab, setSelectedTab] = useState('tab1');

  const tab1Images = [
    { id: 1, text: 'Loan Payments' },
    { id: 2, text: 'Financial Growth' },
  ];
  const tab2Images = [
    { id: 3, text: 'foo' },
    { id: 4, text: 'bar' },
  ];
  const tab3Images = [
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
  ];
  const tab4Images = [
    { id: 3, text: '123' },
    { id: 4, text: '456' },
  ];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  function toggleImages() { 
    if(selectedTab === 'tab1') {
      return tab1Images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <img src={imageURL} alt={image.text} width={100} height={100} />
          <p className="text-center">{image.text}</p>
        </div>
      ))            
    } 
    else if(selectedTab === 'tab2') {
      return tab2Images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <img src={imageURL} alt={image.text} width={100} height={100}/>
          <p className="text-center">{image.text}</p>
        </div>
      ))
    }
    else if(selectedTab === 'tab3') {
        return tab3Images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img src={imageURL} alt={image.text} width={100} height={100}/>
            <p className="text-center">{image.text}</p>
          </div>
        ))
    } else if(selectedTab === 'tab4'){
        return tab4Images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img src={imageURL} alt={image.text} width={100} height={100}/>
            <p className="text-center">{image.text}</p>
          </div>
        ))
    }

    return '';
  }

  return ( 
    <>
      <Content />
      <div className='px-50'>
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/2 text-center">
              <button
                className={`leading-10 py-2 px-4 font-medium text-sm ${selectedTab === 'tab1' ? 'border-b-4 border-yellow-500' : ''}`}
                onClick={() => handleTabClick('tab1')}
              >
                PERSONAL FINANCE
              </button>
            </div>
            <div className="w-1/2 text-center">
              <button
                className={`leading-10 py-2 px-4 font-medium text-sm ${selectedTab === 'tab2' ? 'border-b-4 border-yellow-500' : ''}`}
                onClick={() => handleTabClick('tab2')}
              >
                CAREERS
              </button>
            </div>
            <div className="w-1/2 text-center">
              <button
                className={`leading-10 py-2 px-4 font-medium text-sm ${selectedTab === 'tab3' ? 'border-b-4 border-yellow-500' : ''}`}
                onClick={() => handleTabClick('tab3')}
              >
                START-UPS
              </button>
            </div>
            <div className="w-1/2 text-center">
              <button
                className={`leading-10 py-2 px-4 font-medium text-sm ${selectedTab === 'tab4' ? 'border-b-4 border-yellow-500' : ''}`}
                onClick={() => handleTabClick('tab4')}
              >
                TRENDING
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {toggleImages()}
          </div>
        </div>
      </div>
    </>
  );
}