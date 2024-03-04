import React, { useState } from 'react';
import logojs from '../assets/JSLogo.webp'
import wp from '../assets/whatsApp.svg'
import gh from '../assets/gitHub.svg'
import laptop from '../assets/laptop.svg'
import mobile from '../assets/mobile.svg'
import devices from '../assets/devices.svg'
import imgcard from '../assets/imgcard.webp'



import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { setActive } from '@material-tailwind/react/components/Tabs/TabsContext';



export const CardProject = () => {
  const [active, setActive] = useState(true)


  const data = [
    {
      label: laptop,
      value: "laptop",
      title: "Restaurante",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
      imgDesktop: logojs,
      imgMobil: imgcard,
    },
    {
      label: devices,
      value: "devices",
      title: "Control de Gastos",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      imgDesktop: logojs,
      imgMobil: imgcard,
    },
  ];

  const onActive = () => {!setActive}

  return (
    <Card className="bg-dimWhite min-w-[335px] max-w-[400px] flex">
      <Tabs value="laptop" className="flex flex-col">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={onActive} >
              <img src={label} alt={label} />
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { x: 250 },
            mount: { x: 0 },
            unmount: { x: 250 },
          }}
        >
          {data.map(({ value, imgDesktop }) => (
            <TabPanel key={value} value={value}>
              <div>
                <img src={imgDesktop} alt={imgDesktop} width={400} height={400} />
              </div>
            </TabPanel>
          ))}

          {/* Linea */}
          <hr className="sm:mx-auto border-gray-500 " />

          {/* Titulo y descripcion */}
          <div className="px-6 py-2">
            {data.map(({ value, title, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="font-bold text-xl mb-2 text-[#145b88]">
                  {title}
                </div>

                <div className="px-6 py-2 flex-auto">
                  <p className="text-base text-primarygb">
                    {desc}
                  </p>
                </div>
              </TabPanel>
            ))}
          </div>

          {/* Etiquetas */}
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
              #JavaScritp
            </span>
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
              #TailwindCss
            </span>
          </div>

          {/* Boton */}
          <div>
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 mb-2 px-6"
            >
              Ver más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </TabsBody>
      </Tabs>
    </Card>
  );
}
